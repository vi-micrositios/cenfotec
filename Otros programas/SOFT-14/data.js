const data = {
    // Pantalla de bienvenida
    welcome: {
        title: 'SOFT-14 <br> Procesos de Ingeniería del Software',
        image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-14/imgs/logo.png', // Cambiar por imagen real
        description: 'Diseño de procesos repetibles y escalables para el desarrollo y la entrega de software: configuración y modelos de procesos, calidad, construcción con integración y entrega continuas, gestión de proyectos y mejora de procesos.',
        instruction: 'Seleccione cada pestaña para acceder a la información'
    },
    // Temas principales y sus subtemas con pasos
    temas: [
        {
            id: 'modulo_001',
            label: 'Introducción a los procesos',
            subtemas: [
                {
                    id: 'm001-t001',
                    label: 'Definición de los procesos de software',
                    steps: [
                        {
                            title: '¿Qué es un proceso de software?',
                            content: `<p>Un <strong>proceso de software</strong> es un conjunto estructurado de actividades, roles, artefactos y reglas que se siguen para especificar, diseñar, construir, probar, entregar y mantener un producto de software.</p>
<p>Un proceso responde cuatro preguntas: <strong>qué</strong> se hace (actividades), <strong>quién</strong> lo hace (roles), <strong>con qué</strong> (herramientas y entradas) y <strong>qué produce</strong> (artefactos).</p>
<div style="display:flex; flex-wrap:wrap; gap:12px; margin:12px 0;">
<div style="flex:1 1 200px; padding:14px; border:1px solid #9cc8ff; border-top:4px solid #2b93d1; border-radius:10px; background:#ffffff;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-list-check" style="color:#164a98; margin-right:6px;" aria-hidden="true"></i><strong>Actividades</strong></p><p style="margin:0;">Tareas como especificar requerimientos o revisar código.</p></div>
<div style="flex:1 1 200px; padding:14px; border:1px solid #9cc8ff; border-top:4px solid #2b93d1; border-radius:10px; background:#ffffff;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-users" style="color:#164a98; margin-right:6px;" aria-hidden="true"></i><strong>Roles</strong></p><p style="margin:0;">Responsables: analista, desarrollador, probador, líder.</p></div>
<div style="flex:1 1 200px; padding:14px; border:1px solid #9cc8ff; border-top:4px solid #2b93d1; border-radius:10px; background:#ffffff;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-file-lines" style="color:#164a98; margin-right:6px;" aria-hidden="true"></i><strong>Artefactos</strong></p><p style="margin:0;">Productos de trabajo: documentos, código, casos de prueba.</p></div>
<div style="flex:1 1 200px; padding:14px; border:1px solid #9cc8ff; border-top:4px solid #2b93d1; border-radius:10px; background:#ffffff;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-scale-balanced" style="color:#164a98; margin-right:6px;" aria-hidden="true"></i><strong>Reglas</strong></p><p style="margin:0;">Políticas, estándares y criterios de entrada y salida.</p></div>
</div>`,
                            nextButton: 'Siguiente: Actividades fundamentales'
                        },
                        {
                            title: 'Actividades fundamentales',
                            content: `<p>Sin importar el modelo que se use, todo proceso de software incluye cuatro actividades básicas:</p>
<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-clipboard-list" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Especificación</b><br><small>Qué debe hacer el sistema</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-pen-ruler" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Diseño e implementación</b><br><small>Cómo se construye</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-vial-circle-check" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Validación</b><br><small>Si cumple lo esperado</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-arrows-rotate" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Evolución</b><br><small>Cómo cambia en el tiempo</small></div></div>
</div>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Los modelos de proceso (cascada, espiral, ágiles) se diferencian en el <strong>orden</strong> y la <strong>repetición</strong> de estas actividades, no en las actividades mismas.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t002',
                    label: 'Objetivos y beneficios de los procesos de software',
                    steps: [
                        {
                            title: 'Objetivos',
                            content: `<ul>
    <li><strong>Repetibilidad</strong>: obtener resultados similares en proyectos diferentes.</li>
    <li><strong>Previsibilidad</strong>: estimar con mayor precisión plazos y costos.</li>
    <li><strong>Calidad</strong>: detectar defectos temprano mediante revisiones y pruebas planificadas.</li>
    <li><strong>Coordinación</strong>: que cada persona sepa qué hacer y qué entregar.</li>
    <li><strong>Mejora</strong>: medir el desempeño para corregir y optimizar.</li>
</ul>`,
                            nextButton: 'Siguiente: Beneficios y riesgos'
                        },
                        {
                            title: 'Beneficios y riesgos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Beneficios</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Riesgos de un proceso mal diseñado</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Menos retrabajo y defectos.</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Burocracia: documentos que nadie usa.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Incorporación más rápida de personas nuevas.</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Rigidez ante cambios del negocio.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Visibilidad del avance para los interesados.</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Proceso “en papel” que el equipo no sigue.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Base para certificaciones y mejora continua.</strong></td><td style="padding:13px 12px;">Medir por medir, sin tomar decisiones.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Un buen proceso es <strong>suficiente</strong>: tiene lo necesario para el tamaño y el riesgo del proyecto, y nada más.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t003',
                    label: 'Relación entre procesos de software e ingeniería del software',
                    steps: [
                        {
                            title: 'La ingeniería del software',
                            content: `<p>La <strong>ingeniería del software</strong> aplica un enfoque sistemático, disciplinado y cuantificable al desarrollo, operación y mantenimiento del software (IEEE). Se apoya en capas:</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Capa</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Enfoque de calidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Base de todo: compromiso con la mejora continua.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Procesos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Marco que une las capas y define cómo se trabaja.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Métodos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Técnicas para cada actividad: modelado, pruebas, estimación.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Herramientas</strong></td><td style="padding:13px 12px;">Soporte automatizado: IDE, control de versiones, gestión de tareas.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Áreas de conocimiento'
                        },
                        {
                            title: 'Áreas de conocimiento',
                            content: `<p>El cuerpo de conocimiento SWEBOK organiza la disciplina en áreas; los procesos atraviesan todas ellas.</p>
<ul>
    <li>Requerimientos, diseño, construcción, pruebas y mantenimiento.</li>
    <li>Gestión de la configuración y gestión de la ingeniería.</li>
    <li>Procesos, modelos y métodos de ingeniería del software.</li>
    <li>Calidad del software y práctica profesional.</li>
</ul>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
El proceso es el “cómo” de la ingeniería del software: convierte el conocimiento técnico en una forma de trabajo repetible.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t004',
                    label: 'Ciclo de vida de los procesos de software',
                    steps: [
                        {
                            title: 'Ciclo de vida del software',
                            content: `<p>El <strong>ciclo de vida</strong> abarca desde la concepción del producto hasta su retiro.</p>
<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-lightbulb" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Concepción</b><br><small>Idea y viabilidad</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-clipboard-list" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Requerimientos</b><br><small>Necesidades</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-pen-ruler" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Diseño</b><br><small>Arquitectura</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-code" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Construcción</b><br><small>Código</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-vial" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Pruebas</b><br><small>Verificación</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-rocket" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Despliegue</b><br><small>Puesta en producción</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-screwdriver-wrench" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Mantenimiento</b><br><small>Correcciones y mejoras</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-box-archive" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Retiro</b><br><small>Fin de uso</small></div></div>
</div>
</div>`,
                            nextButton: 'Siguiente: Ciclo de vida del propio proceso'
                        },
                        {
                            title: 'Ciclo de vida del propio proceso',
                            content: `<p>Los procesos también tienen un ciclo de vida: se definen, se implantan, se miden y se mejoran.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Etapa</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Pregunta clave</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Definición</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Qué actividades, roles y artefactos tendrá?</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Implantación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Cómo capacitamos al equipo y lo ponemos en práctica?</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ejecución</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Se está siguiendo el proceso en los proyectos?</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Medición</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Qué indicadores muestran su desempeño?</td></tr>
<tr><td style="padding:13px 12px;"><strong>Mejora</strong></td><td style="padding:13px 12px;">¿Qué cambiamos para hacerlo más eficaz?</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
La norma ISO/IEC/IEEE 12207 define los procesos del ciclo de vida del software: acuerdo, organizacionales, de gestión técnica y técnicos.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t005',
                    label: 'Tipos de procesos de software',
                    steps: [
                        {
                            title: 'Clasificación según ISO/IEC/IEEE 12207',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Grupo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplos de procesos</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>De acuerdo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Adquisición y suministro de software.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Organizacionales</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Gestión de recursos humanos, de calidad, de conocimiento y del portafolio.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>De gestión técnica</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Planificación, evaluación y control, gestión de riesgos, de configuración y de la información.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Técnicos</strong></td><td style="padding:13px 12px;">Requerimientos, arquitectura, diseño, implementación, integración, verificación, validación, operación y mantenimiento.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Procesos dirigidos por plan y ágiles'
                        },
                        {
                            title: 'Procesos dirigidos por plan y ágiles',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;"></th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Dirigido por plan</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ágil</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Planificación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Detallada al inicio.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Incremental, se ajusta en cada iteración.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Documentación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Extensa y formal.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">La mínima necesaria.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Entregas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Al final o por fases.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Frecuentes y funcionales.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cambios</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Controlados formalmente; costosos.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Bienvenidos; se priorizan.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Adecuado para</strong></td><td style="padding:13px 12px;">Requerimientos estables, sistemas críticos, contratos fijos.</td><td style="padding:13px 12px;">Requerimientos cambiantes, productos nuevos.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Muchas organizaciones combinan ambos enfoques en procesos <strong>híbridos</strong>: planificación general por fases y desarrollo en iteraciones.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_002',
            label: 'Configuración de procesos',
            subtemas: [
                {
                    id: 'm002-t001',
                    label: 'Definición y conceptos básicos de configuración de procesos de software',
                    steps: [
                        {
                            title: 'Configurar un proceso',
                            content: `<p><strong>Configurar</strong> (o adaptar) un proceso es ajustar un proceso base de la organización a las características de un proyecto: tamaño, riesgo, tecnología, tipo de cliente y experiencia del equipo.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Concepto</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Definición</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Proceso estándar</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Proceso base definido por la organización.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Adaptación (tailoring)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Selección y ajuste de actividades del proceso estándar para un proyecto.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Proceso definido del proyecto</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Resultado de la adaptación, documentado y aprobado.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Activo de proceso</strong></td><td style="padding:13px 12px;">Plantillas, guías, listas de verificación y ejemplos reutilizables.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Factores de adaptación'
                        },
                        {
                            title: 'Factores de adaptación',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Factor</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Influye en…</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tamaño del equipo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Formalidad de la comunicación y la documentación.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Criticidad del sistema</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Nivel de revisión, pruebas y trazabilidad.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Estabilidad de requerimientos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Elección entre enfoque predictivo o iterativo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Regulaciones</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Evidencias y aprobaciones obligatorias.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Distribución geográfica</strong></td><td style="padding:13px 12px;">Herramientas de colaboración y sincronización.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Un sistema de pagos y una página informativa no deben seguir el mismo proceso: la adaptación evita tanto el exceso como la falta de control.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t002',
                    label: 'Identificación y definición de procesos de software',
                    steps: [
                        {
                            title: 'Identificar procesos',
                            content: `<ol>
    <li>Analizar cómo trabaja hoy el equipo (proceso real, no el ideal).</li>
    <li>Identificar entradas, actividades, salidas y responsables.</li>
    <li>Detectar problemas: retrasos, retrabajo, defectos recurrentes.</li>
    <li>Definir el proceso objetivo y sus criterios de entrada y salida.</li>
</ol>`,
                            nextButton: 'Siguiente: Ficha de definición de un proceso'
                        },
                        {
                            title: 'Ficha de definición de un proceso',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Elemento</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo: revisión de código</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Propósito</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Detectar defectos y compartir conocimiento antes de integrar cambios.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Entradas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pull request con descripción y pruebas.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Actividades</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Revisión automática (linter, pruebas), revisión por un par, corrección, aprobación.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Roles</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Autor, revisor, líder técnico.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Salidas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pull request aprobado e integrado.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Criterio de salida</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pruebas en verde y al menos una aprobación.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Métricas</strong></td><td style="padding:13px 12px;">Tiempo de revisión, defectos encontrados por revisión.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t003',
                    label: 'Modelado de procesos de software',
                    steps: [
                        {
                            title: '¿Por qué modelar procesos?',
                            content: `<p>Un modelo de proceso representa gráficamente el flujo de actividades. Facilita comunicarlo, analizarlo y encontrar mejoras.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Notación</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>BPMN</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Procesos de negocio y de software con carriles por rol.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>SPEM 2.0</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Estándar del OMG para describir métodos y procesos de software.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Diagrama de actividad UML</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Flujos con decisiones y paralelismo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Diagrama de flujo de valor</strong></td><td style="padding:13px 12px;">Tiempos de espera y de trabajo en cada etapa.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Ejemplo de modelo'
                        },
                        {
                            title: 'Ejemplo de modelo',
                            content: `<pre class="codigo">
Carril Desarrollador: (Tomar tarea) → (Programar) → (Abrir pull request)
Carril CI:            (Compilar y probar) → &lt;¿Pruebas pasan?&gt; —No→ regresa a Programar
Carril Revisor:       (Revisar código) → &lt;¿Aprobado?&gt; —No→ regresa a Programar
                                        —Sí→ (Integrar a main) → [Fin]
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Al modelar, marque dónde se espera (colas): suelen ser la mayor fuente de demora en los procesos de software.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t004',
                    label: 'Control de cambios en los procesos de software',
                    steps: [
                        {
                            title: 'Gestión de la configuración',
                            content: `<p>La <strong>gestión de la configuración del software</strong> (SCM) identifica, controla y registra los cambios de los elementos del proyecto (código, documentos, procesos) para mantener su integridad.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Actividad</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Identificación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Definir los elementos de configuración y su versión.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Control de cambios</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Solicitar, evaluar, aprobar e implementar cambios.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Registro de estado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Documentar qué versión tiene cada elemento.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Auditoría</strong></td><td style="padding:13px 12px;">Verificar que lo entregado corresponde a lo aprobado.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Flujo de control de cambios'
                        },
                        {
                            title: 'Flujo de control de cambios',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-file-pen" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Solicitud</b><br><small>Se describe el cambio</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-magnifying-glass-chart" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Análisis</b><br><small>Impacto y costo</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-gavel" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Decisión</b><br><small>Comité de cambios</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-code-branch" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Implementación</b><br><small>Nueva versión</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-clipboard-check" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Verificación</b><br><small>Se confirma y comunica</small></div></div>
</div>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Los cambios al <strong>proceso</strong> también se controlan: una nueva versión del proceso se comunica, se capacita y se registra la fecha en que entra en vigencia.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t005',
                    label: 'Implementación de los procesos de software',
                    steps: [
                        {
                            title: 'Estrategia de implantación',
                            content: `<ol>
    <li>Obtener el patrocinio de la dirección.</li>
    <li>Elegir un proyecto piloto.</li>
    <li>Capacitar al equipo con ejemplos reales.</li>
    <li>Proveer plantillas y herramientas que faciliten seguir el proceso.</li>
    <li>Acompañar (coaching) durante las primeras iteraciones.</li>
    <li>Recoger retroalimentación y ajustar.</li>
    <li>Extender al resto de proyectos.</li>
</ol>
<p class="nota">
<i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
La resistencia al cambio es la principal barrera. Involucre al equipo en el diseño del proceso: las personas apoyan lo que ayudan a construir.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t006',
                    label: 'Evaluación y mejora continua de los procesos de software',
                    steps: [
                        {
                            title: 'Evaluar un proceso',
                            content: `<p>Evaluar es comparar el proceso real con el definido y con sus objetivos, usando evidencia.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Indicador</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Qué revela</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Densidad de defectos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Calidad del producto que genera el proceso.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tiempo de ciclo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Velocidad desde que inicia una tarea hasta que se entrega.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Porcentaje de retrabajo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Esfuerzo desperdiciado en corregir.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cumplimiento del proceso</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Si el equipo sigue las actividades acordadas.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Satisfacción del cliente</strong></td><td style="padding:13px 12px;">Si el resultado aporta valor.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Ciclo de mejora'
                        },
                        {
                            title: 'Ciclo de mejora',
                            content: `<p>La mejora continua se basa en el ciclo <strong>PHVA</strong> (Planificar, Hacer, Verificar, Actuar) de Deming, que se estudia a fondo en el módulo de procesos de mejora.</p>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
En equipos ágiles la <strong>retrospectiva</strong> al final de cada iteración es el mecanismo de evaluación y mejora del proceso.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_003',
            label: 'Modelos de procesos',
            subtemas: [
                {
                    id: 'm003-t001',
                    label: 'Modelos en cascada y en espiral',
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
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t002',
                    label: 'Modelo de prototipado y modelo V',
                    steps: [
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
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t003',
                    label: 'Introducción a los métodos ágiles',
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
                            nextButton: 'Siguiente: Desarrollo iterativo e incremental'
                        },
                        {
                            title: 'Desarrollo iterativo e incremental',
                            content: `<ul>
    <li><strong>Iterativo</strong>: se repite el ciclo de trabajo (planificar, construir, revisar) en periodos cortos.</li>
    <li><strong>Incremental</strong>: en cada iteración se entrega una parte funcional del producto.</li>
    <li>La retroalimentación frecuente reduce el riesgo de construir algo que el cliente no necesita.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t004',
                    label: 'Principios del desarrollo ágil',
                    steps: [
                        {
                            title: 'Los doce principios',
                            content: `<ol>
    <li>La prioridad es satisfacer al cliente con entregas tempranas y continuas de software valioso.</li>
    <li>Se aceptan cambios en los requerimientos, incluso en etapas tardías.</li>
    <li>Se entrega software funcional con frecuencia, de semanas a pocos meses.</li>
    <li>Negocio y desarrolladores trabajan juntos a diario.</li>
    <li>Los proyectos se construyen con personas motivadas, con apoyo y confianza.</li>
    <li>La conversación cara a cara es el método más eficaz de comunicación.</li>
    <li>El software funcionando es la principal medida de progreso.</li>
    <li>Se promueve un ritmo de trabajo sostenible.</li>
    <li>La atención continua a la excelencia técnica mejora la agilidad.</li>
    <li>La simplicidad, maximizar el trabajo no realizado, es esencial.</li>
    <li>Las mejores arquitecturas y diseños surgen de equipos autoorganizados.</li>
    <li>El equipo reflexiona periódicamente sobre cómo ser más efectivo y ajusta su conducta.</li>
</ol>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t005',
                    label: 'Metodologías de desarrollo ágil',
                    steps: [
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
                            nextButton: 'Siguiente: Otras metodologías y marcos escalados'
                        },
                        {
                            title: 'Otras metodologías y marcos escalados',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Metodología</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Enfoque</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Lean</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Eliminar desperdicios y optimizar el flujo de valor.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Crystal</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Adaptar la metodología según el tamaño y la criticidad.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>DSDM</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Plazos y costos fijos, alcance flexible (MoSCoW).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>SAFe, LeSS, Nexus</strong></td><td style="padding:13px 12px;">Escalar la agilidad a varios equipos y a la organización.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t006',
                    label: 'Evaluación e implementación de metodologías ágiles',
                    steps: [
                        {
                            title: '¿Es adecuada una metodología ágil?',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Factor</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Favorece ágil</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Favorece dirigido por plan</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Requerimientos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cambiantes o poco claros.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Estables y bien definidos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cliente</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Disponible para colaborar.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Poco disponible.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Equipo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pequeño y experimentado.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Grande o distribuido.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Regulación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Baja.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Alta, con documentación obligatoria.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Cultura</strong></td><td style="padding:13px 12px;">Confianza y autonomía.</td><td style="padding:13px 12px;">Jerárquica y de control.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Implementación'
                        },
                        {
                            title: 'Implementación',
                            content: `<ol>
    <li>Capacitar al equipo y a la dirección en los valores ágiles.</li>
    <li>Empezar con un equipo piloto y un producto acotado.</li>
    <li>Definir roles, eventos y la definición de terminado.</li>
    <li>Medir indicadores: velocidad, tiempo de ciclo, defectos, satisfacción.</li>
    <li>Realizar retrospectivas y ajustar.</li>
</ol>
<p class="nota">
<i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
Un error común es el “Scrum de fachada”: tener reuniones diarias y tableros, pero sin entregas frecuentes ni participación real del cliente.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_004',
            label: 'Calidad del software',
            subtemas: [
                {
                    id: 'm004-t001',
                    label: 'Definición de calidad del software',
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
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t002',
                    label: 'Normas y estándares de calidad del software',
                    steps: [
                        {
                            title: 'Principales normas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Norma</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Enfoque</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>ISO 9001</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sistema de gestión de calidad de cualquier organización.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>ISO/IEC 25000 (SQuaRE)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Requerimientos y evaluación de la calidad del producto de software.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>ISO/IEC 25010</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Modelo de características de calidad del producto.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>ISO/IEC/IEEE 12207</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Procesos del ciclo de vida del software.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>ISO/IEC 33000 (antes 15504)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Evaluación de la capacidad de los procesos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>IEEE 730</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Plan de aseguramiento de la calidad del software.</td></tr>
<tr><td style="padding:13px 12px;"><strong>ISO/IEC/IEEE 29119</strong></td><td style="padding:13px 12px;">Pruebas de software.</td></tr>
</tbody>
</table>
</div>`,
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
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t003',
                    label: 'Métricas y medición de la calidad del software',
                    steps: [
                        {
                            title: '¿Qué es una métrica?',
                            content: `<p>Una <strong>métrica</strong> es una medida cuantitativa de un atributo del producto, del proceso o del proyecto. Permite tomar decisiones con datos y no con impresiones.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplos</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Producto</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Densidad de defectos, complejidad ciclomática, cobertura de pruebas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Proceso</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Eficacia de eliminación de defectos, tiempo de ciclo.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Proyecto</strong></td><td style="padding:13px 12px;">Desviación de cronograma, esfuerzo, productividad.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Métricas frecuentes'
                        },
                        {
                            title: 'Métricas frecuentes',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Métrica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Fórmula</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Densidad de defectos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">defectos ÷ tamaño (KLOC o puntos de función)</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Eficacia de eliminación de defectos (DRE)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">defectos antes de entregar ÷ (defectos antes + después) × 100</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cobertura de pruebas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">líneas ejecutadas por las pruebas ÷ líneas totales × 100</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tiempo medio entre fallas (MTBF)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">tiempo de operación ÷ número de fallas</td></tr>
<tr><td style="padding:13px 12px;"><strong>Tiempo medio de recuperación (MTTR)</strong></td><td style="padding:13px 12px;">tiempo total de reparación ÷ número de fallas</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
El enfoque <strong>GQM</strong> (Objetivo–Pregunta–Métrica) ayuda a elegir métricas útiles: primero se define el objetivo, luego las preguntas y por último qué medir.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t004',
                    label: 'Pruebas de software',
                    steps: [
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
                            nextButton: 'Siguiente: Tipos y técnicas'
                        },
                        {
                            title: 'Tipos y técnicas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Clasificación</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplos</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Funcionales</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Verifican lo que el sistema hace.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>No funcionales</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Rendimiento, carga, seguridad, usabilidad, compatibilidad.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Caja negra</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Partición de equivalencia, valores límite, tablas de decisión.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Caja blanca</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cobertura de sentencias, de ramas y de caminos.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Regresión</strong></td><td style="padding:13px 12px;">Verifican que un cambio no dañó lo que ya funcionaba.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Siete principios de las pruebas (ISTQB): las pruebas muestran presencia de defectos, no su ausencia; las pruebas exhaustivas son imposibles; probar temprano ahorra; los defectos se agrupan; las pruebas se desgastan; dependen del contexto; la ausencia de errores es una falacia.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t005',
                    label: 'Gestión de la calidad del software',
                    steps: [
                        {
                            title: 'Componentes de la gestión de calidad',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Componente</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Propósito</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Planificación de la calidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Definir estándares, métricas y actividades de calidad del proyecto.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Aseguramiento de la calidad (QA)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Verificar que se siguen los procesos definidos. Es preventivo.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Control de calidad (QC)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Inspeccionar y probar los productos para detectar defectos. Es detectivo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Mejora de la calidad</strong></td><td style="padding:13px 12px;">Analizar causas y mejorar el proceso.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Plan de calidad'
                        },
                        {
                            title: 'Plan de calidad',
                            content: `<ol>
    <li>Objetivos de calidad del producto (por ejemplo, densidad de defectos menor a 0,5 por KLOC).</li>
    <li>Estándares y normas aplicables.</li>
    <li>Revisiones y auditorías planificadas.</li>
    <li>Estrategia de pruebas.</li>
    <li>Métricas y frecuencia de medición.</li>
    <li>Responsables y herramientas.</li>
</ol>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_005',
            label: 'Construcción de software',
            subtemas: [
                {
                    id: 'm005-t001',
                    label: 'Definición de construcción de software',
                    steps: [
                        {
                            title: 'Construcción de software',
                            content: `<p>La <strong>construcción</strong> es la creación del software funcional mediante codificación, verificación, pruebas unitarias, integración y depuración (SWEBOK).</p>
<ul>
    <li>Minimizar la complejidad: código simple y legible.</li>
    <li>Anticipar los cambios: diseño modular.</li>
    <li>Construir para verificar: código fácil de probar.</li>
    <li>Usar estándares de codificación.</li>
</ul>
<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-code" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Codificar</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-vial" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Prueba unitaria</b><br><small></small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-code-merge" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Integrar</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-hammer" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Compilar (build)</b><br><small></small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-box" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Empaquetar</b><br><small></small></div></div>
</div>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t002',
                    label: 'Integración continua',
                    steps: [
                        {
                            title: '¿Qué es la integración continua?',
                            content: `<p>La <strong>integración continua (CI)</strong> es la práctica de integrar los cambios de código al repositorio principal varias veces al día. Cada integración se verifica automáticamente con compilación y pruebas.</p>
<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-code-commit" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Commit / push</b><br><small>El desarrollador sube cambios</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-robot" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Servidor CI</b><br><small>Detecta el cambio</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-hammer" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Build</b><br><small>Compila e instala dependencias</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-vial" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Pruebas</b><br><small>Unitarias e integración</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-bell" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Resultado</b><br><small>Notifica éxito o falla</small></div></div>
</div>
</div>`,
                            nextButton: 'Siguiente: Ejemplo con GitHub Actions'
                        },
                        {
                            title: 'Ejemplo con GitHub Actions',
                            content: `<pre class="codigo">
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]
jobs:
  pruebas:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run lint
      - run: npm test
</pre>
<ul>
    <li>Mantenga la compilación rápida (idealmente menos de 10 minutos).</li>
    <li>Si la compilación falla, corregirla es la prioridad del equipo.</li>
    <li>Todo el código, la configuración y las pruebas viven en el repositorio.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t003',
                    label: 'Entrega continua',
                    steps: [
                        {
                            title: 'Entrega y despliegue continuos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Práctica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Alcance</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Integración continua</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cada cambio se compila y prueba automáticamente.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Entrega continua</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cada cambio que pasa las pruebas queda <strong>listo</strong> para producción; el paso final es manual.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Despliegue continuo</strong></td><td style="padding:13px 12px;">Cada cambio que pasa las pruebas se publica en producción <strong>automáticamente</strong>.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Canal de entrega'
                        },
                        {
                            title: 'Canal de entrega (pipeline)',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-code" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Commit</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-hammer" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Build y pruebas unitarias</b><br><small></small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-flask" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Pruebas de integración</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-server" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Ambiente de pruebas (staging)</b><br><small></small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-user-check" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Aprobación</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-rocket" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Producción</b><br><small></small></div></div>
</div>
</div>
<ul>
    <li>El mismo artefacto (paquete o imagen) se promueve de un ambiente a otro.</li>
    <li>Los ambientes se crean con <strong>infraestructura como código</strong> para que sean idénticos.</li>
    <li>Estrategias de despliegue seguro: azul-verde, canario, banderas de funcionalidad.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t004',
                    label: 'Introducción a Desarrollo de Software y Operaciones (DevOps)',
                    steps: [
                        {
                            title: '¿Qué es DevOps?',
                            content: `<p><strong>DevOps</strong> es una cultura y un conjunto de prácticas que unen a los equipos de desarrollo (Dev) y operaciones (Ops) para entregar software con rapidez, calidad y estabilidad.</p>
<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-calendar" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Planificar</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-code" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Codificar</b><br><small></small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-hammer" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Construir</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-vial" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Probar</b><br><small></small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-box" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Liberar</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-rocket" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Desplegar</b><br><small></small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-gears" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Operar</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-chart-line" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Monitorear</b><br><small></small></div></div>
</div>
</div>`,
                            nextButton: 'Siguiente: Principios y métricas'
                        },
                        {
                            title: 'Principios y métricas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Principio (CALMS)</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cultura</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Colaboración y responsabilidad compartida.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Automatización</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Build, pruebas, despliegue e infraestructura automatizados.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Lean</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Lotes pequeños y eliminación de desperdicios.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Medición</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Decisiones basadas en datos.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Compartir</strong></td><td style="padding:13px 12px;">Conocimiento y herramientas comunes.</td></tr>
</tbody>
</table>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Métrica DORA</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Mide</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Frecuencia de despliegue</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cada cuánto se publica en producción.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tiempo de entrega de cambios</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Desde el commit hasta producción.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tasa de fallas de cambios</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Porcentaje de despliegues que causan incidentes.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Tiempo de recuperación</strong></td><td style="padding:13px 12px;">Cuánto tarda en restablecerse el servicio.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t005',
                    label: 'Introducción a Gestión del Flujo de Valor (VSM)',
                    steps: [
                        {
                            title: 'Mapa del flujo de valor',
                            content: `<p>La <strong>gestión del flujo de valor</strong> (Value Stream Management) analiza todas las etapas desde que surge una idea hasta que llega al cliente, para identificar desperdicios y demoras.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Etapa</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tiempo de trabajo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tiempo de espera</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Análisis del requerimiento</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">4 h</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">3 días</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Desarrollo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">16 h</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">1 día</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Revisión de código</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">1 h</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">2 días</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pruebas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">4 h</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">4 días</td></tr>
<tr><td style="padding:13px 12px;"><strong>Despliegue</strong></td><td style="padding:13px 12px;">1 h</td><td style="padding:13px 12px;">5 días</td></tr>
</tbody>
</table>
</div>
<p><strong>Eficiencia del flujo</strong> = tiempo de trabajo ÷ tiempo total. En el ejemplo: 26 h de trabajo frente a 15 días de espera; la mayor oportunidad de mejora está en las esperas, no en programar más rápido.</p>`,
                            nextButton: 'Siguiente: Desperdicios en el software'
                        },
                        {
                            title: 'Desperdicios en el software (Lean)',
                            content: `<ul>
    <li>Trabajo parcialmente terminado.</li>
    <li>Funcionalidades extra que nadie usa.</li>
    <li>Reaprendizaje por falta de documentación.</li>
    <li>Traspasos entre equipos.</li>
    <li>Esperas y demoras.</li>
    <li>Cambios de contexto.</li>
    <li>Defectos.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_006',
            label: 'Gestión de proyectos',
            subtemas: [
                {
                    id: 'm006-t001',
                    label: 'Definición de gestión de proyectos de software',
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
                            nextButton: 'Siguiente: Particularidades del software'
                        },
                        {
                            title: 'Particularidades del software',
                            content: `<ul>
    <li>El producto es intangible: el avance es difícil de ver.</li>
    <li>Los requerimientos cambian con frecuencia.</li>
    <li>Cada proyecto suele ser diferente en tecnología y dominio.</li>
    <li>La productividad depende mucho de las personas.</li>
</ul>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Enfoque</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Referencia</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Predictivo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Guía PMBOK, PRINCE2.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ágil</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Scrum, Kanban, Guía práctica de agilidad del PMI.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Híbrido</strong></td><td style="padding:13px 12px;">Fases planificadas con desarrollo iterativo.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t002',
                    label: 'Planificación y control de proyectos de software',
                    steps: [
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
                            nextButton: 'Siguiente: Cronograma'
                        },
                        {
                            title: 'Cronograma',
                            content: `<ul>
    <li>Se definen actividades, su duración y sus dependencias.</li>
    <li>El <strong>diagrama de Gantt</strong> muestra las actividades en el tiempo.</li>
    <li>La <strong>ruta crítica</strong> es la secuencia más larga de actividades dependientes: si una se atrasa, se atrasa todo el proyecto.</li>
    <li>En proyectos ágiles se planifica por lanzamientos y sprints con un backlog priorizado.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t003',
                    label: 'Estimación de tiempo y costos del proyecto de software',
                    steps: [
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
                            nextButton: 'Siguiente: Ejemplo de estimación por tres puntos'
                        },
                        {
                            title: 'Ejemplo de estimación por tres puntos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Actividad</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Optimista</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Más probable</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Pesimista</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">PERT</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Módulo de usuarios</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">4 días</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">6 días</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">14 días</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">7 días</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Módulo de reservas</strong></td><td style="padding:13px 12px;">6 días</td><td style="padding:13px 12px;">10 días</td><td style="padding:13px 12px;">20 días</td><td style="padding:13px 12px;">11 días</td></tr>
</tbody>
</table>
</div>
<p>Costo = esfuerzo (horas) × tarifa por hora + costos de herramientas, infraestructura y licencias + reserva para contingencias.</p>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
El “cono de incertidumbre” muestra que las estimaciones al inicio pueden variar hasta 4 veces; se refinan conforme avanza el proyecto.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t004',
                    label: 'Gestión de riesgos del proyecto de software',
                    steps: [
                        {
                            title: 'Proceso de gestión de riesgos',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-magnifying-glass" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Identificar</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-scale-balanced" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Analizar</b><br><small>Probabilidad × impacto</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-shield-halved" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Planificar respuesta</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-eye" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Monitorear</b><br><small></small></div></div>
</div>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Estrategia (riesgo negativo)</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Evitar</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cambiar de tecnología inmadura a una probada.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Mitigar</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Capacitar al equipo en el nuevo marco de trabajo.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Transferir</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Contratar un servicio en la nube con acuerdo de nivel de servicio.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Aceptar</strong></td><td style="padding:13px 12px;">Asumir el riesgo y reservar tiempo de contingencia.</td></tr>
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
                    id: 'm006-t005',
                    label: 'Seguimiento y control del proyecto de software',
                    steps: [
                        {
                            title: 'Valor ganado',
                            content: `<p>La <strong>gestión del valor ganado</strong> (EVM) compara lo planificado, lo realizado y lo gastado.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Indicador</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Fórmula</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Interpretación</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>PV (valor planificado)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Costo del trabajo que debía estar hecho.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">—</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>EV (valor ganado)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Costo presupuestado del trabajo realmente hecho.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">—</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>AC (costo real)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Lo que realmente se gastó.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">—</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>SPI</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">EV ÷ PV</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Menor que 1: atrasado.</td></tr>
<tr><td style="padding:13px 12px;"><strong>CPI</strong></td><td style="padding:13px 12px;">EV ÷ AC</td><td style="padding:13px 12px;">Menor que 1: sobre el presupuesto.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Seguimiento ágil'
                        },
                        {
                            title: 'Seguimiento ágil',
                            content: `<ul>
    <li><strong>Gráfico de quemado (burndown)</strong>: trabajo pendiente del sprint por día.</li>
    <li><strong>Velocidad</strong>: puntos completados por sprint.</li>
    <li><strong>Diagrama de flujo acumulado</strong>: cantidad de tareas en cada estado a lo largo del tiempo.</li>
</ul>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Los indicadores sirven para tomar decisiones a tiempo: ajustar el alcance, reasignar personas o renegociar fechas.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t006',
                    label: 'Gestión de interesados',
                    steps: [
                        {
                            title: 'Identificar y analizar interesados',
                            content: `<p>Un <strong>interesado</strong> es toda persona o grupo que afecta o es afectado por el proyecto.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Poder / interés</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Estrategia</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Alto poder, alto interés</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Gestionar de cerca.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Alto poder, bajo interés</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mantener satisfecho.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Bajo poder, alto interés</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mantener informado.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Bajo poder, bajo interés</strong></td><td style="padding:13px 12px;">Monitorear.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Plan de comunicación'
                        },
                        {
                            title: 'Plan de comunicación',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Interesado</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Información</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Medio</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Frecuencia</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Patrocinador</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Avance, riesgos, presupuesto</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Reunión y reporte ejecutivo</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Quincenal</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Usuarios clave</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Demostración del incremento</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Revisión del sprint</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cada sprint</td></tr>
<tr><td style="padding:13px 12px;"><strong>Equipo</strong></td><td style="padding:13px 12px;">Tareas y bloqueos</td><td style="padding:13px 12px;">Reunión diaria y tablero</td><td style="padding:13px 12px;">Diaria</td></tr>
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
            label: 'Procesos de mejora',
            subtemas: [
                {
                    id: 'm007-t001',
                    label: 'Ciclo de mejora continua del software',
                    steps: [
                        {
                            title: 'Ciclo PHVA (PDCA)',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Fase</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Actividades</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Planificar</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Identificar el problema, analizar causas, definir objetivo y acciones.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Reducir 30 % los defectos en producción.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Hacer</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Implementar las acciones a pequeña escala.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Revisión de código obligatoria en un equipo.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Verificar</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Medir los resultados y compararlos con el objetivo.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Los defectos bajaron 25 %.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Actuar</strong></td><td style="padding:13px 12px;">Estandarizar lo que funcionó o ajustar y repetir.</td><td style="padding:13px 12px;">Extender la práctica a todos los equipos.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Otros enfoques de mejora'
                        },
                        {
                            title: 'Otros enfoques de mejora',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Enfoque</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Idea central</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Kaizen</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mejoras pequeñas, constantes y de todas las personas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>IDEAL (SEI)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Iniciar, Diagnosticar, Establecer, Actuar, Aprender.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Seis Sigma (DMAIC)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Definir, Medir, Analizar, Mejorar, Controlar; reducir variación.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Retrospectivas ágiles</strong></td><td style="padding:13px 12px;">El equipo identifica qué mantener, qué dejar y qué probar.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t002',
                    label: 'Estándares de calidad de software',
                    steps: [
                        {
                            title: 'Estándares para la mejora de procesos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Estándar</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Aporte a la mejora</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>ISO 9001</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Requiere un sistema de gestión de calidad con mejora continua y auditorías.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>ISO/IEC 90003</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Guía para aplicar ISO 9001 al software.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>ISO/IEC/IEEE 12207</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Marco de referencia de procesos del ciclo de vida.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>ISO/IEC 33000</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Evaluación de la capacidad de procesos (niveles 0 a 5).</td></tr>
<tr><td style="padding:13px 12px;"><strong>ISO/IEC 29110</strong></td><td style="padding:13px 12px;">Procesos para entidades muy pequeñas (menos de 25 personas).</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
La ISO/IEC 29110 es especialmente útil para empresas pequeñas de software, muy comunes en Costa Rica y Latinoamérica.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t003',
                    label: 'Modelos de madurez del software',
                    steps: [
                        {
                            title: 'CMMI',
                            content: `<p>El <strong>Modelo Integrado de Madurez de Capacidades (CMMI)</strong> describe cinco niveles de madurez organizacional.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Nivel</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Nombre</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Característica</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Inicial</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Procesos impredecibles; el éxito depende de individuos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>2</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Gestionado</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Los proyectos se planifican, siguen y controlan.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>3</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Definido</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Procesos estándar de la organización, adaptados a cada proyecto.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>4</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Gestionado cuantitativamente</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Los procesos se controlan con métricas estadísticas.</td></tr>
<tr><td style="padding:13px 12px;"><strong>5</strong></td><td style="padding:13px 12px;">En optimización</td><td style="padding:13px 12px;">Mejora continua basada en datos e innovación.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Otros modelos'
                        },
                        {
                            title: 'Otros modelos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Modelo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Enfoque</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>SPICE (ISO/IEC 15504 / 33000)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Capacidad de cada proceso por separado.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>MoProSoft</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Modelo mexicano para empresas pequeñas de software.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>TMMi</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Madurez de los procesos de prueba.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Modelos de madurez DevOps</strong></td><td style="padding:13px 12px;">Grado de automatización y colaboración.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t004',
                    label: 'Herramientas para la mejora de software',
                    steps: [
                        {
                            title: 'Herramientas de análisis',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Herramienta</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Diagrama de Pareto</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Identificar el 20 % de causas que generan el 80 % de los problemas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Diagrama de Ishikawa</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Organizar las causas posibles de un problema.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cinco porqués</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Llegar a la causa raíz.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Gráficos de control</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Detectar si un proceso es estable.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Mapa de flujo de valor</strong></td><td style="padding:13px 12px;">Identificar esperas y desperdicios.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Herramientas tecnológicas'
                        },
                        {
                            title: 'Herramientas tecnológicas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Categoría</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplos</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Gestión de trabajo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Jira, Azure Boards, GitHub Projects, Trello.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Calidad de código</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">SonarQube, ESLint, Pylint.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>CI/CD</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">GitHub Actions, GitLab CI, Jenkins, Azure Pipelines.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Monitoreo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Grafana, Prometheus, Datadog.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Documentación</strong></td><td style="padding:13px 12px;">Confluence, Notion, wikis de repositorio.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t005',
                    label: 'Auditoría de software',
                    steps: [
                        {
                            title: '¿Qué es una auditoría?',
                            content: `<p>Una <strong>auditoría</strong> es un examen independiente de los productos o procesos de software para evaluar su conformidad con normas, planes, contratos y procedimientos (IEEE 1028).</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Evalúa</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>De proceso</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Si se siguen los procesos definidos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>De producto</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Si el producto cumple sus requerimientos y estándares.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>De configuración</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Si lo entregado coincide con lo aprobado.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>De cumplimiento</strong></td><td style="padding:13px 12px;">Si se respetan leyes y regulaciones.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Etapas de una auditoría'
                        },
                        {
                            title: 'Etapas de una auditoría',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-calendar-check" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Planificación</b><br><small>Alcance y criterios</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-folder-open" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Preparación</b><br><small>Listas de verificación</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-magnifying-glass" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Ejecución</b><br><small>Entrevistas y evidencias</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-file-signature" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Informe</b><br><small>Hallazgos</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-rotate" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Seguimiento</b><br><small>Acciones correctivas</small></div></div>
</div>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Hallazgo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>No conformidad mayor</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Incumplimiento que compromete el sistema.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>No conformidad menor</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Incumplimiento puntual.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Observación</strong></td><td style="padding:13px 12px;">Oportunidad de mejora.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        }
    ]
};
