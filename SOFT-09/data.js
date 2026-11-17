const data = {
    // Pantalla de bienvenida
    welcome: {
        title: 'SOFT-09 <br> Introducción a la Ingeniería del Software',
        image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-09/imgs/logo.png', // Cambiar por imagen real
        description: 'Fundamentos, metodologías y etapas del desarrollo de software, con énfasis en la ingeniería de requerimientos: educción, análisis, especificación, gestión y modelado de requerimientos en proyectos tradicionales y ágiles.',
        instruction: 'Seleccione cada pestaña para acceder a la información'
    },
    // Temas principales y sus subtemas con pasos
    temas: [
        {
            id: 'modulo_001',
            label: 'Fundamentos',
            subtemas: [
                {
                    id: 'm001-historia',
                    label: 'Historia y evolución',
                    steps: [
                        {
                            title: '¿Qué es la ingeniería del software?',
                            content: `<p>La <strong>ingeniería del software</strong> es la disciplina que aplica un enfoque <strong>sistemático, disciplinado y cuantificable</strong> al desarrollo, la operación y el mantenimiento del software (definición del estándar IEEE 610.12 y del SWEBOK).</p>
<p>No se limita a programar: incluye entender el problema, planificar, diseñar, construir, probar, poner en producción y mantener el software durante toda su vida útil, controlando costo, tiempo y calidad.</p>
<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(210px, 1fr)); gap:12px; margin:14px 0;">
<div style="border:1px solid #d2d2d2; border-top:4px solid #164a98; border-radius:10px; padding:12px 14px; background:#fff;"><p style="margin:0 0 6px 0; color:#164a98;"><i class="fa-solid fa-list-check" aria-hidden="true"></i> <strong>Sistemático</strong></p><p style="margin:0;">Se sigue un proceso definido, con etapas y entregables conocidos.</p></div>
<div style="border:1px solid #d2d2d2; border-top:4px solid #164a98; border-radius:10px; padding:12px 14px; background:#fff;"><p style="margin:0 0 6px 0; color:#164a98;"><i class="fa-solid fa-scale-balanced" aria-hidden="true"></i> <strong>Disciplinado</strong></p><p style="margin:0;">Se aplican estándares, buenas prácticas y revisiones.</p></div>
<div style="border:1px solid #d2d2d2; border-top:4px solid #164a98; border-radius:10px; padding:12px 14px; background:#fff;"><p style="margin:0 0 6px 0; color:#164a98;"><i class="fa-solid fa-chart-line" aria-hidden="true"></i> <strong>Cuantificable</strong></p><p style="margin:0;">Se mide: esfuerzo, defectos, avance, tiempos de respuesta.</p></div>
</div>
<div style="background:#eef5ff; border-left:5px solid #00928d; border-radius:8px; padding:12px 16px; margin:16px 0;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-book-open" style="color:#00928d;" aria-hidden="true"></i> <strong style="color:#00734a;">Caso BiblioTEC</strong></p><p>A lo largo del micrositio se usa un mismo caso: la biblioteca de una universidad necesita <strong>BiblioTEC</strong>, un sistema para registrar el préstamo y la devolución de libros, reservar ejemplares, calcular multas por atraso y consultar el catálogo desde el celular. Cada tema muestra cómo se aplica la ingeniería del software a este sistema.</p></div>
                            `,
                            nextButton: 'Siguiente: La crisis del software'
                        },
                        {
                            title: 'La crisis del software',
                            content: `<p>En las décadas de 1960 y 1970 el hardware avanzó muy rápido y los programas se volvieron grandes y complejos. Los proyectos se entregaban tarde, costaban más de lo estimado, tenían muchos errores y eran difíciles de modificar. A esta situación se le llamó <strong>crisis del software</strong>.</p>
<p>En 1968 la OTAN organizó en Garmisch (Alemania) una conferencia titulada <em>Software Engineering</em>. El nombre se eligió de forma intencional: el software debía construirse con la misma rigurosidad que otras ingenierías. Margaret Hamilton, líder del software de vuelo del programa Apolo, también promovió el término para dar al trabajo de software el reconocimiento de una ingeniería.</p>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Muchos de los problemas de la crisis del software siguen vigentes: requerimientos mal entendidos, estimaciones optimistas y cambios sin control. Por eso este curso dedica cuatro módulos a la ingeniería de requerimientos.</p>
                            `,
                            nextButton: 'Siguiente: Línea de tiempo'
                        },
                        {
                            title: 'Línea de tiempo',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Época</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Hito</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Aporte</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">1950-1960</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Programación en lenguaje máquina, ensamblador, FORTRAN y COBOL</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Primeros lenguajes de alto nivel; programación artesanal.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">1968</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Conferencia de la OTAN en Garmisch</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Nace el término «ingeniería del software».</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">1970</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Artículo de Winston Royce sobre el desarrollo de sistemas grandes</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se populariza el modelo en cascada.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">1970-1980</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Programación estructurada (Dijkstra) y análisis estructurado</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Código con secuencia, decisión e iteración; diagramas de flujo de datos.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">1975</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><em>The Mythical Man-Month</em> (Fred Brooks)</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">«Agregar personas a un proyecto atrasado lo atrasa más».</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">1986-1988</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Modelo en espiral (Barry Boehm)</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Desarrollo iterativo guiado por el análisis de riesgos.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">1990</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Programación orientada a objetos y UML (1997)</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Modelado visual estándar del software.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">1991-2000</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">CMM/CMMI, ISO 9001, ISO/IEC 12207</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Madurez y estandarización de los procesos.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">2001</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Manifiesto Ágil</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Valores y principios de Scrum, XP y otros métodos ágiles.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">2009 en adelante</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">DevOps, nube, integración y entrega continuas</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se acorta el tiempo entre escribir código y ponerlo en producción.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">2020 en adelante</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Asistentes de programación con inteligencia artificial</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">La IA genera y revisa código; el criterio de ingeniería sigue siendo responsabilidad humana.</td>
</tr>
</tbody></table></div>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-procesos',
                    label: 'Procesos de software y ciclos de vida',
                    steps: [
                        {
                            title: 'Proceso de software',
                            content: `<p>Un <strong>proceso de software</strong> es el conjunto estructurado de actividades necesarias para desarrollar un sistema de software. Aunque cada organización lo adapta, Sommerville identifica cuatro actividades fundamentales que aparecen en todo proceso:</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Actividad</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Pregunta que responde</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Resultado típico</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Especificación</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">¿Qué debe hacer el sistema y con qué restricciones?</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Documento o lista de requerimientos, historias de usuario.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Diseño e implementación</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">¿Cómo se organiza y se construye?</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Arquitectura, modelos de diseño, código fuente.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Validación</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">¿Hace lo que el cliente necesita?</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Pruebas, revisiones, aceptación del cliente.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Evolución</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">¿Cómo se adapta a nuevas necesidades?</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Nuevas versiones, correcciones, mejoras.</td>
</tr>
</tbody></table></div>
<p>Un proceso también define <strong>roles</strong> (quién hace cada actividad), <strong>productos</strong> (qué se entrega), <strong>precondiciones y poscondiciones</strong> (qué debe existir antes y después de cada actividad).</p>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
El estándar ISO/IEC/IEEE 12207 describe los procesos del ciclo de vida del software (adquisición, suministro, desarrollo, operación, mantenimiento, entre otros). Sirve de referencia común para organizaciones y contratos.</p>
                            `,
                            nextButton: 'Siguiente: Ciclo de vida del software'
                        },
                        {
                            title: 'Ciclo de vida del software',
                            content: `<p>El <strong>ciclo de vida del software</strong> es el período que va desde que surge la idea de un sistema hasta que se retira de uso. Un <strong>modelo de ciclo de vida</strong> define el orden en que se realizan las actividades y cómo se pasa de una a otra.</p>
<svg viewBox="0 0 650 310" role="img" aria-label="Modelo en cascada: seis fases en secuencia" style="--ancho:620px; display:block; width:100%; max-width:calc(var(--ancho) * var(--escala, 1)); height:auto; margin:16px auto; font-family:Arial, sans-serif;" xmlns="http://www.w3.org/2000/svg"><defs><marker id="cv-casc-f" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#164a98"/></marker></defs><rect x="10" y="10" width="150" height="38" rx="8" fill="#164a98" stroke="#164a98" stroke-width="1.5"/><text x="85" y="29" text-anchor="middle" dominant-baseline="middle" font-size="12" fill="#ffffff" font-weight="bold">Requerimientos</text><path d="M160,29 L180,29 L180,66" fill="none" stroke="#164a98" stroke-width="2" marker-end="url(#cv-casc-f)"/><rect x="105" y="58" width="150" height="38" rx="8" fill="#164a98" stroke="#164a98" stroke-width="1.5"/><text x="180" y="77" text-anchor="middle" dominant-baseline="middle" font-size="12" fill="#ffffff" font-weight="bold">Diseño</text><path d="M255,77 L275,77 L275,114" fill="none" stroke="#164a98" stroke-width="2" marker-end="url(#cv-casc-f)"/><rect x="200" y="106" width="150" height="38" rx="8" fill="#164a98" stroke="#164a98" stroke-width="1.5"/><text x="275" y="125" text-anchor="middle" dominant-baseline="middle" font-size="12" fill="#ffffff" font-weight="bold">Implementación</text><path d="M350,125 L370,125 L370,162" fill="none" stroke="#164a98" stroke-width="2" marker-end="url(#cv-casc-f)"/><rect x="295" y="154" width="150" height="38" rx="8" fill="#164a98" stroke="#164a98" stroke-width="1.5"/><text x="370" y="173" text-anchor="middle" dominant-baseline="middle" font-size="12" fill="#ffffff" font-weight="bold">Pruebas</text><path d="M445,173 L465,173 L465,210" fill="none" stroke="#164a98" stroke-width="2" marker-end="url(#cv-casc-f)"/><rect x="390" y="202" width="150" height="38" rx="8" fill="#164a98" stroke="#164a98" stroke-width="1.5"/><text x="465" y="221" text-anchor="middle" dominant-baseline="middle" font-size="12" fill="#ffffff" font-weight="bold">Despliegue</text><path d="M540,221 L560,221 L560,258" fill="none" stroke="#164a98" stroke-width="2" marker-end="url(#cv-casc-f)"/><rect x="485" y="250" width="150" height="38" rx="8" fill="#164a98" stroke="#164a98" stroke-width="1.5"/><text x="560" y="269" text-anchor="middle" dominant-baseline="middle" font-size="12" fill="#ffffff" font-weight="bold">Mantenimiento</text></svg>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Modelo</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Idea principal</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Conviene cuando…</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Cascada</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Las fases se realizan una después de la otra; cada fase termina antes de iniciar la siguiente.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Los requerimientos son estables y bien conocidos.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Modelo en V</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Cada fase de desarrollo tiene asociada una fase de prueba (requerimientos ↔ aceptación, diseño ↔ integración).</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se necesita verificación rigurosa (salud, aviación).</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Incremental</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">El sistema se entrega en partes funcionales; cada incremento agrega funcionalidad.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se quiere entregar valor pronto y por partes.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Iterativo / espiral</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se repiten ciclos de planificación, análisis de riesgos, construcción y evaluación.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">El proyecto es grande o tiene riesgos altos.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Prototipos</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se construye una versión preliminar para aclarar requerimientos.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">El cliente no tiene claro lo que necesita.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Ágil</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Iteraciones cortas (1 a 4 semanas) con entregas frecuentes y retroalimentación.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Los requerimientos cambian y el cliente participa activamente.</td>
</tr>
</tbody></table></div>
<div style="background:#eef5ff; border-left:5px solid #00928d; border-radius:8px; padding:12px 16px; margin:16px 0;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-book-open" style="color:#00928d;" aria-hidden="true"></i> <strong style="color:#00734a;">Caso BiblioTEC</strong></p><p>Si la biblioteca ya sabe exactamente qué necesita y lo definió en un reglamento, una cascada podría funcionar. Si quiere probar primero el préstamo de libros y después decidir cómo serán las reservas desde el celular, un modelo incremental o ágil es más adecuado.</p></div>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-arquitectura',
                    label: 'Estructura y arquitectura',
                    steps: [
                        {
                            title: 'Arquitectura de software',
                            content: `<p>La <strong>arquitectura de software</strong> es la estructura de alto nivel de un sistema: sus componentes, las responsabilidades de cada uno, cómo se comunican y las decisiones principales que la sustentan. Es el «plano» del sistema y se define al inicio del diseño, porque cambiarla después es costoso.</p>
<p><strong>Conceptos clave</strong></p>
<ul>
<li><strong>Componente o módulo</strong>: parte del sistema con una responsabilidad clara (por ejemplo, el módulo de préstamos).</li>
<li><strong>Interfaz</strong>: forma en que un componente ofrece sus servicios a otros (por ejemplo, una API).</li>
<li><strong>Cohesión</strong>: grado en que las funciones de un módulo están relacionadas entre sí. Se busca <strong>alta cohesión</strong>.</li>
<li><strong>Acoplamiento</strong>: grado de dependencia entre módulos. Se busca <strong>bajo acoplamiento</strong>, para que un cambio en un módulo no obligue a cambiar los demás.</li>
</ul>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Alta cohesión y bajo acoplamiento facilitan probar, reutilizar y mantener el software. Es el mismo principio que se aplica al dividir un programa en funciones: cada función hace una sola tarea.</p>
                            `,
                            nextButton: 'Siguiente: Estilos arquitectónicos'
                        },
                        {
                            title: 'Estilos arquitectónicos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Estilo</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Capas</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">El sistema se divide en capas (presentación, lógica de negocio, datos); cada capa usa solo los servicios de la capa inferior.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Aplicación web con interfaz, reglas de negocio y base de datos.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Cliente-servidor</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Los clientes solicitan servicios a un servidor central.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Navegador que consulta un servidor web.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>MVC (Modelo-Vista-Controlador)</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Separa los datos (modelo), la interfaz (vista) y la coordinación (controlador).</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Frameworks web como Django o Spring MVC.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Monolito</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Toda la aplicación se construye y despliega como una sola unidad.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Sistema pequeño de un solo equipo.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Microservicios</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">El sistema se compone de servicios pequeños e independientes que se comunican por red.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Plataformas grandes de comercio electrónico.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Orientada a eventos</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Los componentes reaccionan a eventos que publican otros componentes.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Notificaciones cuando cambia el estado de un pedido.</td>
</tr>
</tbody></table></div>
<div style="background:#eef5ff; border-left:5px solid #00928d; border-radius:8px; padding:12px 16px; margin:16px 0;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-book-open" style="color:#00928d;" aria-hidden="true"></i> <strong style="color:#00734a;">Caso BiblioTEC</strong></p><p>BiblioTEC puede organizarse en tres capas: <strong>presentación</strong> (sitio web y aplicación móvil), <strong>lógica de negocio</strong> (reglas de préstamo, reservas y cálculo de multas) y <strong>datos</strong> (base de datos de libros, usuarios y préstamos). Así, la aplicación móvil y el sitio web comparten las mismas reglas de negocio.</p></div>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-paradigmas',
                    label: 'Paradigmas de programación',
                    steps: [
                        {
                            title: '¿Qué es un paradigma?',
                            content: `<p>Un <strong>paradigma de programación</strong> es un estilo o enfoque para resolver problemas con un lenguaje de programación. Define cómo se organiza el código y cómo se piensa la solución. Muchos lenguajes actuales, como Python, son <strong>multiparadigma</strong>.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Paradigma</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Idea principal</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Lenguajes representativos</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Imperativo</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se indica paso a paso <em>cómo</em> cambiar el estado del programa.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">C, Python</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Estructurado / procedimental</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Imperativo, organizado con secuencia, decisión, iteración y procedimientos (funciones).</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">C, Pascal, Python</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Orientado a objetos</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">El programa se organiza en objetos que combinan datos (atributos) y comportamiento (métodos).</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Java, C#, Python</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Funcional</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se programa con funciones puras, sin modificar el estado; se evitan los efectos secundarios.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Haskell, Elixir, F#</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Lógico</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se declaran hechos y reglas; el sistema deduce las respuestas.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Prolog</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Declarativo</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se indica <em>qué</em> resultado se quiere, no cómo obtenerlo.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">SQL, HTML</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Orientado a eventos</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">El programa responde a eventos (clics, mensajes, sensores).</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">JavaScript en el navegador</td>
</tr>
</tbody></table></div>
                            `,
                            nextButton: 'Siguiente: Un mismo problema, varios paradigmas'
                        },
                        {
                            title: 'Un mismo problema, varios paradigmas',
                            content: `<p>Problema: calcular la multa total de una lista de días de atraso, si cada día cuesta 500 colones.</p>
<p><strong>Procedimental</strong>: se recorre la lista y se acumula el resultado.</p>
<pre class="codigo">COSTO_DIA = 500

def calcular_multa_total(dias_atraso):
    total = 0
    for dias in dias_atraso:
        total = total + dias * COSTO_DIA
    return total</pre>
<p><strong>Orientado a objetos</strong>: cada préstamo es un objeto que sabe calcular su propia multa.</p>
<pre class="codigo">class Prestamo:
    def __init__(self, dias_atraso):
        self.dias_atraso = dias_atraso

    def calcular_multa(self):
        return self.dias_atraso * 500</pre>
<p><strong>Funcional</strong>: se aplica una función a cada elemento y se suman los resultados, sin variables que cambien.</p>
<pre class="codigo">total = sum(map(lambda dias: dias * 500, [2, 0, 5]))</pre>
<p><strong>Declarativo (SQL)</strong>: se indica el resultado deseado y el motor de base de datos decide cómo obtenerlo.</p>
<pre class="codigo">SELECT SUM(dias_atraso * 500) FROM prestamos;</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Ningún paradigma es mejor en todos los casos. La elección depende del problema, del lenguaje, del equipo y de la arquitectura del sistema.</p>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-mejora',
                    label: 'Evaluación y mejora de procesos',
                    steps: [
                        {
                            title: '¿Por qué evaluar el proceso?',
                            content: `<p>La calidad del software depende en gran medida de la calidad del proceso con que se construye. <strong>Evaluar un proceso</strong> es compararlo con un modelo de referencia para identificar fortalezas y debilidades. <strong>Mejorarlo</strong> es aplicar cambios planificados y medir su efecto.</p>
<p>Un ciclo básico de mejora es el <strong>ciclo PHVA (Planificar, Hacer, Verificar, Actuar)</strong>, también llamado ciclo de Deming:</p>
<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(210px, 1fr)); gap:12px; margin:14px 0;">
<div style="border:1px solid #d2d2d2; border-top:4px solid #00928d; border-radius:10px; padding:12px 14px; background:#fff;"><p style="margin:0 0 6px 0; color:#00928d;"><i class="fa-solid fa-clipboard-list" aria-hidden="true"></i> <strong>Planificar</strong></p><p style="margin:0;">Identificar el problema, medir la situación actual y definir la mejora.</p></div>
<div style="border:1px solid #d2d2d2; border-top:4px solid #00928d; border-radius:10px; padding:12px 14px; background:#fff;"><p style="margin:0 0 6px 0; color:#00928d;"><i class="fa-solid fa-hammer" aria-hidden="true"></i> <strong>Hacer</strong></p><p style="margin:0;">Aplicar la mejora en un proyecto piloto.</p></div>
<div style="border:1px solid #d2d2d2; border-top:4px solid #00928d; border-radius:10px; padding:12px 14px; background:#fff;"><p style="margin:0 0 6px 0; color:#00928d;"><i class="fa-solid fa-magnifying-glass-chart" aria-hidden="true"></i> <strong>Verificar</strong></p><p style="margin:0;">Medir los resultados y compararlos con lo esperado.</p></div>
<div style="border:1px solid #d2d2d2; border-top:4px solid #00928d; border-radius:10px; padding:12px 14px; background:#fff;"><p style="margin:0 0 6px 0; color:#00928d;"><i class="fa-solid fa-rotate" aria-hidden="true"></i> <strong>Actuar</strong></p><p style="margin:0;">Estandarizar la mejora si funcionó o ajustarla si no.</p></div>
</div>
                            `,
                            nextButton: 'Siguiente: Modelos de madurez: CMMI'
                        },
                        {
                            title: 'Modelos de madurez: CMMI',
                            content: `<p><strong>CMMI</strong> (Capability Maturity Model Integration), creado por el Software Engineering Institute de la Universidad Carnegie Mellon, describe cinco niveles de madurez de una organización:</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Nivel</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Nombre</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Característica</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">1</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Inicial</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Procesos impredecibles y reactivos; el éxito depende del esfuerzo individual.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">2</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Gestionado</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Los proyectos se planifican, se les da seguimiento y se controlan.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">3</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Definido</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">La organización tiene procesos estándar que cada proyecto adapta.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">4</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Gestionado cuantitativamente</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Los procesos se miden y se controlan con datos estadísticos.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">5</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">En optimización</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">La organización mejora continuamente sus procesos con base en datos.</td>
</tr>
</tbody></table></div>
<p><strong>Otros modelos y prácticas</strong></p>
<ul>
<li><strong>ISO/IEC 33000 (antes SPICE, ISO/IEC 15504)</strong>: familia de normas para evaluar la capacidad de los procesos.</li>
<li><strong>ISO 9001</strong>: sistema de gestión de la calidad aplicable a cualquier organización, incluidas las de software.</li>
<li><strong>Métricas de proceso</strong>: defectos encontrados por etapa, tiempo de ciclo, porcentaje de esfuerzo en retrabajo, velocidad del equipo.</li>
<li><strong>Retrospectivas ágiles</strong>: mejora continua del proceso al final de cada iteración (se estudian en el módulo 7).</li>
</ul>
<div style="background:#eef5ff; border-left:5px solid #00928d; border-radius:8px; padding:12px 16px; margin:16px 0;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-book-open" style="color:#00928d;" aria-hidden="true"></i> <strong style="color:#00734a;">Caso BiblioTEC</strong></p><p>El equipo de BiblioTEC detecta que el 40 % de los defectos se originan en requerimientos ambiguos. Aplica PHVA: <strong>planifica</strong> revisar cada requerimiento con una lista de verificación, lo <strong>hace</strong> durante dos iteraciones, <strong>verifica</strong> que los defectos de ese origen bajaron y <strong>actúa</strong> incorporando la revisión al proceso del equipo.</p></div>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-etica',
                    label: 'Ética y profesionalismo',
                    steps: [
                        {
                            title: 'Responsabilidad profesional',
                            content: `<p>El software controla dinero, salud, transporte, elecciones y datos personales. Una decisión técnica puede afectar a miles de personas. Por eso la ingeniería del software exige <strong>responsabilidad profesional</strong>, más allá de cumplir con lo que pide el cliente.</p>
<p><strong>Aspectos que menciona Sommerville</strong></p>
<ul>
<li><strong>Confidencialidad</strong>: respetar la información del cliente y de las personas usuarias.</li>
<li><strong>Competencia</strong>: no aceptar trabajos para los que no se tiene la preparación necesaria.</li>
<li><strong>Propiedad intelectual</strong>: respetar licencias, derechos de autor y patentes.</li>
<li><strong>Uso adecuado de los recursos</strong>: no usar los equipos o datos del cliente para fines propios.</li>
</ul>
<p>El <strong>Código de Ética y Práctica Profesional de la Ingeniería del Software</strong>, elaborado por la ACM y la IEEE Computer Society (1999), establece ocho principios:</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Principio</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">El profesional debe…</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">1. Público</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">actuar de forma coherente con el interés público.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">2. Cliente y empleador</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">actuar en el mejor interés del cliente y del empleador, de forma coherente con el interés público.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">3. Producto</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">asegurar que sus productos cumplan los estándares profesionales más altos posibles.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">4. Juicio</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">mantener la integridad e independencia en su juicio profesional.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">5. Gestión</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">promover (si es líder) un enfoque ético en la gestión del desarrollo y el mantenimiento.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">6. Profesión</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">fomentar la integridad y la reputación de la profesión.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">7. Colegas</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">ser justo y apoyar a sus colegas.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">8. Persona</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">aprender durante toda su vida y promover un enfoque ético en la práctica de la profesión.</td>
</tr>
</tbody></table></div>
                            `,
                            nextButton: 'Siguiente: Dilemas éticos actuales'
                        },
                        {
                            title: 'Dilemas éticos actuales',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Situación</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Pregunta ética</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se pide entregar a tiempo omitiendo pruebas de seguridad.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">¿Se informa del riesgo aunque cause conflicto con la gerencia?</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Una aplicación recopila más datos personales de los necesarios.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">¿Se cumple la Ley 8968 de Protección de la Persona frente al tratamiento de sus datos personales (Costa Rica)?</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se usa un asistente de IA para generar código.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">¿Se entiende, revisa y prueba el código antes de entregarlo? ¿Se respeta la licencia del código generado?</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Un algoritmo de selección discrimina a un grupo de personas.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">¿Quién responde por los sesgos del sistema?</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se descubre un defecto grave en un sistema ya entregado.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">¿Se comunica de inmediato al cliente?</td>
</tr>
</tbody></table></div>
<div style="background:#eef5ff; border-left:5px solid #00928d; border-radius:8px; padding:12px 16px; margin:16px 0;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-book-open" style="color:#00928d;" aria-hidden="true"></i> <strong style="color:#00734a;">Caso BiblioTEC</strong></p><p>BiblioTEC almacena el historial de préstamos de cada estudiante. Un requerimiento ético y legal es que ese historial solo lo consulte el personal autorizado y que no se comparta con terceros sin consentimiento. Este tipo de restricción se convierte en un <strong>requerimiento de seguridad</strong> (módulo 5).</p></div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
En Costa Rica, el ejercicio profesional de la informática está regulado por el Colegio de Profesionales en Informática y Computación (CPIC), que también cuenta con un código de ética.</p>
                            `,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_002',
            label: 'Desarrollo del software',
            subtemas: [
                {
                    id: 'm002-tradicionales',
                    label: 'Metodologías tradicionales',
                    steps: [
                        {
                            title: 'Metodologías tradicionales',
                            content: `<p>Las <strong>metodologías tradicionales</strong> (también llamadas <em>pesadas</em> o <em>dirigidas por un plan</em>) planifican el proyecto completo al inicio, documentan con detalle cada fase y controlan el avance contra el plan. Se basan en la idea de que los requerimientos pueden definirse completamente antes de diseñar y construir.</p>
<svg viewBox="0 0 650 310" role="img" aria-label="Modelo en cascada: seis fases en secuencia" style="--ancho:620px; display:block; width:100%; max-width:calc(var(--ancho) * var(--escala, 1)); height:auto; margin:16px auto; font-family:Arial, sans-serif;" xmlns="http://www.w3.org/2000/svg"><defs><marker id="m2-casc-f" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#164a98"/></marker></defs><rect x="10" y="10" width="150" height="38" rx="8" fill="#164a98" stroke="#164a98" stroke-width="1.5"/><text x="85" y="29" text-anchor="middle" dominant-baseline="middle" font-size="12" fill="#ffffff" font-weight="bold">Requerimientos</text><path d="M160,29 L180,29 L180,66" fill="none" stroke="#164a98" stroke-width="2" marker-end="url(#m2-casc-f)"/><rect x="105" y="58" width="150" height="38" rx="8" fill="#164a98" stroke="#164a98" stroke-width="1.5"/><text x="180" y="77" text-anchor="middle" dominant-baseline="middle" font-size="12" fill="#ffffff" font-weight="bold">Diseño</text><path d="M255,77 L275,77 L275,114" fill="none" stroke="#164a98" stroke-width="2" marker-end="url(#m2-casc-f)"/><rect x="200" y="106" width="150" height="38" rx="8" fill="#164a98" stroke="#164a98" stroke-width="1.5"/><text x="275" y="125" text-anchor="middle" dominant-baseline="middle" font-size="12" fill="#ffffff" font-weight="bold">Implementación</text><path d="M350,125 L370,125 L370,162" fill="none" stroke="#164a98" stroke-width="2" marker-end="url(#m2-casc-f)"/><rect x="295" y="154" width="150" height="38" rx="8" fill="#164a98" stroke="#164a98" stroke-width="1.5"/><text x="370" y="173" text-anchor="middle" dominant-baseline="middle" font-size="12" fill="#ffffff" font-weight="bold">Pruebas</text><path d="M445,173 L465,173 L465,210" fill="none" stroke="#164a98" stroke-width="2" marker-end="url(#m2-casc-f)"/><rect x="390" y="202" width="150" height="38" rx="8" fill="#164a98" stroke="#164a98" stroke-width="1.5"/><text x="465" y="221" text-anchor="middle" dominant-baseline="middle" font-size="12" fill="#ffffff" font-weight="bold">Despliegue</text><path d="M540,221 L560,221 L560,258" fill="none" stroke="#164a98" stroke-width="2" marker-end="url(#m2-casc-f)"/><rect x="485" y="250" width="150" height="38" rx="8" fill="#164a98" stroke="#164a98" stroke-width="1.5"/><text x="560" y="269" text-anchor="middle" dominant-baseline="middle" font-size="12" fill="#ffffff" font-weight="bold">Mantenimiento</text></svg>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Metodología o modelo</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Características</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Cascada</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Fases secuenciales; cada fase produce documentos que se aprueban antes de pasar a la siguiente.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Modelo en V</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Variante de cascada que asocia cada fase de desarrollo con un nivel de prueba.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Espiral (Boehm)</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Ciclos que incluyen planificación, análisis de riesgos, ingeniería y evaluación del cliente.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>RUP (Rational Unified Process)</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Iterativo, dirigido por casos de uso y centrado en la arquitectura; cuatro fases: inicio, elaboración, construcción y transición.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Métrica v3, PRINCE2 + cascada</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Marcos de gobierno y documentación usados en el sector público y en proyectos grandes.</td>
</tr>
</tbody></table></div>
                            `,
                            nextButton: 'Siguiente: Ventajas y desventajas'
                        },
                        {
                            title: 'Ventajas y desventajas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ventajas</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Desventajas</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Planificación clara del alcance, el costo y el cronograma desde el inicio.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Es difícil incorporar cambios cuando el proyecto ya avanzó.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Documentación completa, útil para auditorías y contratos.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">El cliente ve el producto funcionando hasta muy tarde.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Funciona bien con requerimientos estables y equipos grandes o distribuidos.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Los errores de requerimientos se detectan tarde y son costosos de corregir.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Facilita cumplir normas en sistemas críticos (salud, aviación, banca).</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Mucho esfuerzo en documentación que puede quedar desactualizada.</td>
</tr>
</tbody></table></div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
«Tradicional» no significa «obsoleto». En proyectos con requerimientos regulados y estables, o donde la documentación es obligatoria, una metodología dirigida por un plan sigue siendo una buena elección.</p>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-agiles',
                    label: 'Metodologías ágiles',
                    steps: [
                        {
                            title: 'Manifiesto Ágil',
                            content: `<p>En 2001, diecisiete especialistas publicaron el <strong>Manifiesto por el Desarrollo Ágil de Software</strong>. Propone cuatro valores: aunque se valoran los elementos de la derecha, se valoran <strong>más</strong> los de la izquierda.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Se valora más…</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">…que</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Individuos e interacciones</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">procesos y herramientas</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Software funcionando</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">documentación extensiva</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Colaboración con el cliente</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">negociación contractual</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Respuesta ante el cambio</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">seguir un plan</td>
</tr>
</tbody></table></div>
<p><strong>Algunos de sus doce principios</strong></p>
<ul>
<li>La prioridad es satisfacer al cliente mediante la entrega temprana y continua de software con valor.</li>
<li>Se aceptan los cambios de requerimientos, incluso en etapas tardías.</li>
<li>Se entrega software funcional con frecuencia, de un par de semanas a un par de meses.</li>
<li>Las personas de negocio y el equipo de desarrollo trabajan juntos todos los días.</li>
<li>El software funcionando es la medida principal de progreso.</li>
<li>A intervalos regulares el equipo reflexiona sobre cómo ser más efectivo y ajusta su comportamiento.</li>
</ul>
                            `,
                            nextButton: 'Siguiente: Scrum'
                        },
                        {
                            title: 'Scrum',
                            content: `<p><strong>Scrum</strong> es el marco de trabajo ágil más usado. Según la Guía de Scrum (2020), se organiza en <strong>sprints</strong> de duración fija, de un mes o menos, en los que se entrega un incremento de producto utilizable.</p>
<svg viewBox="0 0 770 230" role="img" aria-label="Ciclo de Scrum" style="--ancho:740px; display:block; width:100%; max-width:calc(var(--ancho) * var(--escala, 1)); height:auto; margin:16px auto; font-family:Arial, sans-serif;" xmlns="http://www.w3.org/2000/svg"><defs><marker id="m2-scrum-f" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#164a98"/></marker></defs><rect x="10" y="70" width="120" height="50" rx="8" fill="#9CC8FF" stroke="#164a98" stroke-width="1.5"/><text x="70" y="87.5" text-anchor="middle" dominant-baseline="middle" font-size="13" fill="#164a98" font-weight="bold">Product</text><text x="70" y="102.5" text-anchor="middle" dominant-baseline="middle" font-size="13" fill="#164a98" font-weight="bold">Backlog</text><rect x="165" y="70" width="120" height="50" rx="8" fill="#164a98" stroke="#164a98" stroke-width="1.5"/><text x="225" y="87.5" text-anchor="middle" dominant-baseline="middle" font-size="13" fill="#ffffff" font-weight="bold">Sprint</text><text x="225" y="102.5" text-anchor="middle" dominant-baseline="middle" font-size="13" fill="#ffffff" font-weight="bold">Planning</text><rect x="320" y="70" width="120" height="50" rx="8" fill="#9CC8FF" stroke="#164a98" stroke-width="1.5"/><text x="380" y="87.5" text-anchor="middle" dominant-baseline="middle" font-size="13" fill="#164a98" font-weight="bold">Sprint</text><text x="380" y="102.5" text-anchor="middle" dominant-baseline="middle" font-size="13" fill="#164a98" font-weight="bold">Backlog</text><circle cx="530" cy="95" r="52" fill="#00928d"/><text x="530" y="88" text-anchor="middle" dominant-baseline="middle" font-size="14" fill="#ffffff" font-weight="bold">Sprint</text><text x="530" y="106" text-anchor="middle" dominant-baseline="middle" font-size="11" fill="#ffffff">1 a 4 semanas</text><path d="M505,40 A30,24 0 1 1 555,40" fill="none" stroke="#00734a" stroke-width="2" marker-end="url(#m2-scrum-f)"/><text x="572" y="24" text-anchor="start" dominant-baseline="middle" font-size="11" fill="#00734a" font-weight="bold">Daily Scrum (15 min)</text><rect x="640" y="70" width="120" height="50" rx="8" fill="#ffc63e" stroke="#164a98" stroke-width="1.5"/><text x="700" y="95" text-anchor="middle" dominant-baseline="middle" font-size="13" fill="#164a98" font-weight="bold">Incremento</text><rect x="640" y="170" width="120" height="50" rx="8" fill="#712c86" stroke="#164a98" stroke-width="1.5"/><text x="700" y="187.5" text-anchor="middle" dominant-baseline="middle" font-size="13" fill="#ffffff" font-weight="bold">Sprint</text><text x="700" y="202.5" text-anchor="middle" dominant-baseline="middle" font-size="13" fill="#ffffff" font-weight="bold">Review</text><rect x="445" y="170" width="150" height="50" rx="8" fill="#712c86" stroke="#164a98" stroke-width="1.5"/><text x="520" y="187.5" text-anchor="middle" dominant-baseline="middle" font-size="13" fill="#ffffff" font-weight="bold">Sprint</text><text x="520" y="202.5" text-anchor="middle" dominant-baseline="middle" font-size="13" fill="#ffffff" font-weight="bold">Retrospective</text><path d="M130,95 L163,95" fill="none" stroke="#164a98" stroke-width="2" marker-end="url(#m2-scrum-f)"/><path d="M285,95 L318,95" fill="none" stroke="#164a98" stroke-width="2" marker-end="url(#m2-scrum-f)"/><path d="M440,95 L476,95" fill="none" stroke="#164a98" stroke-width="2" marker-end="url(#m2-scrum-f)"/><path d="M582,95 L638,95" fill="none" stroke="#164a98" stroke-width="2" marker-end="url(#m2-scrum-f)"/><path d="M700,120 L700,168" fill="none" stroke="#164a98" stroke-width="2" marker-end="url(#m2-scrum-f)"/><path d="M640,195 L597,195" fill="none" stroke="#164a98" stroke-width="2" marker-end="url(#m2-scrum-f)"/><path d="M445,195 L70,195 L70,122" fill="none" stroke="#164a98" stroke-width="2" marker-end="url(#m2-scrum-f)"/><text x="260" y="210" text-anchor="middle" dominant-baseline="middle" font-size="11" fill="#164a98">Siguiente sprint: se ajusta el Product Backlog</text></svg>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Elemento</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Componentes</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Responsabilidades</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Product Owner</strong> (maximiza el valor y administra el Product Backlog), <strong>Scrum Master</strong> (facilita y elimina impedimentos) y <strong>Developers</strong> (construyen el incremento).</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Eventos</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Sprint, Sprint Planning, Daily Scrum, Sprint Review y Sprint Retrospective.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Artefactos</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Product Backlog (compromiso: objetivo del producto), Sprint Backlog (compromiso: objetivo del sprint) e Incremento (compromiso: definición de terminado).</td>
</tr>
</tbody></table></div>
                            `,
                            nextButton: 'Siguiente: Otros métodos ágiles'
                        },
                        {
                            title: 'Otros métodos ágiles',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Método</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Características principales</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Kanban</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Tablero visual con columnas (Por hacer, En progreso, Hecho), límite de trabajo en progreso y flujo continuo sin iteraciones fijas.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>XP (Extreme Programming)</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Prácticas técnicas: programación en parejas, desarrollo guiado por pruebas, integración continua, refactorización, entregas pequeñas.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Lean</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Eliminar desperdicios, entregar rápido, optimizar el todo; proviene del sistema de producción de Toyota.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Marcos escalados (SAFe, LeSS)</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Coordinan varios equipos ágiles que trabajan en un mismo producto.</td>
</tr>
</tbody></table></div>
<div style="background:#eef5ff; border-left:5px solid #00928d; border-radius:8px; padding:12px 16px; margin:16px 0;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-book-open" style="color:#00928d;" aria-hidden="true"></i> <strong style="color:#00734a;">Caso BiblioTEC</strong></p><p>El equipo de BiblioTEC trabaja con Scrum en sprints de dos semanas. El Product Owner es la jefatura de la biblioteca. En el primer sprint se entrega el registro de libros y préstamos; en el segundo, las devoluciones y el cálculo de multas; en el tercero, la consulta del catálogo desde el celular.</p></div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Ágil no significa «sin documentación» ni «sin planificación». Se documenta y se planifica lo necesario, en el momento en que se necesita.</p>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-proc-datos',
                    label: 'Metodologías orientadas a procedimientos y datos',
                    steps: [
                        {
                            title: 'Orientadas a procedimientos (análisis estructurado)',
                            content: `<p>Las <strong>metodologías orientadas a procedimientos</strong> (o a procesos) descomponen el sistema en funciones. Se preguntan primero <em>¿qué hace el sistema?</em> y dividen cada función en subfunciones más simples (descomposición funcional, de arriba hacia abajo).</p>
<p><strong>Herramientas del análisis estructurado (DeMarco, Yourdon)</strong></p>
<ul>
<li><strong>Diagrama de flujo de datos (DFD)</strong>: muestra procesos, flujos de datos, almacenes de datos y entidades externas.</li>
<li><strong>Diccionario de datos</strong>: define cada dato que aparece en los DFD.</li>
<li><strong>Especificación de procesos</strong>: describe la lógica de cada proceso con pseudocódigo, tablas o árboles de decisión.</li>
<li><strong>Diagrama de estructura</strong>: muestra cómo se organizan los módulos del programa.</li>
</ul>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Símbolo del DFD</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Representa</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo en BiblioTEC</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Rectángulo</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Entidad externa</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Estudiante, Bibliotecario</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Círculo o rectángulo redondeado</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Proceso</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">1. Registrar préstamo</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Flecha</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Flujo de datos</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Solicitud de préstamo</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Dos líneas paralelas</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Almacén de datos</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Préstamos, Libros</td>
</tr>
</tbody></table></div>
                            `,
                            nextButton: 'Siguiente: Orientadas a datos'
                        },
                        {
                            title: 'Orientadas a datos',
                            content: `<p>Las <strong>metodologías orientadas a datos</strong> parten de la estructura de la información. Se preguntan primero <em>¿qué datos maneja la organización y cómo se relacionan?</em>; los procesos se diseñan después, alrededor de esos datos.</p>
<p><strong>Representantes</strong></p>
<ul>
<li><strong>Ingeniería de la información (James Martin)</strong>: planifica los sistemas de toda la organización a partir de un modelo de datos corporativo.</li>
<li><strong>Métodos de Jackson (JSP y JSD) y Warnier-Orr</strong>: derivan la estructura del programa a partir de la estructura de los datos de entrada y salida.</li>
<li><strong>Modelo entidad-relación (Chen)</strong>: representa entidades, atributos y relaciones; es la base del diseño de bases de datos.</li>
</ul>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Entidad</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Atributos</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Relación</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Estudiante</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">carné, nombre, correo</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Un estudiante realiza muchos préstamos.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Libro</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">ISBN, título, autor</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Un libro tiene muchos ejemplares.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Ejemplar</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">código, estado</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Un ejemplar aparece en muchos préstamos, uno a la vez.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Préstamo</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">fecha de préstamo, fecha límite, fecha de devolución</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Une a un estudiante con un ejemplar.</td>
</tr>
</tbody></table></div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Las metodologías orientadas a objetos combinaron ambos enfoques: un objeto agrupa los datos y los procedimientos que operan sobre ellos.</p>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-calidad',
                    label: 'Calidad de software',
                    steps: [
                        {
                            title: '¿Qué es la calidad de software?',
                            content: `<p>La <strong>calidad de software</strong> es el grado en que un producto satisface las necesidades explícitas e implícitas de sus usuarios cuando se usa en las condiciones especificadas. No basta con que «funcione»: también debe ser seguro, fácil de usar, eficiente y fácil de mantener.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Concepto</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Enfoque</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Aseguramiento de la calidad (QA)</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Preventivo, sobre el <em>proceso</em>: evita que se introduzcan defectos.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Estándares de codificación, revisiones de requerimientos, auditorías del proceso.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Control de calidad (QC)</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Detectivo, sobre el <em>producto</em>: encuentra defectos.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Pruebas, inspecciones de código.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Verificación</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">¿Se construyó el producto correctamente? (cumple la especificación)</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Revisar que el cálculo de multas cumpla la fórmula especificada.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Validación</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">¿Se construyó el producto correcto? (satisface al usuario)</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">La bibliotecaria confirma que el sistema resuelve su necesidad.</td>
</tr>
</tbody></table></div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Cuanto más tarde se detecta un defecto, más cuesta corregirlo. Un error de requerimientos encontrado en producción puede costar decenas de veces más que si se hubiera detectado al revisar el requerimiento.</p>
                            `,
                            nextButton: 'Siguiente: Modelo de calidad ISO/IEC 25010'
                        },
                        {
                            title: 'Modelo de calidad ISO/IEC 25010',
                            content: `<p>La norma <strong>ISO/IEC 25010</strong> (familia SQuaRE) define las características de calidad de un producto de software. La versión de 2011 propone ocho:</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Característica</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Pregunta</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo en BiblioTEC</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Adecuación funcional</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">¿Hace lo que debe hacer, de forma correcta y completa?</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Calcula la multa correcta para cada atraso.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Eficiencia de desempeño</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">¿Responde rápido y usa bien los recursos?</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">La búsqueda en el catálogo responde en menos de 2 segundos.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Compatibilidad</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">¿Convive e intercambia información con otros sistemas?</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se integra con el sistema de matrícula de la universidad.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Usabilidad</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">¿Es fácil de aprender y de usar?</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Un estudiante reserva un libro sin capacitación.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Fiabilidad</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">¿Funciona sin fallas y se recupera de ellas?</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Disponible 99 % del tiempo durante el semestre.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Seguridad</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">¿Protege la información y el acceso?</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Solo el personal autorizado ve el historial de préstamos.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Mantenibilidad</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">¿Es fácil de modificar, probar y corregir?</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Cambiar el monto de la multa no requiere reprogramar.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Portabilidad</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">¿Funciona en otros entornos?</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">La aplicación funciona en Android y en iOS.</td>
</tr>
</tbody></table></div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
La revisión de 2023 de ISO/IEC 25010 cambia algunos nombres (usabilidad pasa a «capacidad de interacción» y portabilidad a «flexibilidad») y agrega la característica «protección» (<em>safety</em>), relacionada con evitar daños a personas o al entorno.</p>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-gestion',
                    label: 'Gestión de proyectos de software',
                    steps: [
                        {
                            title: 'Gestión de proyectos',
                            content: `<p>Un <strong>proyecto</strong> es un esfuerzo temporal para crear un producto, servicio o resultado único. La <strong>gestión de proyectos</strong> aplica conocimientos, habilidades y técnicas para cumplir sus objetivos. Las guías más conocidas son el PMBOK (Project Management Institute) y PRINCE2.</p>
<p>Todo proyecto equilibra la <strong>triple restricción</strong>: <strong>alcance</strong>, <strong>tiempo</strong> y <strong>costo</strong>, con la <strong>calidad</strong> en el centro. Si se aumenta el alcance sin cambiar el tiempo ni el costo, la calidad se ve afectada.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Actividad</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Técnicas</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Planificación del alcance</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Definir qué se va a entregar y qué no.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Estructura de desglose del trabajo (EDT), Product Backlog.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Estimación</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Calcular esfuerzo, duración y costo.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Juicio de expertos, PERT (optimista, más probable, pesimista), puntos de historia, Planning Poker.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Cronograma</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Ordenar las actividades en el tiempo.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Diagrama de Gantt, ruta crítica, plan de releases.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Gestión de riesgos</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Identificar, evaluar y responder a los riesgos.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Matriz de probabilidad e impacto, plan de mitigación.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Seguimiento y control</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Comparar el avance real con el planificado.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Indicadores, reuniones de seguimiento, gráfico burndown.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Comunicación</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Mantener informadas a las partes interesadas.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Plan de comunicación, informes de avance, demostraciones.</td>
</tr>
</tbody></table></div>
                            `,
                            nextButton: 'Siguiente: Estimación y riesgos'
                        },
                        {
                            title: 'Estimación y riesgos',
                            content: `<p><strong>Estimación PERT</strong>: se combinan tres estimaciones de una tarea: optimista (O), más probable (M) y pesimista (P). La duración esperada es (O + 4M + P) ÷ 6.</p>
<div style="background:#f7f1fa; border:1px solid #c9a6d5; border-radius:10px; padding:12px 16px; margin:16px 0;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-pen-to-square" style="color:#712c86;" aria-hidden="true"></i> <strong style="color:#712c86;">Ejemplo</strong></p><p>Desarrollar el módulo de reservas: O = 4 días, M = 6 días, P = 14 días. Duración esperada = (4 + 4 × 6 + 14) ÷ 6 = 42 ÷ 6 = <strong>7 días</strong>.</p></div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Riesgo de BiblioTEC</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Probabilidad</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Impacto</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Respuesta</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">La biblioteca cambia el reglamento de multas durante el proyecto.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Media</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Medio</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Guardar el monto de la multa como parámetro configurable.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">El sistema de matrícula no ofrece una API para consultar estudiantes.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Alta</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Alto</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Acordar desde el inicio un archivo de intercambio como alternativa.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Una persona clave del equipo se retira.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Baja</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Alto</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Documentar el código y rotar tareas entre el equipo.</td>
</tr>
</tbody></table></div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
La principal causa de fracaso de los proyectos de software no es técnica: suelen ser los requerimientos incompletos o cambiantes, la falta de participación del usuario y las estimaciones poco realistas.</p>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-herramientas',
                    label: 'Entornos y herramientas',
                    steps: [
                        {
                            title: 'Entornos de desarrollo',
                            content: `<p>Un <strong>entorno de desarrollo</strong> es el conjunto de herramientas que usa el equipo para escribir, compilar, ejecutar, depurar y probar el software.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo de herramienta</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Función</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplos</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">IDE o editor de código</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Escribir, ejecutar y depurar código.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Visual Studio Code, IntelliJ IDEA, Visual Studio, PyCharm</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Control de versiones</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Registrar los cambios del código y trabajar en equipo.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Git, GitHub, GitLab, Bitbucket</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Integración y entrega continuas (CI/CD)</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Compilar, probar y desplegar de forma automática.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">GitHub Actions, GitLab CI, Jenkins, Azure Pipelines</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Pruebas automatizadas</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Ejecutar pruebas unitarias, de integración y de interfaz.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">pytest, JUnit, Selenium, Postman</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Calidad de código</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Analizar estilo, errores y vulnerabilidades.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">SonarQube, ESLint, Pylint</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Modelado</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Crear diagramas UML, BPMN y prototipos.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">draw.io, Lucidchart, Enterprise Architect, Figma</td>
</tr>
</tbody></table></div>
                            `,
                            nextButton: 'Siguiente: Herramientas de gestión de proyectos'
                        },
                        {
                            title: 'Herramientas de gestión de proyectos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Herramienta</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso principal</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Jira</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Gestión de backlog, historias de usuario, sprints, tableros Scrum y Kanban, reportes de avance.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Azure DevOps Boards</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Elementos de trabajo, backlog y sprints integrados con repositorios y pipelines.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Trello</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Tableros Kanban sencillos para equipos pequeños.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>GitHub Projects</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Tableros y tareas vinculados a issues y pull requests.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Microsoft Project</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Cronogramas, diagramas de Gantt y asignación de recursos en proyectos tradicionales.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Confluence, Notion, wikis</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Documentación compartida del proyecto.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Teams, Slack</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Comunicación diaria del equipo.</td>
</tr>
</tbody></table></div>
<div style="background:#eef5ff; border-left:5px solid #00928d; border-radius:8px; padding:12px 16px; margin:16px 0;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-book-open" style="color:#00928d;" aria-hidden="true"></i> <strong style="color:#00734a;">Caso BiblioTEC</strong></p><p>El equipo de BiblioTEC usa <strong>Visual Studio Code</strong> para programar, <strong>GitHub</strong> para el código, <strong>GitHub Actions</strong> para ejecutar las pruebas en cada cambio y <strong>Jira</strong> para el Product Backlog y los sprints. Cada historia de usuario en Jira se vincula con los commits que la implementan.</p></div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Una herramienta no reemplaza al proceso: un tablero de Jira desordenado no hace ágil a un equipo. Primero se define cómo se trabaja y luego se configura la herramienta.</p>
                            `,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_003',
            label: 'Etapas del desarrollo',
            subtemas: [
                {
                    id: 'm003-requerimientos',
                    label: 'Ingeniería de requerimientos',
                    steps: [
                        {
                            title: 'Primera etapa: requerimientos',
                            content: `<p>Todo desarrollo de software inicia por entender <strong>qué</strong> se necesita. La etapa de <strong>ingeniería de requerimientos</strong> identifica a las partes interesadas, descubre sus necesidades, las analiza, las documenta y verifica que estén correctas antes de diseñar.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Entrada</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Actividades</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Salida</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Problema u oportunidad de negocio, partes interesadas, documentos existentes.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Educción, análisis, especificación, validación y gestión de requerimientos.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Especificación de requerimientos (documento SRS, casos de uso o Product Backlog con historias de usuario).</td>
</tr>
</tbody></table></div>
<div style="background:#eef5ff; border-left:5px solid #00928d; border-radius:8px; padding:12px 16px; margin:16px 0;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-book-open" style="color:#00928d;" aria-hidden="true"></i> <strong style="color:#00734a;">Caso BiblioTEC</strong></p><ul>
<li><strong>RF-01</strong>: El sistema debe registrar el préstamo de un ejemplar a un estudiante activo.</li>
<li><strong>RF-02</strong>: El sistema debe calcular una multa de 500 colones por cada día de atraso en la devolución.</li>
<li><strong>RNF-01</strong>: La búsqueda en el catálogo debe responder en un máximo de 2 segundos con 200 usuarios simultáneos.</li>
</ul></div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Esta etapa es tan importante que los módulos 4, 5, 6 y 7 se dedican por completo a ella. Aquí solo se ubica dentro del proceso completo.</p>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-diseno',
                    label: 'Diseño del software',
                    steps: [
                        {
                            title: '¿Qué es el diseño?',
                            content: `<p>El <strong>diseño</strong> transforma los requerimientos (el <em>qué</em>) en una solución técnica (el <em>cómo</em>). Define la estructura del sistema antes de programarlo.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Nivel de diseño</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Decide…</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Productos</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Arquitectónico</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Componentes principales, tecnologías y cómo se comunican.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Diagrama de arquitectura, diagrama de componentes y de despliegue.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>De datos</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Estructura de la información y su almacenamiento.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Modelo entidad-relación, esquema de base de datos.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>De interfaz de usuario</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Pantallas, navegación y experiencia de uso.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Wireframes, prototipos (Figma), guía de estilo.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Detallado o de componentes</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Clases, funciones, algoritmos.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Diagramas de clases y de secuencia, pseudocódigo.</td>
</tr>
</tbody></table></div>
                            `,
                            nextButton: 'Siguiente: Principios de diseño'
                        },
                        {
                            title: 'Principios de diseño',
                            content: `<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(210px, 1fr)); gap:12px; margin:14px 0;">
<div style="border:1px solid #d2d2d2; border-top:4px solid #164a98; border-radius:10px; padding:12px 14px; background:#fff;"><p style="margin:0 0 6px 0; color:#164a98;"><i class="fa-solid fa-layer-group" aria-hidden="true"></i> <strong>Abstracción</strong></p><p style="margin:0;">Mostrar lo esencial y ocultar los detalles.</p></div>
<div style="border:1px solid #d2d2d2; border-top:4px solid #164a98; border-radius:10px; padding:12px 14px; background:#fff;"><p style="margin:0 0 6px 0; color:#164a98;"><i class="fa-solid fa-cubes" aria-hidden="true"></i> <strong>Modularidad</strong></p><p style="margin:0;">Dividir el sistema en partes independientes.</p></div>
<div style="border:1px solid #d2d2d2; border-top:4px solid #164a98; border-radius:10px; padding:12px 14px; background:#fff;"><p style="margin:0 0 6px 0; color:#164a98;"><i class="fa-solid fa-lock" aria-hidden="true"></i> <strong>Encapsulamiento</strong></p><p style="margin:0;">Cada módulo oculta su implementación y expone una interfaz.</p></div>
<div style="border:1px solid #d2d2d2; border-top:4px solid #164a98; border-radius:10px; padding:12px 14px; background:#fff;"><p style="margin:0 0 6px 0; color:#164a98;"><i class="fa-solid fa-bullseye" aria-hidden="true"></i> <strong>Alta cohesión</strong></p><p style="margin:0;">Cada módulo tiene una sola responsabilidad.</p></div>
<div style="border:1px solid #d2d2d2; border-top:4px solid #164a98; border-radius:10px; padding:12px 14px; background:#fff;"><p style="margin:0 0 6px 0; color:#164a98;"><i class="fa-solid fa-link-slash" aria-hidden="true"></i> <strong>Bajo acoplamiento</strong></p><p style="margin:0;">Los módulos dependen lo mínimo unos de otros.</p></div>
<div style="border:1px solid #d2d2d2; border-top:4px solid #164a98; border-radius:10px; padding:12px 14px; background:#fff;"><p style="margin:0 0 6px 0; color:#164a98;"><i class="fa-solid fa-recycle" aria-hidden="true"></i> <strong>Reutilización</strong></p><p style="margin:0;">Aprovechar componentes, bibliotecas y patrones existentes.</p></div>
</div>
<p>Los <strong>patrones de diseño</strong> son soluciones probadas a problemas de diseño frecuentes. Por ejemplo, el patrón <em>Observador</em> permite avisar a varios componentes cuando algo cambia: cuando un libro reservado se devuelve, BiblioTEC notifica por correo al estudiante que lo reservó.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Diagrama UML</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Muestra</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Casos de uso</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Qué funciones ofrece el sistema a cada actor.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Clases</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Clases, atributos, métodos y relaciones.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Secuencia</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">El orden de los mensajes entre objetos en un escenario.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Actividad</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">El flujo de un proceso, con decisiones y actividades en paralelo.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Estados</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Los estados de un objeto y los eventos que lo hacen cambiar.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Componentes y despliegue</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Las partes del sistema y dónde se ejecutan.</td>
</tr>
</tbody></table></div>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-construccion',
                    label: 'Construcción del software',
                    steps: [
                        {
                            title: 'Construcción',
                            content: `<p>La <strong>construcción</strong> es la creación del software funcional mediante la codificación, la verificación, las pruebas unitarias y la depuración. Su producto principal es el <strong>código fuente</strong>.</p>
<p><strong>Prácticas de construcción</strong></p>
<ul>
<li><strong>Estándares de codificación</strong>: reglas de nombres, formato y comentarios que sigue todo el equipo (por ejemplo, PEP 8 en Python).</li>
<li><strong>Control de versiones</strong>: cada cambio se registra con un commit que describe qué se hizo.</li>
<li><strong>Revisión de código</strong>: otra persona revisa los cambios antes de integrarlos (pull request).</li>
<li><strong>Integración continua</strong>: cada cambio se compila y se prueba automáticamente.</li>
<li><strong>Refactorización</strong>: mejorar la estructura del código sin cambiar su comportamiento.</li>
</ul>
                            `,
                            nextButton: 'Siguiente: Código legible'
                        },
                        {
                            title: 'Código legible',
                            content: `<p>El código se lee muchas más veces de las que se escribe. Compare dos versiones de la misma función:</p>
<pre class="codigo">def c(d):
    return d * 500 if d &gt; 0 else 0</pre>
<pre class="codigo">COSTO_POR_DIA_ATRASO = 500

def calcular_multa(dias_atraso):
    if dias_atraso &gt; 0:
        return dias_atraso * COSTO_POR_DIA_ATRASO
    return 0</pre>
<p>La segunda versión usa nombres que explican su propósito y una constante para el monto. Si la biblioteca cambia el costo por día, se modifica en un solo lugar.</p>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Los asistentes de IA pueden generar código, pero la responsabilidad de entenderlo, revisarlo, probarlo y mantenerlo sigue siendo del equipo de desarrollo.</p>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-pruebas',
                    label: 'Depuración y pruebas',
                    steps: [
                        {
                            title: 'Pruebas de software',
                            content: `<p><strong>Probar</strong> es ejecutar el software con datos preparados para encontrar defectos y comprobar que cumple los requerimientos. Las pruebas pueden mostrar la presencia de errores, pero no su ausencia (Dijkstra).</p>
<svg viewBox="0 0 710 280" role="img" aria-label="Modelo en V" style="--ancho:680px; display:block; width:100%; max-width:calc(var(--ancho) * var(--escala, 1)); height:auto; margin:16px auto; font-family:Arial, sans-serif;" xmlns="http://www.w3.org/2000/svg"><defs><marker id="m3-v-f" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#164a98"/></marker></defs><rect x="10" y="10" width="170" height="40" rx="8" fill="#164a98" stroke="#164a98" stroke-width="1.5"/><text x="95" y="30" text-anchor="middle" dominant-baseline="middle" font-size="12" fill="#ffffff" font-weight="bold">Requerimientos</text><rect x="530" y="10" width="170" height="40" rx="8" fill="#00928d" stroke="#164a98" stroke-width="1.5"/><text x="615" y="30" text-anchor="middle" dominant-baseline="middle" font-size="12" fill="#ffffff" font-weight="bold">Pruebas de aceptación</text><line x1="180" y1="30" x2="530" y2="30" stroke="#9CC8FF" stroke-width="2" stroke-dasharray="6 4"/><rect x="70" y="70" width="170" height="40" rx="8" fill="#164a98" stroke="#164a98" stroke-width="1.5"/><text x="155" y="90" text-anchor="middle" dominant-baseline="middle" font-size="12" fill="#ffffff" font-weight="bold">Diseño del sistema</text><rect x="470" y="70" width="170" height="40" rx="8" fill="#00928d" stroke="#164a98" stroke-width="1.5"/><text x="555" y="90" text-anchor="middle" dominant-baseline="middle" font-size="12" fill="#ffffff" font-weight="bold">Pruebas de sistema</text><line x1="240" y1="90" x2="470" y2="90" stroke="#9CC8FF" stroke-width="2" stroke-dasharray="6 4"/><rect x="130" y="130" width="170" height="40" rx="8" fill="#164a98" stroke="#164a98" stroke-width="1.5"/><text x="215" y="150" text-anchor="middle" dominant-baseline="middle" font-size="12" fill="#ffffff" font-weight="bold">Diseño detallado</text><rect x="410" y="130" width="170" height="40" rx="8" fill="#00928d" stroke="#164a98" stroke-width="1.5"/><text x="495" y="150" text-anchor="middle" dominant-baseline="middle" font-size="12" fill="#ffffff" font-weight="bold">Pruebas de integración</text><line x1="300" y1="150" x2="410" y2="150" stroke="#9CC8FF" stroke-width="2" stroke-dasharray="6 4"/><rect x="265" y="200" width="180" height="40" rx="8" fill="#ffc63e" stroke="#164a98" stroke-width="1.5"/><text x="355" y="213" text-anchor="middle" dominant-baseline="middle" font-size="12" fill="#164a98" font-weight="bold">Codificación</text><text x="355" y="227" text-anchor="middle" dominant-baseline="middle" font-size="12" fill="#164a98" font-weight="bold">(pruebas unitarias)</text><path d="M215,170 L285,198" fill="none" stroke="#164a98" stroke-width="2" marker-end="url(#m3-v-f)"/><path d="M425,200 L495,172" fill="none" stroke="#164a98" stroke-width="2" marker-end="url(#m3-v-f)"/><text x="355" y="268" text-anchor="middle" dominant-baseline="middle" font-size="11" fill="#164a98">Cada fase de la izquierda define cómo se prueba la fase correspondiente de la derecha</text></svg>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Nivel</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Qué se prueba</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Quién lo hace normalmente</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Unitaria</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Cada función, método o clase por separado.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Quien programa.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Integración</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Que los módulos funcionen juntos.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Equipo de desarrollo.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Sistema</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">El sistema completo contra los requerimientos funcionales y no funcionales.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Equipo de pruebas (QA).</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Aceptación</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Que el sistema satisface las necesidades del cliente.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Cliente o personas usuarias.</td>
</tr>
</tbody></table></div>
                            `,
                            nextButton: 'Siguiente: Tipos de prueba y caso de prueba'
                        },
                        {
                            title: 'Tipos de prueba y caso de prueba',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Caja negra</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se prueba con entradas y salidas esperadas, sin mirar el código.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Caja blanca</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se diseñan pruebas a partir de la estructura interna del código (recorrer cada decisión).</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Regresión</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se vuelven a ejecutar pruebas anteriores para confirmar que un cambio no dañó lo que ya funcionaba.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Rendimiento y carga</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se mide el tiempo de respuesta con muchas personas usuarias.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Seguridad</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se buscan vulnerabilidades y accesos no autorizados.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Usabilidad</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se observa a personas reales usando el sistema.</td>
</tr>
</tbody></table></div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">ID</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Entrada</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Resultado esperado</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Requerimiento</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">CP-01</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Devolución con 0 días de atraso</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Multa = 0</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">RF-02</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">CP-02</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Devolución con 3 días de atraso</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Multa = 1500</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">RF-02</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">CP-03</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Préstamo a un estudiante inactivo</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Mensaje «El estudiante no está activo» y no se registra el préstamo</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">RF-01</td>
</tr>
</tbody></table></div>
                            `,
                            nextButton: 'Siguiente: Depuración'
                        },
                        {
                            title: 'Depuración',
                            content: `<p><strong>Depurar</strong> es localizar y corregir la causa de un defecto que una prueba reveló. Probar encuentra el síntoma; depurar encuentra la causa.</p>
<p><strong>Pasos de la depuración</strong></p>
<ol>
<li><strong>Reproducir</strong> el error con datos concretos.</li>
<li><strong>Localizar</strong> la causa: leer los mensajes de error, usar el depurador del IDE (puntos de interrupción, ejecución paso a paso, inspección de variables) o imprimir valores intermedios.</li>
<li><strong>Corregir</strong> la causa, no solo el síntoma.</li>
<li><strong>Probar</strong> de nuevo el caso que fallaba y ejecutar las pruebas de regresión.</li>
<li><strong>Registrar</strong> el defecto y su solución en la herramienta del equipo.</li>
</ol>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Error, defecto y falla no son lo mismo: una persona comete un <strong>error</strong>, que introduce un <strong>defecto</strong> en el código; al ejecutarse, el defecto puede producir una <strong>falla</strong> visible.</p>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-despliegue',
                    label: 'Despliegue e implementación',
                    steps: [
                        {
                            title: 'Despliegue',
                            content: `<p>El <strong>despliegue</strong> es poner el software en el ambiente donde lo usarán las personas. La <strong>implementación</strong> (o implantación) incluye además la migración de datos, la capacitación y el acompañamiento durante el arranque.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ambiente</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Propósito</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Desarrollo</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Donde cada persona programa y prueba sus cambios.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Pruebas (QA)</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Donde el equipo de pruebas valida las versiones.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Preproducción (staging)</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Copia lo más fiel posible de producción para la prueba final.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Producción</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Donde trabajan las personas usuarias reales.</td>
</tr>
</tbody></table></div>
<p><strong>Elementos de una implementación</strong></p>
<ul>
<li>Plan de despliegue con fecha, responsables y pasos.</li>
<li>Migración de los datos del sistema anterior.</li>
<li>Plan de reversión (<em>rollback</em>) por si algo falla.</li>
<li>Capacitación y manuales para las personas usuarias.</li>
<li>Monitoreo del sistema después de la puesta en producción.</li>
</ul>
                            `,
                            nextButton: 'Siguiente: Estrategias de implementación'
                        },
                        {
                            title: 'Estrategias de implementación',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Estrategia</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Riesgo</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Directa (big bang)</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se apaga el sistema anterior y se enciende el nuevo el mismo día.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Alto</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Paralela</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Ambos sistemas funcionan al mismo tiempo durante un período.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Bajo, pero costoso</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Piloto</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">El sistema se implementa primero en un grupo o sede.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Medio</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Por fases</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se implementan los módulos de forma gradual.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Medio</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Azul-verde (blue-green)</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se mantienen dos ambientes de producción y se cambia el tráfico de uno a otro.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Bajo</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Canario (canary)</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">La nueva versión se libera primero a un porcentaje pequeño de personas usuarias.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Bajo</td>
</tr>
</tbody></table></div>
<div style="background:#eef5ff; border-left:5px solid #00928d; border-radius:8px; padding:12px 16px; margin:16px 0;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-book-open" style="color:#00928d;" aria-hidden="true"></i> <strong style="color:#00734a;">Caso BiblioTEC</strong></p><p>BiblioTEC se implementa primero como <strong>piloto</strong> en la biblioteca de una sede durante un mes. Se migran los registros de libros desde una hoja de cálculo, se capacita al personal y, después de corregir los problemas encontrados, se implementa en las demás sedes.</p></div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
En DevOps, la entrega continua permite desplegar varias veces al día con pipelines automatizados, porque cada cambio pasa por las mismas pruebas antes de llegar a producción.</p>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-mantenimiento',
                    label: 'Mantenimiento del software',
                    steps: [
                        {
                            title: 'Tipos de mantenimiento',
                            content: `<p>El <strong>mantenimiento</strong> es toda modificación al software después de entregarlo. Suele representar la mayor parte del costo total del ciclo de vida, porque un sistema puede usarse durante muchos años. La norma ISO/IEC/IEEE 14764 distingue cuatro tipos:</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Propósito</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo en BiblioTEC</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Correctivo</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Corregir defectos encontrados en producción.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">La multa se calculaba mal cuando la devolución caía en día feriado.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Adaptativo</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Adaptar el software a cambios del entorno.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Actualizar la aplicación móvil para una nueva versión de Android.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Perfectivo</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Mejorar funciones o agregar nuevas.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Agregar recomendaciones de libros según el historial.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Preventivo</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Evitar problemas futuros.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Refactorizar el módulo de reservas y actualizar bibliotecas con vulnerabilidades.</td>
</tr>
</tbody></table></div>
                            `,
                            nextButton: 'Siguiente: Evolución y deuda técnica'
                        },
                        {
                            title: 'Evolución y deuda técnica',
                            content: `<p>Las <strong>leyes de Lehman</strong> describen la evolución del software: un sistema que se usa en el mundo real debe cambiar continuamente o se vuelve menos útil, y su complejidad aumenta con cada cambio, a menos que se trabaje para reducirla.</p>
<p>La <strong>deuda técnica</strong> es el costo futuro de elegir hoy una solución rápida en lugar de una mejor. Como una deuda financiera, genera «intereses»: cada cambio posterior cuesta más.</p>
<p><strong>Cómo facilitar el mantenimiento</strong></p>
<ul>
<li>Escribir código legible y con pruebas automatizadas.</li>
<li>Mantener actualizada la documentación esencial y la trazabilidad de los requerimientos.</li>
<li>Usar control de versiones y registrar cada cambio.</li>
<li>Reservar tiempo en cada iteración para refactorizar.</li>
</ul>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Un requerimiento bien escrito y trazable facilita el mantenimiento: cuando cambia una regla de negocio, se sabe qué diseño, qué código y qué pruebas se ven afectados.</p>
                            `,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_004',
            label: 'Introducción a requerimientos',
            subtemas: [
                {
                    id: 'm004-definicion',
                    label: 'Definición',
                    steps: [
                        {
                            title: '¿Qué es un requerimiento?',
                            content: `<p>Un <strong>requerimiento</strong> (o requisito) es una condición o capacidad que el sistema debe cumplir para resolver un problema o alcanzar un objetivo de las partes interesadas. Describe <strong>qué</strong> debe hacer el sistema o <strong>con qué calidad o restricción</strong>, no cómo se programa.</p>
<p>La <strong>ingeniería de requerimientos</strong> es el proceso de descubrir, analizar, documentar, validar y gestionar los requerimientos de un sistema durante todo su ciclo de vida.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Término</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Parte interesada (stakeholder)</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Persona u organización que afecta o es afectada por el sistema: cliente, personas usuarias, patrocinador, equipo, entes reguladores.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Requerimiento de negocio</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Objetivo de alto nivel de la organización. Ej.: reducir en 50 % el tiempo de atención en la biblioteca.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Requerimiento de usuario</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Lo que las personas usuarias necesitan hacer, en su lenguaje. Ej.: reservar un libro desde el celular.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Requerimiento de sistema o de software</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Descripción detallada y verificable de lo que el sistema debe hacer.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Requerimiento funcional</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Función o servicio que el sistema debe ofrecer.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Requerimiento no funcional</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Calidad o restricción del sistema (rendimiento, seguridad, usabilidad).</td>
</tr>
</tbody></table></div>
                            `,
                            nextButton: 'Siguiente: Niveles de un requerimiento'
                        },
                        {
                            title: 'Niveles de un requerimiento',
                            content: `<div style="background:#eef5ff; border-left:5px solid #00928d; border-radius:8px; padding:12px 16px; margin:16px 0;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-book-open" style="color:#00928d;" aria-hidden="true"></i> <strong style="color:#00734a;">Caso BiblioTEC</strong></p><div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Nivel</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Redacción</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Negocio</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">La biblioteca quiere reducir la cantidad de libros que se devuelven con atraso.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Usuario</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Como estudiante, quiero recibir un recordatorio antes de la fecha de devolución para no pagar multa.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Sistema</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">El sistema debe enviar un correo electrónico al estudiante 24 horas antes de la fecha límite de devolución de cada préstamo activo.</td>
</tr>
</tbody></table></div></div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Un requerimiento no es una solución técnica. «Usar una base de datos MySQL» es una restricción de diseño; «guardar el historial de préstamos durante cinco años» es un requerimiento.</p>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-objetivos',
                    label: 'Objetivos y beneficios',
                    steps: [
                        {
                            title: 'Objetivos',
                            content: `<p><strong>Objetivos de la ingeniería de requerimientos</strong></p>
<ul>
<li>Comprender el problema y el contexto del negocio antes de proponer una solución.</li>
<li>Identificar a todas las partes interesadas y sus necesidades.</li>
<li>Llegar a un acuerdo entre el cliente y el equipo sobre lo que se va a construir.</li>
<li>Proporcionar una base para estimar el costo, el tiempo y el esfuerzo.</li>
<li>Proporcionar una base para el diseño, la construcción y las pruebas.</li>
<li>Controlar los cambios durante el proyecto.</li>
</ul>
<p>Varios estudios sobre proyectos de software (por ejemplo, los informes CHAOS del Standish Group) señalan entre las principales causas de fracaso los requerimientos incompletos, la falta de participación de las personas usuarias y los cambios de requerimientos sin control.</p>
                            `,
                            nextButton: 'Siguiente: Beneficios'
                        },
                        {
                            title: 'Beneficios',
                            content: `<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(210px, 1fr)); gap:12px; margin:14px 0;">
<div style="border:1px solid #d2d2d2; border-top:4px solid #00928d; border-radius:10px; padding:12px 14px; background:#fff;"><p style="margin:0 0 6px 0; color:#00928d;"><i class="fa-solid fa-coins" aria-hidden="true"></i> <strong>Menor costo</strong></p><p style="margin:0;">Un defecto de requerimientos corregido a tiempo cuesta mucho menos que corregirlo en producción.</p></div>
<div style="border:1px solid #d2d2d2; border-top:4px solid #00928d; border-radius:10px; padding:12px 14px; background:#fff;"><p style="margin:0 0 6px 0; color:#00928d;"><i class="fa-solid fa-handshake" aria-hidden="true"></i> <strong>Acuerdo claro</strong></p><p style="margin:0;">Cliente y equipo comparten una misma visión del alcance.</p></div>
<div style="border:1px solid #d2d2d2; border-top:4px solid #00928d; border-radius:10px; padding:12px 14px; background:#fff;"><p style="margin:0 0 6px 0; color:#00928d;"><i class="fa-solid fa-calendar-check" aria-hidden="true"></i> <strong>Mejores estimaciones</strong></p><p style="margin:0;">Se estima a partir de requerimientos concretos y no de suposiciones.</p></div>
<div style="border:1px solid #d2d2d2; border-top:4px solid #00928d; border-radius:10px; padding:12px 14px; background:#fff;"><p style="margin:0 0 6px 0; color:#00928d;"><i class="fa-solid fa-vial-circle-check" aria-hidden="true"></i> <strong>Pruebas con base</strong></p><p style="margin:0;">Cada requerimiento verificable produce uno o más casos de prueba.</p></div>
<div style="border:1px solid #d2d2d2; border-top:4px solid #00928d; border-radius:10px; padding:12px 14px; background:#fff;"><p style="margin:0 0 6px 0; color:#00928d;"><i class="fa-solid fa-arrows-rotate" aria-hidden="true"></i> <strong>Cambios controlados</strong></p><p style="margin:0;">Se conoce el impacto de cada cambio antes de aprobarlo.</p></div>
<div style="border:1px solid #d2d2d2; border-top:4px solid #00928d; border-radius:10px; padding:12px 14px; background:#fff;"><p style="margin:0 0 6px 0; color:#00928d;"><i class="fa-solid fa-face-smile" aria-hidden="true"></i> <strong>Satisfacción</strong></p><p style="margin:0;">El producto resuelve la necesidad real de las personas usuarias.</p></div>
</div>
<div style="background:#eef5ff; border-left:5px solid #00928d; border-radius:8px; padding:12px 16px; margin:16px 0;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-book-open" style="color:#00928d;" aria-hidden="true"></i> <strong style="color:#00734a;">Caso BiblioTEC</strong></p><p>Si nadie pregunta a la biblioteca qué pasa con los préstamos en días feriados, el sistema calculará multas incorrectas. Detectarlo en una entrevista toma minutos; detectarlo cuando ya hay estudiantes reclamando obliga a corregir código, datos y multas ya cobradas.</p></div>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-ciclo',
                    label: 'Ciclo de vida de la ingeniería de requerimientos',
                    steps: [
                        {
                            title: 'Actividades del ciclo',
                            content: `<p>Las actividades de la ingeniería de requerimientos no se hacen una sola vez: se repiten en ciclos, porque cada actividad genera nuevas preguntas.</p>
<svg viewBox="0 0 650 250" role="img" aria-label="Ciclo de vida de la ingeniería de requerimientos" style="--ancho:620px; display:block; width:100%; max-width:calc(var(--ancho) * var(--escala, 1)); height:auto; margin:16px auto; font-family:Arial, sans-serif;" xmlns="http://www.w3.org/2000/svg"><defs><marker id="m4-ciclo-f" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#164a98"/></marker></defs><rect x="20" y="20" width="150" height="46" rx="8" fill="#164a98" stroke="#164a98" stroke-width="1.5"/><text x="95" y="43" text-anchor="middle" dominant-baseline="middle" font-size="13" fill="#ffffff" font-weight="bold">1. Educción</text><rect x="250" y="20" width="150" height="46" rx="8" fill="#006AEA" stroke="#164a98" stroke-width="1.5"/><text x="325" y="43" text-anchor="middle" dominant-baseline="middle" font-size="13" fill="#ffffff" font-weight="bold">2. Análisis</text><rect x="480" y="20" width="150" height="46" rx="8" fill="#00928d" stroke="#164a98" stroke-width="1.5"/><text x="555" y="43" text-anchor="middle" dominant-baseline="middle" font-size="13" fill="#ffffff" font-weight="bold">3. Especificación</text><rect x="250" y="120" width="150" height="46" rx="8" fill="#712c86" stroke="#164a98" stroke-width="1.5"/><text x="325" y="143" text-anchor="middle" dominant-baseline="middle" font-size="13" fill="#ffffff" font-weight="bold">4. Validación</text><path d="M170,43 L248,43" fill="none" stroke="#164a98" stroke-width="2" marker-end="url(#m4-ciclo-f)"/><path d="M400,43 L478,43" fill="none" stroke="#164a98" stroke-width="2" marker-end="url(#m4-ciclo-f)"/><path d="M555,66 L555,143 L402,143" fill="none" stroke="#164a98" stroke-width="2" marker-end="url(#m4-ciclo-f)"/><path d="M250,143 L95,143 L95,68" fill="none" stroke="#164a98" stroke-width="2" marker-end="url(#m4-ciclo-f)"/><text x="170" y="158" text-anchor="middle" dominant-baseline="middle" font-size="11" fill="#712c86">nuevas preguntas</text><rect x="20" y="200" width="610" height="40" rx="8" fill="#ffc63e" stroke="#164a98" stroke-width="1.5"/><text x="325" y="220" text-anchor="middle" dominant-baseline="middle" font-size="12" fill="#164a98" font-weight="bold">5. Gestión de requerimientos: planificación, trazabilidad, control de cambios</text></svg>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Actividad</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Propósito</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Resultado</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Educción</strong> (obtención o elicitación)</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Descubrir las necesidades de las partes interesadas.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Notas de entrevistas, necesidades, problemas identificados.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Análisis</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Clasificar, detallar, resolver conflictos y priorizar.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Requerimientos organizados y priorizados, modelos.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Especificación</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Documentar los requerimientos de forma clara y verificable.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">SRS, casos de uso, historias de usuario, prototipos.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Validación</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Confirmar con las partes interesadas que los requerimientos son correctos y completos.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Requerimientos aprobados (línea base).</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Gestión</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Controlar los cambios y mantener la trazabilidad durante todo el proyecto.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Matriz de trazabilidad, registro de cambios.</td>
</tr>
</tbody></table></div>
                            `,
                            nextButton: 'Siguiente: El ciclo en tradicional y en ágil'
                        },
                        {
                            title: 'El ciclo en tradicional y en ágil',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Aspecto</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Enfoque tradicional</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Enfoque ágil</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Momento</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">La mayoría de los requerimientos se definen al inicio.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se definen de forma progresiva, sprint a sprint.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Documento</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Especificación de requerimientos de software (SRS).</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Product Backlog con historias de usuario y criterios de aceptación.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Validación</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Revisión y aprobación formal del documento.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Sprint Review y criterios de aceptación de cada historia.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Cambios</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Proceso formal de control de cambios.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se reordena el Product Backlog.</td>
</tr>
</tbody></table></div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
En ambos enfoques se realizan las mismas actividades. Lo que cambia es cuándo, con qué nivel de detalle y con qué formalidad.</p>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-tecnicas',
                    label: 'Técnicas y herramientas',
                    steps: [
                        {
                            title: 'Técnicas por actividad',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Actividad</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Técnicas</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Educción</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Entrevistas, cuestionarios, observación, talleres (JAD), lluvia de ideas, análisis de documentos, prototipos.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Análisis</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Clasificación funcional / no funcional, modelado (casos de uso, diagramas de actividad), resolución de conflictos, priorización (MoSCoW).</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Especificación</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Plantilla SRS (ISO/IEC/IEEE 29148), casos de uso, historias de usuario, prototipos, especificación formal.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Validación</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Revisiones e inspecciones, recorridos con el cliente, prototipos, generación de casos de prueba, listas de verificación.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Gestión</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Matriz de trazabilidad, línea base, solicitudes de cambio, control de versiones de los requerimientos.</td>
</tr>
</tbody></table></div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Las técnicas de educción se estudian en detalle en el módulo 5 y las de gestión y modelado en el módulo 6.</p>
                            `,
                            nextButton: 'Siguiente: Herramientas'
                        },
                        {
                            title: 'Herramientas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplos</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Gestión de requerimientos</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Jira, Azure DevOps, Jama Connect, IBM DOORS</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Registrar requerimientos, priorizarlos, vincularlos con tareas y pruebas.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Modelado</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">draw.io, Lucidchart, Enterprise Architect, Visual Paradigm</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Diagramas UML, BPMN, mapas de procesos.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Prototipado</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Figma, Balsamiq, Penpot</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Bocetos y prototipos navegables de la interfaz.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Colaboración</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Confluence, Miro, Google Docs, Microsoft Teams</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Documentos compartidos, talleres en línea, tableros de ideas.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Encuestas</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Microsoft Forms, Google Forms</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Cuestionarios para muchas personas usuarias.</td>
</tr>
</tbody></table></div>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-ambito',
                    label: 'Ámbito de aplicación',
                    steps: [
                        {
                            title: '¿Dónde se aplica?',
                            content: `<p>La ingeniería de requerimientos se aplica en cualquier proyecto que produzca un sistema, pero su nivel de formalidad cambia según el tipo de sistema y el riesgo.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo de sistema</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Énfasis de los requerimientos</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Sistemas de información empresarial</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Reglas de negocio, procesos, reportes, integración.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Sistema de matrícula, planillas, BiblioTEC.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Aplicaciones web y móviles</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Usabilidad, rendimiento, compatibilidad con dispositivos.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Aplicación de un banco o de transporte.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Sistemas críticos</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Seguridad, fiabilidad, cumplimiento de normas; especificación muy formal.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Equipos médicos, control aéreo, sistemas ferroviarios.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Sistemas embebidos e IoT</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Restricciones de hardware, tiempo real, consumo de energía.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Sensores de una casa inteligente, sistemas de un automóvil.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Sistemas con inteligencia artificial</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Calidad de los datos, explicabilidad, sesgos, privacidad.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Sistema que recomienda créditos.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Productos comerciales (SaaS)</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Necesidades del mercado y no de un solo cliente.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Plataformas de videoconferencia.</td>
</tr>
</tbody></table></div>
                            `,
                            nextButton: 'Siguiente: Más allá del software'
                        },
                        {
                            title: 'Más allá del software',
                            content: `<p><strong>Otros ámbitos</strong></p>
<ul>
<li><strong>Ingeniería de sistemas</strong>: requerimientos que combinan hardware, software, personas y procesos.</li>
<li><strong>Contratación pública y privada</strong>: los requerimientos forman parte del cartel o del contrato y definen qué se acepta.</li>
<li><strong>Mejora de procesos</strong>: los requerimientos de negocio guían la transformación digital de una organización.</li>
<li><strong>Mantenimiento</strong>: cada solicitud de cambio en un sistema existente es un nuevo requerimiento que se analiza y se gestiona.</li>
</ul>
<div style="background:#eef5ff; border-left:5px solid #00928d; border-radius:8px; padding:12px 16px; margin:16px 0;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-book-open" style="color:#00928d;" aria-hidden="true"></i> <strong style="color:#00734a;">Caso BiblioTEC</strong></p><p>BiblioTEC es un sistema de información con una aplicación móvil. Sus requerimientos combinan reglas de negocio (préstamos, multas), usabilidad (consultar desde el celular), integración (sistema de matrícula) y privacidad (historial de préstamos).</p></div>
                            `,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_005',
            label: 'Análisis y especificación',
            subtemas: [
                {
                    id: 'm005-educcion',
                    label: 'Educción de requerimientos',
                    steps: [
                        {
                            title: '¿Qué es la educción?',
                            content: `<p>La <strong>educción</strong> (también llamada obtención, elicitación o captura) es la actividad de descubrir los requerimientos junto con las partes interesadas. No consiste en «recoger» requerimientos que ya existen: muchas veces las personas no saben explicar lo que necesitan, lo dan por obvio o tienen necesidades en conflicto.</p>
<p><strong>Dificultades de la educción</strong></p>
<ul>
<li>Las personas usuarias expresan soluciones en lugar de necesidades («quiero un botón rojo»).</li>
<li>Usan un vocabulario propio del negocio que el equipo no conoce.</li>
<li>Diferentes partes interesadas tienen prioridades distintas.</li>
<li>Hay conocimiento tácito: lo que se hace «por costumbre» y nadie menciona.</li>
<li>Los requerimientos cambian mientras se descubren.</li>
</ul>
                            `,
                            nextButton: 'Siguiente: Técnicas de educción'
                        },
                        {
                            title: 'Técnicas de educción',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Técnica</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Cómo se aplica</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Conviene cuando…</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Entrevista</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Conversación con preguntas preparadas. Puede ser estructurada (preguntas fijas), no estructurada (conversación abierta) o semiestructurada.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se necesita profundizar con pocas personas clave.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Cuestionario o encuesta</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Preguntas escritas, cerradas o abiertas, para muchas personas.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Hay muchas personas usuarias o están dispersas.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Observación (etnografía)</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Observar a las personas mientras realizan su trabajo real.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Hay conocimiento tácito o procesos que nadie documentó.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Taller (JAD)</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Sesión facilitada con varias partes interesadas para acordar requerimientos.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Hay que poner de acuerdo a varias áreas.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Lluvia de ideas</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Generar muchas ideas sin juzgarlas y luego agruparlas.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se busca innovar o explorar opciones.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Análisis de documentos</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Revisar reglamentos, formularios, manuales y sistemas existentes.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Hay normativa o un sistema anterior.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Prototipos</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Mostrar bocetos o pantallas para obtener retroalimentación.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Las personas usuarias no logran describir lo que necesitan.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Escenarios e historias</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Describir situaciones concretas de uso, paso a paso.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se quiere entender el flujo real de una tarea.</td>
</tr>
</tbody></table></div>
                            `,
                            nextButton: 'Siguiente: Preparar una entrevista'
                        },
                        {
                            title: 'Preparar una entrevista',
                            content: `<p><strong>Pasos</strong></p>
<ol>
<li>Definir el objetivo y a quién entrevistar.</li>
<li>Investigar el negocio y revisar documentos antes de la reunión.</li>
<li>Preparar preguntas abiertas («¿cómo registra hoy un préstamo?») y cerradas («¿cuántos préstamos hay por día?»).</li>
<li>Durante la entrevista, escuchar, pedir ejemplos concretos y evitar sugerir soluciones.</li>
<li>Resumir lo entendido al final y confirmarlo con la persona entrevistada.</li>
<li>Documentar los resultados el mismo día y enviarlos para revisión.</li>
</ol>
<div style="background:#eef5ff; border-left:5px solid #00928d; border-radius:8px; padding:12px 16px; margin:16px 0;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-book-open" style="color:#00928d;" aria-hidden="true"></i> <strong style="color:#00734a;">Caso BiblioTEC</strong></p><p><strong>Preguntas para la jefatura de la biblioteca</strong></p>
<ul>
<li>¿Cómo se registra hoy un préstamo? ¿Qué datos se anotan?</li>
<li>¿Qué sucede si un estudiante devuelve un libro con atraso? ¿Cómo se calcula la multa?</li>
<li>¿Qué pasa con los préstamos cuando la biblioteca cierra por feriados o vacaciones?</li>
<li>¿Quién puede ver el historial de préstamos de un estudiante?</li>
<li>¿Cuál es el principal problema del proceso actual?</li>
</ul></div>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-necesidades',
                    label: 'Necesidades y problemas del usuario',
                    steps: [
                        {
                            title: 'Del problema a la necesidad',
                            content: `<p>Antes de escribir requerimientos hay que entender el <strong>problema</strong> que se quiere resolver y a <strong>quiénes</strong> afecta. Un requerimiento que no responde a una necesidad real agrega costo sin aportar valor.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Herramienta</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Propósito</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Declaración del problema</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Describir en pocas líneas el problema, a quién afecta, su impacto y cómo sería una buena solución.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Mapa de partes interesadas</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Identificar a las personas involucradas y clasificarlas según su interés y su influencia.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Personas (perfiles de usuario)</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Describir usuarios representativos: objetivos, tareas, frustraciones, nivel técnico.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Mapa de empatía o de experiencia</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Representar lo que la persona usuaria piensa, siente, hace y dice en cada paso del proceso.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Análisis de causa raíz</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Encontrar la causa de un problema con «los 5 porqués» o con un diagrama de Ishikawa.</td>
</tr>
</tbody></table></div>
                            `,
                            nextButton: 'Siguiente: Declaración del problema'
                        },
                        {
                            title: 'Declaración del problema',
                            content: `<div style="background:#eef5ff; border-left:5px solid #00928d; border-radius:8px; padding:12px 16px; margin:16px 0;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-book-open" style="color:#00928d;" aria-hidden="true"></i> <strong style="color:#00734a;">Caso BiblioTEC</strong></p><div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Elemento</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Contenido</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">El problema de…</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">registrar préstamos y devoluciones en una hoja de cálculo compartida</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">afecta a…</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">estudiantes, bibliotecarios y la jefatura de la biblioteca</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">cuyo impacto es…</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">filas largas, multas calculadas a mano con errores y libros que no se sabe quién tiene</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">una solución exitosa…</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">permitiría registrar un préstamo en menos de un minuto, calcular las multas de forma automática y consultar la disponibilidad desde el celular</td>
</tr>
</tbody></table></div></div>
<div style="background:#f7f1fa; border:1px solid #c9a6d5; border-radius:10px; padding:12px 16px; margin:16px 0;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-pen-to-square" style="color:#712c86;" aria-hidden="true"></i> <strong style="color:#712c86;">Los 5 porqués</strong></p><ol>
<li>¿Por qué hay tantos libros devueltos con atraso? Porque los estudiantes olvidan la fecha.</li>
<li>¿Por qué la olvidan? Porque solo se anota en un papel que se pierde.</li>
<li>¿Por qué solo en un papel? Porque no existe un registro que el estudiante pueda consultar.</li>
<li>¿Por qué no existe? Porque el control se lleva en una hoja de cálculo interna.</li>
<li>Causa raíz: el estudiante no tiene acceso a la información de sus préstamos. Necesidad: consultar sus préstamos y recibir recordatorios.</li>
</ol></div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Separe siempre la <strong>necesidad</strong> («saber cuándo debo devolver el libro») de la <strong>solución</strong> («enviar un SMS»). Puede haber varias soluciones para una misma necesidad.</p>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-func-nofunc',
                    label: 'Requerimientos funcionales y no funcionales',
                    steps: [
                        {
                            title: 'Funcionales y no funcionales',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Describe</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplos en BiblioTEC</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Funcional (RF)</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Lo que el sistema debe <em>hacer</em>: servicios, cálculos, reacciones a entradas.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">RF-03: El sistema debe permitir al estudiante reservar un ejemplar que esté prestado.<br>RF-04: El sistema debe impedir un nuevo préstamo a un estudiante con multas pendientes.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>No funcional (RNF)</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><em>Cómo de bien</em> debe hacerlo o con qué restricciones: calidad, rendimiento, seguridad, normas.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">RNF-02: El sistema debe estar disponible el 99 % del tiempo de lunes a sábado de 7:00 a 22:00.<br>RNF-03: Las contraseñas deben almacenarse cifradas con un algoritmo de hash seguro.</td>
</tr>
</tbody></table></div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Categoría de RNF</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo verificable</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Rendimiento</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">La búsqueda responde en máximo 2 segundos con 200 usuarios simultáneos.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Usabilidad</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Un estudiante nuevo completa una reserva en menos de 3 minutos sin ayuda.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Disponibilidad y fiabilidad</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Disponible 99 % del horario de servicio.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Seguridad</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se bloquea la cuenta después de 5 intentos fallidos de inicio de sesión.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Mantenibilidad</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">El monto de la multa se configura sin modificar el código.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Compatibilidad / portabilidad</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">La aplicación funciona en las dos últimas versiones de Android e iOS.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Legales y normativos</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Cumple la Ley 8968 de protección de datos personales.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Accesibilidad</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">El sitio cumple el nivel AA de las pautas WCAG 2.1.</td>
</tr>
</tbody></table></div>
                            `,
                            nextButton: 'Siguiente: Analizar requerimientos'
                        },
                        {
                            title: 'Analizar requerimientos',
                            content: `<p><strong>Analizar</strong> es revisar los requerimientos obtenidos para que sean claros, completos y consistentes, y decidir cuáles se incluyen.</p>
<p><strong>Tareas del análisis</strong></p>
<ul>
<li><strong>Clasificar</strong>: funcional o no funcional, por módulo o por actor.</li>
<li><strong>Detallar</strong>: completar datos, reglas y excepciones.</li>
<li><strong>Detectar conflictos</strong>: por ejemplo, «el sistema debe ser muy seguro» frente a «no se quiere usar contraseña».</li>
<li><strong>Negociar</strong>: acordar una solución entre las partes interesadas.</li>
<li><strong>Priorizar</strong>: definir qué se construye primero (módulo 6).</li>
</ul>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Requerimiento ambiguo</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Requerimiento verificable</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">El sistema debe ser rápido.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">La búsqueda en el catálogo debe responder en un máximo de 2 segundos con 200 usuarios simultáneos.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">El sistema debe ser fácil de usar.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">El 90 % de los estudiantes debe completar una reserva sin ayuda en su primer intento.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">El sistema debe calcular las multas.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">El sistema debe calcular la multa multiplicando los días hábiles de atraso por 500 colones.</td>
</tr>
</tbody></table></div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Evite palabras ambiguas como «rápido», «amigable», «fácil», «etc.», «adecuado» o «y/o». Si un requerimiento no se puede probar, no se puede saber si se cumplió.</p>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-casos-uso',
                    label: 'Casos de uso y prototipos',
                    steps: [
                        {
                            title: 'Diagrama de casos de uso',
                            content: `<p>Un <strong>caso de uso</strong> describe cómo un <strong>actor</strong> (persona o sistema externo) interactúa con el sistema para alcanzar un objetivo. El <strong>diagrama de casos de uso</strong> de UML muestra los actores, los casos de uso y el límite del sistema.</p>
<svg viewBox="0 0 720 320" role="img" aria-label="Diagrama de casos de uso de BiblioTEC" style="--ancho:680px; display:block; width:100%; max-width:calc(var(--ancho) * var(--escala, 1)); height:auto; margin:16px auto; font-family:Arial, sans-serif;" xmlns="http://www.w3.org/2000/svg"><defs><marker id="m5-cu-f" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#164a98"/></marker></defs><rect x="150" y="10" width="440" height="300" rx="10" fill="none" stroke="#7c7b75" stroke-width="1.5"/><text x="370" y="28" text-anchor="middle" dominant-baseline="middle" font-size="13" fill="#164a98" font-weight="bold">BiblioTEC</text><circle cx="60" cy="60" r="11" fill="none" stroke="#164a98" stroke-width="2"/><line x1="60" y1="71" x2="60" y2="102" stroke="#164a98" stroke-width="2"/><line x1="44" y1="82" x2="76" y2="82" stroke="#164a98" stroke-width="2"/><line x1="60" y1="102" x2="47" y2="122" stroke="#164a98" stroke-width="2"/><line x1="60" y1="102" x2="73" y2="122" stroke="#164a98" stroke-width="2"/><text x="60" y="138" text-anchor="middle" dominant-baseline="middle" font-size="12" fill="#164a98" font-weight="bold">Estudiante</text><circle cx="670" cy="140" r="11" fill="none" stroke="#164a98" stroke-width="2"/><line x1="670" y1="151" x2="670" y2="182" stroke="#164a98" stroke-width="2"/><line x1="654" y1="162" x2="686" y2="162" stroke="#164a98" stroke-width="2"/><line x1="670" y1="182" x2="657" y2="202" stroke="#164a98" stroke-width="2"/><line x1="670" y1="182" x2="683" y2="202" stroke="#164a98" stroke-width="2"/><text x="670" y="218" text-anchor="middle" dominant-baseline="middle" font-size="12" fill="#164a98" font-weight="bold">Bibliotecario</text><ellipse cx="280" cy="70" rx="88" ry="24" fill="#eef5ff" stroke="#164a98" stroke-width="1.5"/><text x="280" y="70" text-anchor="middle" dominant-baseline="middle" font-size="12" fill="#164a98">Consultar catálogo</text><ellipse cx="280" cy="140" rx="88" ry="24" fill="#eef5ff" stroke="#164a98" stroke-width="1.5"/><text x="280" y="140" text-anchor="middle" dominant-baseline="middle" font-size="12" fill="#164a98">Reservar ejemplar</text><ellipse cx="470" cy="200" rx="88" ry="24" fill="#eef5ff" stroke="#164a98" stroke-width="1.5"/><text x="470" y="200" text-anchor="middle" dominant-baseline="middle" font-size="12" fill="#164a98">Registrar préstamo</text><ellipse cx="470" cy="275" rx="88" ry="24" fill="#eef5ff" stroke="#164a98" stroke-width="1.5"/><text x="470" y="275" text-anchor="middle" dominant-baseline="middle" font-size="12" fill="#164a98">Registrar devolución</text><ellipse cx="245" cy="275" rx="88" ry="24" fill="#eef5ff" stroke="#164a98" stroke-width="1.5"/><text x="245" y="275" text-anchor="middle" dominant-baseline="middle" font-size="12" fill="#164a98">Calcular multa</text><line x1="78" y1="95" x2="192" y2="72" stroke="#164a98" stroke-width="1.5"/><line x1="78" y1="100" x2="192" y2="138" stroke="#164a98" stroke-width="1.5"/><line x1="652" y1="175" x2="558" y2="200" stroke="#164a98" stroke-width="1.5"/><line x1="652" y1="185" x2="558" y2="273" stroke="#164a98" stroke-width="1.5"/><path d="M382,275 L336,275" fill="none" stroke="#712c86" stroke-width="1.5" stroke-dasharray="5 4" marker-end="url(#m5-cu-f)"/><text x="359" y="262" text-anchor="middle" dominant-baseline="middle" font-size="11" fill="#712c86">«include»</text></svg>
<p><strong>Elementos</strong></p>
<ul>
<li><strong>Actor</strong>: figura humana fuera del límite del sistema.</li>
<li><strong>Caso de uso</strong>: óvalo con un verbo en infinitivo y un objeto («Reservar ejemplar»).</li>
<li><strong>Asociación</strong>: línea entre un actor y un caso de uso.</li>
<li><strong>«include»</strong>: un caso de uso siempre incluye a otro (registrar la devolución siempre calcula la multa).</li>
<li><strong>«extend»</strong>: un caso de uso agrega comportamiento opcional a otro bajo cierta condición.</li>
</ul>
                            `,
                            nextButton: 'Siguiente: Especificación de un caso de uso'
                        },
                        {
                            title: 'Especificación de un caso de uso',
                            content: `<p>El diagrama da una vista general; el detalle se escribe en una <strong>especificación textual</strong>.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Campo</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Contenido</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Nombre</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">CU-04 Registrar devolución</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Actor principal</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Bibliotecario</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Precondición</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">El bibliotecario inició sesión. El ejemplar tiene un préstamo activo.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Flujo principal</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">1. El bibliotecario escanea el código del ejemplar.<br>2. El sistema muestra el préstamo activo y la fecha límite.<br>3. El bibliotecario confirma la devolución.<br>4. El sistema calcula la multa (incluye CU-05 Calcular multa).<br>5. El sistema registra la devolución y marca el ejemplar como disponible.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Flujo alternativo</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">4a. Si hay atraso, el sistema muestra el monto de la multa y la registra como pendiente.<br>5a. Si el ejemplar tiene una reserva, el sistema lo marca como reservado y notifica al estudiante.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Excepción</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">1a. Si el código no existe, el sistema muestra «Ejemplar no encontrado» y regresa al paso 1.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Poscondición</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">El préstamo queda cerrado y el estado del ejemplar queda actualizado.</td>
</tr>
</tbody></table></div>
                            `,
                            nextButton: 'Siguiente: Prototipos'
                        },
                        {
                            title: 'Prototipos',
                            content: `<p>Un <strong>prototipo</strong> es una versión preliminar de la interfaz o del sistema que se usa para descubrir y validar requerimientos. Las personas usuarias reaccionan mejor ante algo que pueden ver que ante una descripción.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Herramientas</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Baja fidelidad</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Bocetos en papel o wireframes en blanco y negro; rápidos y baratos.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Papel, Balsamiq</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Alta fidelidad</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Pantallas con diseño casi final y navegación simulada.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Figma, Penpot</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Desechable</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se construye para aprender y luego se descarta.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Cualquiera</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Evolutivo</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se mejora de forma progresiva hasta convertirse en el sistema final.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">El mismo lenguaje del sistema</td>
</tr>
</tbody></table></div>
<div style="background:#eef5ff; border-left:5px solid #00928d; border-radius:8px; padding:12px 16px; margin:16px 0;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-book-open" style="color:#00928d;" aria-hidden="true"></i> <strong style="color:#00734a;">Caso BiblioTEC</strong></p><p>Con un prototipo en Figma de la pantalla «Mis préstamos», los estudiantes indicaron que querían ver cuántos días faltan para devolver cada libro, un dato que no había salido en ninguna entrevista.</p></div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Aclare siempre a las partes interesadas que un prototipo no es el sistema terminado, para no crear expectativas falsas sobre el avance.</p>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-validacion',
                    label: 'Validación y verificación',
                    steps: [
                        {
                            title: 'Validar y verificar requerimientos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;"></th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Verificación</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Validación</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Pregunta</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">¿Los requerimientos están bien escritos?</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">¿Son los requerimientos correctos para el cliente?</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se revisa contra</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Estándares, plantillas, reglas de redacción.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Las necesidades reales de las partes interesadas.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Ejemplo</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">El requerimiento tiene un identificador, es verificable y no es ambiguo.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">La bibliotecaria confirma que la multa se cobra solo en días hábiles.</td>
</tr>
</tbody></table></div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Técnica</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Revisión o inspección</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Un grupo revisa el documento con una lista de verificación y registra los defectos encontrados.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Recorrido (walkthrough)</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">El autor presenta los requerimientos a las partes interesadas paso a paso.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Prototipado</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Las personas usuarias prueban un prototipo y confirman o corrigen los requerimientos.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Generación de casos de prueba</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Si no se puede escribir una prueba para un requerimiento, el requerimiento es ambiguo o incompleto.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Validación de modelos</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Revisar que los diagramas sean consistentes con el texto.</td>
</tr>
</tbody></table></div>
                            `,
                            nextButton: 'Siguiente: Lista de verificación'
                        },
                        {
                            title: 'Lista de verificación',
                            content: `<p><strong>Preguntas para revisar cada requerimiento</strong></p>
<ul>
<li>¿Cada requerimiento tiene un identificador único?</li>
<li>¿Es verificable (se puede escribir una prueba)?</li>
<li>¿Es inequívoco (tiene una sola interpretación)?</li>
<li>¿Es completo (incluye datos, reglas y excepciones)?</li>
<li>¿Es consistente (no contradice otro requerimiento)?</li>
<li>¿Es factible con el presupuesto, el tiempo y la tecnología disponibles?</li>
<li>¿Está ligado a una necesidad o a un objetivo de negocio?</li>
<li>¿Describe el qué y no el cómo?</li>
</ul>
<div style="background:#eef5ff; border-left:5px solid #00928d; border-radius:8px; padding:12px 16px; margin:16px 0;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-book-open" style="color:#00928d;" aria-hidden="true"></i> <strong style="color:#00734a;">Caso BiblioTEC</strong></p><p>En la revisión se detectó que RF-04 («impedir un préstamo a un estudiante con multas pendientes») y RF-07 («los profesores pueden prestar sin límite») no aclaraban si un profesor con multas puede prestar. La jefatura decidió que la regla de RF-04 aplica también a los profesores y se corrigieron ambos requerimientos.</p></div>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-seguridad',
                    label: 'Requerimientos de seguridad',
                    steps: [
                        {
                            title: 'Requerimientos de seguridad',
                            content: `<p>Los <strong>requerimientos de seguridad</strong> definen cómo el sistema protege la información y los servicios frente a accesos o usos no autorizados. Deben definirse desde el inicio: agregar seguridad al final es más costoso y menos efectivo (principio de <em>seguridad desde el diseño</em>).</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Propiedad</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Requerimiento en BiblioTEC</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Confidencialidad</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Solo las personas autorizadas acceden a la información.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Solo el personal de la biblioteca puede consultar el historial de préstamos de un estudiante.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Integridad</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">La información no se modifica sin autorización.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Solo la jefatura puede anular una multa, y el sistema registra quién la anuló.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Disponibilidad</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">El sistema funciona cuando se necesita.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">El sistema se recupera de una falla en menos de 1 hora.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Autenticación</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se verifica la identidad de la persona.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">El ingreso se hace con la cuenta institucional y doble factor para el personal.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Autorización</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Cada rol accede solo a lo que le corresponde.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Un estudiante solo ve sus propios préstamos.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Auditoría (no repudio)</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Queda registro de quién hizo qué y cuándo.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se registra fecha, hora y usuario de cada préstamo, devolución y anulación.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Privacidad</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se tratan los datos personales según la ley.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Los datos se usan solo para la gestión de préstamos (Ley 8968).</td>
</tr>
</tbody></table></div>
                            `,
                            nextButton: 'Siguiente: Casos de mal uso'
                        },
                        {
                            title: 'Casos de mal uso',
                            content: `<p>Un <strong>caso de mal uso</strong> (<em>misuse case</em>) describe lo que un actor malicioso podría intentar hacer con el sistema. Ayuda a descubrir requerimientos de seguridad que los casos de uso normales no muestran.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Caso de mal uso</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Amenaza</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Requerimiento de seguridad derivado</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Adivinar contraseñas</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Un atacante prueba muchas contraseñas.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Bloquear la cuenta 15 minutos después de 5 intentos fallidos.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Ver préstamos de otra persona</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Un estudiante cambia el identificador en la URL.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Validar en el servidor que el préstamo pertenece al usuario autenticado.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Inyectar código en la búsqueda</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se escribe código SQL en el campo de búsqueda.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Validar las entradas y usar consultas parametrizadas.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Interceptar datos</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se capturan datos en una red Wi-Fi pública.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Toda la comunicación usa HTTPS.</td>
</tr>
</tbody></table></div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Guías como el estándar OWASP ASVS (Application Security Verification Standard) y el OWASP Top 10 ayudan a identificar requerimientos de seguridad verificables para aplicaciones web.</p>
                            `,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_006',
            label: 'Gestión y modelado',
            subtemas: [
                {
                    id: 'm006-planificacion',
                    label: 'Planificación de la gestión',
                    steps: [
                        {
                            title: 'Gestión de requerimientos',
                            content: `<p>La <strong>gestión de requerimientos</strong> es el conjunto de actividades que mantienen los requerimientos organizados, actualizados y controlados durante todo el proyecto. Los requerimientos cambian: la gestión no busca evitar los cambios, sino controlarlos.</p>
<p>El <strong>plan de gestión de requerimientos</strong> define, al inicio del proyecto, cómo se van a manejar:</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Elemento del plan</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Pregunta que responde</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Roles y responsabilidades</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">¿Quién propone, analiza, aprueba y mantiene los requerimientos?</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Atributos</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">¿Qué datos se registran de cada requerimiento? (identificador, descripción, prioridad, estado, origen, responsable, versión)</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Estados</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">¿Por qué estados pasa un requerimiento? (propuesto, aprobado, en desarrollo, implementado, verificado, rechazado)</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Priorización</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">¿Con qué técnica y criterios se priorizan?</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Trazabilidad</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">¿Con qué elementos se vincula cada requerimiento?</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Control de cambios</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">¿Cómo se solicita, evalúa y aprueba un cambio?</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Herramientas</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">¿Dónde se registran los requerimientos? (Jira, Azure DevOps, hoja de cálculo)</td>
</tr>
</tbody></table></div>
                            `,
                            nextButton: 'Siguiente: Línea base'
                        },
                        {
                            title: 'Línea base',
                            content: `<p>Una <strong>línea base</strong> es el conjunto de requerimientos revisados y aprobados en un momento dado. A partir de ella, cualquier cambio debe pasar por el proceso de control de cambios. Cada línea base tiene una versión (por ejemplo, v1.0, v1.1).</p>
<div style="background:#eef5ff; border-left:5px solid #00928d; border-radius:8px; padding:12px 16px; margin:16px 0;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-book-open" style="color:#00928d;" aria-hidden="true"></i> <strong style="color:#00734a;">Caso BiblioTEC</strong></p><div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">ID</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Prioridad</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Estado</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Origen</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Versión</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">RF-01</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Registrar préstamo a un estudiante activo</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Must</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Aprobado</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Entrevista con la jefatura</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">1.0</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">RF-02</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Calcular multa de 500 colones por día hábil de atraso</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Must</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Aprobado</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Reglamento de la biblioteca</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">1.1</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">RF-03</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Reservar un ejemplar prestado</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Should</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Aprobado</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Encuesta a estudiantes</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">1.0</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">RF-08</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Recomendar libros según el historial</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Could</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Propuesto</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Taller con estudiantes</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">—</td>
</tr>
</tbody></table></div></div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
RF-02 está en la versión 1.1 porque cambió de «por día» a «por día hábil» después de la validación. El historial de versiones permite saber qué cambió, cuándo y por qué.</p>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-priorizacion',
                    label: 'Priorización, trazabilidad y cambios',
                    steps: [
                        {
                            title: 'Priorización',
                            content: `<p>Casi nunca hay tiempo y presupuesto para todo. <strong>Priorizar</strong> es decidir qué requerimientos se implementan primero, según su valor, su costo, su riesgo y sus dependencias.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Técnica</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Cómo funciona</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>MoSCoW</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>M</strong>ust (obligatorio), <strong>S</strong>hould (importante), <strong>C</strong>ould (deseable), <strong>W</strong>on't (no se hará en esta versión).</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Alta / media / baja</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Clasificación simple por importancia para el negocio.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Valor contra esfuerzo</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Matriz de 2 × 2: primero lo de alto valor y bajo esfuerzo.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>100 puntos</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Cada parte interesada reparte 100 puntos entre los requerimientos.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Modelo de Kano</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Clasifica en básicos (se esperan), de desempeño (más es mejor) y de entusiasmo (sorprenden).</td>
</tr>
</tbody></table></div>
                            `,
                            nextButton: 'Siguiente: Trazabilidad'
                        },
                        {
                            title: 'Trazabilidad',
                            content: `<p>La <strong>trazabilidad</strong> es la capacidad de seguir un requerimiento hacia atrás (¿de dónde salió?) y hacia adelante (¿en qué diseño, código y pruebas se implementó?). Permite analizar el impacto de un cambio y comprobar que todo requerimiento se implementó y se probó.</p>
<div style="background:#eef5ff; border-left:5px solid #00928d; border-radius:8px; padding:12px 16px; margin:16px 0;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-book-open" style="color:#00928d;" aria-hidden="true"></i> <strong style="color:#00734a;">Caso BiblioTEC</strong></p><div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Requerimiento</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Origen</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Caso de uso</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Componente</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Casos de prueba</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">RF-01</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Entrevista con la jefatura</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">CU-03 Registrar préstamo</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">prestamos.py</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">CP-03, CP-04</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">RF-02</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Reglamento, art. 12</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">CU-05 Calcular multa</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">multas.py</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">CP-01, CP-02</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">RF-03</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Encuesta a estudiantes</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">CU-02 Reservar ejemplar</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">reservas.py</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">CP-07</td>
</tr>
</tbody></table></div></div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Si un requerimiento no tiene casos de prueba en la matriz, no hay forma de demostrar que se cumplió. Si un componente no está ligado a ningún requerimiento, puede ser funcionalidad que nadie pidió.</p>
                            `,
                            nextButton: 'Siguiente: Control de cambios'
                        },
                        {
                            title: 'Control de cambios',
                            content: `<p><strong>Proceso de control de cambios</strong></p>
<ol>
<li><strong>Solicitud</strong>: una parte interesada registra el cambio y su motivo.</li>
<li><strong>Análisis de impacto</strong>: con la matriz de trazabilidad se identifican los requerimientos, diseños, código y pruebas afectados, y se estima el costo y el tiempo.</li>
<li><strong>Decisión</strong>: un comité de control de cambios (CCB) o el Product Owner aprueba, rechaza o pospone el cambio.</li>
<li><strong>Implementación</strong>: se actualizan los requerimientos, el diseño, el código y las pruebas.</li>
<li><strong>Verificación y comunicación</strong>: se prueba el cambio, se actualiza la línea base y se informa a las partes interesadas.</li>
</ol>
<div style="background:#eef5ff; border-left:5px solid #00928d; border-radius:8px; padding:12px 16px; margin:16px 0;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-book-open" style="color:#00928d;" aria-hidden="true"></i> <strong style="color:#00734a;">Caso BiblioTEC</strong></p><p>La biblioteca solicita que la multa no se cobre en días feriados. El análisis de impacto muestra que afecta RF-02, CU-05, el componente multas.py y los casos CP-01 y CP-02. El cambio se aprueba, se agrega un calendario de feriados y RF-02 pasa a la versión 1.2.</p></div>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-calidad',
                    label: 'Aseguramiento de la calidad',
                    steps: [
                        {
                            title: 'Características de un buen requerimiento',
                            content: `<p>La norma <strong>ISO/IEC/IEEE 29148</strong> define las características que debe tener cada requerimiento individual y el conjunto de requerimientos.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Característica</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Contraejemplo</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Necesario</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Responde a una necesidad real; si se elimina, falta algo.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Agregar un chat interno que nadie pidió.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Inequívoco</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Tiene una sola interpretación.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">«El sistema debe mostrar los préstamos recientes».</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Completo</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Incluye toda la información necesaria.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">«Calcular la multa» (sin indicar cómo).</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Singular</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Expresa una sola capacidad.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">«Registrar préstamos y generar reportes y enviar correos».</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Factible</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se puede lograr con los recursos disponibles.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">«Disponibilidad del 100 %».</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Verificable</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se puede comprobar con una prueba, inspección o análisis.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">«El sistema debe ser amigable».</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Correcto</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Representa con exactitud la necesidad.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Multa por día natural cuando el reglamento dice día hábil.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Consistente (conjunto)</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">No contradice otros requerimientos.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Dos montos de multa distintos en dos requerimientos.</td>
</tr>
</tbody></table></div>
                            `,
                            nextButton: 'Siguiente: Prácticas de aseguramiento'
                        },
                        {
                            title: 'Prácticas de aseguramiento',
                            content: `<p><strong>Prácticas</strong></p>
<ul>
<li>Usar una plantilla y un vocabulario común (glosario de términos del negocio).</li>
<li>Redactar con una estructura fija: «El sistema debe + verbo + objeto + condición».</li>
<li>Revisar cada requerimiento con una lista de verificación antes de aprobarlo.</li>
<li>Hacer inspecciones con personas que no escribieron los requerimientos.</li>
<li>Medir: cantidad de defectos encontrados en requerimientos, porcentaje de requerimientos que cambian, requerimientos sin casos de prueba.</li>
<li>Mantener la trazabilidad y el historial de versiones.</li>
</ul>
<div style="background:#f7f1fa; border:1px solid #c9a6d5; border-radius:10px; padding:12px 16px; margin:16px 0;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-pen-to-square" style="color:#712c86;" aria-hidden="true"></i> <strong style="color:#712c86;">Plantilla de redacción</strong></p><p><strong>[Condición]</strong> + el sistema debe + <strong>[verbo]</strong> + <strong>[objeto]</strong> + <strong>[criterio medible]</strong>.</p>
<p>Cuando un préstamo cumpla 24 horas antes de su fecha límite, el sistema debe enviar un correo de recordatorio al estudiante.</p></div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Un glosario evita malentendidos: en BiblioTEC, «libro» es la obra (título, autor, ISBN) y «ejemplar» es cada copia física que se presta.</p>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-negocio',
                    label: 'Modelado del negocio',
                    steps: [
                        {
                            title: '¿Qué es el modelado del negocio?',
                            content: `<p>El <strong>modelado del negocio</strong> representa cómo funciona la organización: sus procesos, actores, reglas y la información que usa. Se hace antes o durante la educción, para entender el contexto en el que funcionará el sistema.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Elemento</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Proceso de negocio</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Conjunto de actividades que produce un resultado de valor.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Prestar un libro.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Actor de negocio</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Persona o rol que participa en el proceso.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Estudiante, bibliotecario.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Regla de negocio</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Política o condición que el negocio debe cumplir.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Un estudiante puede tener como máximo 3 préstamos activos.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Objeto de negocio</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Información o cosa que se maneja en el proceso.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Ejemplar, préstamo, multa.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Modelo AS-IS</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Cómo funciona el proceso hoy.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Préstamo anotado en una hoja de cálculo.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Modelo TO-BE</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Cómo funcionará con el nuevo sistema.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Préstamo registrado con el código de barras del ejemplar.</td>
</tr>
</tbody></table></div>
                            `,
                            nextButton: 'Siguiente: BPMN'
                        },
                        {
                            title: 'BPMN',
                            content: `<p><strong>BPMN</strong> (Business Process Model and Notation) es la notación estándar para modelar procesos de negocio. Usa eventos (círculos), actividades (rectángulos redondeados), compuertas de decisión (rombos) y flujos (flechas).</p>
<svg viewBox="0 0 750 160" role="img" aria-label="Proceso de préstamo en notación BPMN" style="--ancho:720px; display:block; width:100%; max-width:calc(var(--ancho) * var(--escala, 1)); height:auto; margin:16px auto; font-family:Arial, sans-serif;" xmlns="http://www.w3.org/2000/svg"><defs><marker id="m6-bpmn-f" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#164a98"/></marker></defs><circle cx="30" cy="80" r="16" fill="#ffffff" stroke="#00734a" stroke-width="2.5"/><text x="30" y="112" text-anchor="middle" dominant-baseline="middle" font-size="11" fill="#164a98">Inicio</text><rect x="70" y="58" width="130" height="44" rx="10" fill="#eef5ff" stroke="#164a98" stroke-width="1.5"/><text x="135" y="73" text-anchor="middle" dominant-baseline="middle" font-size="12" fill="#164a98" font-weight="bold">Solicitar</text><text x="135" y="87" text-anchor="middle" dominant-baseline="middle" font-size="12" fill="#164a98" font-weight="bold">libro</text><rect x="240" y="58" width="130" height="44" rx="10" fill="#eef5ff" stroke="#164a98" stroke-width="1.5"/><text x="305" y="73" text-anchor="middle" dominant-baseline="middle" font-size="12" fill="#164a98" font-weight="bold">Verificar</text><text x="305" y="87" text-anchor="middle" dominant-baseline="middle" font-size="12" fill="#164a98" font-weight="bold">disponibilidad</text><polygon points="440,52 468,80 440,108 412,80" fill="#fff8e1" stroke="#C7AC19" stroke-width="2"/><text x="440" y="80" text-anchor="middle" dominant-baseline="middle" font-size="18" fill="#C7AC19" font-weight="bold">×</text><text x="392" y="116" text-anchor="middle" dominant-baseline="middle" font-size="11" fill="#164a98">¿Disponible?</text><rect x="520" y="10" width="140" height="44" rx="10" fill="#eef5ff" stroke="#164a98" stroke-width="1.5"/><text x="590" y="25" text-anchor="middle" dominant-baseline="middle" font-size="12" fill="#164a98" font-weight="bold">Registrar</text><text x="590" y="39" text-anchor="middle" dominant-baseline="middle" font-size="12" fill="#164a98" font-weight="bold">préstamo</text><rect x="520" y="106" width="140" height="44" rx="10" fill="#eef5ff" stroke="#164a98" stroke-width="1.5"/><text x="590" y="121" text-anchor="middle" dominant-baseline="middle" font-size="12" fill="#164a98" font-weight="bold">Ofrecer</text><text x="590" y="135" text-anchor="middle" dominant-baseline="middle" font-size="12" fill="#164a98" font-weight="bold">reserva</text><circle cx="720" cy="32" r="16" fill="#ffffff" stroke="#d2232a" stroke-width="4"/><circle cx="720" cy="128" r="16" fill="#ffffff" stroke="#d2232a" stroke-width="4"/><path d="M46,80 L68,80" fill="none" stroke="#164a98" stroke-width="2" marker-end="url(#m6-bpmn-f)"/><path d="M200,80 L238,80" fill="none" stroke="#164a98" stroke-width="2" marker-end="url(#m6-bpmn-f)"/><path d="M370,80 L410,80" fill="none" stroke="#164a98" stroke-width="2" marker-end="url(#m6-bpmn-f)"/><path d="M440,52 L440,32 L518,32" fill="none" stroke="#164a98" stroke-width="2" marker-end="url(#m6-bpmn-f)"/><path d="M440,108 L440,128 L518,128" fill="none" stroke="#164a98" stroke-width="2" marker-end="url(#m6-bpmn-f)"/><path d="M660,32 L702,32" fill="none" stroke="#164a98" stroke-width="2" marker-end="url(#m6-bpmn-f)"/><path d="M660,128 L702,128" fill="none" stroke="#164a98" stroke-width="2" marker-end="url(#m6-bpmn-f)"/><text x="475" y="22" text-anchor="middle" dominant-baseline="middle" font-size="11" fill="#164a98" font-weight="bold">Sí</text><text x="475" y="140" text-anchor="middle" dominant-baseline="middle" font-size="11" fill="#164a98" font-weight="bold">No</text></svg>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Símbolo</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Círculo de borde delgado</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Evento de inicio.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Rectángulo redondeado</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Actividad o tarea.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Rombo con ×</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Compuerta exclusiva: se toma un solo camino según la condición.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Círculo de borde grueso</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Evento de fin.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Carriles (pools y lanes)</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Separan las actividades según el actor o el área que las realiza.</td>
</tr>
</tbody></table></div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Comparar el modelo AS-IS con el TO-BE muestra qué actividades se automatizan, cuáles desaparecen y cuáles cambian; de esas diferencias salen muchos requerimientos.</p>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-modelado',
                    label: 'Técnicas de modelado',
                    steps: [
                        {
                            title: 'Modelos de requerimientos',
                            content: `<p>Un <strong>modelo</strong> es una representación simplificada del sistema que ayuda a entender, comunicar y validar los requerimientos. Un diagrama suele mostrar relaciones y flujos que un texto largo oculta.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Técnica</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Muestra</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso en requerimientos</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Diagrama de casos de uso (UML)</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Actores y funciones del sistema.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Alcance funcional del sistema.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Diagrama de actividad (UML)</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Flujo de un proceso, con decisiones y actividades en paralelo.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Detallar un caso de uso o un proceso.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Modelo de dominio / diagrama de clases (UML)</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Conceptos del negocio, atributos y relaciones.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Vocabulario y datos que maneja el sistema.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Diagrama de estados (UML)</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Estados de un objeto y eventos que los cambian.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Ciclo de vida de un ejemplar o de un préstamo.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Diagrama de secuencia (UML)</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Mensajes entre actores y sistema en el tiempo.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Interacción de un escenario concreto.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Diagrama de flujo de datos (DFD)</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Procesos, datos y almacenes.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Flujo de información en el análisis estructurado.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Mapa de historias de usuario</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Historias organizadas por actividades del usuario y por versión.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Planificar entregas en proyectos ágiles.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Tabla o árbol de decisión</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Combinaciones de condiciones y acciones.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Reglas de negocio complejas.</td>
</tr>
</tbody></table></div>
                            `,
                            nextButton: 'Siguiente: Ejemplos de modelado'
                        },
                        {
                            title: 'Ejemplos de modelado',
                            content: `<div style="background:#eef5ff; border-left:5px solid #00928d; border-radius:8px; padding:12px 16px; margin:16px 0;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-book-open" style="color:#00928d;" aria-hidden="true"></i> <strong style="color:#00734a;">Caso BiblioTEC</strong></p><div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Estado actual del ejemplar</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Evento</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Estado siguiente</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Disponible</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se registra un préstamo</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Prestado</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Prestado</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se registra la devolución sin reserva</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Disponible</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Prestado</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se registra la devolución con reserva</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Reservado</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Reservado</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">El estudiante que reservó lo retira</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Prestado</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Disponible</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se reporta daño</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">En reparación</td>
</tr>
</tbody></table></div></div>
<div style="background:#f7f1fa; border:1px solid #c9a6d5; border-radius:10px; padding:12px 16px; margin:16px 0;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-pen-to-square" style="color:#712c86;" aria-hidden="true"></i> <strong style="color:#712c86;">Tabla de decisión: ¿se permite el préstamo?</strong></p><div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Condición</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">R1</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">R2</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">R3</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">R4</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Estudiante activo</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Sí</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Sí</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Sí</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">No</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Tiene multas pendientes</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">No</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Sí</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">No</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">—</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Tiene menos de 3 préstamos activos</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Sí</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">—</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">No</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">—</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Acción</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Prestar</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Rechazar</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Rechazar</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Rechazar</td>
</tr>
</tbody></table></div></div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Una tabla de decisión revela combinaciones que nadie había considerado. Cada columna (regla) se convierte en al menos un caso de prueba.</p>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-formal',
                    label: 'Especificación formal',
                    steps: [
                        {
                            title: '¿Qué es una especificación formal?',
                            content: `<p>Una <strong>especificación formal</strong> describe los requerimientos con un lenguaje basado en las matemáticas (lógica y teoría de conjuntos). Al tener una sintaxis y una semántica precisas, elimina la ambigüedad del lenguaje natural y permite demostrar propiedades del sistema.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Lenguaje o método</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Características</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Z</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Basado en teoría de conjuntos; organiza la especificación en esquemas de estado y operaciones.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>B y Event-B</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Permiten refinar la especificación paso a paso hasta llegar al código, con demostraciones.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>VDM</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Método de desarrollo de Viena; describe tipos, estados y operaciones con pre y poscondiciones.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>OCL</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Lenguaje de restricciones de UML: agrega invariantes, precondiciones y poscondiciones a los diagramas.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>TLA+ y verificación de modelos</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Especifican sistemas concurrentes y distribuidos y verifican automáticamente sus propiedades.</td>
</tr>
</tbody></table></div>
<p><strong>Cuándo usarla</strong></p>
<ul>
<li><strong>Ventajas</strong>: precisión, detección temprana de inconsistencias, posibilidad de verificar con herramientas.</li>
<li><strong>Desventajas</strong>: requieren formación especializada, son costosas y difíciles de leer para el cliente.</li>
<li><strong>Uso</strong>: sistemas críticos (ferroviarios, aeronáuticos, médicos, criptográficos) o partes críticas de un sistema.</li>
</ul>
                            `,
                            nextButton: 'Siguiente: Precondiciones, poscondiciones e invariantes'
                        },
                        {
                            title: 'Precondiciones, poscondiciones e invariantes',
                            content: `<p>La base de la especificación formal es describir cada operación con una <strong>precondición</strong> (lo que debe cumplirse antes), una <strong>poscondición</strong> (lo que se cumple después) y las <strong>invariantes</strong> (lo que siempre se cumple).</p>
<p>Especificación de la operación «prestar» en <strong>OCL</strong>:</p>
<pre class="codigo">context Biblioteca::prestar(e: Ejemplar, s: Estudiante)
  pre:  e.estado = 'disponible' and s.activo = true
        and s.multasPendientes = 0 and s.prestamosActivos-&gt;size() &lt; 3
  post: e.estado = 'prestado'
        and s.prestamosActivos-&gt;size() = s.prestamosActivos@pre-&gt;size() + 1

context Estudiante
  inv:  self.prestamosActivos-&gt;size() &lt;= 3</pre>
<p>La misma operación en notación de conjuntos, al estilo de <strong>Z</strong> (la comilla simple indica el valor después de la operación):</p>
<pre class="codigo">Prestar
  e? : Ejemplar        s? : Estudiante
  pre:  e? ∈ disponibles ∧ s? ∈ activos ∧ s? ∉ conMultas
  post: disponibles' = disponibles - {e?}
        prestados'   = prestados ∪ {(e?, s?)}</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Aunque no se use un lenguaje formal completo, pensar en precondiciones y poscondiciones mejora cualquier requerimiento o caso de uso: obliga a definir qué pasa antes, después y en los casos límite.</p>
                            `,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_007',
            label: 'Tendencias ágiles',
            subtemas: [
                {
                    id: 'm007-marco',
                    label: 'Marco ágil y requerimientos',
                    steps: [
                        {
                            title: 'Requerimientos en un marco ágil',
                            content: `<p>En los marcos ágiles los requerimientos no se definen todos al inicio: emergen y se refinan a lo largo del proyecto. El <strong>Product Backlog</strong> es la lista ordenada de todo lo que podría necesitar el producto, y el <strong>Product Owner</strong> es responsable de su contenido y su orden.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Nivel</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo en BiblioTEC</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Tema / objetivo del producto</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Meta de negocio de largo plazo.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Digitalizar los servicios de préstamo de la biblioteca.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Épica</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Requerimiento grande que se divide en varias historias.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Gestión de reservas.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Historia de usuario</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Necesidad pequeña, desde la perspectiva de la persona usuaria, que cabe en un sprint.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Como estudiante, quiero reservar un ejemplar prestado para asegurarme de obtenerlo cuando se devuelva.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Tarea</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Trabajo técnico para implementar una historia.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Crear la tabla de reservas; crear el servicio de notificaciones.</td>
</tr>
</tbody></table></div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
El <strong>refinamiento del backlog</strong> es la actividad continua en la que el Product Owner y los Developers detallan, estiman y dividen los elementos del Product Backlog para que estén listos para un sprint.</p>
                            `,
                            nextButton: 'Siguiente: Historias de usuario'
                        },
                        {
                            title: 'Historias de usuario',
                            content: `<p>Una <strong>historia de usuario</strong> se escribe con la plantilla: <strong>Como</strong> [rol], <strong>quiero</strong> [funcionalidad] <strong>para</strong> [beneficio].</p>
<p>Ron Jeffries propone las <strong>3 C</strong>: <strong>Card</strong> (tarjeta breve), <strong>Conversation</strong> (los detalles se conversan con el Product Owner) y <strong>Confirmation</strong> (criterios de aceptación que confirman que está terminada).</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Criterio INVEST</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">La historia debe ser…</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>I</strong>ndependiente</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">implementable sin depender de otras historias, en lo posible.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>N</strong>egociable</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">una conversación, no un contrato cerrado.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>V</strong>aliosa</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">útil para la persona usuaria o para el negocio.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>E</strong>stimable</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">lo bastante clara para que el equipo la estime.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>S</strong>mall (pequeña)</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">realizable dentro de un sprint.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>T</strong>esteable</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">verificable con criterios de aceptación.</td>
</tr>
</tbody></table></div>
<div style="background:#eef5ff; border-left:5px solid #00928d; border-radius:8px; padding:12px 16px; margin:16px 0;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-book-open" style="color:#00928d;" aria-hidden="true"></i> <strong style="color:#00734a;">Caso BiblioTEC</strong></p><p><strong>HU-05</strong>: Como estudiante, quiero recibir un recordatorio por correo un día antes de la fecha de devolución, para no pagar multas.</p>
<p><strong>Criterios de aceptación</strong></p>
<ul>
<li>Se envía un correo 24 horas antes de la fecha límite de cada préstamo activo.</li>
<li>El correo indica el título del libro y la fecha límite.</li>
<li>No se envía si el préstamo ya fue devuelto.</li>
</ul></div>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-priorizacion',
                    label: 'Priorización y gestión en proyectos ágiles',
                    steps: [
                        {
                            title: 'Priorizar el Product Backlog',
                            content: `<p>El Product Backlog se ordena para que el equipo trabaje siempre en lo que aporta más valor. Además de MoSCoW y Kano (módulo 6), en proyectos ágiles se usan:</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Técnica</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Cómo funciona</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Valor de negocio contra esfuerzo</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se estima el valor y el esfuerzo (en puntos de historia) y se prioriza lo de mayor valor por unidad de esfuerzo.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>WSJF (Weighted Shortest Job First)</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Usado en SAFe: costo del retraso ÷ tamaño del trabajo. Primero lo que más cuesta posponer y menos esfuerzo requiere.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Mapa de historias de usuario</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se ordenan las actividades del usuario de izquierda a derecha y las historias de arriba hacia abajo; una línea horizontal define el producto mínimo viable (MVP).</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Riesgo primero</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se adelantan las historias con más incertidumbre técnica para aprender pronto.</td>
</tr>
</tbody></table></div>
                            `,
                            nextButton: 'Siguiente: Estimar y dar seguimiento'
                        },
                        {
                            title: 'Estimar y dar seguimiento',
                            content: `<p><strong>Prácticas</strong></p>
<ul>
<li><strong>Puntos de historia</strong>: medida relativa del esfuerzo, la complejidad y la incertidumbre de una historia; se usa con frecuencia la serie 1, 2, 3, 5, 8, 13.</li>
<li><strong>Planning Poker</strong>: cada persona del equipo elige una carta en secreto; se revelan al mismo tiempo y se conversan las diferencias hasta llegar a un acuerdo.</li>
<li><strong>Velocidad</strong>: puntos de historia completados por sprint; ayuda a planificar los siguientes.</li>
<li><strong>Gráfico burndown</strong>: muestra el trabajo pendiente del sprint día a día.</li>
<li><strong>Definición de listo (DoR)</strong>: condiciones para que una historia entre a un sprint (criterios de aceptación claros, estimada, sin dependencias bloqueantes).</li>
<li><strong>Definición de terminado (DoD)</strong>: condiciones para que una historia se considere terminada (código revisado, pruebas automatizadas que pasan, desplegada en el ambiente de pruebas).</li>
</ul>
<div style="background:#eef5ff; border-left:5px solid #00928d; border-radius:8px; padding:12px 16px; margin:16px 0;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-book-open" style="color:#00928d;" aria-hidden="true"></i> <strong style="color:#00734a;">Caso BiblioTEC</strong></p><div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Historia</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Valor (1-10)</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Puntos</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Valor ÷ puntos</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Orden</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">HU-01 Registrar préstamo</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">10</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">5</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">2,0</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">1</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">HU-05 Recordatorio por correo</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">8</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">3</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">2,7</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">2 (depende de HU-01)</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">HU-03 Reservar ejemplar</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">7</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">8</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">0,9</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">3</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">HU-08 Recomendaciones</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">4</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">13</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">0,3</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">4</td>
</tr>
</tbody></table></div></div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
HU-05 tiene la mejor relación valor ÷ puntos, pero va después de HU-01 porque necesita que existan préstamos registrados. Las dependencias también influyen en el orden.</p>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-tdd',
                    label: 'Desarrollo basado en pruebas',
                    steps: [
                        {
                            title: 'TDD',
                            content: `<p>En el <strong>desarrollo guiado por pruebas</strong> (TDD, <em>Test-Driven Development</em>), práctica de XP propuesta por Kent Beck, la prueba se escribe <strong>antes</strong> del código. La prueba expresa el comportamiento esperado, es decir, el requerimiento.</p>
<svg viewBox="0 0 480 190" role="img" aria-label="Ciclo rojo, verde, refactorizar de TDD" style="--ancho:460px; display:block; width:100%; max-width:calc(var(--ancho) * var(--escala, 1)); height:auto; margin:16px auto; font-family:Arial, sans-serif;" xmlns="http://www.w3.org/2000/svg"><defs><marker id="m7-tdd-f" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#164a98"/></marker></defs><rect x="20" y="20" width="170" height="54" rx="8" fill="#d2232a" stroke="#164a98" stroke-width="1.5"/><text x="105" y="40.5" text-anchor="middle" dominant-baseline="middle" font-size="11" fill="#ffffff" font-weight="bold">1. Rojo</text><text x="105" y="53.5" text-anchor="middle" dominant-baseline="middle" font-size="11" fill="#ffffff" font-weight="bold">Escribir una prueba que falla</text><rect x="290" y="20" width="170" height="54" rx="8" fill="#4aa147" stroke="#164a98" stroke-width="1.5"/><text x="375" y="40.5" text-anchor="middle" dominant-baseline="middle" font-size="11" fill="#ffffff" font-weight="bold">2. Verde</text><text x="375" y="53.5" text-anchor="middle" dominant-baseline="middle" font-size="11" fill="#ffffff" font-weight="bold">Código mínimo para pasar</text><rect x="155" y="120" width="170" height="54" rx="8" fill="#006AEA" stroke="#164a98" stroke-width="1.5"/><text x="240" y="140.5" text-anchor="middle" dominant-baseline="middle" font-size="11" fill="#ffffff" font-weight="bold">3. Refactorizar</text><text x="240" y="153.5" text-anchor="middle" dominant-baseline="middle" font-size="11" fill="#ffffff" font-weight="bold">Mejorar sin romper</text><path d="M190,47 L288,47" fill="none" stroke="#164a98" stroke-width="2" marker-end="url(#m7-tdd-f)"/><path d="M375,74 L375,147 L327,147" fill="none" stroke="#164a98" stroke-width="2" marker-end="url(#m7-tdd-f)"/><path d="M155,147 L105,147 L105,76" fill="none" stroke="#164a98" stroke-width="2" marker-end="url(#m7-tdd-f)"/></svg>
<pre class="codigo"># 1. Rojo: la prueba se escribe primero y falla porque la función no existe
def test_multa_tres_dias():
    assert calcular_multa(3) == 1500

def test_sin_atraso_no_hay_multa():
    assert calcular_multa(0) == 0

# 2. Verde: se escribe el código mínimo para que las pruebas pasen
COSTO_POR_DIA_ATRASO = 500

def calcular_multa(dias_atraso):
    if dias_atraso &gt; 0:
        return dias_atraso * COSTO_POR_DIA_ATRASO
    return 0

# 3. Refactorizar: se mejora el código y se vuelven a ejecutar las pruebas</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Las pruebas automatizadas se convierten en una especificación ejecutable: si alguien cambia la regla de la multa por error, una prueba falla de inmediato.</p>
                            `,
                            nextButton: 'Siguiente: ATDD y BDD'
                        },
                        {
                            title: 'ATDD y BDD',
                            content: `<p>El <strong>desarrollo guiado por pruebas de aceptación</strong> (ATDD) y el <strong>desarrollo guiado por comportamiento</strong> (BDD) llevan la idea de TDD al nivel de los requerimientos: el Product Owner, quien prueba y quien programa escriben juntos los criterios de aceptación como ejemplos concretos, antes de programar.</p>
<p>En BDD los escenarios se escriben en lenguaje <strong>Gherkin</strong>, con las palabras <strong>Dado</strong> (contexto), <strong>Cuando</strong> (acción) y <strong>Entonces</strong> (resultado esperado). Herramientas como Cucumber, SpecFlow o behave ejecutan estos escenarios como pruebas automatizadas.</p>
<pre class="codigo"># language: es
Característica: Cálculo de multas por atraso

  Escenario: Devolución con atraso
    Dado que un estudiante tiene un préstamo con fecha límite 10/03/2026
    Cuando devuelve el ejemplar el 13/03/2026
    Entonces el sistema registra una multa de 1500 colones

  Escenario: Devolución a tiempo
    Dado que un estudiante tiene un préstamo con fecha límite 10/03/2026
    Cuando devuelve el ejemplar el 10/03/2026
    Entonces el sistema no registra ninguna multa</pre>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Práctica</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Nivel</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Quién participa</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Pregunta</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">TDD</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Unidad de código</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Quien programa</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">¿El código hace lo que espero?</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">ATDD</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Historia de usuario</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Product Owner, QA y desarrollo</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">¿La historia cumple los criterios de aceptación?</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">BDD</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Comportamiento del sistema</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Negocio, QA y desarrollo</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">¿El sistema se comporta como el negocio espera, en su propio lenguaje?</td>
</tr>
</tbody></table></div>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-retrospectivas',
                    label: 'Retrospectivas y mejora continua',
                    steps: [
                        {
                            title: 'Sprint Retrospective',
                            content: `<p>La <strong>Sprint Retrospective</strong> es el último evento de cada sprint. El equipo Scrum analiza cómo fue el sprint en cuanto a personas, interacciones, procesos, herramientas y definición de terminado, e identifica mejoras concretas para el siguiente sprint.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Formato</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Preguntas</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Empezar, dejar, continuar</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">¿Qué deberíamos empezar a hacer? ¿Qué deberíamos dejar de hacer? ¿Qué deberíamos seguir haciendo?</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>4L</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Liked (nos gustó), Learned (aprendimos), Lacked (nos faltó), Longed for (deseamos).</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Velero</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Viento (lo que nos impulsa), anclas (lo que nos frena), rocas (riesgos), isla (objetivo).</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;"><strong>Línea de tiempo</strong></td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Se ubican en el tiempo los eventos del sprint y cómo se sintió el equipo en cada uno.</td>
</tr>
</tbody></table></div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Una retrospectiva útil termina con pocas acciones concretas, con responsable, que se revisan en la siguiente retrospectiva. Una lista larga de quejas sin acciones no produce mejora.</p>
                            `,
                            nextButton: 'Siguiente: Mejora continua de los requerimientos'
                        },
                        {
                            title: 'Mejora continua de los requerimientos',
                            content: `<p>Las retrospectivas también permiten mejorar <strong>cómo el equipo maneja los requerimientos</strong>. Problemas frecuentes y posibles acciones:</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12); margin:14px 0;">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Problema detectado</th>
<th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Acción de mejora</th>
</tr></thead><tbody>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Historias que llegan al sprint sin criterios de aceptación claros.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Acordar una definición de listo (DoR) y no aceptar historias que no la cumplan.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Historias demasiado grandes que no se terminan en el sprint.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Dividir las historias en el refinamiento (por pasos del flujo, por reglas o por tipo de dato).</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Retrabajo porque el Product Owner esperaba otro resultado.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Escribir ejemplos concretos (BDD) y mostrar avances a mitad del sprint.</td>
</tr>
<tr style="background:#f3f9ff;">
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Muchos defectos en una funcionalidad.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Agregar escenarios de prueba para las reglas de negocio desde el refinamiento.</td>
</tr>
<tr>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Cambios de prioridad a mitad del sprint.</td>
<td style="padding:12px; border-bottom:1px solid #dceeff; vertical-align:top;">Proteger el objetivo del sprint y llevar los cambios al siguiente refinamiento.</td>
</tr>
</tbody></table></div>
<div style="background:#eef5ff; border-left:5px solid #00928d; border-radius:8px; padding:12px 16px; margin:16px 0;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-book-open" style="color:#00928d;" aria-hidden="true"></i> <strong style="color:#00734a;">Caso BiblioTEC</strong></p><p>En la retrospectiva del sprint 3, el equipo de BiblioTEC detectó que la historia de reservas se rehízo dos veces porque no se había acordado qué pasaba si dos estudiantes reservaban el mismo ejemplar. Acción acordada: en cada refinamiento, escribir al menos un escenario Gherkin para cada regla de negocio. En el sprint 4 el retrabajo bajó notablemente.</p></div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
La mejora continua conecta este módulo con el primero: las retrospectivas son una forma ágil del ciclo PHVA de mejora de procesos.</p>
                            `,
                            nextButton: ''
                        }
                    ]
                }
            ]
        }
    ]
};
