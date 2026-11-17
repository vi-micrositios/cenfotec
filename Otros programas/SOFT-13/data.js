const data = {
    // Pantalla de bienvenida
    welcome: {
        title: 'SOFT-13 <br> Arquitectura de Software 1',
        image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-13/imgs/logo.png', // Cambiar por imagen real
        description: 'Determinación de los elementos y relaciones de un sistema de software mediante componentes, patrones de diseño y de arquitectura, herramientas de modelado y pruebas de arquitectura, para lograr sistemas escalables y evolutivos.',
        instruction: 'Seleccione cada pestaña para acceder a la información'
    },
    // Temas principales y sus subtemas con pasos
    temas: [
        {
            id: 'modulo_001',
            label: 'Introducción a la arquitectura',
            subtemas: [
                {
                    id: 'm001-t001',
                    label: 'Definición de arquitectura de software',
                    steps: [
                        {
                            title: '¿Qué es la arquitectura de software?',
                            content: `<p>La <strong>arquitectura de software</strong> es la estructura fundamental de un sistema: sus <strong>elementos</strong>, las <strong>relaciones</strong> entre ellos y los <strong>principios</strong> que guían su diseño y evolución (ISO/IEC/IEEE 42010).</p>
<p>Son las decisiones importantes y difíciles de cambiar: cómo se divide el sistema, cómo se comunican sus partes, dónde se guardan los datos y qué tecnologías se usan.</p>
<div style="display:flex; flex-wrap:wrap; gap:12px; margin:12px 0;">
<div style="flex:1 1 200px; padding:14px; border:1px solid #9cc8ff; border-top:4px solid #2b93d1; border-radius:10px; background:#ffffff;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-cubes" style="color:#164a98; margin-right:6px;" aria-hidden="true"></i><strong>Elementos</strong></p><p style="margin:0;">Componentes, módulos, servicios, bases de datos.</p></div>
<div style="flex:1 1 200px; padding:14px; border:1px solid #9cc8ff; border-top:4px solid #2b93d1; border-radius:10px; background:#ffffff;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-diagram-project" style="color:#164a98; margin-right:6px;" aria-hidden="true"></i><strong>Relaciones</strong></p><p style="margin:0;">Dependencias, llamadas, mensajes, flujos de datos.</p></div>
<div style="flex:1 1 200px; padding:14px; border:1px solid #9cc8ff; border-top:4px solid #2b93d1; border-radius:10px; background:#ffffff;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-scale-balanced" style="color:#164a98; margin-right:6px;" aria-hidden="true"></i><strong>Principios y restricciones</strong></p><p style="margin:0;">Reglas que orientan las decisiones de diseño.</p></div>
</div>`,
                            nextButton: 'Siguiente: Arquitectura y diseño'
                        },
                        {
                            title: 'Arquitectura y diseño',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;"></th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Arquitectura</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Diseño detallado</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Alcance</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Todo el sistema.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un componente o clase.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Decisiones</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Estructura, tecnologías, comunicación.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Algoritmos, estructuras de datos, clases.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Costo de cambio</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Alto.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Bajo o medio.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Guía</strong></td><td style="padding:13px 12px;">Atributos de calidad.</td><td style="padding:13px 12px;">Requerimientos funcionales.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Los <strong>requerimientos no funcionales</strong> (rendimiento, seguridad, escalabilidad) son los que más influyen en la arquitectura; por eso también se les llama <strong>conductores arquitectónicos</strong>.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t002',
                    label: 'Principios básicos de la arquitectura de software',
                    steps: [
                        {
                            title: 'Principios fundamentales',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Principio</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Separación de responsabilidades</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cada parte del sistema atiende un solo asunto.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Alta cohesión</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Los elementos de un módulo están fuertemente relacionados entre sí.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Bajo acoplamiento</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Los módulos dependen lo menos posible unos de otros.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Abstracción</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se exponen interfaces y se ocultan los detalles de implementación.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Modularidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El sistema se divide en partes reemplazables.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>KISS y YAGNI</strong></td><td style="padding:13px 12px;">Mantenerlo simple; no construir lo que aún no se necesita.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Principios SOLID'
                        },
                        {
                            title: 'Principios SOLID',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Letra</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Principio</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Idea</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>S</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Responsabilidad única</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Una clase tiene una sola razón para cambiar.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>O</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Abierto/cerrado</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Abierto a extensión, cerrado a modificación.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>L</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sustitución de Liskov</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Una subclase puede reemplazar a su clase base sin romper el programa.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>I</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Segregación de interfaces</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Interfaces pequeñas y específicas.</td></tr>
<tr><td style="padding:13px 12px;"><strong>D</strong></td><td style="padding:13px 12px;">Inversión de dependencias</td><td style="padding:13px 12px;">Depender de abstracciones, no de implementaciones concretas.</td></tr>
</tbody>
</table>
</div>
<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #f0cccc; margin-bottom:12px;">
<i class="fa-solid fa-xmark" aria-hidden="true" style="color:#d2232a;"></i> <strong style="color:#d2232a;">Incorrecto</strong>
<pre class="codigo">
class ServicioPedidos {
    private repo = new RepositorioMySQL();   // depende de una clase concreta
}
</pre>
</div>
<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #c9e2d4; margin-bottom:12px;">
<i class="fa-solid fa-check" aria-hidden="true" style="color:#00734a;"></i> <strong style="color:#00734a;">Correcto</strong>
<pre class="codigo">
class ServicioPedidos {
    constructor(private repo: RepositorioPedidos) {}  // depende de una interfaz
}
</pre>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t003',
                    label: 'Tipos de arquitecturas de software',
                    steps: [
                        {
                            title: 'Estilos arquitectónicos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Estilo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Monolítica</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Una sola unidad desplegable.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Aplicación web tradicional.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>En capas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Presentación, negocio y datos separados.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sistemas empresariales.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cliente-servidor</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Clientes solicitan servicios a un servidor.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Aplicación web con API.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Orientada a servicios</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Servicios de negocio reutilizables.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Integración bancaria.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Microservicios</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Servicios pequeños e independientes.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Plataformas de comercio electrónico.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Orientada a eventos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Componentes reaccionan a eventos.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Notificaciones, IoT.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tuberías y filtros</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Datos pasan por etapas de transformación.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Compiladores, procesamiento de datos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Sin servidor</strong></td><td style="padding:13px 12px;">Funciones ejecutadas bajo demanda.</td><td style="padding:13px 12px;">Procesar imágenes al subirlas.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Monolito o distribuido'
                        },
                        {
                            title: 'Monolito o distribuido',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;"></th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Monolito</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Distribuido</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Complejidad inicial</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Baja</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Alta</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Despliegue</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Todo junto</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Independiente por servicio</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Escalamiento</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Toda la aplicación</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Solo lo que se necesita</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Fallas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pueden afectar todo</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Aisladas si se diseña bien</td></tr>
<tr><td style="padding:13px 12px;"><strong>Ideal para</strong></td><td style="padding:13px 12px;">Equipos pequeños, productos nuevos</td><td style="padding:13px 12px;">Equipos grandes, alta escala</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Un <strong>monolito modular</strong> bien organizado suele ser el mejor punto de partida: se puede dividir en servicios más adelante si el negocio lo requiere.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t004',
                    label: 'Características de la arquitectura de software efectiva',
                    steps: [
                        {
                            title: 'Atributos de calidad',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Atributo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Pregunta</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Táctica de ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Rendimiento</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Responde a tiempo?</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Caché, procesamiento asincrónico.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Escalabilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Soporta más carga?</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Escalamiento horizontal.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Disponibilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Está siempre en funcionamiento?</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Redundancia, réplicas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Seguridad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Protege los datos?</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Autenticación, cifrado.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Mantenibilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Es fácil de cambiar?</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Modularidad, bajo acoplamiento.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Capacidad de prueba</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Es fácil de probar?</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Inyección de dependencias.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Interoperabilidad</strong></td><td style="padding:13px 12px;">¿Se integra con otros sistemas?</td><td style="padding:13px 12px;">API estándar.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Escenarios de calidad'
                        },
                        {
                            title: 'Escenarios de calidad',
                            content: `<p>Un atributo de calidad se especifica con un <strong>escenario</strong> medible:</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Parte</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo (rendimiento)</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Fuente</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">1 000 usuarios concurrentes</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Estímulo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">consultan el catálogo</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Entorno</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">en operación normal</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Artefacto</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">servicio de catálogo</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Respuesta</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">devuelve los productos</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Medida</strong></td><td style="padding:13px 12px;">en menos de 500 ms en el 95 % de los casos</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Los atributos compiten entre sí: más seguridad puede reducir el rendimiento. La arquitectura busca el <strong>equilibrio</strong> según las prioridades del negocio.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t005',
                    label: 'Beneficios de la arquitectura de software',
                    steps: [
                        {
                            title: 'Beneficios',
                            content: `<ul>
    <li><strong>Comunicación</strong>: lenguaje común entre interesados y equipo técnico.</li>
    <li><strong>Decisiones tempranas</strong>: se analizan riesgos antes de programar.</li>
    <li><strong>Calidad</strong>: los atributos de calidad se diseñan, no se dejan al azar.</li>
    <li><strong>Reutilización</strong>: componentes y patrones que se aprovechan en otros proyectos.</li>
    <li><strong>Evolución</strong>: el sistema puede crecer sin reescribirse.</li>
    <li><strong>Estimación</strong>: la división en componentes facilita planificar y asignar trabajo.</li>
</ul>
<p class="nota">
<i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
Sin arquitectura, los sistemas tienden a convertirse en una “gran bola de lodo”: código enredado donde cualquier cambio rompe otra parte.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t006',
                    label: 'El rol del arquitecto de software',
                    steps: [
                        {
                            title: 'Responsabilidades',
                            content: `<ul>
    <li>Entender el negocio y los atributos de calidad prioritarios.</li>
    <li>Tomar y documentar decisiones arquitectónicas.</li>
    <li>Seleccionar tecnologías y patrones.</li>
    <li>Guiar al equipo y revisar que la implementación respete la arquitectura.</li>
    <li>Comunicarse con interesados técnicos y no técnicos.</li>
    <li>Gestionar la deuda técnica.</li>
</ul>`,
                            nextButton: 'Siguiente: Registro de decisiones'
                        },
                        {
                            title: 'Registro de decisiones (ADR)',
                            content: `<pre class="codigo">
ADR-003: Usar MongoDB para el catálogo de productos
Estado: Aceptado
Contexto: Los productos tienen atributos muy variables según la categoría.
Decisión: Almacenar el catálogo en MongoDB; los pedidos permanecen en PostgreSQL.
Consecuencias: Esquema flexible para el catálogo; se deben mantener dos tecnologías de datos.
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Un ADR registra el <strong>porqué</strong> de una decisión. Meses después, el equipo puede entender el contexto sin depender de la memoria de nadie.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_002',
            label: 'Patrones de diseño',
            subtemas: [
                {
                    id: 'm002-t001',
                    label: 'Introducción a los patrones de diseño',
                    steps: [
                        {
                            title: '¿Qué es un patrón de diseño?',
                            content: `<p>Un <strong>patrón de diseño</strong> es una solución probada a un problema recurrente de diseño de software. No es código para copiar, sino una plantilla que se adapta a cada situación.</p>
<p>El libro <em>Design Patterns</em> (1994) de Gamma, Helm, Johnson y Vlissides, conocidos como la “Banda de los Cuatro” (GoF), catalogó 23 patrones en tres categorías.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Categoría</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Propósito</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplos</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Creacionales</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cómo se crean los objetos.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Singleton, Factory Method, Builder</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Estructurales</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cómo se componen clases y objetos.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Adapter, Decorator, Facade</td></tr>
<tr><td style="padding:13px 12px;"><strong>De comportamiento</strong></td><td style="padding:13px 12px;">Cómo se comunican y reparten responsabilidades.</td><td style="padding:13px 12px;">Observer, Strategy, Command</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Elementos de un patrón'
                        },
                        {
                            title: 'Elementos de un patrón',
                            content: `<ul>
    <li><strong>Nombre</strong>: vocabulario común para el equipo.</li>
    <li><strong>Problema</strong>: cuándo aplicar el patrón.</li>
    <li><strong>Solución</strong>: elementos, relaciones y responsabilidades.</li>
    <li><strong>Consecuencias</strong>: ventajas y costos de aplicarlo.</li>
</ul>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Use un patrón cuando resuelve un problema real del sistema, no para “tener patrones”: aplicarlos sin necesidad agrega complejidad.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t002',
                    label: 'Patrones de diseño creacionales',
                    steps: [
                        {
                            title: 'Singleton',
                            content: `<p><strong>Problema:</strong> se necesita una única instancia compartida, por ejemplo una conexión o la configuración.</p>
<pre class="codigo">
class Configuracion {
    static #instancia = null;
    constructor() { this.valores = { moneda: "CRC" }; }
    static obtener() {
        if (!Configuracion.#instancia) Configuracion.#instancia = new Configuracion();
        return Configuracion.#instancia;
    }
}
Configuracion.obtener() === Configuracion.obtener(); // true
</pre>
<p class="nota">
<i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
El Singleton introduce estado global y dificulta las pruebas. Prefiera inyectar la instancia cuando sea posible.</p>`,
                            nextButton: 'Siguiente: Factory Method'
                        },
                        {
                            title: 'Factory Method',
                            content: `<p><strong>Problema:</strong> el código necesita crear objetos sin conocer su clase concreta.</p>
<pre class="codigo">
interface Notificacion { enviar(mensaje: string): void; }
class Correo implements Notificacion { enviar(m) { /* SMTP */ } }
class SMS implements Notificacion { enviar(m) { /* proveedor SMS */ } }

class FabricaNotificaciones {
    static crear(tipo: "correo" | "sms"): Notificacion {
        switch (tipo) {
            case "correo": return new Correo();
            case "sms": return new SMS();
        }
    }
}
FabricaNotificaciones.crear("sms").enviar("Su pedido fue enviado");
</pre>`,
                            nextButton: 'Siguiente: Builder'
                        },
                        {
                            title: 'Builder',
                            content: `<p><strong>Problema:</strong> construir un objeto complejo con muchos parámetros opcionales.</p>
<pre class="codigo">
const pedido = new PedidoBuilder()
    .paraCliente("C-102")
    .agregarItem("P-17", 2)
    .conEnvioExpress()
    .conCupon("NAVIDAD10")
    .construir();
</pre>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Patrón</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Usar cuando…</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Abstract Factory</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">se crean familias de objetos relacionados (tema claro/oscuro).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Prototype</strong></td><td style="padding:13px 12px;">crear copiando un objeto existente es más barato que crearlo de cero.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t003',
                    label: 'Patrones de diseño estructurales',
                    steps: [
                        {
                            title: 'Adapter',
                            content: `<p><strong>Problema:</strong> una clase tiene una interfaz incompatible con la que espera el sistema (por ejemplo, una API externa).</p>
<pre class="codigo">
// El sistema espera: procesar(monto)
class PasarelaExterna { cobrarEnCentimos(c) { /* ... */ } }

class AdaptadorPasarela {
    constructor(pasarela) { this.pasarela = pasarela; }
    procesar(monto) { return this.pasarela.cobrarEnCentimos(Math.round(monto * 100)); }
}
</pre>`,
                            nextButton: 'Siguiente: Decorator y Facade'
                        },
                        {
                            title: 'Decorator y Facade',
                            content: `<pre class="codigo">
// Decorator: agrega comportamiento sin modificar la clase original
class RepositorioConCache {
    constructor(repo, cache) { this.repo = repo; this.cache = cache; }
    async buscar(id) {
        return this.cache.get(id) ?? this.cache.set(id, await this.repo.buscar(id));
    }
}

// Facade: interfaz simple para un subsistema complejo
class FachadaCompra {
    async comprar(carrito, cliente) {
        await inventario.reservar(carrito);
        const pago = await pagos.cobrar(cliente, carrito.total);
        await envios.programar(cliente.direccion, carrito);
        return facturacion.emitir(pago);
    }
}
</pre>`,
                            nextButton: 'Siguiente: Otros estructurales'
                        },
                        {
                            title: 'Otros estructurales',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Patrón</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Propósito</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Composite</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Tratar igual a objetos simples y compuestos.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Menú con submenús; carpetas y archivos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Proxy</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Controlar el acceso a otro objeto.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Carga diferida, control de permisos.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Bridge</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Separar una abstracción de su implementación.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Reportes en PDF o Excel.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Flyweight</strong></td><td style="padding:13px 12px;">Compartir objetos para ahorrar memoria.</td><td style="padding:13px 12px;">Caracteres en un editor.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t004',
                    label: 'Patrones de diseño de comportamiento',
                    steps: [
                        {
                            title: 'Strategy',
                            content: `<p><strong>Problema:</strong> existen varios algoritmos intercambiables para una misma tarea.</p>
<pre class="codigo">
const estrategiasEnvio = {
    estandar: (peso) =&gt; 2000 + peso * 300,
    express:  (peso) =&gt; 4500 + peso * 500,
    retiro:   () =&gt; 0
};

function calcularEnvio(tipo, peso) {
    return estrategiasEnvio[tipo](peso);
}
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Strategy elimina cadenas largas de <code>if/else</code> y permite agregar un nuevo tipo de envío sin modificar el código existente (principio abierto/cerrado).</p>`,
                            nextButton: 'Siguiente: Observer'
                        },
                        {
                            title: 'Observer',
                            content: `<p><strong>Problema:</strong> varios objetos deben enterarse cuando otro cambia de estado.</p>
<pre class="codigo">
class Emisor {
    #suscriptores = {};
    on(evento, fn) { (this.#suscriptores[evento] ??= []).push(fn); }
    emit(evento, datos) { (this.#suscriptores[evento] || []).forEach(fn =&gt; fn(datos)); }
}

const pedidos = new Emisor();
pedidos.on("pagado", p =&gt; enviarCorreo(p.cliente));
pedidos.on("pagado", p =&gt; descontarInventario(p.items));
pedidos.emit("pagado", pedido);
</pre>`,
                            nextButton: 'Siguiente: Otros de comportamiento'
                        },
                        {
                            title: 'Otros de comportamiento',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Patrón</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Propósito</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Command</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Encapsular una acción como objeto.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Deshacer y rehacer.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>State</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cambiar el comportamiento según el estado.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pedido: creado, pagado, enviado.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Template Method</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Definir el esqueleto de un algoritmo.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Generar reportes con pasos comunes.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Chain of Responsibility</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pasar una solicitud por una cadena de manejadores.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Middlewares de Express.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Iterator</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Recorrer una colección sin exponer su estructura.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>for...of</code>.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Mediator</strong></td><td style="padding:13px 12px;">Centralizar la comunicación entre objetos.</td><td style="padding:13px 12px;">Sala de chat.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t005',
                    label: 'Patrones de bases de datos',
                    steps: [
                        {
                            title: 'Repository',
                            content: `<p>El patrón <strong>Repository</strong> abstrae el acceso a los datos detrás de una interfaz con métodos del negocio. La lógica de negocio no sabe si los datos vienen de MongoDB, PostgreSQL o un archivo.</p>
<pre class="codigo">
// Interfaz
class RepositorioProductos {
    buscarPorId(id) {}
    buscarDisponibles(categoria) {}
    guardar(producto) {}
}

// Implementación con Mongoose
class RepositorioProductosMongo extends RepositorioProductos {
    buscarPorId(id) { return ProductoModel.findById(id); }
    buscarDisponibles(categoria) { return ProductoModel.find({ categoria, stock: { $gt: 0 } }); }
    guardar(p) { return ProductoModel.create(p); }
}
</pre>`,
                            nextButton: 'Siguiente: Otros patrones de datos'
                        },
                        {
                            title: 'Otros patrones de datos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Patrón</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>DAO (Data Access Object)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Objeto con operaciones CRUD sobre una tabla o colección.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Active Record</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El objeto del dominio sabe guardarse a sí mismo (<code>producto.save()</code>).</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Data Mapper</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Una capa separada traduce entre objetos y tablas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Unit of Work</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Agrupa cambios y los confirma en una sola transacción.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Identity Map</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Evita cargar dos veces el mismo registro en una operación.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>CQRS</strong></td><td style="padding:13px 12px;">Separa los modelos de lectura y de escritura.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t006',
                    label: 'Antipatrones',
                    steps: [
                        {
                            title: '¿Qué es un antipatrón?',
                            content: `<p>Un <strong>antipatrón</strong> es una solución común que parece útil pero produce más problemas de los que resuelve.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Antipatrón</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Síntoma</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Solución</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Objeto Dios (God Object)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Una clase hace de todo y tiene miles de líneas.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Dividir por responsabilidades.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Código espagueti</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Flujo enredado, sin estructura.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Refactorizar en funciones y módulos.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Copiar y pegar</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">La misma lógica repetida en varios lugares.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Extraer funciones reutilizables.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Números mágicos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Valores literales sin explicación.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Constantes con nombre.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Gran bola de lodo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sin arquitectura reconocible.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Definir capas y límites.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Martillo dorado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Usar la misma tecnología para todo.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Elegir según el problema.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Optimización prematura</strong></td><td style="padding:13px 12px;">Código complejo para un rendimiento que no se necesita.</td><td style="padding:13px 12px;">Medir antes de optimizar.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Ejemplo'
                        },
                        {
                            title: 'Ejemplo',
                            content: `<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #f0cccc; margin-bottom:12px;">
<i class="fa-solid fa-xmark" aria-hidden="true" style="color:#d2232a;"></i> <strong style="color:#d2232a;">Números mágicos</strong>
<pre class="codigo">
if (usuario.tipo === 3 &amp;&amp; total &gt; 50000) {
    total = total * 0.85;
}
</pre>
</div>
<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #c9e2d4; margin-bottom:12px;">
<i class="fa-solid fa-check" aria-hidden="true" style="color:#00734a;"></i> <strong style="color:#00734a;">Correcto</strong>
<pre class="codigo">
const TIPO_CLIENTE_VIP = 3;
const MONTO_MINIMO_DESCUENTO = 50000;
const DESCUENTO_VIP = 0.15;

if (usuario.tipo === TIPO_CLIENTE_VIP &amp;&amp; total &gt; MONTO_MINIMO_DESCUENTO) {
    total = total * (1 - DESCUENTO_VIP);
}
</pre>
</div>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_003',
            label: 'Componentes de software',
            subtemas: [
                {
                    id: 'm003-t001',
                    label: 'Definición de componentes de software',
                    steps: [
                        {
                            title: '¿Qué es un componente?',
                            content: `<p>Un <strong>componente de software</strong> es una unidad modular, reemplazable y desplegable de forma independiente, que encapsula su implementación y se comunica únicamente por medio de <strong>interfaces</strong> bien definidas.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Característica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Encapsulación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Oculta cómo funciona por dentro.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Interfaces</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Declara qué servicios ofrece (provistas) y cuáles necesita (requeridas).</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Reemplazable</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Puede cambiarse por otro que cumpla la misma interfaz.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Composición</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se combina con otros para formar el sistema.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Independiente</strong></td><td style="padding:13px 12px;">Se puede desarrollar, probar y versionar por separado.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Componente, módulo y clase'
                        },
                        {
                            title: 'Componente, módulo y clase',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Concepto</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Granularidad</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Clase</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Fina</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>CalculadoraImpuestos</code></td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Módulo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Media</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Carpeta <code>facturacion/</code></td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Componente</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Media o gruesa</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Librería de facturación electrónica</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Servicio</strong></td><td style="padding:13px 12px;">Gruesa, desplegado en red</td><td style="padding:13px 12px;">API de facturación</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t002',
                    label: 'Arquitectura basada en componentes',
                    steps: [
                        {
                            title: 'Diagrama de componentes',
                            content: `<p>El diagrama de componentes de UML muestra los componentes, sus interfaces y sus dependencias.</p>
<pre class="codigo">
[Interfaz Web] ──usa──▶ (IPedidos) ◀── [Servicio de Pedidos]
[Servicio de Pedidos] ──usa──▶ (IPagos) ◀── [Componente de Pagos]
[Servicio de Pedidos] ──usa──▶ (IInventario) ◀── [Componente de Inventario]

(  ) interfaz provista       ──usa──▶ interfaz requerida
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
La notación de “piruleta” (círculo) representa una interfaz provista y la de “enchufe” (semicírculo) una interfaz requerida.</p>`,
                            nextButton: 'Siguiente: Ingeniería basada en componentes'
                        },
                        {
                            title: 'Ingeniería basada en componentes',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-magnifying-glass" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Buscar</b><br><small>Componentes existentes</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-scale-balanced" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Evaluar</b><br><small>Funcionalidad, licencia, calidad</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-puzzle-piece" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Adaptar</b><br><small>Configurar o envolver</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-link" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Integrar</b><br><small>Conectar por interfaces</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-vial" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Probar</b><br><small>El sistema compuesto</small></div></div>
</div>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t003',
                    label: 'Beneficios de los componentes de software',
                    steps: [
                        {
                            title: 'Beneficios y retos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Beneficios</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Retos</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Reutilización y menor tiempo de desarrollo.</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Encontrar componentes que se ajusten exactamente.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Mantenimiento localizado.</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Gestionar versiones y dependencias.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Equipos que trabajan en paralelo.</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Definir interfaces estables desde el inicio.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pruebas por separado.</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Dependencia de proveedores externos.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Sustitución de tecnologías.</strong></td><td style="padding:13px 12px;">Rendimiento de la comunicación entre componentes.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t004',
                    label: 'Implementación de componentes de software',
                    steps: [
                        {
                            title: 'Componente con interfaz explícita',
                            content: `<pre class="codigo">
// pagos/IPagos.ts  (interfaz provista)
export interface IPagos {
    cobrar(clienteId: string, monto: number): Promise&lt;ResultadoPago&gt;;
}

// pagos/PagosTarjeta.ts  (implementación oculta)
export class PagosTarjeta implements IPagos {
    constructor(private pasarela: ClientePasarela) {}
    async cobrar(clienteId: string, monto: number) {
        const r = await this.pasarela.crearCargo({ clienteId, monto });
        return { aprobado: r.status === "succeeded", referencia: r.id };
    }
}

// pagos/index.ts  (único punto de entrada público)
export type { IPagos } from "./IPagos";
export { PagosTarjeta } from "./PagosTarjeta";
</pre>`,
                            nextButton: 'Siguiente: Inyección de dependencias'
                        },
                        {
                            title: 'Inyección de dependencias',
                            content: `<pre class="codigo">
// El servicio recibe el componente por su interfaz
class ServicioPedidos {
    constructor(private pagos: IPagos, private inventario: IInventario) {}
}

// Composición en un único lugar (raíz de composición)
const servicio = new ServicioPedidos(new PagosTarjeta(pasarela), new InventarioMongo());

// En pruebas se reemplaza por una implementación falsa
const servicioPrueba = new ServicioPedidos(new PagosFalsos(), new InventarioEnMemoria());
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Marcos como Spring (Java), ASP.NET Core (C#), NestJS y Angular incluyen un contenedor que realiza la inyección automáticamente.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t005',
                    label: 'Componentes de software reutilizables',
                    steps: [
                        {
                            title: 'Diseñar para reutilizar',
                            content: `<ul>
    <li>Interfaz pequeña, clara y documentada.</li>
    <li>Sin dependencias del sistema donde nació.</li>
    <li>Configurable por parámetros, no por modificación del código.</li>
    <li>Pruebas automatizadas incluidas.</li>
    <li>Licencia y versión definidas.</li>
</ul>`,
                            nextButton: 'Siguiente: Versionado semántico'
                        },
                        {
                            title: 'Versionado semántico',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Cambio</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Versión</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Corrección compatible</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">PATCH</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">1.4.2 → 1.4.3</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Funcionalidad nueva compatible</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">MINOR</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">1.4.3 → 1.5.0</td></tr>
<tr><td style="padding:13px 12px;"><strong>Cambio incompatible</strong></td><td style="padding:13px 12px;">MAJOR</td><td style="padding:13px 12px;">1.5.0 → 2.0.0</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
npm publish                          # publica el componente en npm
npm install @miempresa/facturacion@^1.5.0   # acepta 1.x.y desde 1.5.0
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Los repositorios de paquetes (npm, Maven, NuGet, PyPI) son el principal mecanismo de distribución de componentes reutilizables.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_004',
            label: 'Patrones de arquitectura',
            subtemas: [
                {
                    id: 'm004-t001',
                    label: 'Introducción a los patrones de arquitectura de software',
                    steps: [
                        {
                            title: 'Patrón de arquitectura y patrón de diseño',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;"></th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Patrón de arquitectura</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Patrón de diseño</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Alcance</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Todo el sistema o subsistemas.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Clases y objetos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ejemplos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Capas, microservicios, eventos.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Strategy, Observer, Factory.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Impacto</strong></td><td style="padding:13px 12px;">Atributos de calidad globales.</td><td style="padding:13px 12px;">Flexibilidad local del código.</td></tr>
</tbody>
</table>
</div>
<p>Un patrón de arquitectura se elige según los atributos de calidad prioritarios, el tamaño del equipo y el contexto de despliegue.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t002',
                    label: 'Patrones de arquitectura basados en capas',
                    steps: [
                        {
                            title: 'Arquitectura en capas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Capa</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Responsabilidad</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Presentación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Interfaz y controladores.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Rutas de Express, componentes React.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Aplicación / servicios</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Casos de uso y orquestación.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>ServicioPedidos</code></td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Dominio / negocio</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Reglas del negocio.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>Pedido.calcularTotal()</code></td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Persistencia</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Acceso a datos.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Repositorios.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Base de datos</strong></td><td style="padding:13px 12px;">Almacenamiento.</td><td style="padding:13px 12px;">MongoDB, PostgreSQL.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Regla: cada capa solo usa la capa inmediatamente inferior. Así un cambio en la base de datos no afecta la presentación.</p>`,
                            nextButton: 'Siguiente: Modelo-Vista-Controlador'
                        },
                        {
                            title: 'Modelo-Vista-Controlador (MVC)',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Elemento</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Responsabilidad</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Modelo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Datos y reglas de negocio.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Vista</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Presentación de la información.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Controlador</strong></td><td style="padding:13px 12px;">Recibe la acción del usuario, actualiza el modelo y elige la vista.</td></tr>
</tbody>
</table>
</div>
<p>Variantes: MVP, MVVM (común en aplicaciones móviles y en marcos como Angular).</p>`,
                            nextButton: 'Siguiente: Arquitectura hexagonal y limpia'
                        },
                        {
                            title: 'Arquitectura hexagonal y limpia',
                            content: `<p>En la <strong>arquitectura hexagonal</strong> (puertos y adaptadores) y la <strong>arquitectura limpia</strong>, el dominio está en el centro y no depende de nada externo. La base de datos, la web y los servicios externos son adaptadores intercambiables.</p>
<pre class="codigo">
src/
├── dominio/          # entidades y reglas (sin dependencias externas)
├── aplicacion/       # casos de uso y puertos (interfaces)
└── infraestructura/  # adaptadores: Express, Mongo, pasarela de pago
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Las dependencias apuntan siempre hacia el centro: la infraestructura conoce al dominio, pero el dominio no conoce a la infraestructura.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t003',
                    label: 'Patrones de arquitectura basados en eventos',
                    steps: [
                        {
                            title: 'Arquitectura orientada a eventos',
                            content: `<p>Los componentes se comunican publicando y reaccionando a <strong>eventos</strong> (hechos que ocurrieron: “PedidoPagado”), sin conocerse entre sí.</p>
<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-bullhorn" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Productor</b><br><small>Publica el evento</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-tower-broadcast" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Intermediario</b><br><small>Kafka, RabbitMQ</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-envelope" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Consumidor 1</b><br><small>Envía correo</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-boxes-stacked" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Consumidor 2</b><br><small>Actualiza inventario</small></div></div>
</div>
</div>`,
                            nextButton: 'Siguiente: Topologías y beneficios'
                        },
                        {
                            title: 'Topologías y beneficios',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Topología</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Broker</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Los eventos fluyen entre consumidores sin coordinador central.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Mediador</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un orquestador controla el orden de los pasos.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Publicar/suscribir</strong></td><td style="padding:13px 12px;">Los suscriptores reciben los eventos de los temas que les interesan.</td></tr>
</tbody>
</table>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ventajas</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Desventajas</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Bajo acoplamiento.</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Flujo más difícil de seguir y depurar.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Escalabilidad y respuesta asincrónica.</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Consistencia eventual.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Fácil agregar nuevos consumidores.</strong></td><td style="padding:13px 12px;">Manejo de eventos duplicados o desordenados.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t004',
                    label: 'Patrones de arquitectura basados en servicios',
                    steps: [
                        {
                            title: 'Arquitectura orientada a servicios (SOA)',
                            content: `<p>Organiza el sistema en <strong>servicios de negocio</strong> reutilizables, con contratos estándar, que pueden combinarse en procesos más grandes. Tradicionalmente se integran mediante un <strong>bus de servicios empresariales (ESB)</strong>.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Principio SOA</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Contrato estandarizado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Interfaz formal (WSDL, OpenAPI).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Bajo acoplamiento</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Los consumidores no dependen de la implementación.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Reutilización</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un servicio sirve a varios procesos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Composición</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Servicios que se combinan.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Descubrimiento</strong></td><td style="padding:13px 12px;">Registro de servicios disponibles.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Arquitectura basada en servicios'
                        },
                        {
                            title: 'Arquitectura basada en servicios',
                            content: `<p>Variante pragmática: pocos servicios de dominio grandes (por ejemplo, 4 a 12) que comparten una base de datos. Es un punto intermedio entre el monolito y los microservicios.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t005',
                    label: 'Patrones de arquitectura basados en microservicios',
                    steps: [
                        {
                            title: 'Microservicios',
                            content: `<p>Cada <strong>microservicio</strong> es pequeño, se enfoca en una capacidad del negocio, tiene su propia base de datos y se despliega de forma independiente.</p>
<pre class="codigo">
            ┌──────────────┐
Cliente ──▶ │ API Gateway  │
            └──────┬───────┘
     ┌─────────────┼──────────────┐
 [Catálogo]    [Pedidos]       [Pagos]
     │             │              │
  (MongoDB)   (PostgreSQL)    (PostgreSQL)
</pre>`,
                            nextButton: 'Siguiente: Patrones asociados'
                        },
                        {
                            title: 'Patrones asociados',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Patrón</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Resuelve</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>API Gateway</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Punto de entrada único: enrutamiento, autenticación, límite de solicitudes.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Base de datos por servicio</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Autonomía de cada servicio.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Descubrimiento de servicios</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Encontrar la ubicación de cada servicio.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Circuit Breaker</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Evitar fallas en cascada cuando un servicio no responde.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Saga</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Transacciones distribuidas mediante pasos y compensaciones.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Strangler Fig</strong></td><td style="padding:13px 12px;">Migrar un monolito a microservicios por partes.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
Los microservicios traen complejidad operativa (redes, monitoreo, consistencia). Solo valen la pena cuando el tamaño del equipo y del sistema lo justifican.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_005',
            label: 'Herramientas y tecnologías',
            subtemas: [
                {
                    id: 'm005-t001',
                    label: 'Modelado de arquitectura de software',
                    steps: [
                        {
                            title: 'Vistas arquitectónicas',
                            content: `<p>Un solo diagrama no basta para describir una arquitectura. El modelo <strong>4+1</strong> de Kruchten propone varias vistas:</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Vista</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Muestra</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Diagramas</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Lógica</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Funcionalidad para el usuario.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Clases, objetos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Desarrollo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Organización del código.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Componentes, paquetes.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Procesos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Concurrencia y comunicación.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Secuencia, actividad.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Física</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Distribución en hardware.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Despliegue.</td></tr>
<tr><td style="padding:13px 12px;"><strong>+1 Escenarios</strong></td><td style="padding:13px 12px;">Casos de uso que unen las vistas.</td><td style="padding:13px 12px;">Casos de uso.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Modelo C4'
                        },
                        {
                            title: 'Modelo C4',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Nivel</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Muestra</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Audiencia</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1. Contexto</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El sistema, sus usuarios y sistemas externos.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Todos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>2. Contenedores</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Aplicaciones, API, bases de datos.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Equipo técnico.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>3. Componentes</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Componentes dentro de un contenedor.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Desarrolladores.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>4. Código</strong></td><td style="padding:13px 12px;">Clases (opcional).</td><td style="padding:13px 12px;">Desarrolladores.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
C4 funciona como un mapa con zoom: cada nivel acerca la vista del anterior.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t002',
                    label: 'Herramientas de diseño de patrones de software',
                    steps: [
                        {
                            title: 'Herramientas de modelado',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Herramienta</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>PlantUML</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Diagramas como código</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">UML en texto, versionable en Git.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Mermaid</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Diagramas como código</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Integrado en GitHub y Markdown.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Structurizr</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Modelo C4 como código</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Genera varias vistas desde un modelo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>draw.io (diagrams.net)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Gráfica, gratuita</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Diagramas rápidos.</td></tr>
<tr><td style="padding:13px 12px;"><strong>StarUML, Enterprise Architect, Visual Paradigm</strong></td><td style="padding:13px 12px;">Modelado UML completo</td><td style="padding:13px 12px;">Generación de código y documentación.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Diagrama como código'
                        },
                        {
                            title: 'Diagrama como código',
                            content: `<pre class="codigo">
@startuml
interface EstrategiaEnvio {
  +calcular(peso: double): double
}
class EnvioEstandar implements EstrategiaEnvio
class EnvioExpress implements EstrategiaEnvio
class CalculadoraEnvio {
  -estrategia: EstrategiaEnvio
  +calcular(peso: double): double
}
CalculadoraEnvio o-- EstrategiaEnvio
@enduml
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Los diagramas como código se revisan en pull requests junto con el código y no quedan desactualizados en una carpeta olvidada.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t003',
                    label: 'Tecnologías para implementar arquitectura basada en componentes',
                    steps: [
                        {
                            title: 'Tecnologías por plataforma',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Plataforma</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tecnologías</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Java</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Spring Boot, Jakarta EE, módulos de Java (JPMS), OSGi</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>.NET</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">ASP.NET Core, paquetes NuGet, inyección de dependencias integrada</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>JavaScript / TypeScript</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Módulos ES, paquetes npm, NestJS, Web Components</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Frontend</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Componentes de React, Angular y Vue; Module Federation (microfrontends)</td></tr>
<tr><td style="padding:13px 12px;"><strong>Contenedores</strong></td><td style="padding:13px 12px;">Docker para empaquetar componentes desplegables</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Web Components'
                        },
                        {
                            title: 'Web Components',
                            content: `<pre class="codigo">
class TarjetaProducto extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: "open" }).innerHTML = \`
            &lt;style&gt;h3 { color: #164a98; }&lt;/style&gt;
            &lt;h3&gt;\${this.getAttribute("nombre")}&lt;/h3&gt;\`;
    }
}
customElements.define("tarjeta-producto", TarjetaProducto);

// Uso en cualquier página: &lt;tarjeta-producto nombre="Audífonos"&gt;&lt;/tarjeta-producto&gt;
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Los Web Components son un estándar del navegador: funcionan con cualquier marco de trabajo o sin ninguno.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t004',
                    label: 'Herramientas para pruebas de arquitectura de software',
                    steps: [
                        {
                            title: 'Verificar reglas de arquitectura',
                            content: `<pre class="codigo">
// ArchUnit (Java): la capa de dominio no puede depender de la infraestructura
@ArchTest
static final ArchRule dominioIndependiente =
    noClasses().that().resideInAPackage("..dominio..")
        .should().dependOnClassesThat().resideInAPackage("..infraestructura..");
</pre>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Herramienta</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>ArchUnit / ArchUnitNET</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Reglas de dependencias en Java y C#.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>dependency-cruiser</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Reglas de dependencias en JavaScript y TypeScript.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>SonarQube</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Calidad, complejidad, duplicación y deuda técnica.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>JMeter, k6, Gatling</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pruebas de carga y rendimiento.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pact</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pruebas de contrato entre servicios.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Testcontainers</strong></td><td style="padding:13px 12px;">Bases de datos y servicios reales en contenedores para pruebas de integración.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t005',
                    label: 'Tecnologías emergentes en arquitectura de software',
                    steps: [
                        {
                            title: 'Tendencias',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tecnología</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Aporte a la arquitectura</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Computación sin servidor</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Funciones que escalan automáticamente; se paga por uso.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Contenedores y Kubernetes</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Despliegue y escalamiento declarativos.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Malla de servicios (service mesh)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Seguridad, reintentos y observabilidad entre servicios.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Transmisión de eventos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Procesamiento de datos en tiempo real (Kafka).</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Computación en el borde (edge)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Procesamiento cerca del usuario para menor latencia.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Inteligencia artificial generativa</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Asistentes de código, agentes y arquitecturas con modelos de lenguaje (RAG).</td></tr>
<tr><td style="padding:13px 12px;"><strong>Plataformas de ingeniería</strong></td><td style="padding:13px 12px;">Portales internos que estandarizan cómo se crean y despliegan servicios.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Evalúe una tecnología emergente con una prueba de concepto y un ADR antes de adoptarla en un sistema de producción.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_006',
            label: 'Patrones por lenguaje',
            subtemas: [
                {
                    id: 'm006-t001',
                    label: 'Patrones de diseño en Java',
                    steps: [
                        {
                            title: 'Patrones en Java',
                            content: `<p>Java, por su tipado estático y sus interfaces, permite implementar los patrones GoF de forma explícita. Su biblioteca estándar y Spring los usan ampliamente.</p>
<pre class="codigo">
// Strategy con interfaces funcionales y lambdas
@FunctionalInterface
interface Descuento { double aplicar(double monto); }

Map&lt;String, Descuento&gt; descuentos = Map.of(
    "ninguno", m -&gt; m,
    "vip",     m -&gt; m * 0.85,
    "cupon",   m -&gt; m - 5000
);
double total = descuentos.get("vip").aplicar(60000);
</pre>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Patrón</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo en Java</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Builder</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>StringBuilder</code>, <code>HttpRequest.newBuilder()</code></td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Iterator</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>Iterator</code> de las colecciones</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Decorator</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>new BufferedReader(new FileReader(...))</code></td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Singleton / inyección</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Beans de Spring (<code>@Service</code>)</td></tr>
<tr><td style="padding:13px 12px;"><strong>Observer</strong></td><td style="padding:13px 12px;"><code>PropertyChangeListener</code>, eventos de Spring</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t002',
                    label: 'Patrones de diseño en C#',
                    steps: [
                        {
                            title: 'Patrones en C#',
                            content: `<pre class="codigo">
// Observer con eventos nativos de C#
public class Pedido {
    public event EventHandler&lt;PedidoEventArgs&gt;? Pagado;
    public void ConfirmarPago() {
        // ...
        Pagado?.Invoke(this, new PedidoEventArgs(Id));
    }
}
pedido.Pagado += (s, e) =&gt; correo.Enviar(e.PedidoId);

// Inyección de dependencias en ASP.NET Core
builder.Services.AddScoped&lt;IRepositorioPedidos, RepositorioPedidosEf&gt;();
</pre>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Patrón</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo en C#</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Observer</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>event</code> y <code>delegate</code>, <code>IObservable&lt;T&gt;</code></td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Iterator</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>IEnumerable&lt;T&gt;</code> y <code>yield return</code></td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Repository y Unit of Work</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>DbSet</code> y <code>DbContext</code> de Entity Framework</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Chain of Responsibility</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Middlewares de ASP.NET Core</td></tr>
<tr><td style="padding:13px 12px;"><strong>Options</strong></td><td style="padding:13px 12px;"><code>IOptions&lt;T&gt;</code> para configuración</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t003',
                    label: 'Patrones de diseño en Python',
                    steps: [
                        {
                            title: 'Patrones en Python',
                            content: `<p>Python, por su tipado dinámico y sus funciones de primera clase, simplifica muchos patrones: a veces basta una función o un diccionario.</p>
<pre class="codigo">
# Decorator nativo de Python: medir el tiempo de una función
import time
from functools import wraps

def medir_tiempo(funcion):
    @wraps(funcion)
    def envoltura(*args, **kwargs):
        inicio = time.perf_counter()
        resultado = funcion(*args, **kwargs)
        print(f"{funcion.__name__}: {time.perf_counter() - inicio:.3f} s")
        return resultado
    return envoltura

@medir_tiempo
def generar_reporte(ventas):
    return sum(ventas)
</pre>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Patrón</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Forma idiomática en Python</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Singleton</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un módulo: se importa una sola vez.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Strategy</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pasar funciones como parámetros.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Iterator</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Generadores con <code>yield</code>.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Template Method</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Clases abstractas con <code>abc.ABC</code>.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Context manager</strong></td><td style="padding:13px 12px;"><code>with</code> y <code>__enter__</code>/<code>__exit__</code>.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t004',
                    label: 'Patrones de diseño en Ruby',
                    steps: [
                        {
                            title: 'Patrones en Ruby',
                            content: `<pre class="codigo">
# Observer con el módulo estándar
require 'observer'

class Pedido
  include Observable
  def pagar
    changed
    notify_observers(self, :pagado)
  end
end

class NotificadorCorreo
  def update(pedido, evento)
    puts "Correo: pedido #{evento}"
  end
end

pedido = Pedido.new
pedido.add_observer(NotificadorCorreo.new)
pedido.pagar
</pre>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Patrón</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo en Ruby</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Singleton</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Módulo <code>Singleton</code> de la biblioteca estándar.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Iterator</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Bloques y <code>each</code>.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Decorator</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Módulos con <code>prepend</code>.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Active Record y MVC</strong></td><td style="padding:13px 12px;">Ruby on Rails.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t005',
                    label: 'Patrones de diseño en JavaScript',
                    steps: [
                        {
                            title: 'Patrones en JavaScript',
                            content: `<pre class="codigo">
// Module pattern con módulos ES: estado privado y API pública
// carrito.js
const items = [];                       // privado al módulo
export function agregar(producto) { items.push(producto); }
export function total() { return items.reduce((s, p) =&gt; s + p.precio, 0); }

// Proxy nativo: validar asignaciones
const producto = new Proxy({}, {
    set(obj, prop, valor) {
        if (prop === "precio" &amp;&amp; valor &lt; 0) throw new Error("Precio inválido");
        obj[prop] = valor;
        return true;
    }
});
</pre>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Patrón</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo en JavaScript</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Module</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Módulos ES (<code>import</code>/<code>export</code>).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Observer</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>addEventListener</code>, <code>EventEmitter</code> de Node.js.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Proxy</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Objeto <code>Proxy</code> nativo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Chain of Responsibility</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Middlewares de Express.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Composite</strong></td><td style="padding:13px 12px;">Árbol de componentes de React.</td></tr>
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
            id: 'modulo_007',
            label: 'Pruebas de arquitectura',
            subtemas: [
                {
                    id: 'm007-t001',
                    label: 'Introducción a las pruebas de arquitectura de software',
                    steps: [
                        {
                            title: '¿Qué se prueba en una arquitectura?',
                            content: `<p>Las pruebas de arquitectura verifican que el sistema cumple los <strong>atributos de calidad</strong> esperados y que la implementación respeta las <strong>decisiones arquitectónicas</strong>.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Enfoque</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Evaluación temprana (sin código)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Método ATAM: analizar escenarios de calidad y riesgos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Conformidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Verificar reglas de dependencia entre capas.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Funcional por niveles</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pruebas unitarias, de integración y de sistema.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>No funcional</strong></td><td style="padding:13px 12px;">Rendimiento, disponibilidad, seguridad.</td></tr>
</tbody>
</table>
</div>
<p>La <strong>pirámide de pruebas</strong> recomienda muchas pruebas unitarias (rápidas y baratas), menos de integración y pocas de sistema de extremo a extremo.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t002',
                    label: 'Pruebas de unidad de arquitectura de software',
                    steps: [
                        {
                            title: 'Pruebas unitarias de componentes',
                            content: `<pre class="codigo">
// Prueba del servicio aislado con dobles de prueba (Jest)
test("no confirma el pedido si el pago es rechazado", async () =&gt; {
    const pagos = { cobrar: jest.fn().mockResolvedValue({ aprobado: false }) };
    const inventario = { reservar: jest.fn() };
    const servicio = new ServicioPedidos(pagos, inventario);

    const resultado = await servicio.confirmar(pedidoDePrueba);

    expect(resultado.estado).toBe("rechazado");
    expect(inventario.reservar).not.toHaveBeenCalled();
});
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Una arquitectura con inyección de dependencias permite probar cada componente aislado reemplazando sus dependencias por dobles (mocks, stubs, fakes).</p>`,
                            nextButton: 'Siguiente: Pruebas de reglas arquitectónicas'
                        },
                        {
                            title: 'Pruebas de reglas arquitectónicas',
                            content: `<pre class="codigo">
// dependency-cruiser: la carpeta dominio no puede importar infraestructura
{
  forbidden: [{
    name: "dominio-independiente",
    from: { path: "^src/dominio" },
    to:   { path: "^src/infraestructura" }
  }]
}
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t003',
                    label: 'Pruebas de integración de arquitectura de software',
                    steps: [
                        {
                            title: 'Integración entre componentes',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Estrategia</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Big bang</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se integra todo a la vez (no recomendada).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Descendente</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Desde la interfaz hacia abajo, con stubs.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ascendente</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Desde los datos hacia arriba, con drivers.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Sándwich</strong></td><td style="padding:13px 12px;">Combina ambas.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
// Integración real con la base de datos usando Testcontainers
const contenedor = await new MongoDBContainer("mongo:7").start();
await mongoose.connect(contenedor.getConnectionString());
const repo = new RepositorioProductosMongo();
await repo.guardar({ nombre: "Audífonos", precio: 24900 });
expect(await repo.buscarDisponibles("audio")).toHaveLength(1);
</pre>`,
                            nextButton: 'Siguiente: Pruebas de contrato'
                        },
                        {
                            title: 'Pruebas de contrato',
                            content: `<p>En sistemas distribuidos, las <strong>pruebas de contrato</strong> (por ejemplo con Pact) verifican que el proveedor de una API cumple lo que esperan sus consumidores, sin levantar todo el sistema.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t004',
                    label: 'Pruebas de sistema de arquitectura de software',
                    steps: [
                        {
                            title: 'Pruebas de extremo a extremo',
                            content: `<p>Prueban el sistema completo desde la perspectiva del usuario, en un ambiente lo más parecido posible a producción.</p>
<pre class="codigo">
// Playwright: flujo de compra completo
test("un cliente compra un producto", async ({ page }) =&gt; {
    await page.goto("https://staging.mitienda.com");
    await page.getByRole("button", { name: "Agregar audífonos" }).click();
    await page.getByRole("link", { name: "Carrito" }).click();
    await page.getByRole("button", { name: "Pagar" }).click();
    await expect(page.getByText("Pedido confirmado")).toBeVisible();
});
</pre>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Verifica</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Funcional de extremo a extremo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Flujos completos del negocio.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Recuperación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Que el sistema se recupera tras una falla.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Seguridad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Vulnerabilidades (OWASP ZAP).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Compatibilidad</strong></td><td style="padding:13px 12px;">Navegadores y dispositivos.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t005',
                    label: 'Pruebas de rendimiento de arquitectura de software',
                    steps: [
                        {
                            title: 'Tipos de pruebas de rendimiento',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Objetivo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Carga</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Comportamiento con la carga esperada.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Estrés</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Punto de quiebre por encima de la carga esperada.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Picos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Respuesta ante aumentos súbitos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Resistencia (soak)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Estabilidad durante horas (fugas de memoria).</td></tr>
<tr><td style="padding:13px 12px;"><strong>Escalabilidad</strong></td><td style="padding:13px 12px;">Ganancia al agregar recursos.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Ejemplo con k6'
                        },
                        {
                            title: 'Ejemplo con k6',
                            content: `<pre class="codigo">
import http from "k6/http";
import { check } from "k6";

export const options = {
    stages: [
        { duration: "1m", target: 100 },   // sube a 100 usuarios
        { duration: "3m", target: 100 },   // se mantiene
        { duration: "1m", target: 0 }      // baja
    ],
    thresholds: { http_req_duration: ["p(95)&lt;500"] }   // 95 % bajo 500 ms
};

export default function () {
    const r = http.get("https://staging.mitienda.com/api/productos");
    check(r, { "estado 200": res =&gt; res.status === 200 });
}
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Los umbrales (thresholds) convierten un escenario de calidad en una prueba automática que puede ejecutarse en el canal de CI/CD.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        }
    ]
};
