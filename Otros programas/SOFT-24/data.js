const data = {
    // Pantalla de bienvenida
    welcome: {
        title: 'SOFT-24 <br> Automatización de Pruebas',
        image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-24/imgs/logo.png', // Cambiar por imagen real
        description: 'Uso de técnicas y herramientas de automatización para diseñar y ejecutar pruebas de software: guiones de prueba, casos automatizados, interfaz de usuario, regresión, aplicaciones web y API.',
        instruction: 'Seleccione cada pestaña para acceder a la información'
    },
    // Temas principales y sus subtemas con pasos
    temas: [
        {
            id: 'modulo_001',
            label: 'Introducción a la automatización',
            subtemas: [
                {
                    id: 'm001-t001',
                    label: 'Conceptos básicos de pruebas de software',
                    steps: [
                        {
                            title: 'Error, defecto y falla',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Término</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Definición</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Error (equivocación)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Acción humana que produce un resultado incorrecto.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El programador usa <code>&gt;</code> en lugar de <code>&gt;=</code>.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Defecto (bug)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Imperfección en el producto.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">La condición incorrecta queda en el código.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Falla</strong></td><td style="padding:13px 12px;">Comportamiento incorrecto observable al ejecutar.</td><td style="padding:13px 12px;">Un estudiante con 70 aparece como reprobado.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Un error humano introduce un defecto; el defecto, al ejecutarse en ciertas condiciones, produce una falla.</p>`,
                            nextButton: 'Siguiente: Niveles de prueba'
                        },
                        {
                            title: 'Niveles de prueba',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Nivel</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Qué prueba</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Responsable típico</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Unitaria</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Una función o clase aislada.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Desarrollador</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Integración</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">La comunicación entre componentes.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Desarrollador o probador</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Sistema</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El sistema completo contra la especificación.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Equipo de pruebas</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Aceptación</strong></td><td style="padding:13px 12px;">Que el sistema satisface al usuario.</td><td style="padding:13px 12px;">Cliente o usuario</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Pruebas manuales y automatizadas'
                        },
                        {
                            title: 'Pruebas manuales y automatizadas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;"></th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Manual</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Automatizada</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ejecución</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Una persona sigue los pasos.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un programa (guion) ejecuta los pasos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Velocidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Lenta.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Rápida y repetible.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Costo inicial</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Bajo.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Alto: hay que programar las pruebas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Costo por repetición</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Alto.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Casi nulo.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Ideal para</strong></td><td style="padding:13px 12px;">Exploración, usabilidad, casos únicos.</td><td style="padding:13px 12px;">Regresión, datos múltiples, CI/CD.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t002',
                    label: 'Ventajas y desventajas de la automatización de pruebas',
                    steps: [
                        {
                            title: 'Ventajas y desventajas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ventajas</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Desventajas</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Retroalimentación rápida en cada cambio.</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Inversión inicial en programación y herramientas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Repetibilidad exacta.</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mantenimiento cuando cambia la aplicación.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Más cobertura con los mismos recursos.</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pruebas inestables (flaky) si se diseñan mal.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ejecución fuera de horario y en paralelo.</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">No detecta lo que no se programó para verificar.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Libera a las personas para pruebas exploratorias.</strong></td><td style="padding:13px 12px;">Requiere habilidades de programación.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Retorno de la inversión'
                        },
                        {
                            title: 'Retorno de la inversión',
                            content: `<p>La automatización conviene cuando el costo de crear y mantener la prueba es menor que el costo acumulado de ejecutarla manualmente.</p>
<pre class="codigo">
Costo manual   = 20 min por ejecución × 3 ejecuciones por semana × 52 semanas = 52 horas al año
Costo automat. = 6 h de desarrollo + 30 min de mantenimiento al mes          = 12 horas al año
Ahorro         ≈ 40 horas al año para una sola prueba
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
No todo debe automatizarse: las pruebas que se ejecutan una sola vez o que dependen del juicio humano (usabilidad, estética) suelen ser manuales.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t003',
                    label: 'Herramientas de automatización de pruebas',
                    steps: [
                        {
                            title: 'Herramientas por tipo de prueba',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Herramientas</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Lenguaje</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Unitarias</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">pytest, unittest, JUnit, Jest</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Python, Java, JavaScript</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Interfaz web</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Playwright, Selenium WebDriver, Cypress</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Python, JavaScript, Java, C#</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Móvil</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Appium, Espresso, XCUITest</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Varios</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>API</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">requests + pytest, Postman/Newman, REST Assured, Karate</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Python, JavaScript, Java</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>BDD</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Behave, Cucumber, pytest-bdd</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Gherkin</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Palabras clave</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Robot Framework</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sintaxis tabular</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Rendimiento</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">k6, JMeter, Locust</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">JavaScript, XML, Python</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Reportes</strong></td><td style="padding:13px 12px;">Allure, pytest-html</td><td style="padding:13px 12px;">—</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Criterios de selección'
                        },
                        {
                            title: 'Criterios de selección',
                            content: `<ul>
    <li>Compatibilidad con la tecnología de la aplicación.</li>
    <li>Lenguaje que domina el equipo.</li>
    <li>Comunidad, documentación y mantenimiento.</li>
    <li>Integración con CI/CD y con la gestión de pruebas.</li>
    <li>Costo de licencias.</li>
    <li>Facilidad de diagnóstico (capturas, videos, trazas).</li>
</ul>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
En este curso se usa <strong>Python</strong> con <strong>pytest</strong>, <strong>Playwright</strong> y <strong>requests</strong>, herramientas gratuitas y ampliamente usadas en la industria.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t004',
                    label: 'Enfoques y estrategias de automatización de pruebas',
                    steps: [
                        {
                            title: 'Pirámide de automatización',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Nivel</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Cantidad</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Velocidad</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Costo de mantenimiento</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Interfaz (extremo a extremo)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pocas</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Lenta</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Alto</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Servicio / API</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Moderadas</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Media</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Medio</td></tr>
<tr><td style="padding:13px 12px;"><strong>Unitarias</strong></td><td style="padding:13px 12px;">Muchas</td><td style="padding:13px 12px;">Muy rápida</td><td style="padding:13px 12px;">Bajo</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
El “cono de helado” invertido (muchas pruebas de interfaz y pocas unitarias) produce suites lentas y frágiles.</p>`,
                            nextButton: 'Siguiente: Enfoques de diseño'
                        },
                        {
                            title: 'Enfoques de diseño',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Enfoque</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Lineal (grabar y reproducir)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se graban acciones; difícil de mantener.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Modular</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Funciones reutilizables por área de la aplicación.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Guiado por datos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un mismo guion se ejecuta con muchos conjuntos de datos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Guiado por palabras clave</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Acciones de alto nivel (“Iniciar sesión”) en tablas.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>BDD</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Escenarios en lenguaje natural vinculados a código.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Modelo de objetos de página (POM)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cada página se representa con una clase.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Híbrido</strong></td><td style="padding:13px 12px;">Combinación de los anteriores.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t005',
                    label: 'Ciclo de vida de las pruebas automatizadas',
                    steps: [
                        {
                            title: 'Ciclo de vida',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-magnifying-glass" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Análisis de viabilidad</b><br><small>Qué automatizar</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-toolbox" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Selección de herramientas</b><br><small></small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-sitemap" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Diseño del marco</b><br><small>Estructura y estándares</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-code" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Desarrollo de guiones</b><br><small></small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-play" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Ejecución</b><br><small>Local y en CI</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-chart-column" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Análisis de resultados</b><br><small>Reportes</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-screwdriver-wrench" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Mantenimiento</b><br><small>Actualizar y depurar</small></div></div>
</div>
</div>`,
                            nextButton: 'Siguiente: Indicadores de la automatización'
                        },
                        {
                            title: 'Indicadores de la automatización',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Indicador</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Meta orientativa</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Porcentaje de pruebas de regresión automatizadas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">≥ 70 %</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tasa de pruebas inestables</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">≤ 2 %</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tiempo de ejecución de la suite</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Compatible con cada pull request (≤ 15 min)</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Defectos detectados por la automatización</strong></td><td style="padding:13px 12px;">Tendencia creciente en etapas tempranas</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_002',
            label: 'Programación y guiones de pruebas',
            subtemas: [
                {
                    id: 'm002-t001',
                    label: 'Introducción a la programación para pruebas automatizadas',
                    steps: [
                        {
                            title: 'Programar pruebas',
                            content: `<p>Una prueba automatizada es un programa que <strong>prepara</strong> datos, <strong>ejecuta</strong> la funcionalidad y <strong>verifica</strong> el resultado con una aserción. Por eso quien automatiza necesita las bases de la programación.</p>
<pre class="codigo">
def calcular_iva(monto):
    return round(monto * 0.13, 2)

def test_calcular_iva():
    # Preparar
    monto = 10000
    # Ejecutar
    resultado = calcular_iva(monto)
    # Verificar
    assert resultado == 1300
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Este patrón se conoce como <strong>AAA</strong> (Arrange, Act, Assert): preparar, actuar y afirmar.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t002',
                    label: 'Lenguajes de guionización para pruebas automatizadas',
                    steps: [
                        {
                            title: 'Lenguajes',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Lenguaje</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ventajas para pruebas</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Herramientas</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Python</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sintaxis simple, gran ecosistema.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">pytest, Playwright, requests, Behave, Robot Framework</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>JavaScript / TypeScript</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mismo lenguaje que el frontend web.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Jest, Playwright Test, Cypress</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Java</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Común en empresas grandes.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">JUnit, TestNG, Selenium, REST Assured</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>C#</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ecosistema .NET.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">NUnit, xUnit, Playwright .NET</td></tr>
<tr><td style="padding:13px 12px;"><strong>Bash / PowerShell</strong></td><td style="padding:13px 12px;">Automatizar tareas del sistema y del canal de CI.</td><td style="padding:13px 12px;">Scripts de preparación de ambientes</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Preparar el entorno en Python'
                        },
                        {
                            title: 'Preparar el entorno en Python',
                            content: `<pre class="codigo">
python -m venv .venv
source .venv/bin/activate          # Windows: .venv\\Scripts\\activate
pip install pytest playwright requests
playwright install                 # descarga los navegadores
pytest --version
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Un entorno virtual aísla las dependencias del proyecto; el archivo <code>requirements.txt</code> permite reproducirlo en cualquier máquina o en el servidor de CI.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t003',
                    label: 'Variables, tipos de datos y estructuras de control',
                    steps: [
                        {
                            title: 'Variables y tipos',
                            content: `<pre class="codigo">
url_base = "https://demo.mitienda.com"     # str
tiempo_espera = 10                          # int
precio_esperado = 24900.0                   # float
es_admin = False                            # bool
usuarios = ["ana@correo.com", "luis@correo.com"]          # list
credenciales = {"correo": "ana@correo.com", "clave": "Clave123!"}  # dict
</pre>`,
                            nextButton: 'Siguiente: Estructuras de control en pruebas'
                        },
                        {
                            title: 'Estructuras de control en pruebas',
                            content: `<pre class="codigo">
# Condicional: preparar según el ambiente
import os
ambiente = os.getenv("AMBIENTE", "pruebas")
if ambiente == "produccion":
    url_base = "https://mitienda.com"
else:
    url_base = "https://staging.mitienda.com"

# Ciclo: verificar varios productos
productos = [("Audífonos", 24900), ("Teclado", 18500)]
for nombre, precio in productos:
    assert precio &gt; 0, f"{nombre} tiene un precio inválido"
</pre>
<p class="nota">
<i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
Evite la lógica compleja dentro de las pruebas: si una prueba necesita muchas condiciones, probablemente deba dividirse en varias pruebas.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t004',
                    label: 'Funciones y librerías comunes para pruebas automatizadas',
                    steps: [
                        {
                            title: 'Funciones auxiliares',
                            content: `<pre class="codigo">
def crear_usuario(correo, rol="cliente"):
    """Crea un usuario de prueba por medio de la API y devuelve su id."""
    respuesta = requests.post(f"{URL_API}/usuarios", json={"correo": correo, "rol": rol})
    respuesta.raise_for_status()
    return respuesta.json()["id"]
</pre>`,
                            nextButton: 'Siguiente: Librerías frecuentes en Python'
                        },
                        {
                            title: 'Librerías frecuentes en Python',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Librería</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>pytest</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Marco de pruebas: descubrimiento, fixtures, parametrización.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>playwright</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Automatización de navegadores.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>requests</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Solicitudes HTTP para pruebas de API.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>jsonschema</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Validar la estructura de respuestas JSON.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Faker</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Generar datos ficticios (nombres, correos).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>python-dotenv</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Leer variables de entorno desde un archivo .env.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>pytest-xdist</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ejecutar pruebas en paralelo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>allure-pytest</strong></td><td style="padding:13px 12px;">Reportes detallados.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
from faker import Faker
fake = Faker("es_ES")
correo = fake.unique.email()      # correo distinto en cada ejecución
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t005',
                    label: 'Gestión de errores y excepciones en el guión de comandos de pruebas',
                    steps: [
                        {
                            title: 'Fallas y errores en una prueba',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Resultado</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Causa</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Aprobada (passed)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Todas las aserciones se cumplen.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El comportamiento es el esperado.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Fallida (failed)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Una aserción no se cumple.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Posible defecto en la aplicación.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Error</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Excepción inesperada en la preparación o el guion.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Problema en la prueba o en el ambiente.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Omitida (skipped)</strong></td><td style="padding:13px 12px;">Se marcó para no ejecutarse.</td><td style="padding:13px 12px;">Condición no aplicable.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Verificar excepciones esperadas'
                        },
                        {
                            title: 'Verificar excepciones esperadas',
                            content: `<pre class="codigo">
import pytest

def dividir(a, b):
    if b == 0:
        raise ValueError("El divisor no puede ser cero")
    return a / b

def test_division_entre_cero_lanza_error():
    with pytest.raises(ValueError, match="no puede ser cero"):
        dividir(10, 0)
</pre>`,
                            nextButton: 'Siguiente: Manejo robusto en los guiones'
                        },
                        {
                            title: 'Manejo robusto en los guiones',
                            content: `<pre class="codigo">
def obtener_token():
    try:
        r = requests.post(f"{URL_API}/login", json=CREDENCIALES, timeout=10)
        r.raise_for_status()
        return r.json()["token"]
    except requests.exceptions.Timeout:
        pytest.fail("La API de autenticación no respondió en 10 segundos")
    except requests.exceptions.HTTPError as e:
        pytest.fail(f"Inicio de sesión rechazado: {e.response.status_code}")
</pre>
<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #f0cccc; margin-bottom:12px;">
<i class="fa-solid fa-xmark" aria-hidden="true" style="color:#d2232a;"></i> <strong style="color:#d2232a;">Incorrecto</strong>
<pre class="codigo">
try:
    assert total == 5650
except:
    pass          # la prueba nunca falla
</pre>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Nunca capture una excepción para ocultarla: una prueba que no puede fallar no prueba nada.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_003',
            label: 'Diseño y ejecución de casos',
            subtemas: [
                {
                    id: 'm003-t001',
                    label: 'Diseño de casos de prueba para automatización',
                    steps: [
                        {
                            title: '¿Qué casos automatizar?',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Automatizar</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">No automatizar (o posponer)</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pruebas de regresión que se repiten.</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Funcionalidades que cambian constantemente.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Flujos críticos del negocio.</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pruebas que se ejecutan una sola vez.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pruebas con muchos datos.</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Evaluaciones subjetivas (diseño, usabilidad).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Pruebas de humo después de cada despliegue.</strong></td><td style="padding:13px 12px;">Casos que requieren hardware especial difícil de simular.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Características de una buena prueba…'
                        },
                        {
                            title: 'Características de una buena prueba automatizada',
                            content: `<ul>
    <li><strong>Independiente</strong>: no depende del orden ni de otras pruebas.</li>
    <li><strong>Repetible</strong>: el mismo resultado en cada ejecución.</li>
    <li><strong>Rápida</strong>.</li>
    <li><strong>Clara</strong>: el nombre describe el comportamiento.</li>
    <li><strong>Una sola razón para fallar</strong>.</li>
    <li><strong>Autoverificable</strong>: no requiere revisión manual.</li>
</ul>
<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #c9e2d4; margin-bottom:12px;">
<i class="fa-solid fa-check" aria-hidden="true" style="color:#00734a;"></i> <strong style="color:#00734a;">Nombre descriptivo</strong>
<pre class="codigo">
def test_cliente_frecuente_con_compra_alta_recibe_15_por_ciento(): ...
</pre>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t002',
                    label: 'Marcos de trabajo de pruebas automatizadas',
                    steps: [
                        {
                            title: 'pytest',
                            content: `<pre class="codigo">
# test_carrito.py
from carrito import Carrito

def test_carrito_nuevo_esta_vacio():
    assert Carrito().total() == 0

def test_agregar_producto_suma_su_precio():
    carrito = Carrito()
    carrito.agregar("Audífonos", 24900, cantidad=2)
    assert carrito.total() == 49800
</pre>
<pre class="codigo">
pytest                    # ejecuta todas las pruebas test_*.py
pytest -v -k carrito      # detalle y filtro por nombre
pytest -x                 # se detiene en la primera falla
</pre>`,
                            nextButton: 'Siguiente: Otros marcos'
                        },
                        {
                            title: 'Otros marcos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Marco</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo de prueba</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>JUnit 5 (Java)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>@Test void sumaPrecios() { assertEquals(49800, carrito.total()); }</code></td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Jest (JavaScript)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>test("suma", () =&gt; expect(carrito.total()).toBe(49800));</code></td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Robot Framework</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>Agregar Producto    Audífonos    2</code></td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Behave (BDD)</strong></td><td style="padding:13px 12px;"><code>@when("agrega {cantidad:d} audífonos")</code></td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t003',
                    label: 'Estructura y organización de casos de prueba automatizados',
                    steps: [
                        {
                            title: 'Estructura del proyecto',
                            content: `<pre class="codigo">
pruebas-tienda/
├── pages/                  # modelo de objetos de página
│   ├── login_page.py
│   └── carrito_page.py
├── tests/
│   ├── ui/
│   │   └── test_compra.py
│   └── api/
│       └── test_productos.py
├── data/
│   └── usuarios.json
├── conftest.py             # fixtures compartidas
├── pytest.ini              # configuración y marcadores
└── requirements.txt
</pre>`,
                            nextButton: 'Siguiente: Modelo de objetos de página'
                        },
                        {
                            title: 'Modelo de objetos de página (POM)',
                            content: `<pre class="codigo">
# pages/login_page.py
class LoginPage:
    def __init__(self, page):
        self.page = page
        self.correo = page.get_by_label("Correo")
        self.clave = page.get_by_label("Contraseña")
        self.boton = page.get_by_role("button", name="Ingresar")

    def abrir(self, url_base):
        self.page.goto(f"{url_base}/login")

    def iniciar_sesion(self, correo, clave):
        self.correo.fill(correo)
        self.clave.fill(clave)
        self.boton.click()
</pre>
<pre class="codigo">
# tests/ui/test_login.py
from playwright.sync_api import expect
from pages.login_page import LoginPage

def test_login_exitoso(page, url_base):
    login = LoginPage(page)
    login.abrir(url_base)
    login.iniciar_sesion("ana@correo.com", "Clave123!")
    expect(page.get_by_text("Bienvenida, Ana")).to_be_visible()
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Si cambia la página de inicio de sesión, solo se modifica <code>LoginPage</code>, no todas las pruebas que la usan.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t004',
                    label: 'Gestión de datos en pruebas automatizadas',
                    steps: [
                        {
                            title: 'Parametrización',
                            content: `<pre class="codigo">
import pytest

@pytest.mark.parametrize("edad, aceptado", [
    (17, False), (18, True), (65, True), (66, False)   # valores límite
])
def test_validar_edad(edad, aceptado):
    assert validar_edad(edad) == aceptado
</pre>`,
                            nextButton: 'Siguiente: Fixtures'
                        },
                        {
                            title: 'Fixtures',
                            content: `<pre class="codigo">
# conftest.py
import json, pytest

@pytest.fixture
def url_base():
    return "https://staging.mitienda.com"

@pytest.fixture
def usuario_temporal(api):
    usuario = api.crear_usuario()      # preparación
    yield usuario
    api.eliminar_usuario(usuario["id"])  # limpieza, aunque la prueba falle

def cargar_datos(nombre):
    with open(f"data/{nombre}.json", encoding="utf-8") as f:
        return json.load(f)
</pre>
<ul>
    <li>Cada prueba crea los datos que necesita y los elimina al final.</li>
    <li>Use datos ficticios: nunca datos personales reales.</li>
    <li>Las credenciales se leen de variables de entorno, no del código.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t005',
                    label: 'Ejecución y depuración de casos de prueba automatizados',
                    steps: [
                        {
                            title: 'Ejecución',
                            content: `<pre class="codigo">
pytest -n 4                                   # 4 procesos en paralelo (pytest-xdist)
pytest -m regresion                           # solo las marcadas como regresión
pytest --html=reporte.html                    # reporte HTML
pytest --headed --slowmo 500                  # ver el navegador y ralentizar (Playwright)
pytest --tracing retain-on-failure            # traza de Playwright si falla
</pre>`,
                            nextButton: 'Siguiente: Depuración'
                        },
                        {
                            title: 'Depuración',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Recurso</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Mensajes de aserción</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Indican el valor esperado y el obtenido.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Capturas y videos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Muestran el estado de la pantalla al fallar.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Trace Viewer de Playwright</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Línea de tiempo con cada acción, red y DOM.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>page.pause()</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Abre el inspector para ejecutar paso a paso.</td></tr>
<tr><td style="padding:13px 12px;"><code>pytest --pdb</code></td><td style="padding:13px 12px;">Abre el depurador de Python en la falla.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
Una prueba <strong>inestable</strong> (pasa y falla sin cambios en el código) suele deberse a esperas fijas, dependencias entre pruebas o datos compartidos. Corríjala o póngala en cuarentena: las pruebas inestables destruyen la confianza en la suite.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_004',
            label: 'Elementos de la interfaz',
            subtemas: [
                {
                    id: 'm004-t001',
                    label: 'Localización e identificación de elementos de la interfaz de usuario',
                    steps: [
                        {
                            title: 'Localizadores',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Estrategia</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo (Playwright)</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Estabilidad</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Por rol accesible</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>page.get_by_role("button", name="Pagar")</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Alta (recomendada)</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Por etiqueta</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>page.get_by_label("Correo")</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Alta</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Por texto</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>page.get_by_text("Pedido confirmado")</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Media</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Por atributo de prueba</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>page.get_by_test_id("btn-pagar")</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Alta</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Selector CSS</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>page.locator("#carrito .total")</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Media</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>XPath</strong></td><td style="padding:13px 12px;"><code>page.locator("//table/tr[3]/td[2]")</code></td><td style="padding:13px 12px;">Baja</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Buenas prácticas'
                        },
                        {
                            title: 'Buenas prácticas',
                            content: `<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #f0cccc; margin-bottom:12px;">
<i class="fa-solid fa-xmark" aria-hidden="true" style="color:#d2232a;"></i> <strong style="color:#d2232a;">Frágil: depende de la estructura visual</strong>
<pre class="codigo">
page.locator("div &gt; div:nth-child(3) &gt; span.x1")
</pre>
</div>
<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #c9e2d4; margin-bottom:12px;">
<i class="fa-solid fa-check" aria-hidden="true" style="color:#00734a;"></i> <strong style="color:#00734a;">Robusto: como lo percibe el usuario</strong>
<pre class="codigo">
page.get_by_role("link", name="Ver carrito")
</pre>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Los localizadores por rol y etiqueta funcionan mejor cuando la aplicación es accesible: la accesibilidad y la automatización se benefician mutuamente.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t002',
                    label: 'Acciones básicas sobre elementos de la interfaz',
                    steps: [
                        {
                            title: 'Acciones',
                            content: `<pre class="codigo">
page.get_by_role("button", name="Agregar al carrito").click()
page.get_by_text("Audífonos").dblclick()
page.get_by_role("menuitem", name="Cuenta").hover()
page.get_by_label("Buscar").fill("teclado")
page.get_by_label("Buscar").press("Enter")
page.keyboard.press("Control+A")
page.get_by_role("img", name="Audífonos").scroll_into_view_if_needed()
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Playwright espera automáticamente a que el elemento sea visible, esté habilitado y estable antes de actuar, lo que reduce las pruebas inestables.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t003',
                    label: 'Interacción con formularios y campos de entrada',
                    steps: [
                        {
                            title: 'Campos de formulario',
                            content: `<pre class="codigo">
page.get_by_label("Nombre").fill("Ana Mora")
page.get_by_label("Provincia").select_option("Heredia")
page.get_by_label("Acepto los términos").check()
page.get_by_label("Envío express").set_checked(False)
page.get_by_label("Fecha de entrega").fill("2026-12-05")
page.get_by_label("Comprobante").set_input_files("data/comprobante.pdf")
page.get_by_role("button", name="Enviar").click()
</pre>`,
                            nextButton: 'Siguiente: Validar mensajes del formulario'
                        },
                        {
                            title: 'Validar mensajes del formulario',
                            content: `<pre class="codigo">
def test_correo_invalido_muestra_mensaje(page, url_base):
    page.goto(f"{url_base}/registro")
    page.get_by_label("Correo").fill("ana-sin-arroba")
    page.get_by_role("button", name="Registrarse").click()
    expect(page.get_by_text("Ingrese un correo válido")).to_be_visible()
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t004',
                    label: 'Manipulación de ventanas y ventanas emergentes',
                    steps: [
                        {
                            title: 'Pestañas nuevas',
                            content: `<pre class="codigo">
with page.context.expect_page() as info:
    page.get_by_role("link", name="Términos y condiciones").click()
nueva = info.value
nueva.wait_for_load_state()
expect(nueva).to_have_title("Términos y condiciones")
nueva.close()
</pre>`,
                            nextButton: 'Siguiente: Diálogos e iframes'
                        },
                        {
                            title: 'Diálogos e iframes',
                            content: `<pre class="codigo">
# Diálogo nativo (alert / confirm)
page.on("dialog", lambda dialogo: dialogo.accept())
page.get_by_role("button", name="Eliminar pedido").click()

# Ventana modal HTML
modal = page.get_by_role("dialog")
expect(modal).to_be_visible()
modal.get_by_role("button", name="Confirmar").click()

# Contenido dentro de un iframe (pasarela de pago)
marco = page.frame_locator("iframe[title='Pago seguro']")
marco.get_by_label("Número de tarjeta").fill("4242424242424242")
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t005',
                    label: 'Validación de elementos y contenido en la interfaz',
                    steps: [
                        {
                            title: 'Aserciones web',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Aserción</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Verifica</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>to_be_visible()</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El elemento se muestra.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>to_have_text("…")</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Texto exacto o por expresión regular.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>to_have_value("…")</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Valor de un campo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>to_be_enabled()</code> / <code>to_be_disabled()</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Estado del control.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>to_have_count(n)</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cantidad de elementos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>to_have_url(…)</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Dirección de la página.</td></tr>
<tr><td style="padding:13px 12px;"><code>to_have_attribute("alt", …)</code></td><td style="padding:13px 12px;">Valor de un atributo.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
expect(page.get_by_test_id("total")).to_have_text("₡49 800")
expect(page.locator(".producto")).to_have_count(12)
expect(page).to_have_url(re.compile(r".*/pedido/confirmado"))
</pre>`,
                            nextButton: 'Siguiente: Esperas'
                        },
                        {
                            title: 'Esperas',
                            content: `<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #f0cccc; margin-bottom:12px;">
<i class="fa-solid fa-xmark" aria-hidden="true" style="color:#d2232a;"></i> <strong style="color:#d2232a;">Incorrecto</strong>
<pre class="codigo">
time.sleep(5)   # espera fija: lenta e inestable
</pre>
</div>
<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #c9e2d4; margin-bottom:12px;">
<i class="fa-solid fa-check" aria-hidden="true" style="color:#00734a;"></i> <strong style="color:#00734a;">Correcto</strong>
<pre class="codigo">
expect(page.get_by_text("Pedido confirmado")).to_be_visible(timeout=10000)
</pre>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Las aserciones de Playwright reintentan hasta que se cumplen o vence el tiempo; nunca use esperas fijas.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_005',
            label: 'Regresión y colecciones',
            subtemas: [
                {
                    id: 'm005-t001',
                    label: 'Concepto de pruebas de regresión',
                    steps: [
                        {
                            title: 'Pruebas de regresión',
                            content: `<p>Las <strong>pruebas de regresión</strong> verifican que los cambios (correcciones, nuevas funciones, actualizaciones) no hayan dañado lo que ya funcionaba.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Alcance</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Regresión completa</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Todas las pruebas; antes de una versión mayor.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Regresión selectiva</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pruebas relacionadas con el cambio.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pruebas de humo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Verificación rápida de lo esencial después de desplegar.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Prueba de confirmación</strong></td><td style="padding:13px 12px;">Repetir el caso que encontró el defecto corregido.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Como la regresión se repite en cada cambio, es la candidata ideal para la automatización.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t002',
                    label: 'Selección de casos de prueba para la automatización de regresión',
                    steps: [
                        {
                            title: 'Criterios de selección',
                            content: `<ol>
    <li>Flujos críticos del negocio (comprar, pagar, iniciar sesión).</li>
    <li>Funcionalidades con historial de defectos.</li>
    <li>Áreas afectadas con frecuencia por cambios.</li>
    <li>Casos con alto impacto si fallan.</li>
    <li>Integraciones con otros sistemas.</li>
</ol>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Prioridad</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Frecuencia de ejecución</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>P1 — humo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Abrir el sitio, iniciar sesión, buscar.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cada despliegue.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>P2 — críticos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Compra completa, pago, factura.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cada pull request.</td></tr>
<tr><td style="padding:13px 12px;"><strong>P3 — completos</strong></td><td style="padding:13px 12px;">Reportes, configuraciones.</td><td style="padding:13px 12px;">Cada noche.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t003',
                    label: 'Ejecución de pruebas de regresión automatizadas',
                    steps: [
                        {
                            title: 'Marcadores y ejecución',
                            content: `<pre class="codigo">
# pytest.ini
[pytest]
markers =
    humo: verificación rápida posdespliegue
    regresion: suite de regresión completa
    lenta: pruebas que tardan más de 30 segundos
</pre>
<pre class="codigo">
@pytest.mark.humo
@pytest.mark.regresion
def test_busqueda_devuelve_resultados(page, url_base): ...
</pre>
<pre class="codigo">
pytest -m humo                    # tras desplegar
pytest -m "regresion and not lenta" -n auto
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t004',
                    label: 'Creación y mantenimiento de colecciones de pruebas automatizadas',
                    steps: [
                        {
                            title: 'Colecciones (suites)',
                            content: `<p>Una <strong>colección</strong> agrupa pruebas con un propósito común: humo, regresión, por módulo o por navegador.</p>
<ul>
    <li>Revise periódicamente las pruebas obsoletas o duplicadas.</li>
    <li>Actualice los objetos de página cuando cambie la interfaz.</li>
    <li>Registre las pruebas inestables y corríjalas.</li>
    <li>Mida el tiempo de la suite y paralelice cuando crezca.</li>
    <li>Revise el código de pruebas con el mismo rigor que el código de la aplicación.</li>
</ul>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
El código de pruebas es código de producción del equipo de calidad: usa control de versiones, revisiones y estándares.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t005',
                    label: 'Integración de pruebas automatizadas en sistemas de integración continua',
                    steps: [
                        {
                            title: 'Pruebas en GitHub Actions',
                            content: `<pre class="codigo">
# .github/workflows/pruebas.yml
name: Pruebas automatizadas
on:
  pull_request:
  schedule:
    - cron: "0 6 * * *"          # regresión completa diaria
jobs:
  pruebas:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with: { python-version: "3.12" }
      - run: pip install -r requirements.txt
      - run: playwright install --with-deps chromium
      - run: pytest -m regresion -n auto --html=reporte.html
        env:
          URL_BASE: \${{ vars.URL_STAGING }}
          CLAVE_PRUEBAS: \${{ secrets.CLAVE_PRUEBAS }}
      - uses: actions/upload-artifact@v4
        if: always()
        with: { name: reporte, path: reporte.html }
</pre>
<ul>
    <li>Las pruebas se ejecutan en cada pull request y bloquean la integración si fallan.</li>
    <li>El reporte se guarda como artefacto aunque haya fallas.</li>
    <li>Los secretos se configuran en el repositorio.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_006',
            label: 'Pruebas web',
            subtemas: [
                {
                    id: 'm006-t001',
                    label: 'Introducción a las pruebas automatizadas en entornos web',
                    steps: [
                        {
                            title: 'Particularidades de la web',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Reto</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Estrategia</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Contenido dinámico y asincrónico</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Esperas automáticas y aserciones con reintento.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Muchos navegadores y tamaños de pantalla</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pruebas multiplataforma y emulación de dispositivos.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cambios frecuentes en la interfaz</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Localizadores semánticos y POM.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Dependencias externas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Simular respuestas de red.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Estado de sesión</strong></td><td style="padding:13px 12px;">Reutilizar el estado de autenticación.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t002',
                    label: 'Selección y configuración de herramientas para pruebas web',
                    steps: [
                        {
                            title: 'Comparación',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Criterio</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Selenium WebDriver</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Playwright</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Cypress</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Lenguajes</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Java, Python, C#, JS, Ruby</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Python, JS/TS, Java, C#</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">JavaScript / TypeScript</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Navegadores</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Todos (con drivers)</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Chromium, Firefox, WebKit</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Chromium, Firefox, WebKit (experimental)</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Esperas automáticas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">No (esperas explícitas)</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sí</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sí</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Varias pestañas e iframes</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sí</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sí</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Limitado</td></tr>
<tr><td style="padding:13px 12px;"><strong>Herramientas de diagnóstico</strong></td><td style="padding:13px 12px;">Básicas</td><td style="padding:13px 12px;">Trace Viewer, videos</td><td style="padding:13px 12px;">Línea de tiempo interactiva</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Configuración de Playwright con pytest'
                        },
                        {
                            title: 'Configuración de Playwright con pytest',
                            content: `<pre class="codigo">
pip install pytest-playwright
playwright install
</pre>
<pre class="codigo">
# pytest.ini
[pytest]
addopts = --browser chromium --browser firefox --screenshot only-on-failure
</pre>
<pre class="codigo">
# Selenium equivalente (Python)
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome()
driver.get("https://staging.mitienda.com")
WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, "btn-buscar"))).click()
driver.quit()
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t003',
                    label: 'Navegadores y navegación automatizada',
                    steps: [
                        {
                            title: 'Navegación',
                            content: `<pre class="codigo">
page.goto("https://staging.mitienda.com/productos")
page.go_back()
page.reload()
page.set_viewport_size({"width": 390, "height": 844})   # tamaño de teléfono
</pre>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Modo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Sin interfaz (headless)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ejecución rápida en CI.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Con interfaz (headed)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Depuración local.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Emulación de dispositivos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Probar diseño adaptable.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Ejecución en la nube o en Selenium Grid</strong></td><td style="padding:13px 12px;">Muchas combinaciones de navegador y sistema operativo.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Reutilizar la sesión'
                        },
                        {
                            title: 'Reutilizar la sesión',
                            content: `<pre class="codigo">
# Iniciar sesión una vez y guardar el estado
context = browser.new_context()
page = context.new_page()
LoginPage(page).iniciar_sesion("ana@correo.com", CLAVE)
context.storage_state(path="estado_ana.json")

# Las demás pruebas inician ya autenticadas
context = browser.new_context(storage_state="estado_ana.json")
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t004',
                    label: 'Validación de elementos y contenido en aplicaciones web',
                    steps: [
                        {
                            title: 'Aserciones web',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Aserción</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Verifica</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>to_be_visible()</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El elemento se muestra.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>to_have_text("…")</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Texto exacto o por expresión regular.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>to_have_value("…")</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Valor de un campo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>to_be_enabled()</code> / <code>to_be_disabled()</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Estado del control.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>to_have_count(n)</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cantidad de elementos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>to_have_url(…)</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Dirección de la página.</td></tr>
<tr><td style="padding:13px 12px;"><code>to_have_attribute("alt", …)</code></td><td style="padding:13px 12px;">Valor de un atributo.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
expect(page.get_by_test_id("total")).to_have_text("₡49 800")
expect(page.locator(".producto")).to_have_count(12)
expect(page).to_have_url(re.compile(r".*/pedido/confirmado"))
</pre>`,
                            nextButton: 'Siguiente: Validaciones adicionales'
                        },
                        {
                            title: 'Validaciones adicionales',
                            content: `<pre class="codigo">
# Accesibilidad automática con axe
from axe_playwright_python.sync_playwright import Axe
resultados = Axe().run(page)
assert resultados.violations_count == 0, resultados.generate_report()

# Comparación visual
expect(page).to_have_screenshot("pagina_inicio.png", max_diff_pixels=100)

# Simular una respuesta de la API
page.route("**/api/productos", lambda ruta: ruta.fulfill(json=[]))
page.goto(f"{url_base}/productos")
expect(page.get_by_text("No hay productos disponibles")).to_be_visible()
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t005',
                    label: 'Pruebas de rendimiento y carga en aplicaciones web',
                    steps: [
                        {
                            title: 'Rendimiento en el navegador',
                            content: `<ul>
    <li>Lighthouse CI mide LCP, CLS, INP y el puntaje de rendimiento en cada cambio.</li>
    <li>Presupuestos de rendimiento: fallar si la página supera cierto peso o tiempo.</li>
</ul>
<pre class="codigo">
npx @lhci/cli autorun --collect.url=https://staging.mitienda.com
</pre>`,
                            nextButton: 'Siguiente: Carga con Locust'
                        },
                        {
                            title: 'Carga con Locust (Python)',
                            content: `<pre class="codigo">
from locust import HttpUser, task, between

class Comprador(HttpUser):
    wait_time = between(1, 3)

    @task(3)
    def ver_catalogo(self):
        self.client.get("/api/productos")

    @task(1)
    def ver_producto(self):
        self.client.get("/api/productos/17")
</pre>
<pre class="codigo">
locust -f carga.py --host https://staging.mitienda.com --users 200 --spawn-rate 20
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Las pruebas de carga nunca se ejecutan contra producción sin autorización: pueden afectar a los usuarios reales.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_007',
            label: 'Pruebas de API',
            subtemas: [
                {
                    id: 'm007-t001',
                    label: 'Conceptos básicos de las pruebas de API y servicios web',
                    steps: [
                        {
                            title: '¿Por qué probar las API?',
                            content: `<ul>
    <li>Son más rápidas y estables que las pruebas de interfaz.</li>
    <li>Verifican la lógica de negocio directamente.</li>
    <li>Permiten probar antes de que exista la interfaz.</li>
    <li>Detectan problemas de integración entre servicios.</li>
</ul>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Qué se verifica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Código de estado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">201 al crear un pedido.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cuerpo de la respuesta</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Contiene el id y el total correcto.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Estructura (esquema)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Los campos y tipos esperados.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Encabezados</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>Content-Type: application/json</code>.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tiempo de respuesta</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Menor a 500 ms.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Seguridad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">401 sin token; 403 sin permiso.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Efectos</strong></td><td style="padding:13px 12px;">El pedido realmente quedó guardado.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t002',
                    label: 'Herramientas para pruebas de API y servicios web',
                    steps: [
                        {
                            title: 'Herramientas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Herramienta</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Postman + Newman</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Gráfica + línea de comandos</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Colecciones ejecutables en CI.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>requests + pytest</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Código (Python)</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pruebas programadas y mantenibles.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>REST Assured</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Código (Java)</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sintaxis fluida para API REST.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Playwright API</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Código</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Combinar pruebas de API e interfaz.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Karate</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">DSL</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">API, simulaciones y rendimiento.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>SoapUI</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Gráfica</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Servicios SOAP y REST.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pact</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Contratos</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pruebas de contrato entre servicios.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>WireMock</strong></td><td style="padding:13px 12px;">Simulación</td><td style="padding:13px 12px;">Simular servicios dependientes.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Newman en CI'
                        },
                        {
                            title: 'Newman en CI',
                            content: `<pre class="codigo">
newman run coleccion_tienda.json -e ambiente_staging.json --reporters cli,htmlextra
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t003',
                    label: 'Creación y ejecución de casos de prueba de API',
                    steps: [
                        {
                            title: 'Cliente de API reutilizable',
                            content: `<pre class="codigo">
# conftest.py
import os, pytest, requests

URL_API = os.getenv("URL_API", "https://staging.mitienda.com/api")

@pytest.fixture(scope="session")
def token():
    r = requests.post(f"{URL_API}/auth/login",
                      json={"correo": "qa@mitienda.com", "clave": os.environ["CLAVE_QA"]}, timeout=10)
    r.raise_for_status()
    return r.json()["token"]

@pytest.fixture
def api(token):
    sesion = requests.Session()
    sesion.headers.update({"Authorization": f"Bearer {token}"})
    return sesion
</pre>`,
                            nextButton: 'Siguiente: Casos de prueba'
                        },
                        {
                            title: 'Casos de prueba',
                            content: `<pre class="codigo">
def test_crear_pedido_devuelve_201(api):
    r = api.post(f"{URL_API}/pedidos", json={"items": [{"productoId": 17, "cantidad": 2}]})
    assert r.status_code == 201
    assert r.json()["total"] == 49800

def test_pedido_sin_items_devuelve_400(api):
    r = api.post(f"{URL_API}/pedidos", json={"items": []})
    assert r.status_code == 400

def test_listar_pedidos_sin_token_devuelve_401():
    r = requests.get(f"{URL_API}/pedidos")
    assert r.status_code == 401
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t004',
                    label: 'Validación de respuestas y datos en pruebas de API',
                    steps: [
                        {
                            title: 'Validar el esquema',
                            content: `<pre class="codigo">
from jsonschema import validate

ESQUEMA_PRODUCTO = {
    "type": "object",
    "required": ["id", "nombre", "precio"],
    "properties": {
        "id": {"type": "integer"},
        "nombre": {"type": "string", "minLength": 1},
        "precio": {"type": "number", "minimum": 0}
    }
}

def test_producto_cumple_esquema(api):
    r = api.get(f"{URL_API}/productos/17")
    validate(instance=r.json(), schema=ESQUEMA_PRODUCTO)
</pre>`,
                            nextButton: 'Siguiente: Validar tiempos y consistencia'
                        },
                        {
                            title: 'Validar tiempos y consistencia',
                            content: `<pre class="codigo">
def test_catalogo_responde_rapido(api):
    r = api.get(f"{URL_API}/productos")
    assert r.elapsed.total_seconds() &lt; 0.5

def test_pedido_creado_se_puede_consultar(api):
    creado = api.post(f"{URL_API}/pedidos", json=PEDIDO_VALIDO).json()
    consultado = api.get(f"{URL_API}/pedidos/{creado['id']}").json()
    assert consultado["total"] == creado["total"]
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Además de la respuesta, verifique el efecto real: que el dato quedó guardado, que se envió la notificación o que cambió el inventario.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t005',
                    label: 'Automatización de pruebas de servicios web y microservicios',
                    steps: [
                        {
                            title: 'Pruebas de contrato',
                            content: `<p>En microservicios, las <strong>pruebas de contrato</strong> verifican que el proveedor cumple lo que espera cada consumidor, sin desplegar todo el sistema.</p>
<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-user" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Consumidor</b><br><small>Define expectativas</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-file-contract" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Contrato</b><br><small>Archivo Pact</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-server" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Proveedor</b><br><small>Verifica el contrato en su CI</small></div></div>
</div>
</div>`,
                            nextButton: 'Siguiente: Simulación de dependencias'
                        },
                        {
                            title: 'Simulación de dependencias',
                            content: `<pre class="codigo">
# Simular el servicio de inventario con la librería responses
import responses

@responses.activate
def test_pedido_rechazado_si_no_hay_stock():
    responses.get("http://inventario/api/stock/17", json={"cantidad": 0})
    resultado = servicio_pedidos.crear(producto_id=17, cantidad=1)
    assert resultado.estado == "rechazado"
</pre>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Nivel de prueba en microservicios</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Alcance</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Unitaria</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Lógica interna del servicio.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Componente</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El servicio completo con dependencias simuladas.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Contrato</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Acuerdos entre consumidor y proveedor.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Integración</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Servicios reales en un ambiente de pruebas.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Extremo a extremo</strong></td><td style="padding:13px 12px;">Flujos críticos del sistema completo.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Servicios SOAP'
                        },
                        {
                            title: 'Servicios SOAP',
                            content: `<pre class="codigo">
from zeep import Client
cliente = Client("https://servicios.ejemplo.cr/TipoCambio?wsdl")
respuesta = cliente.service.ObtenerTipoCambio(Fecha="2026-11-16")
assert respuesta.Venta &gt; 0
</pre>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        }
    ]
};
