const data = {
    // Pantalla de bienvenida
    welcome: {
        title: 'SOFT-11 <br> Proyecto Integrador 1',
        image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11/imgs/logo.png', // Cambiar por imagen real
        description: 'Integración del análisis y modelado de requerimientos, la interfaz web, JavaScript, jQuery y Node.js, y los aspectos del desarrollo de software, para construir una aplicación web que resuelva un problema real.',
        instruction: 'Seleccione cada pestaña para acceder a la información'
    },
    // Temas principales y sus subtemas con pasos
    temas: [
        {
            id: 'modulo_001',
            label: 'Requerimientos',
            subtemas: [
                {
                    id: 'm001-t001',
                    label: 'Educción de requerimientos',
                    steps: [
                        {
                            title: '¿Qué es la educción?',
                            content: `<p>La <strong>educción</strong> (o elicitación) de requerimientos es el proceso de descubrir, junto con los interesados, qué necesita el sistema. No se trata solo de “preguntar qué quieren”: muchas necesidades no se expresan de forma explícita y hay que ayudar a descubrirlas.</p>
<p>Los <strong>interesados</strong> (stakeholders) son todas las personas u organizaciones afectadas por el sistema: clientes, usuarios finales, administradores, personal de soporte, entes reguladores.</p>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Un requerimiento mal entendido al inicio es el error más costoso de corregir: se arrastra al diseño, al código y a las pruebas.</p>`,
                            nextButton: 'Siguiente: Técnicas de educción'
                        },
                        {
                            title: 'Técnicas de educción',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Técnica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Cuándo usarla</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Entrevista</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Conversación estructurada con preguntas preparadas.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Para conocer a fondo la visión de un interesado.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cuestionario</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Preguntas escritas a muchas personas.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cuando hay muchos usuarios dispersos.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Observación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ver cómo trabaja el usuario en su entorno real.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Para descubrir pasos que el usuario hace sin pensar.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Taller (JAD)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sesión grupal con varios interesados y un facilitador.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Para llegar a acuerdos rápido.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Análisis de documentos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Revisar formularios, reportes y reglamentos existentes.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cuando ya existe un proceso o sistema.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Lluvia de ideas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Generar muchas ideas sin juzgarlas.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Para productos nuevos.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Prototipo</strong></td><td style="padding:13px 12px;">Mostrar una versión preliminar para obtener reacciones.</td><td style="padding:13px 12px;">Cuando el usuario no sabe expresar lo que quiere.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Preparar una entrevista'
                        },
                        {
                            title: 'Preparar una entrevista',
                            content: `<ol>
    <li>Defina el objetivo de la entrevista.</li>
    <li>Investigue el negocio antes de la reunión.</li>
    <li>Prepare preguntas abiertas (“¿Cómo registra hoy una matrícula?”) y cerradas (“¿Cuántos estudiantes se matriculan por período?”).</li>
    <li>Pida ejemplos concretos y documentos reales.</li>
    <li>Al final, resuma lo entendido y confírmelo con la persona entrevistada.</li>
    <li>Documente la entrevista el mismo día.</li>
</ol>
<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #f0cccc; margin-bottom:12px;">
<i class="fa-solid fa-xmark" aria-hidden="true" style="color:#d2232a;"></i> <strong style="color:#d2232a;">Pregunta poco útil</strong>
<pre class="codigo">
¿Quiere que el sistema sea rápido?
</pre>
</div>
<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #c9e2d4; margin-bottom:12px;">
<i class="fa-solid fa-check" aria-hidden="true" style="color:#00734a;"></i> <strong style="color:#00734a;">Pregunta que obtiene un dato verificable</strong>
<pre class="codigo">
¿En cuánto tiempo debe mostrarse el resultado de una búsqueda para que no afecte la atención al público?
</pre>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t002',
                    label: 'Identificación de necesidades y problemas del usuario',
                    steps: [
                        {
                            title: 'Problema, necesidad y requerimiento',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Concepto</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Pregunta que responde</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Problema</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Qué está mal hoy?</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El registro de estudiantes en papel provoca errores y duplicados.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Necesidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Qué hace falta para resolverlo?</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Contar con un registro único y verificado de estudiantes.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Requerimiento</strong></td><td style="padding:13px 12px;">¿Qué debe hacer el sistema?</td><td style="padding:13px 12px;">El sistema valida que la cédula no esté registrada antes de guardar un estudiante.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Empezar por el problema evita construir funciones que nadie necesita.</p>`,
                            nextButton: 'Siguiente: Técnicas para comprender el problema'
                        },
                        {
                            title: 'Técnicas para comprender el problema',
                            content: `<ul>
    <li><strong>Los cinco porqués</strong>: preguntar “¿por qué?” varias veces hasta llegar a la causa raíz.</li>
    <li><strong>Diagrama de causa y efecto (Ishikawa)</strong>: organiza las posibles causas de un problema por categorías: personas, procesos, tecnología, datos.</li>
    <li><strong>Mapa de empatía</strong>: registra qué piensa, siente, dice y hace el usuario.</li>
    <li><strong>Recorrido del usuario (journey map)</strong>: describe paso a paso la experiencia actual e identifica los puntos de dolor.</li>
</ul>
<pre class="codigo">
Problema: los reportes de matrícula se entregan tarde.
¿Por qué? Porque se consolidan a mano.
¿Por qué? Porque cada centro envía una hoja de cálculo distinta.
¿Por qué? Porque no existe un formato ni un sistema único.
Causa raíz → falta un sistema centralizado de registro.
</pre>`,
                            nextButton: 'Siguiente: Declaración del problema'
                        },
                        {
                            title: 'Declaración del problema',
                            content: `<p>Una declaración del problema resume en un párrafo la situación que el proyecto resolverá.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Elemento</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Contenido</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>El problema de…</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">registrar a los estudiantes en formularios en papel</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>afecta a…</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">el personal administrativo de los centros educativos</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>cuyo impacto es…</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">datos duplicados, errores y reportes tardíos</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>una solución exitosa…</strong></td><td style="padding:13px 12px;">permitiría registrar y consultar estudiantes en línea con datos validados</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t003',
                    label: 'Análisis de requerimientos funcionales y no funcionales',
                    steps: [
                        {
                            title: 'Requerimientos funcionales',
                            content: `<p>Describen <strong>lo que el sistema debe hacer</strong>: funciones, servicios y reacciones ante entradas específicas.</p>
<pre class="codigo">
RF-01 El sistema debe permitir registrar un estudiante con cédula,
      nombre, fecha de nacimiento y nivel.
RF-02 El sistema debe impedir registrar dos estudiantes con la misma cédula.
RF-03 El sistema debe permitir consultar los estudiantes por centro educativo.
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Redacte cada requerimiento como una frase completa: “El sistema debe…”, con un solo verbo principal.</p>`,
                            nextButton: 'Siguiente: Requerimientos no funcionales'
                        },
                        {
                            title: 'Requerimientos no funcionales',
                            content: `<p>Describen <strong>cualidades o restricciones</strong> del sistema: rendimiento, seguridad, usabilidad, disponibilidad, compatibilidad.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Categoría</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo medible</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Rendimiento</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">La búsqueda de un estudiante responde en menos de 2 segundos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Seguridad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Las contraseñas se almacenan con hash bcrypt.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Usabilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un usuario nuevo registra un estudiante en menos de 3 minutos sin capacitación.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Disponibilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El sistema está disponible el 99 % del tiempo en horario lectivo.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Compatibilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Funciona en las dos últimas versiones de Chrome, Firefox y Edge.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Accesibilidad</strong></td><td style="padding:13px 12px;">Cumple el nivel AA de las pautas WCAG 2.2.</td></tr>
</tbody>
</table>
</div>
<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #f0cccc; margin-bottom:12px;">
<i class="fa-solid fa-xmark" aria-hidden="true" style="color:#d2232a;"></i> <strong style="color:#d2232a;">Ambiguo: no se puede verificar</strong>
<pre class="codigo">
El sistema debe ser rápido y fácil de usar.
</pre>
</div>
<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #c9e2d4; margin-bottom:12px;">
<i class="fa-solid fa-check" aria-hidden="true" style="color:#00734a;"></i> <strong style="color:#00734a;">Medible</strong>
<pre class="codigo">
La página de resultados carga en menos de 2 segundos con 500 registros.
</pre>
</div>`,
                            nextButton: 'Siguiente: Características de un buen requerimiento'
                        },
                        {
                            title: 'Características de un buen requerimiento',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Característica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significa que…</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Correcto</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">refleja una necesidad real del interesado.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>No ambiguo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">tiene una sola interpretación.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Completo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">incluye toda la información necesaria.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Consistente</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">no contradice a otro requerimiento.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Verificable</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">se puede probar si se cumple.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Priorizado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">tiene una importancia asignada.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Trazable</strong></td><td style="padding:13px 12px;">se conoce su origen y se puede seguir hasta el código y las pruebas.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t004',
                    label: 'Especificación de requerimientos mediante casos de uso y prototipos',
                    steps: [
                        {
                            title: 'Diagrama de casos de uso',
                            content: `<p>Un <strong>caso de uso</strong> describe una interacción entre un <strong>actor</strong> (persona o sistema externo) y el sistema para lograr un objetivo. El diagrama de casos de uso de UML muestra los actores, los casos de uso y sus relaciones.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Elemento</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Representación</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Actor</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Figura de persona</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Administrativo, Director</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Caso de uso</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Óvalo con un verbo</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Registrar estudiante</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Límite del sistema</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Rectángulo</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sistema de registro</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>&lt;&lt;include&gt;&gt;</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Flecha punteada</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Registrar estudiante incluye Validar cédula</td></tr>
<tr><td style="padding:13px 12px;"><strong>&lt;&lt;extend&gt;&gt;</strong></td><td style="padding:13px 12px;">Flecha punteada</td><td style="padding:13px 12px;">Imprimir comprobante extiende Registrar estudiante</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Especificación de un caso de uso'
                        },
                        {
                            title: 'Especificación de un caso de uso',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Campo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Contenido</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Nombre</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">CU-01 Registrar estudiante</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Actor principal</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Administrativo del centro educativo</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Precondición</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El administrativo inició sesión.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Flujo principal</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">1. Selecciona “Nuevo estudiante”. 2. Ingresa los datos. 3. El sistema valida la cédula. 4. El sistema guarda y muestra un mensaje de confirmación.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Flujos alternos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">3a. La cédula ya existe: el sistema muestra un mensaje y no guarda.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Postcondición</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El estudiante queda registrado en el centro.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Requerimientos relacionados</strong></td><td style="padding:13px 12px;">RF-01, RF-02</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Historias de usuario'
                        },
                        {
                            title: 'Historias de usuario',
                            content: `<p>En metodologías ágiles los requerimientos se expresan como <strong>historias de usuario</strong>, acompañadas de criterios de aceptación.</p>
<pre class="codigo">
Como administrativo del centro educativo
quiero registrar un estudiante nuevo
para mantener actualizada la matrícula.

Criterios de aceptación:
- Dado que la cédula no existe, cuando guardo, entonces el estudiante queda registrado.
- Dado que la cédula ya existe, cuando guardo, entonces veo el mensaje "La cédula ya está registrada".
</pre>`,
                            nextButton: 'Siguiente: Prototipos'
                        },
                        {
                            title: 'Prototipos',
                            content: `<p>Un <strong>prototipo</strong> es una representación preliminar de la interfaz que permite validar los requerimientos con el usuario antes de programar.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Fidelidad</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Herramienta</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Boceto en papel</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Baja</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Lápiz y papel</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Wireframe</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Media</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Figma, Balsamiq, Penpot</td></tr>
<tr><td style="padding:13px 12px;"><strong>Prototipo navegable</strong></td><td style="padding:13px 12px;">Alta</td><td style="padding:13px 12px;">Figma, HTML y CSS</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Es más barato cambiar un prototipo que una aplicación terminada: muestre los prototipos al usuario temprano y con frecuencia.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t005',
                    label: 'Validación y verificación de requerimientos',
                    steps: [
                        {
                            title: 'Validar y verificar',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;"></th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Verificación</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Validación</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pregunta</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Los requerimientos están bien escritos?</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Son los requerimientos correctos para el usuario?</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Se revisa contra</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Normas de calidad de requerimientos.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Necesidades reales de los interesados.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Ejemplo</strong></td><td style="padding:13px 12px;">Detectar que RF-04 contradice a RF-07.</td><td style="padding:13px 12px;">El usuario confirma que el flujo del prototipo es el que necesita.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Técnicas'
                        },
                        {
                            title: 'Técnicas',
                            content: `<ul>
    <li><strong>Revisión o inspección</strong>: un equipo lee el documento con una lista de verificación y anota defectos.</li>
    <li><strong>Recorrido con el usuario</strong>: se recorre cada caso de uso con el interesado.</li>
    <li><strong>Prototipado</strong>: el usuario interactúa con la interfaz propuesta.</li>
    <li><strong>Generación de casos de prueba</strong>: si no se puede escribir una prueba para un requerimiento, está mal definido.</li>
</ul>
<ol>
    <li>¿Cada requerimiento tiene un identificador único?</li>
    <li>¿Es verificable y medible?</li>
    <li>¿Existen términos ambiguos (“rápido”, “fácil”, “etc.”)?</li>
    <li>¿Hay requerimientos duplicados o contradictorios?</li>
    <li>¿Todos tienen prioridad y origen?</li>
    <li>¿El usuario aprobó el documento?</li>
</ol>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t006',
                    label: 'Requerimientos de seguridad',
                    steps: [
                        {
                            title: 'Requerimientos de seguridad',
                            content: `<p>Los requerimientos de seguridad protegen la <strong>confidencialidad</strong>, la <strong>integridad</strong> y la <strong>disponibilidad</strong> de la información (tríada CIA).</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Área</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo de requerimiento</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Autenticación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El usuario se identifica con correo y contraseña de al menos 12 caracteres.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Autorización</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Solo el director puede eliminar estudiantes.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Confidencialidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Los datos personales viajan cifrados con HTTPS.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Integridad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cada cambio de datos registra el usuario, la fecha y la hora.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Disponibilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se realiza una copia de seguridad diaria de la base de datos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Privacidad</strong></td><td style="padding:13px 12px;">Se cumple la Ley 8968 de Protección de la Persona frente al Tratamiento de sus Datos Personales.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Casos de mal uso'
                        },
                        {
                            title: 'Casos de mal uso',
                            content: `<p>Un <strong>caso de mal uso</strong> describe lo que un atacante intentaría hacer. Ayuda a descubrir requerimientos de seguridad.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Caso de mal uso</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Requerimiento de seguridad que genera</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Adivinar contraseñas probando muchas combinaciones.</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Bloquear la cuenta 15 minutos después de 5 intentos fallidos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Consultar estudiantes de otro centro modificando la URL.</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Verificar en el servidor que el usuario pertenece al centro consultado.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Insertar código en un campo de texto.</strong></td><td style="padding:13px 12px;">Validar y escapar todas las entradas del usuario.</td></tr>
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
            label: 'Modelado',
            subtemas: [
                {
                    id: 'm002-t001',
                    label: 'Planificación de la gestión de requerimientos',
                    steps: [
                        {
                            title: 'Gestión de requerimientos',
                            content: `<p>Los requerimientos cambian durante el proyecto. La <strong>gestión de requerimientos</strong> define cómo se van a documentar, aprobar, cambiar y seguir.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Elemento del plan</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Define</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Roles</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Quién propone, aprueba y documenta los requerimientos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Herramientas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Dónde se registran (Jira, Trello, GitHub Projects, hoja de cálculo).</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Atributos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Datos de cada requerimiento: id, descripción, prioridad, estado, origen, responsable.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Proceso de cambio</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cómo se solicita, evalúa y aprueba un cambio.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Línea base</strong></td><td style="padding:13px 12px;">Versión aprobada de los requerimientos contra la que se controlan los cambios.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Estados de un requerimiento'
                        },
                        {
                            title: 'Estados de un requerimiento',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-lightbulb" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Propuesto</b><br><small>Se identifica</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-magnifying-glass" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Analizado</b><br><small>Se evalúa</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-circle-check" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Aprobado</b><br><small>Entra a la línea base</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-code" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Implementado</b><br><small>Se programa</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-vial" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Verificado</b><br><small>Pasa sus pruebas</small></div></div>
</div>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t002',
                    label: 'Priorización, trazabilidad y control de cambios en los requerimientos',
                    steps: [
                        {
                            title: 'Priorización MoSCoW',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Categoría</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Must (debe)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Imprescindible: sin esto el sistema no sirve.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Registrar estudiantes.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Should (debería)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Importante, pero hay alternativas temporales.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Exportar reportes a PDF.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Could (podría)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Deseable si hay tiempo.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Modo oscuro.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Won't (no esta vez)</strong></td><td style="padding:13px 12px;">Acordado que no entra en esta entrega.</td><td style="padding:13px 12px;">Aplicación móvil nativa.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Matriz de trazabilidad'
                        },
                        {
                            title: 'Matriz de trazabilidad',
                            content: `<p>La <strong>trazabilidad</strong> permite seguir cada requerimiento desde su origen hasta el diseño, el código y las pruebas. Si un requerimiento cambia, se sabe exactamente qué partes afecta.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Requerimiento</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Origen</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Caso de uso</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Componente</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Caso de prueba</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>RF-01</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Entrevista directora</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">CU-01</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>registro.html</code>, <code>POST /estudiantes</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">CP-01, CP-02</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>RF-02</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Reglamento</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">CU-01</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Validación de cédula</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">CP-03</td></tr>
<tr><td style="padding:13px 12px;"><strong>RNF-01</strong></td><td style="padding:13px 12px;">Taller con usuarios</td><td style="padding:13px 12px;">—</td><td style="padding:13px 12px;">Índice en la colección</td><td style="padding:13px 12px;">CP-10</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Control de cambios'
                        },
                        {
                            title: 'Control de cambios',
                            content: `<ol>
    <li>El interesado presenta una solicitud de cambio.</li>
    <li>Se analiza el impacto en tiempo, costo, otros requerimientos y riesgos (usando la trazabilidad).</li>
    <li>Un comité o el dueño del producto aprueba o rechaza.</li>
    <li>Si se aprueba, se actualiza la línea base y se comunica al equipo.</li>
</ol>
<p class="nota">
<i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
Aceptar cambios sin evaluarlos provoca el “crecimiento descontrolado del alcance” (scope creep).</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t003',
                    label: 'Aseguramiento de la calidad de los requerimientos',
                    steps: [
                        {
                            title: 'Defectos frecuentes',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Defecto</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Corrección</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ambigüedad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">“El sistema mostrará los datos rápidamente.”</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">“…en menos de 2 segundos.”</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Requerimiento compuesto</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">“Registrar y eliminar estudiantes.”</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Dividirlo en dos requerimientos.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Solución en lugar de necesidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">“Usar un menú desplegable de provincias.”</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">“Permitir seleccionar la provincia del estudiante.”</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Términos abiertos</strong></td><td style="padding:13px 12px;">“Reportes de matrícula, etc.”</td><td style="padding:13px 12px;">Listar cada reporte.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Métricas de calidad de requerimientos'
                        },
                        {
                            title: 'Métricas de calidad de requerimientos',
                            content: `<ul>
    <li>Porcentaje de requerimientos con criterios de aceptación.</li>
    <li>Cantidad de defectos encontrados por revisión.</li>
    <li>Cantidad de cambios después de la línea base.</li>
    <li>Porcentaje de requerimientos trazados a casos de prueba.</li>
</ul>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
El estándar ISO/IEC/IEEE 29148 describe las características de los buenos requerimientos y la estructura de la especificación.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t004',
                    label: 'Modelado del negocio',
                    steps: [
                        {
                            title: '¿Qué es el modelado del negocio?',
                            content: `<p>Antes de modelar el software se modela <strong>cómo funciona la organización</strong>: sus procesos, actores, reglas e información. Así el sistema se ajusta al negocio y no al revés.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Concepto</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Proceso de negocio</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Matricular a un estudiante.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Actor del negocio</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Encargado legal, administrativo, director.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Regla de negocio</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un estudiante solo puede estar matriculado en un centro por período.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Entidad del negocio</strong></td><td style="padding:13px 12px;">Estudiante, centro educativo, nivel, período.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Diagrama de procesos con BPMN'
                        },
                        {
                            title: 'Diagrama de procesos con BPMN',
                            content: `<p>BPMN (Business Process Model and Notation) representa los procesos con eventos, actividades, decisiones y carriles por responsable.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Símbolo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Círculo delgado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Evento de inicio.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Rectángulo redondeado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Actividad o tarea.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Rombo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Compuerta de decisión.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Círculo grueso</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Evento de fin.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Carril (lane)</strong></td><td style="padding:13px 12px;">Responsable de las actividades.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
[Inicio] → (Encargado entrega documentos) → (Administrativo revisa documentos)
        → &lt;¿Documentos completos?&gt; —No→ (Solicitar documentos faltantes) → [Fin]
                                   —Sí→ (Registrar estudiante) → [Fin]
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t005',
                    label: 'Técnicas de modelado de requerimientos',
                    steps: [
                        {
                            title: 'Modelos de UML para requerimientos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Diagrama</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Muestra</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Casos de uso</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Actores y funciones.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Alcance funcional.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Actividad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Flujo de pasos y decisiones.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Detallar un caso de uso.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Clases (dominio)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Entidades, atributos y relaciones.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Información que maneja el sistema.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Secuencia</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mensajes entre objetos en el tiempo.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Interacción entre componentes.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Estados</strong></td><td style="padding:13px 12px;">Estados de una entidad y sus transiciones.</td><td style="padding:13px 12px;">Ciclo de vida de una solicitud.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Modelo de datos'
                        },
                        {
                            title: 'Modelo de datos',
                            content: `<p>Modelar los datos ayuda a pensar qué información guardará la base de datos y cómo se relaciona.</p>
<pre class="codigo">
Estudiante (cedula, nombre, fechaNacimiento, nivel)
CentroEducativo (codigo, nombre, provincia)
Matricula (periodo, fecha)

CentroEducativo 1 ─── * Matricula * ─── 1 Estudiante
</pre>
<pre class="codigo">
// Documento en MongoDB (base de datos de documentos)
{
  "cedula": "1-1234-5678",
  "nombre": "Ana Mora",
  "nivel": "7",
  "centro": { "codigo": "4021", "nombre": "Liceo de Heredia" }
}
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
En una base de datos de documentos se decide qué datos se incrustan y cuáles se referencian según las consultas que pide el negocio.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t006',
                    label: 'Especificación formal de requerimientos',
                    steps: [
                        {
                            title: 'Documento de especificación (SRS)',
                            content: `<p>La <strong>Especificación de Requerimientos de Software (SRS)</strong> reúne todos los requerimientos en un documento aprobado. Una estructura basada en ISO/IEC/IEEE 29148:</p>
<ol>
    <li>Introducción: propósito, alcance, definiciones.</li>
    <li>Descripción general: perspectiva del producto, usuarios, restricciones, supuestos.</li>
    <li>Requerimientos funcionales.</li>
    <li>Requerimientos no funcionales.</li>
    <li>Requerimientos de interfaz (usuario, hardware, software).</li>
    <li>Apéndices: modelos, prototipos, glosario.</li>
</ol>`,
                            nextButton: 'Siguiente: Especificación formal'
                        },
                        {
                            title: 'Especificación formal',
                            content: `<p>En sistemas críticos se usan <strong>lenguajes formales</strong> (basados en lógica y matemática) que eliminan la ambigüedad y permiten verificar propiedades automáticamente. Ejemplos: Z, OCL, TLA+.</p>
<pre class="codigo">
-- OCL: restricción sobre la clase Estudiante
context Estudiante
inv edadValida: self.edad &gt;= 4 and self.edad &lt;= 25

context Matricula::registrar(e: Estudiante)
pre:  not self.estudiantes-&gt;includes(e)
post: self.estudiantes-&gt;includes(e)
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
La notación semiformal de “Dado / Cuando / Entonces” (Gherkin) es un punto intermedio: estructurada y comprensible para el cliente.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_003',
            label: 'Interfaz de usuario',
            subtemas: [
                {
                    id: 'm003-t001',
                    label: 'Requerimientos de un sitio web',
                    steps: [
                        {
                            title: '¿Qué son los requerimientos?',
                            content: `<p>Antes de escribir una sola etiqueta se debe saber <strong>qué necesita el cliente</strong>. Un requerimiento es una condición o capacidad que el sitio debe cumplir.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Describe</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Funcional</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Lo que el sitio debe hacer.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El visitante puede enviar un formulario de contacto.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>No funcional</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cómo debe comportarse o qué cualidades debe tener.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">La página principal carga en menos de 3 segundos.</td></tr>
<tr><td style="padding:13px 12px;"><strong>De contenido</strong></td><td style="padding:13px 12px;">La información que debe publicarse.</td><td style="padding:13px 12px;">Horario, ubicación y menú del restaurante.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Preguntas para levantar requerimientos'
                        },
                        {
                            title: 'Preguntas para levantar requerimientos',
                            content: `<ol>
    <li>¿Cuál es el objetivo del sitio (vender, informar, captar clientes)?</li>
    <li>¿Quién es el público meta?</li>
    <li>¿Qué páginas o secciones necesita?</li>
    <li>¿Qué acciones debe poder realizar el visitante?</li>
    <li>¿Qué identidad visual tiene la empresa (logo, colores, tipografía)?</li>
    <li>¿Desde qué dispositivos se va a consultar?</li>
    <li>¿Quién actualizará el contenido y con qué frecuencia?</li>
</ol>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Las respuestas se documentan en una lista de requerimientos que luego sirve para verificar que el sitio terminado cumple lo acordado.</p>`,
                            nextButton: 'Siguiente: Ejemplo: caso de negocio'
                        },
                        {
                            title: 'Ejemplo: caso de negocio',
                            content: `<p><strong>Caso:</strong> la cafetería “Grano de Oro” desea un sitio para dar a conocer sus productos y recibir reservaciones.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Código</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Requerimiento</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>RF-01</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mostrar el menú con nombre, descripción y precio de cada producto.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Funcional</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>RF-02</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Permitir reservar una mesa indicando nombre, fecha, hora y cantidad de personas.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Funcional</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>RF-03</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mostrar la ubicación en un mapa.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Funcional</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>RNF-01</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El sitio se adapta a teléfonos, tabletas y computadoras.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">No funcional</td></tr>
<tr><td style="padding:13px 12px;"><strong>RNF-02</strong></td><td style="padding:13px 12px;">Se usan los colores corporativos café y crema.</td><td style="padding:13px 12px;">No funcional</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t002',
                    label: 'Estructura y diseño de un sitio web',
                    steps: [
                        {
                            title: 'Mapa del sitio',
                            content: `<p>La estructura de un sitio define <strong>qué páginas existen y cómo se relacionan</strong>. Se representa con un mapa del sitio (árbol de navegación).</p>
<pre class="codigo">
index.html  (Inicio)
├── menu.html        (Menú)
├── reservas.html    (Reservaciones)
├── nosotros.html    (Nosotros)
└── contacto.html    (Contacto)
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Una regla práctica: cualquier página debería poder alcanzarse con un máximo de tres clics desde el inicio.</p>`,
                            nextButton: 'Siguiente: Organización de carpetas'
                        },
                        {
                            title: 'Organización de carpetas',
                            content: `<p>Los archivos del proyecto se ordenan en carpetas según su tipo. Esto facilita el mantenimiento y el trabajo en equipo.</p>
<pre class="codigo">
mi-sitio/
├── index.html
├── menu.html
├── css/
│   └── estilos.css
├── js/
│   └── app.js
└── imgs/
    ├── logo.png
    └── portada.jpg
</pre>
<ul>
    <li>Use nombres en minúscula, sin espacios ni tildes: <code>quienes-somos.html</code>.</li>
    <li>La página principal se llama <code>index.html</code>: los servidores la muestran por defecto.</li>
    <li>Use <strong>rutas relativas</strong> (<code>imgs/logo.png</code>) para que el sitio funcione en cualquier servidor.</li>
</ul>`,
                            nextButton: 'Siguiente: Del requerimiento al diseño'
                        },
                        {
                            title: 'Del requerimiento al diseño',
                            content: `<p>El diseño define la apariencia y la distribución de cada página antes de construirla. Se trabaja en niveles de detalle creciente:</p>
<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-pencil" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Boceto</b><br><small>Dibujo a mano alzada</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-table-cells" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Wireframe</b><br><small>Esquema de zonas en gris</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-palette" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Mockup</b><br><small>Diseño con colores e imágenes</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-hand-pointer" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Prototipo</b><br><small>Versión navegable</small></div></div>
</div>
</div>`,
                            nextButton: 'Siguiente: Principios básicos de diseño'
                        },
                        {
                            title: 'Principios básicos de diseño',
                            content: `<ul>
    <li><strong>Jerarquía</strong>: lo más importante se ve primero: títulos grandes, llamadas a la acción destacadas.</li>
    <li><strong>Contraste</strong>: el texto debe distinguirse con facilidad del fondo.</li>
    <li><strong>Consistencia</strong>: el menú, los colores y la tipografía se mantienen iguales en todas las páginas.</li>
    <li><strong>Espacio en blanco</strong>: separar los bloques mejora la lectura.</li>
    <li><strong>Alineación</strong>: los elementos siguen una cuadrícula imaginaria.</li>
</ul>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Herramientas como Figma, Canva o Penpot permiten crear wireframes y mockups de forma colaborativa.</p>`,
                            nextButton: 'Siguiente: Diseño adaptable'
                        },
                        {
                            title: 'Diseño adaptable (responsive)',
                            content: `<p>Un sitio adaptable reorganiza su contenido según el tamaño de la pantalla. Se recomienda diseñar primero para el teléfono (<strong>mobile first</strong>) y luego ampliar.</p>
<pre class="codigo">
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
</pre>
<p class="nota">
<i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
Sin la etiqueta <code>viewport</code>, los teléfonos muestran la página como si fuera de escritorio, reducida y difícil de leer.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t003',
                    label: 'Lenguaje de Marcado de Hipertexto (HTML)',
                    steps: [
                        {
                            title: 'Anatomía de una etiqueta',
                            content: `<p>Un <strong>elemento</strong> HTML se forma con una etiqueta de apertura, el contenido y una etiqueta de cierre. Los <strong>atributos</strong> agregan información adicional.</p>
<pre class="codigo">
&lt;a href="menu.html" title="Ver el menú"&gt;Menú&lt;/a&gt;
</pre>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Parte</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">En el ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Etiqueta de apertura</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>&lt;a ...&gt;</code></td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Atributos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>href="menu.html"</code>, <code>title="Ver el menú"</code></td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Contenido</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Menú</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Etiqueta de cierre</strong></td><td style="padding:13px 12px;"><code>&lt;/a&gt;</code></td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Algunas etiquetas no tienen contenido ni cierre, como <code>&lt;img&gt;</code>, <code>&lt;br&gt;</code> e <code>&lt;input&gt;</code>.</p>`,
                            nextButton: 'Siguiente: Estructura básica de un documento'
                        },
                        {
                            title: 'Estructura básica de un documento',
                            content: `<pre class="codigo">
&lt;!DOCTYPE html&gt;
&lt;html lang="es"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Grano de Oro&lt;/title&gt;
    &lt;link rel="stylesheet" href="css/estilos.css"&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Bienvenidos&lt;/h1&gt;
    &lt;script src="js/app.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>
<ul>
    <li><code>&lt;!DOCTYPE html&gt;</code> indica que el documento es HTML5.</li>
    <li><code>&lt;head&gt;</code> contiene información para el navegador (no se muestra).</li>
    <li><code>&lt;body&gt;</code> contiene lo que ve el usuario.</li>
    <li><code>lang="es"</code> indica el idioma, útil para lectores de pantalla.</li>
</ul>`,
                            nextButton: 'Siguiente: Etiquetas más utilizadas'
                        },
                        {
                            title: 'Etiquetas más utilizadas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Etiqueta</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>&lt;h1&gt;</code> a <code>&lt;h6&gt;</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Títulos por nivel de importancia. Un solo <code>h1</code> por página.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>&lt;p&gt;</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Párrafo.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>&lt;a href=""&gt;</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Enlace a otra página o recurso.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>&lt;img src="" alt=""&gt;</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Imagen. El atributo <code>alt</code> describe la imagen.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;li&gt;</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Listas sin orden, ordenadas y sus elementos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;th&gt;</code>, <code>&lt;td&gt;</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Tablas de datos.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Texto importante y énfasis.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><code>&lt;!-- --&gt;</code></td><td style="padding:13px 12px;">Comentario (no se muestra).</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Buenas prácticas de escritura'
                        },
                        {
                            title: 'Buenas prácticas de escritura',
                            content: `<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #f0cccc; margin-bottom:12px;">
<i class="fa-solid fa-xmark" aria-hidden="true" style="color:#d2232a;"></i> <strong style="color:#d2232a;">Incorrecto</strong>
<pre class="codigo">
&lt;H1&gt;Menu&lt;/h1&gt;
&lt;img src="cafe.jpg"&gt;
&lt;p&gt;Precio&lt;p&gt;
</pre>
</div>
<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #c9e2d4; margin-bottom:12px;">
<i class="fa-solid fa-check" aria-hidden="true" style="color:#00734a;"></i> <strong style="color:#00734a;">Correcto</strong>
<pre class="codigo">
&lt;h1&gt;Menú&lt;/h1&gt;
&lt;img src="imgs/cafe.jpg" alt="Taza de café chorreado"&gt;
&lt;p&gt;Precio&lt;/p&gt;
</pre>
</div>
<ul>
    <li>Escriba las etiquetas en minúscula y ciérrelas en el orden en que se abrieron.</li>
    <li>Indente el contenido anidado para mostrar la jerarquía.</li>
    <li>Incluya siempre <code>alt</code> en las imágenes.</li>
    <li>Use las etiquetas por su significado, no por su apariencia: un <code>h2</code> no se usa solo para que el texto se vea grande.</li>
</ul>`,
                            nextButton: 'Siguiente: ¿Qué es maquetar?'
                        },
                        {
                            title: '¿Qué es maquetar?',
                            content: `<p>Maquetar es <strong>traducir el diseño a código HTML</strong>, dividiendo la página en zonas: encabezado, navegación, contenido principal, barra lateral y pie de página.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Zona</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Etiqueta</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Contenido típico</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Encabezado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>&lt;header&gt;</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Logo y título</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Navegación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>&lt;nav&gt;</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Menú de enlaces</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Contenido principal</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>&lt;main&gt;</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Información central de la página</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Sección</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>&lt;section&gt;</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Grupo temático de contenido</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Artículo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>&lt;article&gt;</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Contenido independiente (noticia, producto)</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Contenido relacionado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>&lt;aside&gt;</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Barra lateral, publicidad</td></tr>
<tr><td style="padding:13px 12px;"><strong>Pie de página</strong></td><td style="padding:13px 12px;"><code>&lt;footer&gt;</code></td><td style="padding:13px 12px;">Contacto, redes, derechos</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Ejemplo de maquetación'
                        },
                        {
                            title: 'Ejemplo de maquetación',
                            content: `<pre class="codigo">
&lt;body&gt;
    &lt;header&gt;
        &lt;img src="imgs/logo.png" alt="Logo de Grano de Oro"&gt;
        &lt;h1&gt;Cafetería Grano de Oro&lt;/h1&gt;
    &lt;/header&gt;
    &lt;nav&gt;
        &lt;a href="index.html"&gt;Inicio&lt;/a&gt;
        &lt;a href="menu.html"&gt;Menú&lt;/a&gt;
        &lt;a href="reservas.html"&gt;Reservas&lt;/a&gt;
    &lt;/nav&gt;
    &lt;main&gt;
        &lt;section&gt;
            &lt;h2&gt;Nuestros productos&lt;/h2&gt;
            &lt;article&gt;
                &lt;h3&gt;Café chorreado&lt;/h3&gt;
                &lt;p&gt;Preparado con granos de Tarrazú.&lt;/p&gt;
            &lt;/article&gt;
        &lt;/section&gt;
    &lt;/main&gt;
    &lt;footer&gt;
        &lt;p&gt;© 2026 Grano de Oro&lt;/p&gt;
    &lt;/footer&gt;
&lt;/body&gt;
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Las etiquetas semánticas no cambian la apariencia, pero ayudan a los lectores de pantalla y a los buscadores a entender la página.</p>`,
                            nextButton: 'Siguiente: Las etiquetas div y span'
                        },
                        {
                            title: 'Las etiquetas div y span',
                            content: `<p><code>&lt;div&gt;</code> crea un <strong>contenedor de bloque</strong> sin significado propio; <code>&lt;span&gt;</code> crea un <strong>contenedor en línea</strong> dentro de un texto. Ambas se usan para agrupar elementos y aplicarles estilos o comportamiento.</p>
<pre class="codigo">
&lt;div class="tarjeta-producto"&gt;
    &lt;h3&gt;Capuchino&lt;/h3&gt;
    &lt;p&gt;Precio: &lt;span class="precio"&gt;₡2 500&lt;/span&gt;&lt;/p&gt;
&lt;/div&gt;
</pre>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;"></th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">div</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">span</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tipo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Bloque: ocupa todo el ancho y empieza en una línea nueva.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">En línea: ocupa solo el espacio de su contenido.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Uso típico</strong></td><td style="padding:13px 12px;">Agrupar secciones, tarjetas, columnas.</td><td style="padding:13px 12px;">Resaltar una palabra o un dato dentro de un párrafo.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: ¿div o etiqueta semántica?'
                        },
                        {
                            title: '¿div o etiqueta semántica?',
                            content: `<p>Antes de usar <code>div</code> pregúntese si existe una etiqueta con significado. El <code>div</code> es la opción cuando el agrupamiento es solo visual.</p>
<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #f0cccc; margin-bottom:12px;">
<i class="fa-solid fa-xmark" aria-hidden="true" style="color:#d2232a;"></i> <strong style="color:#d2232a;">Incorrecto</strong>
<pre class="codigo">
&lt;div class="menu"&gt;
    &lt;div&gt;&lt;a href="index.html"&gt;Inicio&lt;/a&gt;&lt;/div&gt;
&lt;/div&gt;
</pre>
</div>
<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #c9e2d4; margin-bottom:12px;">
<i class="fa-solid fa-check" aria-hidden="true" style="color:#00734a;"></i> <strong style="color:#00734a;">Correcto</strong>
<pre class="codigo">
&lt;nav&gt;
    &lt;ul&gt;
        &lt;li&gt;&lt;a href="index.html"&gt;Inicio&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
&lt;/nav&gt;
</pre>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Abusar de <code>div</code> genera la llamada “divitis”: código difícil de leer y poco accesible.</p>`,
                            nextButton: 'Siguiente: Atributos id y class'
                        },
                        {
                            title: 'Atributos id y class',
                            content: `<ul>
    <li><code>id</code> identifica a <strong>un único</strong> elemento de la página: <code>&lt;div id="carrito"&gt;</code>.</li>
    <li><code>class</code> agrupa a <strong>varios</strong> elementos que comparten estilo o comportamiento: <code>&lt;div class="tarjeta"&gt;</code>.</li>
    <li>Un elemento puede tener varias clases separadas por espacio: <code>class="tarjeta destacada"</code>.</li>
</ul>
<p class="nota">
<i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
Un mismo <code>id</code> no puede repetirse en la página: JavaScript solo encontraría el primero.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t004',
                    label: 'Hojas de Estilo en Cascada (CSS)',
                    steps: [
                        {
                            title: '¿Qué es CSS?',
                            content: `<p>Las <strong>Hojas de Estilo en Cascada (CSS)</strong> definen la presentación de los elementos HTML: colores, tipografía, tamaños, márgenes, distribución y animaciones.</p>
<p>Separar el contenido (HTML) de la presentación (CSS) permite cambiar el aspecto de todo un sitio modificando un solo archivo.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Forma de agregar CSS</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Recomendación</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Externa</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>&lt;link rel="stylesheet" href="css/estilos.css"&gt;</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Recomendada: un archivo para todo el sitio.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Interna</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>&lt;style&gt; h1 { color: navy; } &lt;/style&gt;</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Solo para pruebas o una página aislada.</td></tr>
<tr><td style="padding:13px 12px;"><strong>En línea</strong></td><td style="padding:13px 12px;"><code>&lt;h1 style="color: navy;"&gt;</code></td><td style="padding:13px 12px;">Evitar: mezcla contenido y presentación.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: ¿Por qué “en cascada”?'
                        },
                        {
                            title: '¿Por qué “en cascada”?',
                            content: `<p>Cuando varias reglas afectan a un mismo elemento, el navegador decide cuál aplicar según tres criterios, en este orden:</p>
<ol>
    <li><strong>Importancia</strong>: una regla con <code>!important</code> gana (úsela solo en casos excepcionales).</li>
    <li><strong>Especificidad</strong>: un selector más específico gana. <code>#id</code> &gt; <code>.clase</code> &gt; <code>etiqueta</code>.</li>
    <li><strong>Orden</strong>: si la especificidad es igual, gana la regla escrita al final.</li>
</ol>
<pre class="codigo">
p { color: gray; }
.destacado { color: green; }
#aviso { color: red; }
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Un párrafo <code>&lt;p id="aviso" class="destacado"&gt;</code> se ve rojo, porque el selector de <code>id</code> es el más específico.</p>
<p>Además, algunas propiedades se <strong>heredan</strong>: si se define <code>font-family</code> en <code>body</code>, todos los elementos internos la usan.</p>`,
                            nextButton: 'Siguiente: Sintaxis de una regla'
                        },
                        {
                            title: 'Sintaxis de una regla',
                            content: `<pre class="codigo">
selector {
    propiedad: valor;
    propiedad: valor;
}

.precio {
    color: #164a98;
    font-weight: bold;
}
</pre>
<ul>
    <li>El <strong>selector</strong> indica a qué elementos se aplica la regla.</li>
    <li>Cada <strong>declaración</strong> tiene una propiedad y un valor, y termina en punto y coma.</li>
    <li>Los comentarios se escriben así: <code>/* comentario */</code>.</li>
</ul>`,
                            nextButton: 'Siguiente: Selectores básicos'
                        },
                        {
                            title: 'Selectores básicos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Selector</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Selecciona</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Etiqueta</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>p</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Todos los párrafos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Clase</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>.tarjeta</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Los elementos con <code>class="tarjeta"</code>.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Identificador</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>#carrito</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El elemento con <code>id="carrito"</code>.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Descendiente</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>nav a</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Los enlaces que están dentro de <code>nav</code>.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Agrupación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>h1, h2</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Todos los <code>h1</code> y todos los <code>h2</code>.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Universal</strong></td><td style="padding:13px 12px;"><code>*</code></td><td style="padding:13px 12px;">Todos los elementos.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Unidades y colores'
                        },
                        {
                            title: 'Unidades y colores',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Unidad</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso recomendado</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>px</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Píxeles, tamaño fijo.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Bordes y detalles finos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>%</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Relativo al elemento padre.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Anchos de columnas.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>rem</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Relativo al tamaño de letra raíz (16 px por defecto).</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Tamaños de letra y espaciados.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><code>vw</code> / <code>vh</code></td><td style="padding:13px 12px;">1 % del ancho / alto de la ventana.</td><td style="padding:13px 12px;">Secciones de pantalla completa.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
color: #164a98;              /* hexadecimal */
color: rgb(22, 74, 152);     /* rojo, verde, azul */
color: rgba(22, 74, 152, .5);/* con transparencia */
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Defina los colores corporativos como variables para reutilizarlos: <code>:root { --primario: #164a98; }</code> y luego <code>color: var(--primario);</code>.</p>`,
                            nextButton: 'Siguiente: Propiedades de texto frecuentes'
                        },
                        {
                            title: 'Propiedades de texto frecuentes',
                            content: `<pre class="codigo">
body {
    font-family: 'Poppins', Arial, sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    color: #333333;
}
h1 {
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
}
a:hover {
    text-decoration: underline;
}
</pre>
<p class="nota">
<i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
Verifique el contraste entre texto y fondo: el texto gris claro sobre blanco es difícil de leer.</p>`,
                            nextButton: 'Siguiente: Partes de la caja'
                        },
                        {
                            title: 'Partes de la caja',
                            content: `<p>Todo elemento HTML se representa como una caja rectangular formada por cuatro capas:</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Capa</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Propiedad</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Contenido</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>width</code>, <code>height</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Texto o imagen del elemento.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Relleno</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>padding</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Espacio entre el contenido y el borde. Toma el color de fondo.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Borde</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>border</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Línea que rodea el relleno.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Margen</strong></td><td style="padding:13px 12px;"><code>margin</code></td><td style="padding:13px 12px;">Espacio exterior que separa la caja de las demás. Es transparente.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Cálculo del tamaño'
                        },
                        {
                            title: 'Cálculo del tamaño',
                            content: `<pre class="codigo">
.caja {
    width: 200px;
    padding: 20px;
    border: 5px solid #164a98;
    margin: 10px;
}
</pre>
<p>Con el modelo por defecto (<code>content-box</code>), el ancho visible es 200 + 20 + 20 + 5 + 5 = <strong>250 px</strong>.</p>
<pre class="codigo">
*, *::before, *::after {
    box-sizing: border-box;
}
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Con <code>border-box</code>, el <code>width</code> incluye el relleno y el borde: la caja mide exactamente 200 px. Por eso casi todos los proyectos inician con esta regla.</p>`,
                            nextButton: 'Siguiente: Valores abreviados'
                        },
                        {
                            title: 'Valores abreviados',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Escritura</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>margin: 10px;</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">10 px en los cuatro lados.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>margin: 10px 20px;</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">10 px arriba y abajo; 20 px izquierda y derecha.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>margin: 5px 10px 15px 20px;</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Arriba, derecha, abajo, izquierda (sentido horario).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><code>margin: 0 auto;</code></td><td style="padding:13px 12px;">Centra horizontalmente un bloque con ancho definido.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Las herramientas de desarrollo del navegador (F12 → Elementos) muestran el modelo de cajas de cualquier elemento.</p>`,
                            nextButton: 'Siguiente: La propiedad position'
                        },
                        {
                            title: 'La propiedad position',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Valor</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Comportamiento</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>static</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Valor por defecto: el elemento sigue el flujo normal.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>relative</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se desplaza respecto a su posición original sin afectar a los demás.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>absolute</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se ubica respecto al ancestro posicionado más cercano y sale del flujo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>fixed</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se fija respecto a la ventana: no se mueve al desplazarse.</td></tr>
<tr><td style="padding:13px 12px;"><code>sticky</code></td><td style="padding:13px 12px;">Se comporta como relativo hasta llegar a un punto y luego queda fijo.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
.encabezado { position: sticky; top: 0; }
.insignia   { position: absolute; top: 8px; right: 8px; }
.tarjeta    { position: relative; }  /* referencia para la insignia */
</pre>`,
                            nextButton: 'Siguiente: Flexbox'
                        },
                        {
                            title: 'Flexbox',
                            content: `<p><strong>Flexbox</strong> distribuye elementos en <strong>una dimensión</strong> (fila o columna). Es ideal para menús, barras y alinear contenido.</p>
<pre class="codigo">
nav ul {
    display: flex;
    justify-content: space-between; /* eje principal */
    align-items: center;            /* eje cruzado */
    gap: 16px;
    flex-wrap: wrap;
}
</pre>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Propiedad</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Valores comunes</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>flex-direction</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>row</code>, <code>column</code></td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>justify-content</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>flex-start</code>, <code>center</code>, <code>space-between</code></td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>align-items</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>stretch</code>, <code>center</code>, <code>flex-end</code></td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><code>flex</code> (en el hijo)</td><td style="padding:13px 12px;"><code>1</code>: el hijo crece para ocupar el espacio disponible</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Grid'
                        },
                        {
                            title: 'Grid',
                            content: `<p><strong>CSS Grid</strong> distribuye elementos en <strong>dos dimensiones</strong> (filas y columnas). Es ideal para la estructura general de la página y galerías.</p>
<pre class="codigo">
.productos {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
}
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Con <code>auto-fit</code> y <code>minmax</code> la galería cambia de 4 a 2 o 1 columna según el ancho, sin escribir consultas de medios.</p>`,
                            nextButton: 'Siguiente: Consultas de medios'
                        },
                        {
                            title: 'Consultas de medios',
                            content: `<p>Las <strong>media queries</strong> aplican reglas solo cuando se cumple una condición, como un ancho mínimo de pantalla.</p>
<pre class="codigo">
/* Teléfono (por defecto): una columna */
.contenedor { display: block; }

/* Desde 768 px: dos columnas */
@media (min-width: 768px) {
    .contenedor {
        display: grid;
        grid-template-columns: 2fr 1fr;
    }
}
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t005',
                    label: 'Formularios',
                    steps: [
                        {
                            title: '¿Qué es HTTP?',
                            content: `<p>El <strong>Protocolo de Transferencia de Hipertexto (HTTP)</strong> define cómo se comunican el navegador (cliente) y el servidor. Funciona con <strong>solicitudes</strong> y <strong>respuestas</strong>.</p>
<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-laptop" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Cliente</b><br><small>Envía una solicitud</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-server" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Servidor</b><br><small>Procesa la solicitud</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-envelope-open-text" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Respuesta</b><br><small>Código de estado + contenido</small></div></div>
</div>
</div>
<p><strong>HTTPS</strong> es la versión segura: cifra la información para que no pueda leerse si es interceptada. Es obligatoria cuando se envían contraseñas o datos personales.</p>`,
                            nextButton: 'Siguiente: Métodos HTTP'
                        },
                        {
                            title: 'Métodos HTTP',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Método</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>GET</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Obtener información. Los datos viajan en la URL.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>/buscar?producto=cafe</code></td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>POST</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Enviar datos para crear o procesar. Los datos viajan en el cuerpo.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Enviar un formulario de registro.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>PUT / PATCH</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Actualizar un recurso completo / parcialmente.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cambiar el correo de un usuario.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>DELETE</strong></td><td style="padding:13px 12px;">Eliminar un recurso.</td><td style="padding:13px 12px;">Cancelar una reservación.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
Nunca envíe contraseñas con GET: quedan visibles en la URL y en el historial del navegador.</p>`,
                            nextButton: 'Siguiente: Códigos de estado'
                        },
                        {
                            title: 'Códigos de estado',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Rango</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplos</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1xx</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Información</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">100 Continue</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>2xx</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Éxito</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">200 OK, 201 Created</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>3xx</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Redirección</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">301 Moved Permanently</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>4xx</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Error del cliente</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">400 Bad Request, 401 Unauthorized, 404 Not Found</td></tr>
<tr><td style="padding:13px 12px;"><strong>5xx</strong></td><td style="padding:13px 12px;">Error del servidor</td><td style="padding:13px 12px;">500 Internal Server Error</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
En las herramientas de desarrollo (F12 → Red) se puede ver cada solicitud, su método y su código de estado.</p>`,
                            nextButton: 'Siguiente: Estructura de un formulario'
                        },
                        {
                            title: 'Estructura de un formulario',
                            content: `<pre class="codigo">
&lt;form action="/reservas" method="post"&gt;
    &lt;label for="nombre"&gt;Nombre completo&lt;/label&gt;
    &lt;input type="text" id="nombre" name="nombre" required&gt;

    &lt;label for="correo"&gt;Correo electrónico&lt;/label&gt;
    &lt;input type="email" id="correo" name="correo" required&gt;

    &lt;button type="submit"&gt;Reservar&lt;/button&gt;
&lt;/form&gt;
</pre>
<ul>
    <li><code>action</code>: dirección a la que se envían los datos.</li>
    <li><code>method</code>: método HTTP (<code>get</code> o <code>post</code>).</li>
    <li><code>name</code>: nombre con el que el servidor recibe cada dato.</li>
    <li><code>label for</code> + <code>id</code>: asocian la etiqueta con su campo; al hacer clic en la etiqueta se activa el campo y los lectores de pantalla la leen.</li>
</ul>`,
                            nextButton: 'Siguiente: Tipos de campos'
                        },
                        {
                            title: 'Tipos de campos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>text</code>, <code>email</code>, <code>tel</code>, <code>url</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Texto con teclado adaptado en teléfonos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>password</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Oculta los caracteres.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>number</code>, <code>range</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Números con <code>min</code>, <code>max</code> y <code>step</code>.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>date</code>, <code>time</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Selector de fecha y hora.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>checkbox</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Varias opciones independientes.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>radio</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Una sola opción de un grupo (mismo <code>name</code>).</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>&lt;select&gt;</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Lista desplegable.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>&lt;textarea&gt;</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Texto de varias líneas.</td></tr>
<tr><td style="padding:13px 12px;"><code>file</code></td><td style="padding:13px 12px;">Adjuntar archivos.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Formularios según su propósito'
                        },
                        {
                            title: 'Formularios según su propósito',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Formulario</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Campos típicos</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Consideración</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Contacto</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Nombre, correo, mensaje</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pocos campos para no desanimar.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Registro</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Nombre, correo, contraseña, confirmación</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Explicar las reglas de la contraseña.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Inicio de sesión</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Usuario, contraseña</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Usar HTTPS y método POST.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Búsqueda</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Término de búsqueda</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Usar método GET para poder compartir el enlace.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Compra o reserva</strong></td><td style="padding:13px 12px;">Datos del cliente, fecha, cantidad</td><td style="padding:13px 12px;">Dividir en pasos si es extenso.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
&lt;fieldset&gt;
    &lt;legend&gt;Tipo de mesa&lt;/legend&gt;
    &lt;input type="radio" id="interior" name="zona" value="interior"&gt;
    &lt;label for="interior"&gt;Interior&lt;/label&gt;
    &lt;input type="radio" id="terraza" name="zona" value="terraza"&gt;
    &lt;label for="terraza"&gt;Terraza&lt;/label&gt;
&lt;/fieldset&gt;
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
<code>fieldset</code> y <code>legend</code> agrupan opciones relacionadas y le dan un título accesible al grupo.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t006',
                    label: 'Validaciones de interfaz gráfica',
                    steps: [
                        {
                            title: 'Validación nativa de HTML5',
                            content: `<p>HTML5 incluye atributos que el navegador verifica antes de enviar el formulario:</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Atributo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Valida que…</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>required</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">el campo no esté vacío.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>type="email"</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">tenga formato de correo.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>minlength</code> / <code>maxlength</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">el texto tenga una longitud mínima o máxima.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>min</code> / <code>max</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">el número o fecha esté en un rango.</td></tr>
<tr><td style="padding:13px 12px;"><code>pattern</code></td><td style="padding:13px 12px;">cumpla una expresión regular.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
&lt;input type="tel" id="telefono" name="telefono" pattern="[0-9]{4}-[0-9]{4}" placeholder="8888-8888" required&gt;
</pre>`,
                            nextButton: 'Siguiente: Expresiones regulares'
                        },
                        {
                            title: 'Expresiones regulares',
                            content: `<p>Una <strong>expresión regular</strong> es un patrón que describe un formato de texto.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Símbolo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>^</code> / <code>$</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Inicio / fin del texto</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>^abc$</code></td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>[0-9]</code> o <code>\\d</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un dígito</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>\\d{4}</code> → 4 dígitos</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>[A-Za-z]</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Una letra</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>[A-Z]{2}</code></td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>{n,m}</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Entre n y m repeticiones</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>\\d{8,9}</code></td></tr>
<tr><td style="padding:13px 12px;"><code>+</code> / <code>*</code> / <code>?</code></td><td style="padding:13px 12px;">Una o más / cero o más / opcional</td><td style="padding:13px 12px;"><code>\\d+</code></td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
const regexCedula   = /^\\d-\\d{4}-\\d{4}$/;      // 1-1234-5678
const regexTelefono = /^[2-8]\\d{3}-?\\d{4}$/;    // 8888-8888
const regexCorreo   = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

console.log(regexCedula.test("1-1234-5678")); // true
</pre>`,
                            nextButton: 'Siguiente: Validación con JavaScript'
                        },
                        {
                            title: 'Validación con JavaScript',
                            content: `<p>JavaScript permite mensajes personalizados y reglas que HTML no cubre, como confirmar que dos contraseñas coincidan.</p>
<pre class="codigo">
const formulario = document.getElementById("formRegistro");
const clave = document.getElementById("clave");
const confirmacion = document.getElementById("confirmacion");
const mensaje = document.getElementById("mensajeError");

formulario.addEventListener("submit", function (evento) {
    if (clave.value !== confirmacion.value) {
        evento.preventDefault();   // detiene el envío
        mensaje.textContent = "Las contraseñas no coinciden.";
        confirmacion.focus();
    }
});
</pre>
<p class="nota">
<i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
La validación del navegador mejora la experiencia, pero <strong>no es seguridad</strong>: cualquier persona puede desactivarla. El servidor siempre debe volver a validar los datos.</p>`,
                            nextButton: 'Siguiente: Mensajes de error accesibles'
                        },
                        {
                            title: 'Mensajes de error accesibles',
                            content: `<ul>
    <li>Muestre el error junto al campo, no solo en una alerta.</li>
    <li>Explique cómo corregirlo: “El teléfono debe tener 8 dígitos” en lugar de “Dato inválido”.</li>
    <li>No dependa solo del color rojo: agregue un ícono o texto.</li>
    <li>Asocie el mensaje al campo con <code>aria-describedby</code>.</li>
</ul>
<pre class="codigo">
&lt;label for="telefono"&gt;Teléfono&lt;/label&gt;
&lt;input id="telefono" aria-describedby="ayudaTelefono"&gt;
&lt;small id="ayudaTelefono"&gt;Formato: 8888-8888&lt;/small&gt;
</pre>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_004',
            label: 'JavaScript',
            subtemas: [
                {
                    id: 'm004-t001',
                    label: 'Introducción a JavaScript',
                    steps: [
                        {
                            title: '¿Qué es JavaScript?',
                            content: `<p><strong>JavaScript</strong> es el lenguaje de programación de la web. Se ejecuta en el navegador para agregar comportamiento a las páginas: responder a clics, validar formularios, mostrar u ocultar contenido y comunicarse con servidores.</p>
<p>Con <strong>Node.js</strong> también se ejecuta fuera del navegador, por ejemplo en servidores.</p>
<pre class="codigo">
&lt;!-- Al final del body, para que el HTML ya exista --&gt;
&lt;script src="js/app.js"&gt;&lt;/script&gt;
</pre>`,
                            nextButton: 'Siguiente: Primer programa'
                        },
                        {
                            title: 'Primer programa',
                            content: `<pre class="codigo">
// js/app.js
console.log("Hola desde la consola");

const titulo = document.getElementById("titulo");
titulo.textContent = "Bienvenidos a Grano de Oro";
</pre>
<ul>
    <li><code>console.log()</code> muestra mensajes en la consola del navegador (F12 → Consola). Es la herramienta básica de depuración.</li>
    <li><code>document</code> representa la página y permite leerla y modificarla.</li>
    <li>Cada instrucción termina en punto y coma.</li>
    <li>Los comentarios de una línea inician con <code>//</code> y los de varias líneas con <code>/* */</code>.</li>
</ul>`,
                            nextButton: 'Siguiente: Variables'
                        },
                        {
                            title: 'Variables',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Palabra</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Se puede reasignar</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>const</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">No</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Valores que no cambian. Úsela por defecto.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>let</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sí</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Valores que cambian, como contadores.</td></tr>
<tr><td style="padding:13px 12px;"><code>var</code></td><td style="padding:13px 12px;">Sí</td><td style="padding:13px 12px;">Forma antigua. Evítela.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
const IVA = 0.13;
let cantidad = 2;
cantidad = cantidad + 1;   // 3
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
En JavaScript se usa la convención <strong>camelCase</strong> para variables y funciones: <code>precioTotal</code>, <code>calcularDescuento</code>.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t002',
                    label: 'Tipos de datos y operadores',
                    steps: [
                        {
                            title: 'Tipos de datos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">typeof</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Número</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>25</code>, <code>3.5</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>"number"</code></td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cadena</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>"café"</code>, <code>'té'</code>, <code>\`plantilla\`</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>"string"</code></td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Booleano</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>true</code>, <code>false</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>"boolean"</code></td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Indefinido</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>undefined</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>"undefined"</code></td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Nulo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>null</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>"object"</code></td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Objeto</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>{ nombre: "Ana" }</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>"object"</code></td></tr>
<tr><td style="padding:13px 12px;"><strong>Arreglo</strong></td><td style="padding:13px 12px;"><code>[1, 2, 3]</code></td><td style="padding:13px 12px;"><code>"object"</code></td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
const producto = "Capuchino";
const precio = 2500;
console.log(\`El \${producto} cuesta ₡\${precio}\`);
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Las <strong>plantillas literales</strong> (comillas invertidas) permiten insertar variables con <code>\${ }</code>.</p>`,
                            nextButton: 'Siguiente: Operadores'
                        },
                        {
                            title: 'Operadores',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Operadores</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Aritméticos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>+ - * / % **</code></td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Asignación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>= += -= *= /=</code></td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Incremento</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>++ --</code></td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Comparación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>=== !== &gt; &lt; &gt;= &lt;=</code></td></tr>
<tr><td style="padding:13px 12px;"><strong>Lógicos</strong></td><td style="padding:13px 12px;"><code>&amp;&amp;</code> (y), <code>||</code> (o), <code>!</code> (no)</td></tr>
</tbody>
</table>
</div>
<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #f0cccc; margin-bottom:12px;">
<i class="fa-solid fa-xmark" aria-hidden="true" style="color:#d2232a;"></i> <strong style="color:#d2232a;">Incorrecto</strong>
<pre class="codigo">
console.log(5 == "5");   // true: compara solo el valor
</pre>
</div>
<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #c9e2d4; margin-bottom:12px;">
<i class="fa-solid fa-check" aria-hidden="true" style="color:#00734a;"></i> <strong style="color:#00734a;">Correcto</strong>
<pre class="codigo">
console.log(5 === "5");  // false: compara valor y tipo
</pre>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Use siempre <code>===</code> y <code>!==</code> para evitar conversiones automáticas inesperadas.</p>`,
                            nextButton: 'Siguiente: Conversión de tipos'
                        },
                        {
                            title: 'Conversión de tipos',
                            content: `<p>Los valores de los campos de un formulario siempre son texto. Antes de operar hay que convertirlos.</p>
<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #f0cccc; margin-bottom:12px;">
<i class="fa-solid fa-xmark" aria-hidden="true" style="color:#d2232a;"></i> <strong style="color:#d2232a;">Incorrecto</strong>
<pre class="codigo">
const cantidad = document.getElementById("cantidad").value; // "2"
console.log(cantidad + 1);  // "21"
</pre>
</div>
<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #c9e2d4; margin-bottom:12px;">
<i class="fa-solid fa-check" aria-hidden="true" style="color:#00734a;"></i> <strong style="color:#00734a;">Correcto</strong>
<pre class="codigo">
const cantidad = Number(document.getElementById("cantidad").value);
console.log(cantidad + 1);  // 3
</pre>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Función</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Resultado</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>Number("12.5")</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">12.5</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>parseInt("12.5")</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">12</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>Number("abc")</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>NaN</code> (no es un número)</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><code>String(25)</code></td><td style="padding:13px 12px;">"25"</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t003',
                    label: 'Estructuras de control',
                    steps: [
                        {
                            title: 'Condicionales',
                            content: `<pre class="codigo">
const edad = Number(prompt("Edad:"));

if (edad &gt;= 18) {
    console.log("Puede registrarse");
} else if (edad &gt;= 13) {
    console.log("Requiere autorización");
} else {
    console.log("No puede registrarse");
}
</pre>
<pre class="codigo">
// Operador ternario: condición ? valorSiVerdadero : valorSiFalso
const mensaje = edad &gt;= 18 ? "Mayor de edad" : "Menor de edad";
</pre>`,
                            nextButton: 'Siguiente: switch'
                        },
                        {
                            title: 'switch',
                            content: `<pre class="codigo">
const opcion = "2";
switch (opcion) {
    case "1":
        console.log("Ver menú");
        break;
    case "2":
        console.log("Hacer reserva");
        break;
    default:
        console.log("Opción no válida");
}
</pre>
<p class="nota">
<i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
Si se omite <code>break</code>, la ejecución continúa con el siguiente <code>case</code>.</p>`,
                            nextButton: 'Siguiente: Ciclos'
                        },
                        {
                            title: 'Ciclos',
                            content: `<pre class="codigo">
// for: cantidad conocida de repeticiones
for (let i = 1; i &lt;= 5; i++) {
    console.log(i);
}

// while: mientras se cumpla la condición
let intentos = 0;
while (intentos &lt; 3) {
    intentos++;
}

// for...of: recorrer los elementos de un arreglo
const productos = ["Café", "Té", "Chocolate"];
for (const producto of productos) {
    console.log(producto);
}
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Use <code>for...of</code> para recorrer arreglos: es más legible y evita errores con los índices.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t004',
                    label: 'Funciones y arreglos',
                    steps: [
                        {
                            title: 'Funciones',
                            content: `<pre class="codigo">
// Declaración de función
function calcularTotal(precio, cantidad) {
    return precio * cantidad;
}

// Función flecha
const aplicarIva = (monto) =&gt; monto * 1.13;

const total = aplicarIva(calcularTotal(2500, 2));
console.log(total.toFixed(2));   // "5650.00"
</pre>
<ul>
    <li>Una función agrupa instrucciones bajo un nombre para reutilizarlas.</li>
    <li>Los <strong>parámetros</strong> reciben datos y <code>return</code> devuelve el resultado.</li>
    <li>Cada función debe hacer una sola tarea y su nombre debe iniciar con un verbo.</li>
</ul>`,
                            nextButton: 'Siguiente: Arreglos'
                        },
                        {
                            title: 'Arreglos',
                            content: `<pre class="codigo">
const precios = [2500, 1800, 3200];

precios.push(2000);       // agrega al final
precios.length;           // 4
precios[0];               // 2500
precios.includes(1800);   // true
precios.indexOf(3200);    // 2
</pre>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Método</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Qué hace</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>push</code> / <code>pop</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Agrega / quita al final.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>splice(i, n)</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Elimina n elementos desde la posición i.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>sort</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ordena el arreglo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><code>join(", ")</code></td><td style="padding:13px 12px;">Une los elementos en un texto.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Arreglos de objetos y métodos funcionales'
                        },
                        {
                            title: 'Arreglos de objetos y métodos funcionales',
                            content: `<pre class="codigo">
const menu = [
    { nombre: "Café", precio: 1500, categoria: "bebida" },
    { nombre: "Queque", precio: 2200, categoria: "postre" },
    { nombre: "Té", precio: 1200, categoria: "bebida" }
];

const bebidas = menu.filter(p =&gt; p.categoria === "bebida");
const nombres = menu.map(p =&gt; p.nombre);
const total   = menu.reduce((suma, p) =&gt; suma + p.precio, 0);
const queque  = menu.find(p =&gt; p.nombre === "Queque");
</pre>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Método</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Devuelve</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>filter</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un arreglo nuevo con los elementos que cumplen la condición.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>map</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un arreglo nuevo con cada elemento transformado.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>reduce</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un solo valor acumulado.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>find</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El primer elemento que cumple la condición o <code>undefined</code>.</td></tr>
<tr><td style="padding:13px 12px;"><code>forEach</code></td><td style="padding:13px 12px;">Nada: solo recorre.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t005',
                    label: 'Interfaz de programación de aplicaciones en la navegación',
                    steps: [
                        {
                            title: 'El Modelo de Objetos del Documento (DOM)',
                            content: `<p>El navegador representa la página como un árbol de objetos llamado <strong>DOM</strong>. JavaScript usa la API del DOM para buscar, leer, crear y modificar elementos.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Método</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Devuelve</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>document.getElementById("id")</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El elemento con ese id.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>document.querySelector(".clase")</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El primer elemento que cumple el selector CSS.</td></tr>
<tr><td style="padding:13px 12px;"><code>document.querySelectorAll("li")</code></td><td style="padding:13px 12px;">Todos los elementos que cumplen el selector.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
const lista = document.getElementById("listaProductos");
const item = document.createElement("li");
item.textContent = "Chocolate caliente";
item.classList.add("destacado");
lista.appendChild(item);
</pre>`,
                            nextButton: 'Siguiente: Eventos'
                        },
                        {
                            title: 'Eventos',
                            content: `<p>Un <strong>evento</strong> es algo que ocurre en la página: un clic, una tecla, el envío de un formulario. Con <code>addEventListener</code> se indica qué función ejecutar cuando ocurre.</p>
<pre class="codigo">
const boton = document.getElementById("btnModo");

boton.addEventListener("click", function () {
    document.body.classList.toggle("modo-oscuro");
});
</pre>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Evento</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ocurre cuando…</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>click</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">se hace clic en el elemento.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>input</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">cambia el valor de un campo mientras se escribe.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>change</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">cambia un campo y pierde el foco, o se elige otra opción.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>submit</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">se envía un formulario.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>keydown</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">se presiona una tecla.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><code>DOMContentLoaded</code></td><td style="padding:13px 12px;">el HTML terminó de cargarse.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Almacenamiento en el navegador'
                        },
                        {
                            title: 'Almacenamiento en el navegador',
                            content: `<p><code>localStorage</code> guarda datos en el navegador que se conservan aunque se cierre la página. Solo almacena texto, por eso los objetos se convierten con JSON.</p>
<pre class="codigo">
const carrito = [{ nombre: "Café", cantidad: 2 }];
localStorage.setItem("carrito", JSON.stringify(carrito));

const guardado = JSON.parse(localStorage.getItem("carrito")) || [];
</pre>
<p class="nota">
<i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
No guarde contraseñas ni información sensible en <code>localStorage</code>: cualquier script de la página puede leerla.</p>`,
                            nextButton: 'Siguiente: Otras API del navegador'
                        },
                        {
                            title: 'Otras API del navegador',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">API</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Permite</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>fetch</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Hacer solicitudes HTTP al servidor sin recargar la página.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>Geolocation</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Obtener la ubicación del usuario (con su permiso).</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>History</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Navegar hacia atrás y adelante por programación.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>setTimeout</code> / <code>setInterval</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ejecutar código después de un tiempo o repetidamente.</td></tr>
<tr><td style="padding:13px 12px;"><code>Notification</code></td><td style="padding:13px 12px;">Mostrar notificaciones del sistema.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
setTimeout(() =&gt; {
    document.getElementById("aviso").hidden = true;
}, 3000); // oculta el aviso después de 3 segundos
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t006',
                    label: 'Entorno de ejecución Node.js',
                    steps: [
                        {
                            title: '¿Qué es Node.js?',
                            content: `<p><strong>Node.js</strong> es un entorno que ejecuta JavaScript fuera del navegador, usando el motor V8 de Chrome. Permite crear servidores, herramientas de línea de comandos y scripts.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;"></th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Navegador</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Node.js</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Objeto global</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>window</code>, <code>document</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>global</code>, <code>process</code></td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Acceso a archivos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">No</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sí (módulo <code>fs</code>)</td></tr>
<tr><td style="padding:13px 12px;"><strong>Uso principal</strong></td><td style="padding:13px 12px;">Interfaz de usuario</td><td style="padding:13px 12px;">Servidores y herramientas</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Primeros pasos'
                        },
                        {
                            title: 'Primeros pasos',
                            content: `<pre class="codigo">
node --version          # verifica la instalación
node app.js             # ejecuta un archivo
npm init -y             # crea package.json
npm install nombre      # instala un paquete
</pre>
<pre class="codigo">
// app.js
const fs = require("fs");
fs.writeFileSync("saludo.txt", "Hola desde Node.js");
console.log("Archivo creado");
</pre>`,
                            nextButton: 'Siguiente: npm y package.json'
                        },
                        {
                            title: 'npm y package.json',
                            content: `<p><strong>npm</strong> es el gestor de paquetes de Node.js. El archivo <code>package.json</code> registra el nombre del proyecto, sus dependencias y sus comandos.</p>
<pre class="codigo">
{
  "name": "grano-de-oro",
  "version": "1.0.0",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.19.2"
  }
}
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
La carpeta <code>node_modules</code> no se sube al repositorio: se regenera con <code>npm install</code> a partir de <code>package.json</code>.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_005',
            label: 'jQuery',
            subtemas: [
                {
                    id: 'm005-t001',
                    label: 'Introducción a JQuery',
                    steps: [
                        {
                            title: '¿Qué es jQuery?',
                            content: `<p><strong>jQuery</strong> es una biblioteca de JavaScript que simplifica la selección de elementos, la manipulación del DOM, los eventos, las animaciones y las solicitudes al servidor, con un código más corto y compatible entre navegadores.</p>
<pre class="codigo">
&lt;script src="https://code.jquery.com/jquery-3.7.1.min.js"&gt;&lt;/script&gt;
&lt;script src="js/app.js"&gt;&lt;/script&gt;
</pre>
<pre class="codigo">
$(document).ready(function () {
    // el código se ejecuta cuando el DOM está listo
    $("#titulo").text("Bienvenidos");
});
</pre>`,
                            nextButton: 'Siguiente: JavaScript y jQuery'
                        },
                        {
                            title: 'JavaScript y jQuery',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tarea</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">JavaScript</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">jQuery</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Seleccionar</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>document.querySelector("#menu")</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>$("#menu")</code></td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cambiar texto</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>el.textContent = "Hola"</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>$(el).text("Hola")</code></td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Agregar clase</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>el.classList.add("activo")</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>$(el).addClass("activo")</code></td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Evento clic</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>el.addEventListener("click", f)</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>$(el).on("click", f)</code></td></tr>
<tr><td style="padding:13px 12px;"><strong>Ocultar</strong></td><td style="padding:13px 12px;"><code>el.hidden = true</code></td><td style="padding:13px 12px;"><code>$(el).hide()</code></td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Hoy JavaScript moderno resuelve casi todo lo que hacía jQuery, pero la biblioteca sigue presente en muchos sitios y sistemas existentes, por lo que es importante saber leerla y mantenerla.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t002',
                    label: 'Selectores',
                    steps: [
                        {
                            title: 'Selectores de jQuery',
                            content: `<p>jQuery usa los mismos selectores de CSS dentro de la función <code>$()</code>, y devuelve un objeto con todos los elementos encontrados.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Selector</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Selecciona</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>$("p")</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Todos los párrafos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>$(".tarjeta")</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Todos los elementos con la clase tarjeta.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>$("#carrito")</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El elemento con id carrito.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>$("nav a")</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Los enlaces dentro de nav.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>$("input[type='email']")</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Los campos de correo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>$("li:first")</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El primer elemento de lista.</td></tr>
<tr><td style="padding:13px 12px;"><code>$("tr:even")</code></td><td style="padding:13px 12px;">Las filas pares (índice 0, 2, 4…).</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Recorrido y filtrado'
                        },
                        {
                            title: 'Recorrido y filtrado',
                            content: `<pre class="codigo">
$(".tarjeta").find(".precio");      // descendientes
$("#item3").parent();               // elemento padre
$("#item3").siblings();             // hermanos
$(".tarjeta").first();              // el primero
$(".tarjeta").eq(2);                // el tercero
$(".tarjeta").filter(".oferta");    // solo los que tienen la clase oferta
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Los métodos se pueden <strong>encadenar</strong>: <code>$(".tarjeta").filter(".oferta").addClass("resaltado").show();</code></p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t003',
                    label: 'Manipulación de la estructura de contenido',
                    steps: [
                        {
                            title: 'Leer y modificar contenido',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Método</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>.text()</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Lee o cambia el texto.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>.html()</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Lee o cambia el HTML interno.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>.val()</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Lee o cambia el valor de un campo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>.attr("src")</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Lee o cambia un atributo.</td></tr>
<tr><td style="padding:13px 12px;"><code>.css("color", "red")</code></td><td style="padding:13px 12px;">Lee o cambia un estilo.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
const nombre = $("#nombre").val();
$("#saludo").text("Hola, " + nombre);
$("#foto").attr("alt", "Foto de " + nombre);
</pre>
<p class="nota">
<i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
Use <code>.text()</code> para mostrar datos escritos por el usuario. <code>.html()</code> interpreta etiquetas y puede permitir la inyección de código.</p>`,
                            nextButton: 'Siguiente: Agregar y eliminar elementos'
                        },
                        {
                            title: 'Agregar y eliminar elementos',
                            content: `<pre class="codigo">
$("#lista").append("&lt;li&gt;Nuevo al final&lt;/li&gt;");
$("#lista").prepend("&lt;li&gt;Nuevo al inicio&lt;/li&gt;");
$("#aviso").remove();          // elimina el elemento
$("#lista").empty();           // vacía su contenido

$(".tarjeta").addClass("activa");
$(".tarjeta").removeClass("activa");
$(".tarjeta").toggleClass("activa");
</pre>`,
                            nextButton: 'Siguiente: Efectos'
                        },
                        {
                            title: 'Efectos',
                            content: `<pre class="codigo">
$("#detalle").slideToggle(300);
$("#mensaje").fadeIn().delay(2000).fadeOut();
</pre>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Efecto</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>show</code> / <code>hide</code> / <code>toggle</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Muestra u oculta.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>fadeIn</code> / <code>fadeOut</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Aparece o desaparece gradualmente.</td></tr>
<tr><td style="padding:13px 12px;"><code>slideUp</code> / <code>slideDown</code></td><td style="padding:13px 12px;">Se enrolla o despliega verticalmente.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t004',
                    label: 'Manejo de eventos con JQuery',
                    steps: [
                        {
                            title: 'El método on',
                            content: `<pre class="codigo">
$("#btnAgregar").on("click", function () {
    const producto = $("#producto").val();
    $("#lista").append($("&lt;li&gt;").text(producto));
    $("#producto").val("").focus();
});
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
<code>$("&lt;li&gt;").text(producto)</code> crea el elemento y le asigna el texto de forma segura.</p>`,
                            nextButton: 'Siguiente: Delegación de eventos'
                        },
                        {
                            title: 'Delegación de eventos',
                            content: `<p>Los elementos que se crean después de cargar la página no tienen eventos asociados. Con la <strong>delegación</strong>, el evento se asigna a un contenedor que ya existe.</p>
<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #f0cccc; margin-bottom:12px;">
<i class="fa-solid fa-xmark" aria-hidden="true" style="color:#d2232a;"></i> <strong style="color:#d2232a;">Incorrecto</strong>
<pre class="codigo">
$(".eliminar").on("click", function () {   // no afecta a los nuevos botones
    $(this).parent().remove();
});
</pre>
</div>
<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #c9e2d4; margin-bottom:12px;">
<i class="fa-solid fa-check" aria-hidden="true" style="color:#00734a;"></i> <strong style="color:#00734a;">Correcto</strong>
<pre class="codigo">
$("#lista").on("click", ".eliminar", function () {
    $(this).closest("li").remove();
});
</pre>
</div>`,
                            nextButton: 'Siguiente: Evento de formulario y objeto event'
                        },
                        {
                            title: 'Evento de formulario y objeto event',
                            content: `<pre class="codigo">
$("#formContacto").on("submit", function (evento) {
    evento.preventDefault();
    const correo = $("#correo").val().trim();
    if (correo === "") {
        $("#error").text("Ingrese su correo").show();
        return;
    }
    $("#error").hide();
    $("#exito").text("Mensaje enviado").fadeIn();
});
</pre>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Propiedad o método</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>evento.preventDefault()</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Evita la acción por defecto (enviar, seguir el enlace).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>evento.target</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Elemento que originó el evento.</td></tr>
<tr><td style="padding:13px 12px;"><code>$(this)</code></td><td style="padding:13px 12px;">Elemento al que se asignó el evento.</td></tr>
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
            id: 'modulo_006',
            label: 'Desarrollo de aplicaciones',
            subtemas: [
                {
                    id: 'm006-t001',
                    label: 'Estructura de la aplicación',
                    steps: [
                        {
                            title: 'Arquitectura cliente-servidor',
                            content: `<p>Una aplicación web se divide en dos partes que se comunican por HTTP:</p>
<div style="display:flex; flex-wrap:wrap; gap:12px; margin:12px 0;">
<div style="flex:1 1 200px; padding:14px; border:1px solid #9cc8ff; border-top:4px solid #2b93d1; border-radius:10px; background:#ffffff;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-display" style="color:#164a98; margin-right:6px;" aria-hidden="true"></i><strong>Frontend (cliente)</strong></p><p style="margin:0;">HTML, CSS y JavaScript que se ejecutan en el navegador. Muestra la información y captura las acciones del usuario.</p></div>
<div style="flex:1 1 200px; padding:14px; border:1px solid #9cc8ff; border-top:4px solid #2b93d1; border-radius:10px; background:#ffffff;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-server" style="color:#164a98; margin-right:6px;" aria-hidden="true"></i><strong>Backend (servidor)</strong></p><p style="margin:0;">Programa en Node.js que procesa solicitudes, aplica reglas de negocio y accede a la base de datos.</p></div>
<div style="flex:1 1 200px; padding:14px; border:1px solid #9cc8ff; border-top:4px solid #2b93d1; border-radius:10px; background:#ffffff;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-database" style="color:#164a98; margin-right:6px;" aria-hidden="true"></i><strong>Base de datos</strong></p><p style="margin:0;">Almacena la información de forma permanente.</p></div>
</div>`,
                            nextButton: 'Siguiente: Organización de carpetas'
                        },
                        {
                            title: 'Organización de carpetas',
                            content: `<pre class="codigo">
proyecto/
├── frontend/
│   ├── index.html
│   ├── css/estilos.css
│   └── js/app.js
├── backend/
│   ├── server.js          # punto de entrada
│   ├── routes/            # rutas (endpoints)
│   ├── controllers/       # lógica de cada ruta
│   ├── models/            # estructura de los datos
│   └── package.json
├── .gitignore
└── README.md
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Separar rutas, controladores y modelos hace que cada archivo tenga una sola responsabilidad y facilita el trabajo en equipo.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t002',
                    label: 'Entorno de ejecución Node.js',
                    steps: [
                        {
                            title: 'Node.js en el servidor',
                            content: `<p>En una aplicación, Node.js ejecuta el <strong>backend</strong>: recibe las solicitudes del navegador, valida los datos, consulta la base de datos y devuelve una respuesta, normalmente en formato JSON.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Concepto</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ruta (endpoint)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Combinación de método y dirección: <code>GET /api/productos</code>.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Solicitud (req)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Datos que envía el cliente: parámetros, cuerpo, encabezados.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Respuesta (res)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Lo que devuelve el servidor: código de estado y contenido.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Middleware</strong></td><td style="padding:13px 12px;">Función que se ejecuta antes de la ruta, por ejemplo para validar o registrar.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Servidor con NestJS'
                        },
                        {
                            title: 'Servidor con NestJS',
                            content: `<p><strong>NestJS</strong> es un marco de trabajo para Node.js que organiza la aplicación en <strong>módulos</strong>, <strong>controladores</strong> (reciben las solicitudes) y <strong>servicios</strong> (contienen la lógica).</p>
<pre class="codigo">
npm i -g @nestjs/cli
nest new api-reservas
nest generate resource reservas
</pre>
<pre class="codigo">
// reservas.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { ReservasService } from './reservas.service';

@Controller('reservas')
export class ReservasController {
    constructor(private readonly reservasService: ReservasService) {}

    @Get('hoy')                 // GET /reservas/hoy
    obtenerDeHoy() {
        return this.reservasService.buscarPorFecha(new Date());
    }

    @Post()                     // POST /reservas
    crear(@Body() datos) {
        return this.reservasService.crear(datos);
    }
}
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Cree solo los endpoints que piden los requerimientos (por ejemplo, “reservas de hoy”), no un GET que devuelva todos los datos.</p>`,
                            nextButton: 'Siguiente: Variables de entorno'
                        },
                        {
                            title: 'Variables de entorno',
                            content: `<p>Los datos sensibles (cadena de conexión a la base de datos, claves) no se escriben en el código: se guardan en un archivo <code>.env</code> que no se sube al repositorio.</p>
<pre class="codigo">
# .env
PORT=3000
MONGO_URI=mongodb+srv://usuario:clave@cluster.mongodb.net/cafeteria
</pre>
<pre class="codigo">
require("dotenv").config();
const puerto = process.env.PORT;
</pre>
<p class="nota">
<i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
Agregue <code>.env</code> y <code>node_modules/</code> al archivo <code>.gitignore</code>.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t003',
                    label: 'Gestión de código fuente',
                    steps: [
                        {
                            title: 'Control de versiones con Git',
                            content: `<p><strong>Git</strong> registra la historia de cambios del código: quién cambió qué, cuándo y por qué. Permite volver a versiones anteriores y trabajar en equipo sin sobrescribir el trabajo de otros. <strong>GitHub</strong> aloja los repositorios en la nube.</p>
<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-pen" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Modificar</b><br><small>Directorio de trabajo</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-layer-group" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>git add</b><br><small>Área de preparación</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-floppy-disk" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>git commit</b><br><small>Repositorio local</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-cloud-arrow-up" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>git push</b><br><small>Repositorio remoto</small></div></div>
</div>
</div>`,
                            nextButton: 'Siguiente: Comandos básicos'
                        },
                        {
                            title: 'Comandos básicos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Comando</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Qué hace</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>git init</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Crea un repositorio.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>git clone URL</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Copia un repositorio remoto.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>git status</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Muestra los archivos modificados.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>git add .</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Prepara los cambios.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>git commit -m "mensaje"</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Guarda una versión con un mensaje.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>git pull</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Trae los cambios del remoto.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>git push</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Envía los cambios al remoto.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><code>git log --oneline</code></td><td style="padding:13px 12px;">Muestra el historial.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Ramas y trabajo en equipo'
                        },
                        {
                            title: 'Ramas y trabajo en equipo',
                            content: `<pre class="codigo">
git switch -c feature/formulario-reservas   # crea y cambia a la rama
# ... trabajar y hacer commits ...
git push -u origin feature/formulario-reservas
# en GitHub: abrir un Pull Request hacia main
</pre>
<ul>
    <li>La rama <code>main</code> contiene la versión estable.</li>
    <li>Cada funcionalidad se desarrolla en su propia rama.</li>
    <li>Un <strong>Pull Request</strong> permite que el equipo revise el código antes de integrarlo.</li>
</ul>
<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #f0cccc; margin-bottom:12px;">
<i class="fa-solid fa-xmark" aria-hidden="true" style="color:#d2232a;"></i> <strong style="color:#d2232a;">Incorrecto</strong>
<pre class="codigo">
git commit -m "cambios"
</pre>
</div>
<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #c9e2d4; margin-bottom:12px;">
<i class="fa-solid fa-check" aria-hidden="true" style="color:#00734a;"></i> <strong style="color:#00734a;">Correcto</strong>
<pre class="codigo">
git commit -m "Agrega validación de teléfono al formulario de reservas"
</pre>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t004',
                    label: 'Envío de datos al servidor',
                    steps: [
                        {
                            title: 'fetch y async/await',
                            content: `<p><code>fetch</code> envía solicitudes HTTP desde JavaScript sin recargar la página. Como la respuesta tarda, se trabaja de forma <strong>asincrónica</strong> con <code>async</code> y <code>await</code>.</p>
<pre class="codigo">
async function cargarProductos() {
    try {
        const respuesta = await fetch("/api/productos");
        if (!respuesta.ok) {
            throw new Error("Error " + respuesta.status);
        }
        const productos = await respuesta.json();
        mostrarProductos(productos);
    } catch (error) {
        document.getElementById("mensaje").textContent = "No se pudieron cargar los productos.";
    }
}
</pre>`,
                            nextButton: 'Siguiente: Enviar un formulario con POST'
                        },
                        {
                            title: 'Enviar un formulario con POST',
                            content: `<pre class="codigo">
const formulario = document.getElementById("formReserva");

formulario.addEventListener("submit", async function (evento) {
    evento.preventDefault();

    const reserva = {
        nombre: document.getElementById("nombre").value,
        fecha: document.getElementById("fecha").value,
        personas: Number(document.getElementById("personas").value)
    };

    const respuesta = await fetch("/api/reservas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reserva)
    });

    const resultado = await respuesta.json();
    document.getElementById("mensaje").textContent = resultado.mensaje;
});
</pre>`,
                            nextButton: 'Siguiente: Recibir y validar en el servidor'
                        },
                        {
                            title: 'Recibir y validar en el servidor',
                            content: `<pre class="codigo">
app.post("/api/reservas", (req, res) =&gt; {
    const { nombre, fecha, personas } = req.body;

    if (!nombre || !fecha || personas &lt; 1 || personas &gt; 10) {
        return res.status(400).json({ mensaje: "Datos de la reserva no válidos" });
    }

    // ... guardar en la base de datos ...
    res.status(201).json({ mensaje: "Reserva registrada" });
});
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
El servidor responde con el código adecuado: <strong>201</strong> si creó el recurso y <strong>400</strong> si los datos son incorrectos. El frontend usa ese código para decidir qué mensaje mostrar.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t005',
                    label: 'Manejo de sesiones',
                    steps: [
                        {
                            title: '¿Qué es una sesión?',
                            content: `<p>HTTP no recuerda solicitudes anteriores (es un protocolo <strong>sin estado</strong>). Una <strong>sesión</strong> permite que el servidor reconozca al usuario después de iniciar sesión, sin pedirle la contraseña en cada página.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Mecanismo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Dónde se guarda</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Funcionamiento</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cookie de sesión</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El servidor guarda los datos; el navegador guarda un identificador en una cookie.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cada solicitud envía la cookie automáticamente.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Token (JWT)</strong></td><td style="padding:13px 12px;">El cliente guarda un token firmado.</td><td style="padding:13px 12px;">El cliente envía el token en el encabezado <code>Authorization</code>.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Flujo de inicio de sesión'
                        },
                        {
                            title: 'Flujo de inicio de sesión',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-right-to-bracket" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Login</b><br><small>Usuario y contraseña</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-user-check" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Verificación</b><br><small>El servidor compara el hash</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-id-card" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Sesión</b><br><small>Crea cookie o token</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-lock-open" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Acceso</b><br><small>Rutas protegidas</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-right-from-bracket" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Logout</b><br><small>Destruye la sesión</small></div></div>
</div>
</div>
<pre class="codigo">
// Ruta protegida con un middleware
function requiereSesion(req, res, next) {
    if (!req.session.usuario) {
        return res.status(401).json({ mensaje: "Debe iniciar sesión" });
    }
    next();
}

app.get("/api/mis-reservas", requiereSesion, (req, res) =&gt; {
    // solo usuarios autenticados llegan aquí
});
</pre>`,
                            nextButton: 'Siguiente: Buenas prácticas'
                        },
                        {
                            title: 'Buenas prácticas',
                            content: `<ul>
    <li>Configure las cookies con <code>httpOnly</code> (JavaScript no puede leerlas), <code>secure</code> (solo HTTPS) y <code>sameSite</code>.</li>
    <li>Defina un tiempo de expiración para la sesión.</li>
    <li>Destruya la sesión al cerrar sesión.</li>
    <li>Verifique en el servidor los permisos del usuario en cada ruta protegida; ocultar un botón en el frontend no es suficiente.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t006',
                    label: 'Seguridad en las aplicaciones',
                    steps: [
                        {
                            title: 'Riesgos más comunes',
                            content: `<p>El proyecto <strong>OWASP Top 10</strong> recopila los riesgos de seguridad más frecuentes en aplicaciones web.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Riesgo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Prevención</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Inyección</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Datos del usuario que se ejecutan como código o consulta.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Validar y usar consultas parametrizadas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>XSS</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Inyección de JavaScript en la página.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mostrar datos con <code>textContent</code>, escapar HTML.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Autenticación débil</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Contraseñas débiles o guardadas en texto plano.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Hash con bcrypt, reglas de contraseña.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Control de acceso roto</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Usuarios que acceden a recursos ajenos.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Verificar permisos en el servidor.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Exposición de datos</strong></td><td style="padding:13px 12px;">Información sensible sin cifrar.</td><td style="padding:13px 12px;">HTTPS y variables de entorno.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Ejemplo: evitar XSS'
                        },
                        {
                            title: 'Ejemplo: evitar XSS',
                            content: `<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #f0cccc; margin-bottom:12px;">
<i class="fa-solid fa-xmark" aria-hidden="true" style="color:#d2232a;"></i> <strong style="color:#d2232a;">Incorrecto</strong>
<pre class="codigo">
const comentario = document.getElementById("comentario").value;
lista.innerHTML += "&lt;li&gt;" + comentario + "&lt;/li&gt;";
// si escriben &lt;img src=x onerror=alert(1)&gt; se ejecuta el código
</pre>
</div>
<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #c9e2d4; margin-bottom:12px;">
<i class="fa-solid fa-check" aria-hidden="true" style="color:#00734a;"></i> <strong style="color:#00734a;">Correcto</strong>
<pre class="codigo">
const item = document.createElement("li");
item.textContent = comentario;   // se muestra como texto
lista.appendChild(item);
</pre>
</div>`,
                            nextButton: 'Siguiente: Contraseñas con hash'
                        },
                        {
                            title: 'Contraseñas con hash',
                            content: `<p>Las contraseñas nunca se guardan tal cual. Se almacena un <strong>hash</strong>: un resultado irreversible de aplicar una función matemática.</p>
<pre class="codigo">
const bcrypt = require("bcrypt");

// Al registrar
const hash = await bcrypt.hash(clave, 10);

// Al iniciar sesión
const coincide = await bcrypt.compare(claveIngresada, usuario.hash);
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Si la base de datos se filtra, los hash no permiten conocer las contraseñas originales.</p>`,
                            nextButton: 'Siguiente: Lista de revisión de seguridad'
                        },
                        {
                            title: 'Lista de revisión de seguridad',
                            content: `<ol>
    <li>¿El sitio se publica con HTTPS?</li>
    <li>¿Todos los datos se validan también en el servidor?</li>
    <li>¿Las contraseñas se guardan con hash?</li>
    <li>¿Las claves y cadenas de conexión están en variables de entorno?</li>
    <li>¿Los datos del usuario se muestran como texto y no como HTML?</li>
    <li>¿Las rutas protegidas verifican la sesión y los permisos?</li>
    <li>¿Los mensajes de error no revelan detalles internos del sistema?</li>
</ol>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_007',
            label: 'Aspectos del desarrollo',
            subtemas: [
                {
                    id: 'm007-t001',
                    label: 'Metodologías tradicionales del desarrollo del software',
                    steps: [
                        {
                            title: 'Modelo en cascada',
                            content: `<p>Las fases se ejecutan en secuencia: cada una inicia cuando la anterior termina y se aprueba.</p>
<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-clipboard-list" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Requerimientos</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-pen-ruler" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Diseño</b><br><small></small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-code" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Implementación</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-vial" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Pruebas</b><br><small></small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-rocket" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Despliegue</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-wrench" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Mantenimiento</b><br><small></small></div></div>
</div>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ventajas</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Desventajas</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Simple de entender y controlar.</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El cliente ve el producto hasta el final.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Documentación completa.</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Los cambios tardíos son muy costosos.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Adecuado con requerimientos estables.</strong></td><td style="padding:13px 12px;">Los defectos de requerimientos se descubren tarde.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Modelo en espiral'
                        },
                        {
                            title: 'Modelo en espiral',
                            content: `<p>Propuesto por Barry Boehm, organiza el desarrollo en vueltas. Cada vuelta tiene cuatro cuadrantes y se centra en el <strong>análisis de riesgos</strong>.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Cuadrante</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Actividad</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Determinar objetivos, alternativas y restricciones.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>2</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Evaluar alternativas e identificar y reducir riesgos (prototipos).</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>3</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Desarrollar y verificar el producto de esa vuelta.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>4</strong></td><td style="padding:13px 12px;">Planificar la siguiente vuelta.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
La espiral es adecuada para proyectos grandes, innovadores o de alto riesgo, donde conviene probar las ideas antes de comprometer todo el presupuesto.</p>`,
                            nextButton: 'Siguiente: Modelo de prototipado'
                        },
                        {
                            title: 'Modelo de prototipado',
                            content: `<p>Se construye rápidamente una versión preliminar para que el cliente la evalúe y así clarificar los requerimientos.</p>
<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-comments" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Comunicación</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-bolt" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Diseño rápido</b><br><small></small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-hammer" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Prototipo</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-user-check" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Evaluación del cliente</b><br><small></small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-arrows-rotate" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Refinamiento</b><br><small></small></div></div>
</div>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Destino</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Desechable</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se descarta después de aclarar los requerimientos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Evolutivo</strong></td><td style="padding:13px 12px;">Se mejora hasta convertirse en el producto final.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
Riesgo: el cliente puede creer que el prototipo ya es el producto terminado.</p>`,
                            nextButton: 'Siguiente: Modelo V'
                        },
                        {
                            title: 'Modelo V',
                            content: `<p>Variante de la cascada que asocia cada fase de desarrollo con un nivel de prueba. Las pruebas se <strong>planifican</strong> en paralelo al desarrollo.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Fase de desarrollo (lado izquierdo)</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Nivel de prueba (lado derecho)</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Requerimientos del usuario</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pruebas de aceptación</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Especificación del sistema</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pruebas de sistema</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Diseño de arquitectura</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pruebas de integración</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Diseño detallado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pruebas unitarias</td></tr>
<tr><td style="padding:13px 12px;"><strong>Codificación</strong></td><td style="padding:13px 12px;">(vértice de la V)</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
El modelo V es común en sistemas críticos (médicos, automotrices, aeronáuticos) donde se exige trazabilidad entre requerimientos y pruebas.</p>`,
                            nextButton: 'Siguiente: ¿Cuándo usar una metodología tradicional?'
                        },
                        {
                            title: '¿Cuándo usar una metodología tradicional?',
                            content: `<ul>
    <li>Los requerimientos son claros y estables.</li>
    <li>El contrato tiene alcance, precio y fecha fijos.</li>
    <li>Se exige documentación formal o certificación.</li>
    <li>El sistema es crítico y requiere trazabilidad completa.</li>
</ul>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
En el Proyecto Integrador, aunque se trabaje con un enfoque ágil, se conservan prácticas tradicionales útiles: especificación de requerimientos, modelado y planificación de pruebas.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t002',
                    label: 'Metodologías ágiles de desarrollo de software',
                    steps: [
                        {
                            title: 'Origen',
                            content: `<p>En 2001, diecisiete profesionales firmaron el <strong>Manifiesto Ágil</strong> como respuesta a procesos pesados que no se adaptaban a los cambios del negocio.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Valoramos más…</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">que…</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Individuos e interacciones</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">procesos y herramientas</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Software funcionando</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">documentación extensiva</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Colaboración con el cliente</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">negociación contractual</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Respuesta ante el cambio</strong></td><td style="padding:13px 12px;">seguir un plan</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
El manifiesto aclara: “aunque valoramos los elementos de la derecha, valoramos más los de la izquierda”. Ágil no significa sin documentación ni sin plan.</p>`,
                            nextButton: 'Siguiente: Scrum'
                        },
                        {
                            title: 'Scrum',
                            content: `<p>Marco de trabajo para desarrollar productos complejos en iteraciones llamadas <strong>sprints</strong> (de 1 a 4 semanas).</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Elemento</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Componentes</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Roles</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Dueño del producto (Product Owner), Scrum Master, equipo de desarrollo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Eventos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Planificación del sprint, Scrum diario, revisión del sprint, retrospectiva.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Artefactos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Product backlog, sprint backlog, incremento.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Compromisos</strong></td><td style="padding:13px 12px;">Objetivo del producto, objetivo del sprint, definición de terminado.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Kanban'
                        },
                        {
                            title: 'Kanban',
                            content: `<p>Método para visualizar y mejorar el flujo de trabajo. No usa iteraciones fijas.</p>
<ul>
    <li><strong>Visualizar</strong> el trabajo en un tablero: Por hacer, En progreso, En revisión, Terminado.</li>
    <li><strong>Limitar el trabajo en curso</strong> (WIP): por ejemplo, máximo 3 tarjetas en “En progreso”.</li>
    <li><strong>Gestionar el flujo</strong> midiendo el tiempo de ciclo.</li>
    <li><strong>Mejorar</strong> de forma colaborativa.</li>
</ul>`,
                            nextButton: 'Siguiente: Programación extrema'
                        },
                        {
                            title: 'Programación extrema (XP)',
                            content: `<p>Metodología centrada en prácticas técnicas de alta calidad.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Práctica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Programación en parejas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Dos personas trabajan en el mismo código.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Desarrollo guiado por pruebas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se escribe la prueba antes del código.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Integración continua</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se integra y prueba varias veces al día.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Refactorización</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se mejora el diseño sin cambiar el comportamiento.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Entregas pequeñas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Versiones frecuentes al cliente.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Estándares de código</strong></td><td style="padding:13px 12px;">Todo el equipo escribe de la misma forma.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Aplicar Scrum en el proyecto'
                        },
                        {
                            title: 'Aplicar Scrum en el proyecto',
                            content: `<ol>
    <li>Construir el product backlog con las historias de usuario.</li>
    <li>Planificar sprints de dos semanas con un objetivo claro.</li>
    <li>Actualizar el tablero cada día.</li>
    <li>Mostrar el incremento funcionando al final de cada sprint.</li>
    <li>Registrar en la bitácora las decisiones y los acuerdos de la retrospectiva.</li>
</ol>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t003',
                    label: 'Metodologías orientadas a procedimientos y datos',
                    steps: [
                        {
                            title: 'Análisis estructurado (orientado a procedimientos)',
                            content: `<p>Las metodologías estructuradas descomponen el sistema en <strong>funciones o procesos</strong> que transforman datos. Su herramienta principal es el <strong>diagrama de flujo de datos (DFD)</strong>.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Símbolo DFD</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Representa</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Círculo o rectángulo redondeado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Proceso que transforma datos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Rectángulo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Entidad externa (origen o destino de datos).</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Dos líneas paralelas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Almacén de datos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Flecha</strong></td><td style="padding:13px 12px;">Flujo de datos.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
[Encargado] --datos del estudiante--&gt; (1. Registrar estudiante) --&gt; ||Estudiantes||
(2. Generar reporte) &lt;-- ||Estudiantes||
(2. Generar reporte) --reporte de matrícula--&gt; [Director]
</pre>`,
                            nextButton: 'Siguiente: Metodologías orientadas a datos'
                        },
                        {
                            title: 'Metodologías orientadas a datos',
                            content: `<p>Centran el análisis en la <strong>información</strong> que maneja la organización. El modelo de datos se construye primero porque los datos son más estables que los procesos.</p>
<ul>
    <li>Modelo entidad-relación: entidades, atributos y relaciones.</li>
    <li>Normalización para evitar redundancia (en bases relacionales).</li>
    <li>Diccionario de datos con la definición de cada campo.</li>
</ul>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Enfoque</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Pregunta central</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Artefacto</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Procedimientos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Qué hace el sistema?</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">DFD, diagramas de estructura</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Datos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Qué información maneja?</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Modelo entidad-relación</td></tr>
<tr><td style="padding:13px 12px;"><strong>Objetos</strong></td><td style="padding:13px 12px;">¿Qué objetos colaboran?</td><td style="padding:13px 12px;">Diagramas UML</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t004',
                    label: 'Calidad de software',
                    steps: [
                        {
                            title: '¿Qué es calidad del software?',
                            content: `<p>La <strong>calidad del software</strong> es el grado en que un producto satisface los requerimientos explícitos e implícitos de los usuarios cuando se usa en condiciones especificadas (ISO/IEC 25010).</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Perspectiva</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Calidad significa…</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Usuario</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">que el software le sirve y es fácil de usar.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Fabricación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">que cumple la especificación.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Producto</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">que tiene buenas características internas (código mantenible).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Valor</strong></td><td style="padding:13px 12px;">que el beneficio justifica el costo.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Costo de la calidad'
                        },
                        {
                            title: 'Costo de la calidad',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo de costo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplos</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Prevención</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Capacitación, estándares, planificación de calidad.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Evaluación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Revisiones, pruebas, auditorías.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Falla interna</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Corregir defectos antes de entregar.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Falla externa</strong></td><td style="padding:13px 12px;">Soporte, devoluciones, pérdida de clientes y de reputación.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Un defecto detectado en producción puede costar decenas de veces más que si se detecta durante los requerimientos. Invertir en prevención reduce el costo total.</p>`,
                            nextButton: 'Siguiente: Modelo de calidad ISO/IEC 25010'
                        },
                        {
                            title: 'Modelo de calidad ISO/IEC 25010',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Característica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Pregunta</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Adecuación funcional</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Hace lo que debe hacer?</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Eficiencia de desempeño</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Responde rápido y usa bien los recursos?</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Compatibilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Convive e intercambia datos con otros sistemas?</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Capacidad de interacción (usabilidad)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Es fácil de aprender y usar?</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Fiabilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Funciona sin fallar y se recupera?</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Seguridad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Protege la información?</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Mantenibilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Es fácil de modificar?</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Flexibilidad (portabilidad)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Se adapta a otros entornos?</td></tr>
<tr><td style="padding:13px 12px;"><strong>Protección (safety)</strong></td><td style="padding:13px 12px;">¿Evita daños a personas o al entorno?</td></tr>
</tbody>
</table>
</div>`,
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
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t005',
                    label: 'Gestión de proyectos de software',
                    steps: [
                        {
                            title: 'Proyecto y gestión de proyectos',
                            content: `<p>Un <strong>proyecto</strong> es un esfuerzo temporal para crear un producto o servicio único. La <strong>gestión de proyectos</strong> aplica conocimientos, habilidades y herramientas para cumplir sus objetivos (PMI).</p>
<p>La triple restricción relaciona tres variables: si una cambia, al menos otra se ve afectada.</p>
<div style="display:flex; flex-wrap:wrap; gap:12px; margin:12px 0;">
<div style="flex:1 1 200px; padding:14px; border:1px solid #9cc8ff; border-top:4px solid #2b93d1; border-radius:10px; background:#ffffff;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-list" style="color:#164a98; margin-right:6px;" aria-hidden="true"></i><strong>Alcance</strong></p><p style="margin:0;">Qué se va a entregar.</p></div>
<div style="flex:1 1 200px; padding:14px; border:1px solid #9cc8ff; border-top:4px solid #2b93d1; border-radius:10px; background:#ffffff;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-clock" style="color:#164a98; margin-right:6px;" aria-hidden="true"></i><strong>Tiempo</strong></p><p style="margin:0;">Cuándo se va a entregar.</p></div>
<div style="flex:1 1 200px; padding:14px; border:1px solid #9cc8ff; border-top:4px solid #2b93d1; border-radius:10px; background:#ffffff;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-coins" style="color:#164a98; margin-right:6px;" aria-hidden="true"></i><strong>Costo</strong></p><p style="margin:0;">Con qué presupuesto.</p></div>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
La calidad está en el centro: sacrificarla para cumplir fechas genera deuda técnica y costos futuros.</p>`,
                            nextButton: 'Siguiente: Estructura de desglose del trabajo'
                        },
                        {
                            title: 'Estructura de desglose del trabajo (EDT)',
                            content: `<p>La <strong>EDT</strong> divide el alcance en entregables y paquetes de trabajo más pequeños y fáciles de estimar y asignar.</p>
<pre class="codigo">
1. Sistema de reservas
   1.1 Gestión del proyecto
   1.2 Requerimientos
       1.2.1 Entrevistas
       1.2.2 Especificación
   1.3 Desarrollo
       1.3.1 Módulo de usuarios
       1.3.2 Módulo de reservas
   1.4 Pruebas
   1.5 Despliegue y capacitación
</pre>`,
                            nextButton: 'Siguiente: Técnicas de estimación'
                        },
                        {
                            title: 'Técnicas de estimación',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Técnica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Juicio de expertos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Personas con experiencia estiman con base en proyectos similares.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Analogía</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se compara con un proyecto anterior parecido.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tres puntos (PERT)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">(Optimista + 4 × Más probable + Pesimista) ÷ 6</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Puntos de función</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mide el tamaño funcional según entradas, salidas, consultas y archivos.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>COCOMO II</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Modelo matemático: esfuerzo según tamaño y factores de costo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Puntos de historia</strong></td><td style="padding:13px 12px;">Estimación relativa en equipos ágiles (Planning Poker).</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Registro de riesgos'
                        },
                        {
                            title: 'Registro de riesgos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Riesgo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Prob.</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Impacto</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Exposición</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Respuesta</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Salida de un desarrollador clave</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">0,3</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">8</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">2,4</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Programación en parejas y documentación.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cambios frecuentes de alcance</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">0,6</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">6</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">3,6</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Control de cambios y backlog priorizado.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Retraso del proveedor de la API de pagos</strong></td><td style="padding:13px 12px;">0,4</td><td style="padding:13px 12px;">7</td><td style="padding:13px 12px;">2,8</td><td style="padding:13px 12px;">Simular la API y definir fecha límite.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t006',
                    label: 'Entornos de desarrollo y herramientas de gestión de proyectos',
                    steps: [
                        {
                            title: 'Entornos de desarrollo',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Herramienta</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso en el proyecto</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Visual Studio Code</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Editor con extensiones para HTML, CSS, JavaScript y Node.js.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Herramientas del navegador (F12)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Inspeccionar elementos, depurar JavaScript, ver solicitudes de red.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Node.js y npm</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ejecutar el servidor e instalar dependencias.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Git y GitHub</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Control de versiones y trabajo colaborativo.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Postman o Thunder Client</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Probar los endpoints del servidor.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>MongoDB Atlas y Compass</strong></td><td style="padding:13px 12px;">Base de datos en la nube y su administración visual.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Herramientas de gestión de proyectos'
                        },
                        {
                            title: 'Herramientas de gestión de proyectos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Herramienta</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Características</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>GitHub Projects</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Tablero integrado con issues y pull requests.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Jira</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Backlog, sprints, reportes de velocidad y burndown.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Trello</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Tablero Kanban simple.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Microsoft Teams o Slack</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Comunicación del equipo.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Figma</strong></td><td style="padding:13px 12px;">Prototipos y diseño de la interfaz.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Vincule cada commit con su tarea (por ejemplo, <code>git commit -m "Formulario de registro #12"</code>) para mantener la trazabilidad entre requerimientos y código.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        }
    ]
};
