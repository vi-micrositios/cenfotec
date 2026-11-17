const data = {
    // Pantalla de bienvenida
    welcome: {
        title: 'SOFT-15 <br> Diseño de Interacción Humano-Computador',
        image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-15/imgs/logo.png', // Cambiar por imagen real
        description: 'Aplicación de los principios del diseño centrado en el usuario para crear interfaces accesibles y usables: diseño visual y de contenido, accesibilidad, usabilidad, interfaces móviles y web, y experiencia de usuario.',
        instruction: 'Seleccione cada pestaña para acceder a la información'
    },
    // Temas principales y sus subtemas con pasos
    temas: [
        {
            id: 'modulo_001',
            label: 'Introducción a la IHC',
            subtemas: [
                {
                    id: 'm001-t001',
                    label: 'Conceptos básicos de diseño de interacción humano-computador',
                    steps: [
                        {
                            title: '¿Qué es la interacción humano-computador?',
                            content: `<p>La <strong>interacción humano-computador</strong> (IHC o HCI) estudia cómo las personas usan los sistemas computacionales y cómo diseñarlos para que sean útiles, usables, accesibles y agradables.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Concepto</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Definición</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Interfaz</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Punto de contacto entre la persona y el sistema: pantallas, voz, gestos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Interacción</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Diálogo de acciones y respuestas entre el usuario y el sistema.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Usabilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Grado en que un producto permite lograr objetivos con eficacia, eficiencia y satisfacción (ISO 9241-11).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Experiencia de usuario (UX)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Percepciones y respuestas de una persona antes, durante y después del uso.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Accesibilidad</strong></td><td style="padding:13px 12px;">Posibilidad de uso por personas con distintas capacidades.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Modelo de las acciones de Norman'
                        },
                        {
                            title: 'Modelo de las acciones de Norman',
                            content: `<p>Don Norman describe dos “golfos” que el diseño debe reducir:</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Golfo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Pregunta del usuario</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Cómo reducirlo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>De ejecución</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Cómo hago lo que quiero?</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Controles visibles y con significado claro.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>De evaluación</strong></td><td style="padding:13px 12px;">¿Funcionó lo que hice?</td><td style="padding:13px 12px;">Retroalimentación inmediata y comprensible.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Ejemplo: un botón “Guardar” visible reduce el golfo de ejecución; el mensaje “Cambios guardados” reduce el golfo de evaluación.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t002',
                    label: 'Historia y evolución del diseño de interacción humano-computador',
                    steps: [
                        {
                            title: 'Evolución de las interfaces',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Época</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Interfaz</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Hito</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1940–1960</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Tarjetas perforadas y paneles</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Interacción por lotes, solo especialistas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1960–1970</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Línea de comandos</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sketchpad (Sutherland), demostración de Engelbart con ratón e hipertexto.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1970–1980</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Interfaz gráfica (GUI)</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Xerox Alto y Star: ventanas, íconos, menús y puntero (WIMP).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1984–1995</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">GUI masiva</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Macintosh, Windows, la World Wide Web.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>2007–hoy</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Táctil y móvil</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Teléfonos inteligentes con gestos multitáctiles.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>2010–hoy</strong></td><td style="padding:13px 12px;">Voz, realidad mixta, IA conversacional</td><td style="padding:13px 12px;">Asistentes de voz, chatbots, realidad virtual y aumentada.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t003',
                    label: 'Principios de diseño centrado en el usuario',
                    steps: [
                        {
                            title: 'Diseño centrado en el usuario (DCU)',
                            content: `<p>El <strong>DCU</strong> pone a las personas usuarias en el centro de todo el proceso de diseño. La norma ISO 9241-210 lo describe como un proceso iterativo:</p>
<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-magnifying-glass" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Comprender el contexto</b><br><small>Usuarios, tareas, entorno</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-clipboard-list" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Especificar requisitos</b><br><small>Del usuario</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-pen-ruler" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Diseñar soluciones</b><br><small>Prototipos</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-user-check" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Evaluar</b><br><small>Con usuarios reales</small></div></div>
</div>
</div>`,
                            nextButton: 'Siguiente: Principios de diseño de Norman y heurísticas'
                        },
                        {
                            title: 'Principios de diseño de Norman y heurísticas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Principio</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Visibilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Las funciones importantes deben verse.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Botón de pago destacado.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Retroalimentación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cada acción produce una respuesta.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Indicador de carga.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Restricciones</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Limitar las acciones posibles para evitar errores.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Deshabilitar “Enviar” hasta completar el formulario.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Correspondencia (mapping)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Relación natural entre control y efecto.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Deslizar hacia arriba para subir el volumen.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Consistencia</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Elementos similares se comportan igual.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El ícono de papelera siempre elimina.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Affordance</strong></td><td style="padding:13px 12px;">La forma sugiere el uso.</td><td style="padding:13px 12px;">Un botón con relieve “invita” a presionarlo.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t004',
                    label: 'Métodos de investigación de usuario',
                    steps: [
                        {
                            title: 'Métodos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Método</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Aporta</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Entrevistas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cualitativo</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Motivaciones, problemas y contexto.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Encuestas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cuantitativo</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Datos de muchos usuarios.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Observación contextual</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cualitativo</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Lo que la gente hace realmente.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Grupos focales</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cualitativo</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Opiniones y debate entre usuarios.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Estudios de diario</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cualitativo</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Comportamiento durante días o semanas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ordenamiento de tarjetas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mixto</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cómo agrupan los usuarios la información.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Analítica</strong></td><td style="padding:13px 12px;">Cuantitativo</td><td style="padding:13px 12px;">Comportamiento real en el producto.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Qué dicen frente a qué hacen'
                        },
                        {
                            title: 'Qué dicen frente a qué hacen',
                            content: `<p>Los métodos se clasifican según si capturan lo que las personas <strong>dicen</strong> (actitudes) o lo que <strong>hacen</strong> (comportamiento). Lo ideal es combinar ambos.</p>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Para entrevistas: pida historias concretas (“Cuénteme la última vez que…”) en lugar de opiniones hipotéticas (“¿Usaría…?”).</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t005',
                    label: 'El papel del diseñador de interacción humano-computador',
                    steps: [
                        {
                            title: 'Roles en el diseño de interacción',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Rol</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Responsabilidad</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Investigador UX</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Planifica y realiza estudios con usuarios.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Diseñador de interacción</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Define flujos, comportamientos y retroalimentación.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Arquitecto de información</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Organiza y etiqueta el contenido.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Diseñador de interfaz (UI)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Diseño visual: tipografía, color, componentes.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Redactor UX</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Textos de la interfaz claros y útiles.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Especialista en accesibilidad</strong></td><td style="padding:13px 12px;">Verifica el cumplimiento de pautas.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
El ingeniero de software participa en todas estas decisiones: implementa la interfaz, evalúa la factibilidad técnica y garantiza el rendimiento y la accesibilidad del código.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_002',
            label: 'Diseño centrado en el usuario',
            subtemas: [
                {
                    id: 'm002-t001',
                    label: 'Análisis de usuarios y tareas',
                    steps: [
                        {
                            title: 'Análisis de usuarios',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Dimensión</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Preguntas</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Características</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Edad, nivel educativo, experiencia tecnológica, idioma, capacidades.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Objetivos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Qué quieren lograr?</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Contexto</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Dónde, cuándo y con qué dispositivo usan el sistema?</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Frecuencia</strong></td><td style="padding:13px 12px;">¿Uso diario, ocasional, único?</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Análisis jerárquico de tareas'
                        },
                        {
                            title: 'Análisis jerárquico de tareas',
                            content: `<pre class="codigo">
0. Matricular a un estudiante
   1. Iniciar sesión
   2. Buscar al estudiante
      2.1 Ingresar la cédula
      2.2 Seleccionar el resultado
   3. Seleccionar el período y el nivel
   4. Confirmar la matrícula
   5. Descargar el comprobante
Plan 0: hacer 1-2-3-4; si se necesita comprobante, hacer 5.
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
El análisis de tareas revela pasos innecesarios que se pueden eliminar o automatizar.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t002',
                    label: 'Repaso sobre requerimientos de usuarios',
                    steps: [
                        {
                            title: 'Requerimientos desde la perspectiva del usuario',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Funcional</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El encargado puede consultar la matrícula desde el teléfono.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>De usabilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un usuario nuevo completa la matrícula en menos de 5 minutos sin ayuda.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>De accesibilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Todas las funciones se pueden usar solo con el teclado.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>De experiencia</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El 80 % de los usuarios califica la experiencia como satisfactoria.</td></tr>
<tr><td style="padding:13px 12px;"><strong>De contexto</strong></td><td style="padding:13px 12px;">Funciona con conexiones móviles lentas.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
Como encargado con poco tiempo
quiero ver el estado de la matrícula de mi hijo desde el teléfono
para no tener que ir al centro educativo.
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Los requerimientos de usabilidad deben ser medibles, igual que los de rendimiento.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t003',
                    label: 'Personas y escenarios de usuario',
                    steps: [
                        {
                            title: 'Personas',
                            content: `<p>Una <strong>persona</strong> es un personaje ficticio basado en datos de investigación que representa a un grupo de usuarios.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Elemento</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo: “María, encargada”</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Datos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">38 años, Cartago, trabaja en comercio, dos hijos en primaria.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tecnología</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Teléfono Android de gama media; usa WhatsApp y banca en línea.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Objetivos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Hacer trámites escolares rápido y sin faltar al trabajo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Frustraciones</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Formularios largos, filas en el centro educativo, mensajes técnicos.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Cita</strong></td><td style="padding:13px 12px;">“Si no lo puedo hacer en el bus, no lo hago.”</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Escenarios'
                        },
                        {
                            title: 'Escenarios',
                            content: `<p>Un <strong>escenario</strong> narra cómo una persona usa el sistema para lograr un objetivo en un contexto concreto.</p>
<pre class="codigo">
María recibe un recordatorio de matrícula mientras viaja en bus.
Abre el enlace, inicia sesión con su cédula, ve a sus dos hijos con la
matrícula pendiente, confirma los datos de ambos en un solo paso y
guarda los comprobantes en su teléfono antes de llegar al trabajo.
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Los escenarios ayudan a evaluar los diseños: ¿puede María completar este escenario en el prototipo?</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t004',
                    label: 'Diseño de arquitectura de información',
                    steps: [
                        {
                            title: 'Arquitectura de información',
                            content: `<p>La <strong>arquitectura de información</strong> organiza, estructura y etiqueta el contenido para que los usuarios encuentren lo que buscan.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Sistema</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Organización</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cómo se agrupa el contenido: por tema, tarea, audiencia, orden alfabético.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Etiquetado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Nombres de menús y enlaces en el lenguaje del usuario.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Navegación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Menús, migas de pan, enlaces relacionados.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Búsqueda</strong></td><td style="padding:13px 12px;">Buscador con filtros y sugerencias.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Técnicas'
                        },
                        {
                            title: 'Técnicas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Técnica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ordenamiento de tarjetas abierto</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Los usuarios crean y nombran los grupos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ordenamiento de tarjetas cerrado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Los usuarios ubican tarjetas en grupos definidos.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Prueba de árbol (tree testing)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Verificar si encuentran un contenido en la jerarquía propuesta.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Mapa del sitio</strong></td><td style="padding:13px 12px;">Representar la jerarquía.</td></tr>
</tbody>
</table>
</div>
<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #f0cccc; margin-bottom:12px;">
<i class="fa-solid fa-xmark" aria-hidden="true" style="color:#d2232a;"></i> <strong style="color:#d2232a;">Etiquetas ambiguas</strong>
<pre class="codigo">
Menú: Servicios | Recursos | Información | Otros
</pre>
</div>
<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #c9e2d4; margin-bottom:12px;">
<i class="fa-solid fa-check" aria-hidden="true" style="color:#00734a;"></i> <strong style="color:#00734a;">Etiquetas claras</strong>
<pre class="codigo">
Menú: Matrícula | Becas | Calendario escolar | Contacto
</pre>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t005',
                    label: 'Diseño de interacción con el usuario',
                    steps: [
                        {
                            title: 'Flujos de usuario',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-house" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Inicio</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-right-to-bracket" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Iniciar sesión</b><br><small></small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-children" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Seleccionar hijo</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-pen" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Confirmar datos</b><br><small></small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-file-circle-check" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Comprobante</b><br><small></small></div></div>
</div>
</div>
<p>Un flujo de usuario muestra los pasos y decisiones para completar una tarea. Ayuda a detectar pasos innecesarios y caminos sin salida.</p>`,
                            nextButton: 'Siguiente: Patrones de interacción'
                        },
                        {
                            title: 'Patrones de interacción',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Patrón</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Asistente paso a paso</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Tareas largas divididas en etapas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Divulgación progresiva</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mostrar opciones avanzadas solo cuando se necesitan.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Deshacer</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Permitir revertir acciones en lugar de pedir confirmación siempre.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Valores predeterminados</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Proponer la opción más común.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Validación en línea</strong></td><td style="padding:13px 12px;">Indicar errores mientras se completa el formulario.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
La ley de Hick indica que el tiempo para decidir aumenta con el número de opciones: reduzca las opciones visibles a las necesarias.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_003',
            label: 'Diseño visual y de contenido',
            subtemas: [
                {
                    id: 'm003-t001',
                    label: 'Principios de diseño visual',
                    steps: [
                        {
                            title: 'Principios',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Principio</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Aplicación</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Jerarquía</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Tamaño, peso y color guían la lectura hacia lo más importante.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Contraste</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Diferenciar elementos y garantizar la legibilidad.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Alineación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Una cuadrícula ordena los elementos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Proximidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Lo relacionado se agrupa.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Repetición</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Estilos consistentes crean unidad.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Espacio en blanco</strong></td><td style="padding:13px 12px;">Da respiro y foco.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Leyes de la Gestalt'
                        },
                        {
                            title: 'Leyes de la Gestalt',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ley</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Proximidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Elementos cercanos se perciben como grupo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Similitud</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Elementos parecidos se perciben relacionados.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cierre</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">La mente completa figuras incompletas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Continuidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El ojo sigue líneas y curvas.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Figura y fondo</strong></td><td style="padding:13px 12px;">Se distingue un objeto de su entorno.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
En un formulario, colocar la etiqueta cerca de su campo (proximidad) evita confusiones sobre a qué campo corresponde.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t002',
                    label: 'Diseño de interfaces gráficas de usuario (GUI)',
                    steps: [
                        {
                            title: 'Componentes de una GUI',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Componente</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso correcto</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Botón</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Acción; texto con verbo (“Guardar matrícula”).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Campo de texto</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Entrada libre con etiqueta visible.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Casillas y botones de opción</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Selección múltiple o única.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Lista desplegable</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Muchas opciones mutuamente excluyentes.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pestañas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cambiar entre vistas relacionadas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Modal</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Interrupción breve que requiere atención.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Notificación (toast)</strong></td><td style="padding:13px 12px;">Mensaje temporal no bloqueante.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Sistemas de diseño'
                        },
                        {
                            title: 'Sistemas de diseño',
                            content: `<p>Un <strong>sistema de diseño</strong> reúne principios, componentes, tokens (colores, tipografía, espaciado) y guías de uso para mantener la consistencia entre productos.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Sistema</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Organización</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Material Design</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Google</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Human Interface Guidelines</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Apple</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Fluent</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Microsoft</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Carbon</strong></td><td style="padding:13px 12px;">IBM</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
:root {
    --color-primario: #164a98;
    --color-exito: #00734a;
    --color-error: #d2232a;
    --espacio-1: 4px;
    --espacio-2: 8px;
    --radio: 8px;
    --fuente-base: 'Poppins', sans-serif;
}
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t003',
                    label: 'Diseño de información visual',
                    steps: [
                        {
                            title: 'Visualizar datos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Objetivo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Gráfico recomendado</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Comparar categorías</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Barras.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Mostrar una tendencia en el tiempo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Líneas.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Mostrar partes de un todo (pocas partes)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Barras apiladas o anillo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Relación entre dos variables</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Dispersión.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Distribución</strong></td><td style="padding:13px 12px;">Histograma.</td></tr>
</tbody>
</table>
</div>
<ul>
    <li>Elimine elementos decorativos que no aportan (bordes, sombras, 3D).</li>
    <li>Etiquete directamente las series en lugar de usar leyendas lejanas.</li>
    <li>No dependa solo del color: use también formas o etiquetas.</li>
    <li>Empiece el eje de las barras en cero.</li>
</ul>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Edward Tufte propone maximizar la relación datos-tinta: la mayor parte de lo que se dibuja debe representar datos.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t004',
                    label: 'Diseño de contenido multimedia',
                    steps: [
                        {
                            title: 'Multimedia en la interfaz',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Medio</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Buenas prácticas</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Imágenes</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Texto alternativo, formatos ligeros (WebP), proporción correcta.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Video</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Subtítulos, controles visibles, sin reproducción automática con sonido.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Audio</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Transcripción, control de volumen.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Animación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Breve y con propósito; respetar <code>prefers-reduced-motion</code>.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Íconos</strong></td><td style="padding:13px 12px;">Acompañados de texto cuando el significado no es universal.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Los principios de Mayer para el aprendizaje multimedia recomiendan combinar imágenes con narración y evitar texto redundante que compita por la atención.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t005',
                    label: 'Diseño de contenido adaptativo',
                    steps: [
                        {
                            title: 'Adaptable y adaptativo',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;"></th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Diseño adaptable (responsive)</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Diseño adaptativo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Funcionamiento</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un solo diseño fluido que se reorganiza.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Varios diseños fijos según el dispositivo o el usuario.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Técnicas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Rejillas fluidas y consultas de medios.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Detección del dispositivo o del contexto.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Ejemplo</strong></td><td style="padding:13px 12px;">Tarjetas que pasan de 3 a 1 columna.</td><td style="padding:13px 12px;">Versión móvil con menos contenido.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Adaptación al usuario'
                        },
                        {
                            title: 'Adaptación al usuario',
                            content: `<ul>
    <li>Respetar preferencias del sistema: modo oscuro (<code>prefers-color-scheme</code>), tamaño de letra, movimiento reducido.</li>
    <li>Personalizar según el rol: un director ve reportes; un encargado ve a sus hijos.</li>
    <li>Adaptar al idioma y a la región.</li>
</ul>
<pre class="codigo">
@media (prefers-color-scheme: dark) {
    :root { --fondo: #121212; --texto: #e8e8e8; }
}
</pre>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_004',
            label: 'Accesibilidad',
            subtemas: [
                {
                    id: 'm004-t001',
                    label: 'Introducción a la accesibilidad',
                    steps: [
                        {
                            title: '¿Qué es la accesibilidad?',
                            content: `<p>La <strong>accesibilidad digital</strong> garantiza que las personas con discapacidad puedan percibir, entender, navegar e interactuar con los productos digitales. Beneficia también a personas mayores, con limitaciones temporales o en contextos difíciles (sol intenso, ruido).</p>
<p>En Costa Rica, la Ley 7600 de Igualdad de Oportunidades para las Personas con Discapacidad y la Ley 8661 (Convención de la ONU) respaldan el acceso a la información.</p>`,
                            nextButton: 'Siguiente: Pautas WCAG 2.2'
                        },
                        {
                            title: 'Pautas WCAG 2.2',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Principio</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Perceptible</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">La información se puede percibir con algún sentido.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Texto alternativo, subtítulos, contraste.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Operable</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se puede usar con distintos dispositivos.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Todo funciona con teclado.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Comprensible</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El contenido y la operación son claros.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mensajes de error explicativos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Robusto</strong></td><td style="padding:13px 12px;">Compatible con tecnologías de apoyo.</td><td style="padding:13px 12px;">HTML semántico y ARIA correcto.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Niveles de conformidad: A (mínimo), AA (recomendado y exigido por la mayoría de normativas) y AAA (máximo).</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t002',
                    label: 'Diseño de interfaces para usuarios con discapacidad visual',
                    steps: [
                        {
                            title: 'Ceguera y lectores de pantalla',
                            content: `<ul>
    <li>Texto alternativo descriptivo en imágenes informativas; <code>alt=""</code> en las decorativas.</li>
    <li>Estructura con encabezados jerárquicos y puntos de referencia (<code>header</code>, <code>nav</code>, <code>main</code>).</li>
    <li>Etiquetas asociadas a cada campo.</li>
    <li>Enlaces con texto que tenga sentido fuera de contexto (no “clic aquí”).</li>
    <li>Anunciar cambios dinámicos con <code>aria-live</code>.</li>
</ul>
<pre class="codigo">
&lt;img src="grafico-matricula.png" alt="Matrícula 2026: 1 250 estudiantes, 8 % más que en 2025"&gt;
&lt;div aria-live="polite" id="estado"&gt;Matrícula guardada correctamente&lt;/div&gt;
</pre>`,
                            nextButton: 'Siguiente: Baja visión y daltonismo'
                        },
                        {
                            title: 'Baja visión y daltonismo',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Requisito WCAG</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Criterio</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Contraste de texto (1.4.3, AA)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Al menos 4,5:1 (3:1 para texto grande).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cambio de tamaño (1.4.4)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ampliable al 200 % sin perder contenido.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Uso del color (1.4.1)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El color no es el único medio de transmitir información.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Reajuste (1.4.10)</strong></td><td style="padding:13px 12px;">Sin desplazamiento horizontal a 320 px de ancho.</td></tr>
</tbody>
</table>
</div>
<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #f0cccc; margin-bottom:12px;">
<i class="fa-solid fa-xmark" aria-hidden="true" style="color:#d2232a;"></i> <strong style="color:#d2232a;">Solo color</strong>
<pre class="codigo">
&lt;span style="color:red"&gt;*&lt;/span&gt; Campos obligatorios en rojo
</pre>
</div>
<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #c9e2d4; margin-bottom:12px;">
<i class="fa-solid fa-check" aria-hidden="true" style="color:#00734a;"></i> <strong style="color:#00734a;">Color + símbolo + texto para lectores</strong>
<pre class="codigo">
&lt;label&gt;Correo &lt;span aria-hidden="true"&gt;*&lt;/span&gt;&lt;span class="sr-only"&gt;(obligatorio)&lt;/span&gt;&lt;/label&gt;
</pre>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t003',
                    label: 'Diseño de interfaces para usuarios con discapacidad auditiva',
                    steps: [
                        {
                            title: 'Recursos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Recurso</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Requisito</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Subtítulos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Para todo video con audio (1.2.2, nivel A).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Transcripciones</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Para audio y podcasts.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Lengua de señas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Video con intérprete de LESCO para contenido relevante (nivel AAA).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Alertas visuales</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Las notificaciones sonoras tienen equivalente visual o de vibración.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Canales de contacto alternativos</strong></td><td style="padding:13px 12px;">Chat o correo además del teléfono.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Los subtítulos también ayudan a quienes ven videos sin sonido, en lugares ruidosos o en otro idioma.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t004',
                    label: 'Diseño de interfaces para usuarios con discapacidad motora',
                    steps: [
                        {
                            title: 'Operabilidad',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Requisito</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Implementación</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Acceso por teclado (2.1.1)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Todo se puede usar con Tab, Enter, Espacio y flechas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Foco visible (2.4.7)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Indicador de foco claro.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tamaño del objetivo (2.5.8, AA)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Al menos 24 × 24 px; se recomiendan 44 × 44 px en táctil.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tiempo suficiente (2.2.1)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Permitir extender los límites de tiempo.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Gestos alternativos (2.5.1)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Toda acción con gesto complejo tiene alternativa de un toque.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Saltar bloques (2.4.1)</strong></td><td style="padding:13px 12px;">Enlace “Saltar al contenido”.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
&lt;a href="#principal" class="saltar"&gt;Saltar al contenido principal&lt;/a&gt;
&lt;style&gt;
    :focus-visible { outline: 3px solid #fff200; outline-offset: 2px; }
&lt;/style&gt;
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Use elementos nativos (<code>button</code>, <code>a</code>, <code>input</code>): ya son accesibles por teclado. Un <code>div</code> con clic no lo es.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t005',
                    label: 'Evaluación de la accesibilidad de las interfaces de usuario',
                    steps: [
                        {
                            title: 'Evaluación automática y manual',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Método</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Herramientas</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Detecta</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Automática</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">axe DevTools, WAVE, Lighthouse</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Contraste, alt ausente, etiquetas, ARIA inválido (30–40 % de los problemas).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Manual con teclado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Teclado</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Orden del foco, trampas de foco, controles inaccesibles.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Con lector de pantalla</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">NVDA, JAWS, VoiceOver, TalkBack</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Comprensión real del contenido.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Con usuarios con discapacidad</strong></td><td style="padding:13px 12px;">—</td><td style="padding:13px 12px;">Barreras reales de uso.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Lista de verificación rápida'
                        },
                        {
                            title: 'Lista de verificación rápida',
                            content: `<ol>
    <li>¿Todas las imágenes informativas tienen texto alternativo?</li>
    <li>¿Se puede completar cada tarea solo con teclado?</li>
    <li>¿El foco es siempre visible?</li>
    <li>¿El contraste cumple 4,5:1?</li>
    <li>¿Cada campo tiene etiqueta?</li>
    <li>¿Los errores se explican en texto?</li>
    <li>¿Los videos tienen subtítulos?</li>
    <li>¿La página funciona ampliada al 200 %?</li>
    <li>¿Los encabezados siguen un orden lógico?</li>
</ol>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_005',
            label: 'Usabilidad',
            subtemas: [
                {
                    id: 'm005-t001',
                    label: 'Introducción a la evaluación de la usabilidad',
                    steps: [
                        {
                            title: 'Componentes de la usabilidad',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Componente (Nielsen)</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Pregunta</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Facilidad de aprendizaje</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Qué tan fácil es realizar tareas básicas la primera vez?</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Eficiencia</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Qué tan rápido se realizan las tareas una vez aprendidas?</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Memorabilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Se recuerda cómo usarlo después de un tiempo?</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Errores</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Cuántos errores se cometen y qué tan graves son?</td></tr>
<tr><td style="padding:13px 12px;"><strong>Satisfacción</strong></td><td style="padding:13px 12px;">¿Qué tan agradable es usarlo?</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: ¿Cuándo evaluar?'
                        },
                        {
                            title: '¿Cuándo evaluar?',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Evaluación</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Momento</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Propósito</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Formativa</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Durante el diseño.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Encontrar problemas para mejorar.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Sumativa</strong></td><td style="padding:13px 12px;">Al final o en producción.</td><td style="padding:13px 12px;">Medir y comparar contra metas.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Según Nielsen, probar con cinco usuarios descubre la mayoría de los problemas de usabilidad de un diseño; es mejor hacer varias rondas pequeñas que una grande.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t002',
                    label: 'Métodos de evaluación de la usabilidad',
                    steps: [
                        {
                            title: 'Métodos de inspección (sin usuarios)',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Heurística de Nielsen</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo de violación</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1. Visibilidad del estado del sistema</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">No hay indicador mientras se guarda.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>2. Relación con el mundo real</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mensajes con códigos técnicos.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>3. Control y libertad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">No se puede cancelar un proceso.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>4. Consistencia y estándares</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Botones con distinto significado en cada pantalla.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>5. Prevención de errores</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Permite elegir fechas pasadas para una cita.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>6. Reconocer en lugar de recordar</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Obligar a recordar un código de otra pantalla.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>7. Flexibilidad y eficiencia</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sin atajos para usuarios frecuentes.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>8. Diseño estético y minimalista</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pantallas saturadas de información.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>9. Ayudar a reconocer y recuperarse de errores</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">“Error 500” sin explicación.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>10. Ayuda y documentación</strong></td><td style="padding:13px 12px;">No hay ayuda contextual.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Métodos con usuarios'
                        },
                        {
                            title: 'Métodos con usuarios',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Método</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Prueba de usabilidad moderada</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un facilitador observa a un usuario realizar tareas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Prueba no moderada remota</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El usuario realiza tareas solo, con grabación.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pensamiento en voz alta</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El usuario verbaliza lo que piensa mientras usa el sistema.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pruebas A/B</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Comparar dos versiones con usuarios reales.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Seguimiento ocular</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Registrar hacia dónde mira el usuario.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Recorrido cognitivo</strong></td><td style="padding:13px 12px;">Expertos simulan el razonamiento de un usuario nuevo.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t003',
                    label: 'Planificación y ejecución de pruebas de usabilidad',
                    steps: [
                        {
                            title: 'Plan de prueba',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Elemento</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Objetivo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Verificar si los encargados completan la matrícula sin ayuda.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Participantes</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">5 encargados que no han usado el sistema.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tareas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">1. Iniciar sesión. 2. Matricular a un hijo. 3. Descargar el comprobante.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Métricas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Tasa de éxito, tiempo por tarea, errores, SUS.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ambiente</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Prototipo en teléfono, sesión remota grabada.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Roles</strong></td><td style="padding:13px 12px;">Facilitador, observador, tomador de notas.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Ejecución'
                        },
                        {
                            title: 'Ejecución',
                            content: `<ol>
    <li>Bienvenida y consentimiento informado.</li>
    <li>Preguntas previas sobre el perfil.</li>
    <li>Tareas con escenarios realistas, una a la vez.</li>
    <li>Pedir que piense en voz alta, sin ayudar ni guiar.</li>
    <li>Cuestionario posterior (SUS).</li>
    <li>Agradecimiento.</li>
</ol>
<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #f0cccc; margin-bottom:12px;">
<i class="fa-solid fa-xmark" aria-hidden="true" style="color:#d2232a;"></i> <strong style="color:#d2232a;">Tarea que da la respuesta</strong>
<pre class="codigo">
Haga clic en el botón “Matricular”.
</pre>
</div>
<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #c9e2d4; margin-bottom:12px;">
<i class="fa-solid fa-check" aria-hidden="true" style="color:#00734a;"></i> <strong style="color:#00734a;">Tarea con escenario</strong>
<pre class="codigo">
Su hija Sofía entra a quinto grado el próximo año. Realice su matrícula.
</pre>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t004',
                    label: 'Evaluación de la usabilidad',
                    steps: [
                        {
                            title: 'Métricas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Métrica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Cálculo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tasa de éxito</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Tareas completadas ÷ tareas intentadas × 100.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tiempo en la tarea</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Tiempo promedio de los participantes exitosos.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tasa de errores</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Errores por tarea.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Eficiencia relativa</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Comparación con el tiempo de un experto.</td></tr>
<tr><td style="padding:13px 12px;"><strong>SUS (System Usability Scale)</strong></td><td style="padding:13px 12px;">Cuestionario de 10 preguntas; puntaje de 0 a 100 (68 es el promedio).</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Cálculo del SUS'
                        },
                        {
                            title: 'Cálculo del SUS',
                            content: `<ul>
    <li>Preguntas impares (positivas): puntaje − 1.</li>
    <li>Preguntas pares (negativas): 5 − puntaje.</li>
    <li>Sumar y multiplicar por 2,5.</li>
</ul>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Un puntaje SUS mayor a 80 se considera excelente; menor a 50, inaceptable.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t005',
                    label: 'Análisis y presentación de resultados de la evaluación de usabilidad',
                    steps: [
                        {
                            title: 'Análisis',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Problema</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tareas afectadas</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Usuarios</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Severidad</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Recomendación</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>No encuentran el botón de comprobante</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">T3</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">4 de 5</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Alta</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mostrar el comprobante al confirmar la matrícula.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Confunden “período” con “nivel”</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">T2</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">3 de 5</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Media</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cambiar a “Año lectivo” y “Grado”.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Texto pequeño en el teléfono</strong></td><td style="padding:13px 12px;">Todas</td><td style="padding:13px 12px;">2 de 5</td><td style="padding:13px 12px;">Baja</td><td style="padding:13px 12px;">Aumentar a 16 px.</td></tr>
</tbody>
</table>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Severidad (Nielsen)</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>0</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">No es un problema</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cosmético</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>2</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Menor</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>3</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mayor</td></tr>
<tr><td style="padding:13px 12px;"><strong>4</strong></td><td style="padding:13px 12px;">Catastrófico</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Informe'
                        },
                        {
                            title: 'Informe',
                            content: `<ol>
    <li>Resumen ejecutivo con los hallazgos principales.</li>
    <li>Metodología y participantes.</li>
    <li>Resultados por tarea y métricas.</li>
    <li>Problemas priorizados con evidencia (citas, videos).</li>
    <li>Recomendaciones.</li>
    <li>Próximos pasos.</li>
</ol>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Incluya fragmentos de video: ver a un usuario real fallar convence más que cualquier tabla.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_006',
            label: 'Interfaces móviles y web',
            subtemas: [
                {
                    id: 'm006-t001',
                    label: 'Introducción al diseño de interfaces para dispositivos móviles y web',
                    steps: [
                        {
                            title: 'Diferencias de contexto',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Factor</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Móvil</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Escritorio</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pantalla</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pequeña, vertical.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Grande, horizontal.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Entrada</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Táctil, voz, sensores.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ratón y teclado.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Contexto</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">En movimiento, interrupciones, una mano.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sentado, concentrado.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Conectividad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Variable.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Estable.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Sesiones</strong></td><td style="padding:13px 12px;">Cortas y frecuentes.</td><td style="padding:13px 12px;">Largas.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t002',
                    label: 'Principios de diseño de interfaz de usuario para dispositivos móviles y web',
                    steps: [
                        {
                            title: 'Principios',
                            content: `<ul>
    <li>Priorizar el contenido y las tareas principales.</li>
    <li>Objetivos táctiles de al menos 44 × 44 px (iOS) o 48 × 48 dp (Android).</li>
    <li>Navegación principal al alcance del pulgar (zona inferior).</li>
    <li>Texto legible: mínimo 16 px.</li>
    <li>Formularios cortos con teclados adecuados (<code>type="tel"</code>, <code>inputmode="numeric"</code>).</li>
    <li>Retroalimentación inmediata ante cada toque.</li>
</ul>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
La ley de Fitts indica que el tiempo para alcanzar un objetivo depende de su tamaño y distancia: los botones importantes deben ser grandes y cercanos.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t003',
                    label: 'Diseño de interfaces para diferentes plataformas móviles y web',
                    steps: [
                        {
                            title: 'Guías por plataforma',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Aspecto</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">iOS (Human Interface Guidelines)</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Android (Material Design 3)</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Web</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Navegación principal</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Barra de pestañas inferior.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Barra de navegación inferior o cajón.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Menú superior o lateral.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Regresar</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Botón superior izquierdo y gesto.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Gesto o botón del sistema.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Botón del navegador.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Acción principal</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Botón en la barra superior.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Botón de acción flotante (FAB).</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Botón destacado.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Tipografía</strong></td><td style="padding:13px 12px;">San Francisco.</td><td style="padding:13px 12px;">Roboto.</td><td style="padding:13px 12px;">Libre.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Respete las convenciones de cada plataforma: los usuarios esperan que las aplicaciones se comporten como las demás de su sistema.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t004',
                    label: 'Diseño de interacción y navegación para dispositivos móviles y web',
                    steps: [
                        {
                            title: 'Patrones de navegación',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Patrón</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ventaja</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Desventaja</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Barra de pestañas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Visible y accesible con el pulgar.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Máximo 5 opciones.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Menú hamburguesa</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ahorra espacio.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Oculta las opciones; menor descubrimiento.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Navegación jerárquica</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Natural para contenido profundo.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Muchos niveles cansan.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Gestos</strong></td><td style="padding:13px 12px;">Rápidos.</td><td style="padding:13px 12px;">Poco descubribles; requieren alternativa visible.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Gestos frecuentes'
                        },
                        {
                            title: 'Gestos frecuentes',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Gesto</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tocar</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Seleccionar o activar.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Deslizar</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Desplazar, cambiar de pantalla, acciones en listas.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pellizcar</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Acercar o alejar.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Mantener presionado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Menú contextual.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Arrastrar hacia abajo</strong></td><td style="padding:13px 12px;">Actualizar.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t005',
                    label: 'Diseño de interfaces de usuario sensibles al contexto para dispositivos móviles y web',
                    steps: [
                        {
                            title: 'Sensibilidad al contexto',
                            content: `<p>Una interfaz <strong>sensible al contexto</strong> adapta su comportamiento a la situación del usuario: ubicación, hora, actividad, entorno o dispositivo.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Contexto</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Adaptación</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ubicación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mostrar el centro educativo más cercano.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Hora</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Modo oscuro de noche.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Movimiento</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Simplificar la interfaz al conducir.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Luz ambiental</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ajustar el brillo y el contraste.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Conectividad</strong></td><td style="padding:13px 12px;">Modo sin conexión y menor calidad de imágenes.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
Toda adaptación basada en datos personales requiere permiso explícito y debe poder desactivarse.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_007',
            label: 'Experiencia de usuario',
            subtemas: [
                {
                    id: 'm007-t001',
                    label: 'Introducción a la experiencia de usuario',
                    steps: [
                        {
                            title: '¿Qué es la UX?',
                            content: `<p>La <strong>experiencia de usuario</strong> abarca todas las percepciones y respuestas de una persona que resultan del uso, o del uso anticipado, de un producto (ISO 9241-210). Va más allá de la usabilidad: incluye emociones, confianza y valor percibido.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Faceta (panal de Morville)</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Pregunta</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Útil</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Resuelve una necesidad?</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Usable</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Es fácil de usar?</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Deseable</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Genera emociones positivas?</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Encontrable</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Se encuentra lo que se busca?</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Accesible</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Lo pueden usar todos?</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Creíble</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Inspira confianza?</td></tr>
<tr><td style="padding:13px 12px;"><strong>Valioso</strong></td><td style="padding:13px 12px;">¿Aporta valor al usuario y al negocio?</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t002',
                    label: 'Diseño de experiencias de usuario efectivas',
                    steps: [
                        {
                            title: 'Proceso de doble diamante',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-magnifying-glass" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Descubrir</b><br><small>Investigar el problema</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-bullseye" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Definir</b><br><small>Enfocar el problema correcto</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-lightbulb" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Desarrollar</b><br><small>Idear y prototipar</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-rocket" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Entregar</b><br><small>Probar e implementar</small></div></div>
</div>
</div>`,
                            nextButton: 'Siguiente: Mapa del recorrido del usuario'
                        },
                        {
                            title: 'Mapa del recorrido del usuario',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Etapa</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Acción</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Emoción</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Oportunidad</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Enterarse</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Recibe un aviso de matrícula.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Preocupación</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mensaje claro con fecha límite.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ingresar</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Inicia sesión.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Frustración si olvida la clave</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Recuperación simple.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Completar</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Confirma datos.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Neutral</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Datos precargados.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Finalizar</strong></td><td style="padding:13px 12px;">Recibe el comprobante.</td><td style="padding:13px 12px;">Alivio</td><td style="padding:13px 12px;">Enviar el comprobante por correo.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t003',
                    label: 'Diseño de interfaces de usuario emocionales',
                    steps: [
                        {
                            title: 'Diseño emocional',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Nivel (Norman)</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Se relaciona con</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Visceral</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Primera impresión y apariencia.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Estética cuidada y coherente.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Conductual</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Placer y eficacia del uso.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Tareas fluidas sin errores.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Reflexivo</strong></td><td style="padding:13px 12px;">Significado e identidad.</td><td style="padding:13px 12px;">Sentirse orgulloso de usar el producto.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Recursos del diseño emocional'
                        },
                        {
                            title: 'Recursos del diseño emocional',
                            content: `<ul>
    <li>Microinteracciones: animaciones breves que confirman acciones.</li>
    <li>Tono de voz cercano y respetuoso en los textos.</li>
    <li>Ilustraciones en estados vacíos y de error.</li>
    <li>Celebrar logros (por ejemplo, completar un perfil).</li>
</ul>
<p class="nota">
<i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
Evite los patrones oscuros (dark patterns): diseños que manipulan al usuario, como suscripciones difíciles de cancelar o casillas premarcadas.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t004',
                    label: 'Evaluación de la experiencia de usuario',
                    steps: [
                        {
                            title: 'Instrumentos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Instrumento</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Mide</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>UEQ (User Experience Questionnaire)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Atractivo, claridad, eficiencia, confiabilidad, estimulación, novedad.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>AttrakDiff</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Calidad pragmática y hedónica.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>NPS (Net Promoter Score)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Probabilidad de recomendar.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>CSAT</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Satisfacción con una interacción.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>CES (Customer Effort Score)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Esfuerzo para lograr un objetivo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Analítica (HEART de Google)</strong></td><td style="padding:13px 12px;">Felicidad, compromiso, adopción, retención, éxito en tareas.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t005',
                    label: 'Diseño de la interacción persona-máquina',
                    steps: [
                        {
                            title: 'Nuevas formas de interacción',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Modalidad</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Consideraciones de diseño</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Interfaces de voz</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Respuestas breves, confirmar acciones, manejar errores de reconocimiento.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Interfaces conversacionales (chatbots, IA)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Transparencia de que es una máquina, opciones sugeridas, escalar a una persona.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Realidad aumentada y virtual</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Comodidad, mareo, interacción espacial.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Gestos y sensores</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Descubribilidad y alternativas.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Vestibles</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Información mínima y glanceable.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Interfaces cerebro-computador</strong></td><td style="padding:13px 12px;">Ética, privacidad y accesibilidad.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Las pautas de Microsoft para la interacción humano-IA recomiendan dejar claro qué puede hacer el sistema, qué tan bien lo hace y cómo corregirlo cuando se equivoca.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        }
    ]
};
