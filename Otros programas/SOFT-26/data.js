const data = {
    // Pantalla de bienvenida
    welcome: {
        title: 'SOFT-26 <br> Estándares y Métricas de Calidad del Software',
        image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-26/imgs/logo.png', // Cambiar por imagen real
        description: 'Implementación de marcos normativos y métricas para evaluar y mantener la calidad del software en todo su ciclo de vida: estándares ISO e IEEE, técnicas de prueba, gestión de la calidad, desarrollo ágil y sistemas críticos.',
        instruction: 'Seleccione cada pestaña para acceder a la información'
    },
    // Temas principales y sus subtemas con pasos
    temas: [
        {
            id: 'modulo_001',
            label: 'Fundamentos de la calidad',
            subtemas: [
                {
                    id: 'm001-t001',
                    label: 'Evolución de la calidad del software',
                    steps: [
                        {
                            title: 'De la calidad industrial a la calidad del software',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Época</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Aporte</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1920–1950</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Control estadístico de procesos (Shewhart).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1950–1980</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Deming (PHVA), Juran (trilogía de la calidad), Crosby (cero defectos), Ishikawa (círculos de calidad).</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1970s</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Primeros modelos de calidad del software: McCall y Boehm.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1980s</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Calidad total (TQM) e ISO 9000.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1990s</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">CMM, ISO/IEC 9126, ISO/IEC 12207, SPICE.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>2000s</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">CMMI, metodologías ágiles, ISO/IEC 25000.</td></tr>
<tr><td style="padding:13px 12px;"><strong>2010s – hoy</strong></td><td style="padding:13px 12px;">DevOps, pruebas continuas, calidad con métricas en tiempo real, IA.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t002',
                    label: 'Conceptos clave en calidad del software',
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
                            nextButton: 'Siguiente: Error, defecto y falla'
                        },
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
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t003',
                    label: 'Modelos de madurez y capacidades en uso',
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
                    id: 'm001-t004',
                    label: 'Metodologías y enfoques para la mejora de calidad del software',
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
                            nextButton: 'Siguiente: Lean y Seis Sigma en el software'
                        },
                        {
                            title: 'Lean y Seis Sigma en el software',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Enfoque</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Aplicación en software</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Lean</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Eliminar esperas, trabajo parcial y funcionalidades sin uso.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Seis Sigma</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Reducir la variación de la densidad de defectos con DMAIC.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>TSP / PSP</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Medición personal y de equipo del tiempo y los defectos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>DevOps</strong></td><td style="padding:13px 12px;">Retroalimentación rápida mediante automatización.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t005',
                    label: 'Integración de la calidad en el ciclo de vida del software',
                    steps: [
                        {
                            title: 'Calidad en cada fase',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Fase</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Actividades de calidad</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Requerimientos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Revisión, criterios de aceptación, requerimientos de calidad medibles.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Diseño</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Revisión de arquitectura, escenarios de atributos de calidad.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Construcción</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Estándares, revisión de código, pruebas unitarias, análisis estático.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pruebas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Integración, sistema, aceptación, no funcionales.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Despliegue</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pruebas de humo, liberación controlada.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Operación y mantenimiento</strong></td><td style="padding:13px 12px;">Monitoreo, gestión de incidentes, mejora continua.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Mientras más temprano se detecta un defecto, menor es su costo de corrección: por eso la calidad se integra desde los requerimientos (shift-left).</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_002',
            label: 'Métricas de calidad',
            subtemas: [
                {
                    id: 'm002-t001',
                    label: 'Definición y propósito de las métricas de calidad',
                    steps: [
                        {
                            title: 'Medida, métrica e indicador',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Término</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Definición</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Medida</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Valor obtenido al medir un atributo.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">18 defectos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Métrica</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Relación entre medidas.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">0,9 defectos por KLOC.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Indicador</strong></td><td style="padding:13px 12px;">Métrica comparada con una meta para tomar decisiones.</td><td style="padding:13px 12px;">Densidad mayor a 0,5: no liberar.</td></tr>
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
                            nextButton: 'Siguiente: Propósito'
                        },
                        {
                            title: 'Propósito',
                            content: `<ul>
    <li>Entender: conocer el estado actual.</li>
    <li>Evaluar: comparar contra metas.</li>
    <li>Predecir: estimar defectos y esfuerzo.</li>
    <li>Mejorar: identificar dónde actuar.</li>
</ul>
<p class="nota">
<i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
Si una métrica se convierte en meta, deja de ser buena métrica (ley de Goodhart): por ejemplo, exigir cobertura del 100 % puede provocar pruebas sin aserciones.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t002',
                    label: 'Tipos de métricas de calidad',
                    steps: [
                        {
                            title: 'Clasificaciones',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Clasificación</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipos</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplos</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Por entidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Producto, proceso, proyecto, recursos.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Complejidad; DRE; desviación de cronograma; productividad.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Por obtención</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Directas (se miden) e indirectas (se calculan).</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Líneas de código; densidad de defectos.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Por escala</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Nominal, ordinal, intervalo, razón.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Tipo de defecto; severidad; fecha; tiempo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Por perspectiva</strong></td><td style="padding:13px 12px;">Internas, externas y de calidad en uso.</td><td style="padding:13px 12px;">Acoplamiento; MTBF; satisfacción.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t003',
                    label: 'Métricas de calidad en el ciclo de vida del software',
                    steps: [
                        {
                            title: 'Métricas por fase',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Fase</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Métricas</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Requerimientos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Volatilidad, defectos por revisión, porcentaje con criterios de aceptación.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Diseño</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Acoplamiento, cohesión, profundidad de herencia.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Construcción</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Complejidad ciclomática, duplicación, cobertura, deuda técnica.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pruebas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Casos ejecutados y aprobados, defectos por severidad, densidad de defectos.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Operación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">MTBF, MTTR, disponibilidad, defectos reportados por clientes.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Proceso</strong></td><td style="padding:13px 12px;">DRE, tiempo de ciclo, frecuencia de despliegue.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t004',
                    label: 'Métricas para la calidad interna y externa del software',
                    steps: [
                        {
                            title: 'Calidad interna, externa y en uso (ISO/IEC 25023 y 25022)',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Perspectiva</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Se mide</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplos</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Interna</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Atributos estáticos del código y del diseño.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Complejidad, tamaño, acoplamiento, duplicación.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Externa</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Comportamiento del sistema en ejecución.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Tiempo de respuesta, tasa de fallas, disponibilidad.</td></tr>
<tr><td style="padding:13px 12px;"><strong>En uso</strong></td><td style="padding:13px 12px;">Efecto en el usuario en su contexto.</td><td style="padding:13px 12px;">Eficacia, eficiencia, satisfacción.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Métricas orientadas a objetos'
                        },
                        {
                            title: 'Métricas orientadas a objetos (CK)',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Métrica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Valor deseable</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>WMC</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Complejidad total de los métodos de una clase.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Bajo</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>DIT</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Profundidad del árbol de herencia.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Bajo</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>NOC</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Número de subclases.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Moderado</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>CBO</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Acoplamiento entre clases.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Bajo</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>RFC</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Métodos que pueden ejecutarse ante un mensaje.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Bajo</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>LCOM</strong></td><td style="padding:13px 12px;">Falta de cohesión de los métodos.</td><td style="padding:13px 12px;">Bajo</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Una buena calidad interna favorece la externa: un código simple y desacoplado tiene menos defectos y se corrige más rápido.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t005',
                    label: 'Herramientas y técnicas para la medición de métricas de calidad',
                    steps: [
                        {
                            title: 'Herramientas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Herramienta</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Métricas</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>SonarQube / SonarCloud</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Complejidad, duplicación, cobertura, vulnerabilidades, deuda técnica.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>coverage.py, JaCoCo, Istanbul</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cobertura de pruebas.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Jira, Azure DevOps</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Defectos, velocidad, tiempo de ciclo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Prometheus y Grafana</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Métricas de operación.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Lighthouse</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Rendimiento y accesibilidad web.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>radon (Python)</strong></td><td style="padding:13px 12px;">Complejidad ciclomática e índice de mantenibilidad.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
radon cc app/ -a          # complejidad ciclomática promedio
radon mi app/             # índice de mantenibilidad
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Automatice la recolección de métricas en el canal de CI para que estén siempre actualizadas y no dependan de reportes manuales.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_003',
            label: 'Estándares de calidad',
            subtemas: [
                {
                    id: 'm003-t001',
                    label: 'Norma ISO/IEC 25000',
                    steps: [
                        {
                            title: 'Familia SQuaRE',
                            content: `<p><strong>ISO/IEC 25000</strong> (Requerimientos y Evaluación de la Calidad de Sistemas y Software, SQuaRE) reemplaza a ISO/IEC 9126 y 14598. Se organiza en divisiones:</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">División</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Normas</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Contenido</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Gestión de la calidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">2500n</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Guía general y planificación.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Modelo de calidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">2501n</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">25010: calidad del producto; 25012: calidad de los datos.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Medición de la calidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">2502n</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">25022, 25023: métricas de calidad en uso y del producto.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Requerimientos de calidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">2503n</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">25030: especificar requerimientos de calidad.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Evaluación de la calidad</strong></td><td style="padding:13px 12px;">2504n</td><td style="padding:13px 12px;">25040: proceso de evaluación.</td></tr>
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
                            nextButton: 'Siguiente: Proceso de evaluación'
                        },
                        {
                            title: 'Proceso de evaluación (ISO/IEC 25040)',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-bullseye" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Establecer requisitos</b><br><small>Propósito y modelo</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-list-check" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Especificar</b><br><small>Métricas y criterios</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-calendar" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Diseñar</b><br><small>Plan de evaluación</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-play" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Ejecutar</b><br><small>Medir</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-file-signature" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Concluir</b><br><small>Informe</small></div></div>
</div>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t002',
                    label: 'Norma ISO/IEC 9126',
                    steps: [
                        {
                            title: 'Modelo de calidad ISO/IEC 9126',
                            content: `<p>Norma histórica (1991–2001) que estableció un modelo de calidad del producto con seis características y sus subcaracterísticas. Fue sustituida por ISO/IEC 25010, pero su estructura sigue siendo una referencia.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Característica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Subcaracterísticas</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Funcionalidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Adecuación, exactitud, interoperabilidad, seguridad, cumplimiento.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Fiabilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Madurez, tolerancia a fallos, capacidad de recuperación.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Usabilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Comprensibilidad, facilidad de aprendizaje, operabilidad, atractivo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Eficiencia</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Comportamiento temporal, utilización de recursos.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Mantenibilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Analizabilidad, cambiabilidad, estabilidad, facilidad de prueba.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Portabilidad</strong></td><td style="padding:13px 12px;">Adaptabilidad, instalabilidad, coexistencia, reemplazabilidad.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: De 9126 a 25010'
                        },
                        {
                            title: 'De 9126 a 25010',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Cambio</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Seguridad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pasa de subcaracterística a característica.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Compatibilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Nueva característica.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Calidad en uso</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Modelo separado y ampliado.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>25010:2023</strong></td><td style="padding:13px 12px;">Agrega protección (safety) y renombra usabilidad como capacidad de interacción.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t003',
                    label: 'Norma IEEE 730',
                    steps: [
                        {
                            title: 'IEEE 730: plan de aseguramiento de la calidad',
                            content: `<p>La norma <strong>IEEE 730</strong> establece los requisitos para iniciar, planificar, controlar y ejecutar los procesos de aseguramiento de la calidad del software en un proyecto.</p>
<ol>
    <li>Propósito y alcance.</li>
    <li>Organización y responsabilidades de calidad.</li>
    <li>Estándares, prácticas y convenciones.</li>
    <li>Revisiones y auditorías planificadas.</li>
    <li>Pruebas.</li>
    <li>Gestión de problemas y acciones correctivas.</li>
    <li>Herramientas, técnicas y metodologías.</li>
    <li>Control de proveedores.</li>
    <li>Registros y métricas.</li>
</ol>`,
                            nextButton: 'Siguiente: Actividades de SQA según IEEE 730'
                        },
                        {
                            title: 'Actividades de SQA según IEEE 730',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Área</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Actividades</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Implementación del proceso de SQA</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Plan de SQA, roles, independencia.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Aseguramiento del producto</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Evaluar planes, productos y su conformidad.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Aseguramiento del proceso</strong></td><td style="padding:13px 12px;">Evaluar procesos del ciclo de vida, del entorno y de proveedores.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
IEEE 730 se alinea con los procesos de ISO/IEC/IEEE 12207 y exige registrar evidencias objetivas de cada actividad.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t004',
                    label: 'Norma ISO/IEC 12207',
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
                            nextButton: 'Siguiente: Uso de ISO/IEC/IEEE 12207'
                        },
                        {
                            title: 'Uso de ISO/IEC/IEEE 12207',
                            content: `<ul>
    <li>Lenguaje común entre clientes y proveedores.</li>
    <li>Base para definir el proceso estándar de la organización.</li>
    <li>Marco de referencia para evaluar procesos (ISO/IEC 33000).</li>
    <li>Adaptable al tamaño y tipo de proyecto (tailoring).</li>
</ul>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Proceso técnico</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Resultado</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Definición de requisitos de los interesados</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Necesidades documentadas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Definición de la arquitectura</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Arquitectura evaluada.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Implementación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Elementos de software construidos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Verificación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Evidencia de que se cumple la especificación.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Validación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Evidencia de que se satisfacen las necesidades.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Mantenimiento</strong></td><td style="padding:13px 12px;">Capacidad de soporte sostenida.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t005',
                    label: 'Norma ISO/IEC 15504',
                    steps: [
                        {
                            title: 'SPICE: evaluación de procesos',
                            content: `<p><strong>ISO/IEC 15504</strong> (SPICE) define cómo evaluar la <strong>capacidad</strong> de los procesos de software. Fue sustituida por la familia <strong>ISO/IEC 33000</strong>, que conserva su enfoque.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Nivel de capacidad</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Nombre</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>0</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Incompleto</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El proceso no logra su propósito.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Realizado</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Logra su propósito.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>2</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Gestionado</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se planifica, monitorea y ajusta.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>3</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Establecido</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Usa un proceso estándar definido.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>4</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Predecible</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Opera dentro de límites cuantitativos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>5</strong></td><td style="padding:13px 12px;">En optimización</td><td style="padding:13px 12px;">Mejora continuamente.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: CMMI y SPICE'
                        },
                        {
                            title: 'CMMI y SPICE',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;"></th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">CMMI (representación por etapas)</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">ISO/IEC 15504 / 33000</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Evalúa</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Madurez de la organización.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Capacidad de cada proceso.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Resultado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un nivel de madurez (1 a 5).</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un perfil de capacidad por proceso (0 a 5).</td></tr>
<tr><td style="padding:13px 12px;"><strong>Naturaleza</strong></td><td style="padding:13px 12px;">Modelo de un organismo (ISACA).</td><td style="padding:13px 12px;">Norma internacional.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t006',
                    label: 'Otros estándares relevantes en calidad de software',
                    steps: [
                        {
                            title: 'Otros estándares',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Estándar</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ámbito</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>ISO/IEC/IEEE 29119</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pruebas de software: conceptos, procesos, documentación y técnicas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>ISO/IEC 29110</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Perfiles de ciclo de vida para entidades muy pequeñas.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>ISO/IEC/IEEE 29148</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ingeniería de requerimientos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>ISO/IEC 27001</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Gestión de la seguridad de la información.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>ISO/IEC 20000</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Gestión de servicios de TI.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>WCAG 2.2</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Accesibilidad de contenidos web.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>OWASP ASVS</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Requisitos de verificación de seguridad de aplicaciones.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>ISO/IEC 5055</strong></td><td style="padding:13px 12px;">Medición automatizada de la calidad estructural del código.</td></tr>
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
            id: 'modulo_004',
            label: 'Técnicas de prueba',
            subtemas: [
                {
                    id: 'm004-t001',
                    label: 'Fundamentos de pruebas de calidad del software',
                    steps: [
                        {
                            title: 'Proceso de pruebas',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-calendar" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Planificación</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-magnifying-glass" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Análisis</b><br><small>Qué probar</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-pen-ruler" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Diseño</b><br><small>Cómo probar</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-screwdriver-wrench" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Implementación</b><br><small>Datos y ambiente</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-play" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Ejecución</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-flag-checkered" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Cierre</b><br><small>Informe</small></div></div>
</div>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Siete principios de las pruebas (ISTQB): las pruebas muestran presencia de defectos, no su ausencia; las pruebas exhaustivas son imposibles; probar temprano ahorra; los defectos se agrupan; las pruebas se desgastan; dependen del contexto; la ausencia de errores es una falacia.</p>`,
                            nextButton: 'Siguiente: Vocabulario de pruebas'
                        },
                        {
                            title: 'Vocabulario de pruebas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Término</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Definición</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Base de prueba</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Documento o conocimiento del que se derivan las pruebas (requerimientos, historias).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Condición de prueba</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Aspecto que se va a verificar.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Caso de prueba</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Precondiciones, entradas, pasos y resultado esperado.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Oráculo de prueba</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Fuente que determina el resultado esperado.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Datos de prueba</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Valores usados en la ejecución.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ambiente de prueba</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Hardware, software y configuración donde se prueba.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Criterio de salida</strong></td><td style="padding:13px 12px;">Condición para dar por terminadas las pruebas.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t002',
                    label: 'Tipos de pruebas de calidad',
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
                    id: 'm004-t003',
                    label: 'Planificación y diseño de casos de prueba',
                    steps: [
                        {
                            title: 'Plan de pruebas (ISO/IEC/IEEE 29119-3)',
                            content: `<ol>
    <li>Contexto: alcance, elementos a probar y fuera de alcance.</li>
    <li>Riesgos de producto y de proyecto.</li>
    <li>Estrategia: niveles, tipos, técnicas y criterios de entrada y salida.</li>
    <li>Ambiente y datos de prueba.</li>
    <li>Roles y responsabilidades.</li>
    <li>Cronograma.</li>
    <li>Métricas e informes.</li>
</ol>`,
                            nextButton: 'Siguiente: Partición de equivalencia'
                        },
                        {
                            title: 'Partición de equivalencia',
                            content: `<p>Divide las entradas en <strong>clases</strong> cuyos valores deberían comportarse igual; se prueba un valor representativo de cada clase.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Clase (edad para registrarse: 18 a 65)</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Valor representativo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Resultado</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Inválida: menor de 18</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">10</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Rechazado</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Válida: 18 a 65</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">35</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Aceptado</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Inválida: mayor de 65</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">80</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Rechazado</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Inválida: no numérica</strong></td><td style="padding:13px 12px;">“abc”</td><td style="padding:13px 12px;">Mensaje de error</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Análisis de valores límite'
                        },
                        {
                            title: 'Análisis de valores límite',
                            content: `<p>Los defectos se concentran en los bordes. Se prueban los valores en el límite y a cada lado.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Límite</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Valores a probar</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Inferior (18)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">17, 18, 19</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Superior (65)</strong></td><td style="padding:13px 12px;">64, 65, 66</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Tabla de decisión'
                        },
                        {
                            title: 'Tabla de decisión',
                            content: `<p>Útil cuando el resultado depende de combinaciones de condiciones.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Condición / acción</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">R1</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">R2</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">R3</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">R4</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>¿Cliente frecuente?</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sí</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sí</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">No</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">No</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>¿Compra mayor a ₡50 000?</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sí</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">No</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sí</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">No</td></tr>
<tr><td style="padding:13px 12px;"><strong>Descuento</strong></td><td style="padding:13px 12px;">15 %</td><td style="padding:13px 12px;">5 %</td><td style="padding:13px 12px;">10 %</td><td style="padding:13px 12px;">0 %</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t004',
                    label: 'Ejecución y automatización de pruebas',
                    steps: [
                        {
                            title: 'Ejecución',
                            content: `<ul>
    <li>Verificar los criterios de entrada (ambiente listo, versión instalada).</li>
    <li>Ejecutar los casos según la prioridad por riesgo.</li>
    <li>Registrar resultados y evidencias.</li>
    <li>Reportar defectos con información reproducible.</li>
    <li>Volver a probar las correcciones y ejecutar la regresión.</li>
</ul>`,
                            nextButton: 'Siguiente: Automatización'
                        },
                        {
                            title: 'Automatización',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Nivel de la pirámide</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Herramientas</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Proporción sugerida</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Unitarias</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">pytest, JUnit, Jest</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mayoría</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Servicio / API</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Postman, REST Assured, Supertest</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Intermedia</td></tr>
<tr><td style="padding:13px 12px;"><strong>Interfaz (extremo a extremo)</strong></td><td style="padding:13px 12px;">Playwright, Selenium, Cypress</td><td style="padding:13px 12px;">Pocas y críticas</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Automatice lo que se ejecuta con frecuencia, es estable y tiene un resultado claramente verificable.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t005',
                    label: 'Herramientas y técnicas para la gestión de pruebas de calidad',
                    steps: [
                        {
                            title: 'Gestión de pruebas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Herramienta</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Función</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>TestRail, Xray, Zephyr</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Repositorio de casos, planes y ciclos de ejecución.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Azure Test Plans</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pruebas integradas con Azure DevOps.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Jira, GitHub Issues</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Gestión de defectos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Allure, ReportPortal</strong></td><td style="padding:13px 12px;">Reportes de pruebas automatizadas.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Métricas de pruebas'
                        },
                        {
                            title: 'Métricas de pruebas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Métrica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Porcentaje de casos ejecutados y aprobados</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Avance y estado de la calidad.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Defectos por severidad y estado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Riesgo de liberación.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cobertura de requerimientos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Qué se ha verificado.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tasa de defectos escapados</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Eficacia de las pruebas.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Tiempo medio de corrección</strong></td><td style="padding:13px 12px;">Capacidad de respuesta.</td></tr>
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
            id: 'modulo_005',
            label: 'Gestión de la calidad',
            subtemas: [
                {
                    id: 'm005-t001',
                    label: 'Conceptos básicos de gestión de calidad del software',
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
                },
                {
                    id: 'm005-t002',
                    label: 'Planificación y organización de la calidad',
                    steps: [
                        {
                            title: 'Organización de la calidad',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Rol</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Responsabilidad</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Dirección</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Política de calidad y recursos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Líder de calidad / QA</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Plan de calidad, auditorías y métricas.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Equipo de desarrollo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Calidad del código y pruebas unitarias.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Probadores</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Diseño y ejecución de pruebas.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Dueño del producto</strong></td><td style="padding:13px 12px;">Criterios de aceptación.</td></tr>
</tbody>
</table>
</div>
<p>La política de calidad es una declaración breve del compromiso de la organización, por ejemplo: “Entregamos software confiable y seguro, medimos nuestros resultados y mejoramos continuamente”.</p>`,
                            nextButton: 'Siguiente: Ejemplo de objetivos de calidad'
                        },
                        {
                            title: 'Ejemplo de objetivos de calidad',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Característica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Objetivo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Métrica</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Fiabilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pocos defectos en producción.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Menos de 2 defectos críticos por versión.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Mantenibilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Código fácil de modificar.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Deuda técnica menor a 5 % (SonarQube).</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Eficiencia</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Respuesta rápida.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">p95 menor a 1 s.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Adecuación funcional</strong></td><td style="padding:13px 12px;">Requerimientos probados.</td><td style="padding:13px 12px;">100 % de requerimientos con casos de prueba.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t003',
                    label: 'Establecimiento de métricas y objetivos de calidad',
                    steps: [
                        {
                            title: 'Objetivos SMART',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Criterio</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Específico</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Reducir los defectos críticos en producción.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Medible</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">De 6 a 2 por trimestre.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Alcanzable</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Con revisión de código obligatoria y más pruebas automatizadas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Relevante</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Los defectos críticos afectan a los clientes.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Temporal</strong></td><td style="padding:13px 12px;">Antes de junio de 2027.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Indicadores clave de calidad'
                        },
                        {
                            title: 'Indicadores clave (KPI) de calidad',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">KPI</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Meta ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Defectos escapados por versión</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">≤ 2</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cobertura de pruebas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">≥ 80 %</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Disponibilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">≥ 99,5 %</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tiempo medio de recuperación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">≤ 1 h</td></tr>
<tr><td style="padding:13px 12px;"><strong>Satisfacción del cliente (NPS)</strong></td><td style="padding:13px 12px;">≥ 40</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t004',
                    label: 'Control de calidad y seguimiento del proceso',
                    steps: [
                        {
                            title: 'Tablero de calidad',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Indicador</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Meta</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Actual</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Estado</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cobertura de pruebas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">≥ 80 %</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">76 %</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><span style="color:#d2232a; font-weight:bold;">Bajo la meta</span></td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Defectos críticos abiertos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">0</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">0</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><span style="color:#00734a; font-weight:bold;">Cumple</span></td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pruebas de regresión aprobadas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">100 %</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">98 %</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><span style="color:#d2232a; font-weight:bold;">Bajo la meta</span></td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Tiempo medio de corrección</strong></td><td style="padding:13px 12px;">≤ 3 días</td><td style="padding:13px 12px;">2,5 días</td><td style="padding:13px 12px;"><span style="color:#00734a; font-weight:bold;">Cumple</span></td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Gráficos de control'
                        },
                        {
                            title: 'Gráficos de control',
                            content: `<p>Un <strong>gráfico de control</strong> muestra una métrica en el tiempo con un límite superior e inferior. Los puntos fuera de los límites o con tendencias indican causas especiales que deben investigarse.</p>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Controlar es actuar: cada desviación debe generar una acción con responsable y fecha.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t005',
                    label: 'Mejora continua de la calidad del software',
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
                            nextButton: 'Siguiente: Herramientas de análisis'
                        },
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
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t006',
                    label: 'Integración de la calidad en la gestión de proyectos de software',
                    steps: [
                        {
                            title: 'Calidad en la gestión del proyecto',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Proceso del proyecto</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Integración de la calidad</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Alcance</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Requerimientos de calidad y criterios de aceptación.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cronograma</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Tiempo para revisiones, pruebas y correcciones.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Costos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Presupuesto de prevención y evaluación.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Riesgos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Riesgos de calidad con respuestas.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Comunicación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Reportes de calidad a los interesados.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Cierre</strong></td><td style="padding:13px 12px;">Lecciones aprendidas.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
La calidad no es una fase al final del proyecto, sino una dimensión que se gestiona en todas las fases.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_006',
            label: 'Calidad en el desarrollo ágil',
            subtemas: [
                {
                    id: 'm006-t001',
                    label: 'Principios y prácticas de desarrollo ágil',
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
                            nextButton: 'Siguiente: Los doce principios'
                        },
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
                    id: 'm006-t002',
                    label: 'Retos de la calidad en el desarrollo ágil',
                    steps: [
                        {
                            title: 'Retos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Reto</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Mitigación</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Iteraciones cortas con poco tiempo para probar</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Automatización y pruebas dentro del sprint.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Requerimientos cambiantes</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Criterios de aceptación por historia y regresión automatizada.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Documentación mínima</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Documentación ejecutable: pruebas BDD.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Presión por la velocidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Definición de terminado con criterios de calidad no negociables.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Deuda técnica</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Capacidad reservada para refactorizar.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Probadores aislados</strong></td><td style="padding:13px 12px;">Probadores integrados en el equipo.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t003',
                    label: 'Adaptación de estándares y métricas de calidad al desarrollo ágil',
                    steps: [
                        {
                            title: 'Estándares en contextos ágiles',
                            content: `<ul>
    <li>ISO 9001 y CMMI son compatibles con ágil si los registros se generan como parte natural del trabajo (tablero, pull requests, CI).</li>
    <li>La trazabilidad se logra vinculando historias, commits y pruebas.</li>
    <li>Las auditorías revisan evidencias automáticas en lugar de documentos extensos.</li>
</ul>`,
                            nextButton: 'Siguiente: Métricas ágiles de calidad'
                        },
                        {
                            title: 'Métricas ágiles de calidad',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Métrica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Mide</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Defectos escapados</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Defectos encontrados después del sprint.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tiempo de ciclo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Desde que se empieza una historia hasta que se termina.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Porcentaje de historias que cumplen la DoD</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Disciplina de calidad.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Velocidad (con cautela)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Capacidad de planificación, no productividad.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Métricas DORA</strong></td><td style="padding:13px 12px;">Rendimiento de la entrega.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
No compare la velocidad entre equipos: los puntos de historia son relativos a cada equipo.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t004',
                    label: 'Técnicas de prueba y validación en entornos ágiles',
                    steps: [
                        {
                            title: 'El ciclo de TDD',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-circle-xmark" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Rojo</b><br><small>Escribir una prueba que falla</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-circle-check" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Verde</b><br><small>Código mínimo para que pase</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-broom" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Refactorizar</b><br><small>Mejorar sin cambiar el comportamiento</small></div></div>
</div>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
TDD es una técnica de <strong>diseño</strong>: escribir la prueba primero obliga a pensar en la interfaz y en el comportamiento esperado.</p>`,
                            nextButton: 'Siguiente: Desarrollo guiado por comportamiento'
                        },
                        {
                            title: 'Desarrollo guiado por comportamiento (BDD)',
                            content: `<pre class="codigo">
# language: es
Característica: Descuento para clientes frecuentes
  Escenario: Cliente frecuente con compra alta
    Dado un cliente frecuente
    Cuando compra por un total de 60000 colones
    Entonces recibe un descuento de 9000 colones
</pre>
<p>Herramientas como Cucumber, Behave o SpecFlow conectan cada paso con código de prueba.</p>`,
                            nextButton: 'Siguiente: Cuadrantes de pruebas ágiles'
                        },
                        {
                            title: 'Cuadrantes de pruebas ágiles',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Cuadrante</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Enfoque</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplos</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Q1</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Tecnología, apoyan al equipo.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pruebas unitarias y de componentes.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Q2</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Negocio, apoyan al equipo.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pruebas funcionales, BDD, prototipos.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Q3</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Negocio, critican el producto.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Exploratorias, usabilidad, UAT.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Q4</strong></td><td style="padding:13px 12px;">Tecnología, critican el producto.</td><td style="padding:13px 12px;">Rendimiento, seguridad.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t005',
                    label: 'Herramientas y prácticas para la gestión de la calidad en desarrollo ágil',
                    steps: [
                        {
                            title: 'Prácticas',
                            content: `<ul>
    <li>Programación en parejas o en grupo.</li>
    <li>Revisión de código en pull requests.</li>
    <li>Integración continua con quality gates.</li>
    <li>Demostraciones en la revisión del sprint.</li>
    <li>Retrospectivas con acciones de mejora.</li>
</ul>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Herramienta</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Jira, Azure Boards</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Backlog, DoD, defectos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>GitHub Actions, GitLab CI</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Integración continua.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>SonarQube</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Quality gates.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cucumber, Behave</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">BDD.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Miro</strong></td><td style="padding:13px 12px;">Retrospectivas y mapas de historias.</td></tr>
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
            label: 'Sistemas críticos',
            subtemas: [
                {
                    id: 'm007-t001',
                    label: 'Calidad del software en sistemas críticos y de alta confiabilidad',
                    steps: [
                        {
                            title: 'Confiabilidad',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Atributo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Disponibilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Está listo para usarse cuando se necesita.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Fiabilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Funciona correctamente durante un período.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Protección (safety)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">No causa daños.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Seguridad (security)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Resiste ataques.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Mantenibilidad</strong></td><td style="padding:13px 12px;">Se repara con rapidez.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
En sistemas críticos se clasifica el software por <strong>nivel de integridad</strong> (por ejemplo, SIL 1 a 4 o DAL A a E): a mayor consecuencia de una falla, más rigor en el proceso.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t002',
                    label: 'Normativas específicas para sectores regulados',
                    steps: [
                        {
                            title: 'Normativas por sector',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Sector</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Normativa</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Aspecto clave</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Aeronáutico</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">DO-178C</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Niveles DAL A–E; cobertura MC/DC para nivel A.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Médico</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">IEC 62304, ISO 13485, FDA</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Clases de seguridad A, B, C.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Automotriz</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">ISO 26262, ASPICE</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Niveles ASIL A–D.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ferroviario</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">EN 50128</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Niveles SIL.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Industrial</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">IEC 61508</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Seguridad funcional general.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Financiero</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">PCI DSS, normativa SUGEF</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Protección de datos de tarjetas y gestión de riesgo tecnológico.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Datos personales</strong></td><td style="padding:13px 12px;">Ley 8968 (Costa Rica), RGPD</td><td style="padding:13px 12px;">Consentimiento y protección de datos.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t003',
                    label: 'Procesos y estándares para el cumplimiento de normativas',
                    steps: [
                        {
                            title: 'Cumplimiento',
                            content: `<ul>
    <li>Proceso documentado y auditado (a menudo basado en el modelo V).</li>
    <li>Trazabilidad bidireccional: requerimiento ↔ diseño ↔ código ↔ prueba.</li>
    <li>Gestión de la configuración estricta.</li>
    <li>Análisis de riesgos documentado (ISO 14971 en medicina).</li>
    <li>Independencia de la verificación.</li>
    <li>Calificación de herramientas usadas en el desarrollo.</li>
</ul>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
En un sector regulado “lo que no está documentado no existe”: cada actividad debe dejar evidencia verificable.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t004',
                    label: 'Pruebas y verificaciones específicas para sistemas',
                    steps: [
                        {
                            title: 'Técnicas para sistemas críticos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Técnica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cobertura MC/DC</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cada condición de una decisión afecta independientemente el resultado.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Análisis de modos y efectos de falla (FMEA)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Identifica fallas posibles, sus efectos y su criticidad.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Análisis de árbol de fallas (FTA)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Deduce las combinaciones de eventos que causan una falla.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Verificación formal y verificación de modelos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Prueba matemática de propiedades.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Hardware en el lazo (HIL)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Prueba el software con hardware real o simulado.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Inyección de fallas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Verifica la reacción ante fallas.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Análisis de tiempo de ejecución en el peor caso</strong></td><td style="padding:13px 12px;">Garantiza los plazos de tiempo real.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t005',
                    label: 'Auditorías de calidad en sistemas críticos',
                    steps: [
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
                            nextButton: 'Siguiente: Particularidades'
                        },
                        {
                            title: 'Particularidades',
                            content: `<ul>
    <li>Auditorías por la autoridad regulatoria (FAA, FDA) o por organismos notificados.</li>
    <li>Revisión del plan de certificación y sus evidencias.</li>
    <li>Muestreo de trazabilidad: se elige un requerimiento y se siguen sus pruebas y código.</li>
    <li>Verificación de la independencia del equipo de verificación.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t006',
                    label: 'Mejores prácticas en calidad del software en sistemas críticos',
                    steps: [
                        {
                            title: 'Mejores prácticas',
                            content: `<ol>
    <li>Estándares de codificación restrictivos (MISRA C, CERT).</li>
    <li>Análisis estático sin advertencias.</li>
    <li>Diseño simple y determinista: sin memoria dinámica en tiempo de ejecución.</li>
    <li>Redundancia y estados seguros.</li>
    <li>Revisión independiente de todo producto.</li>
    <li>Pruebas con cobertura estructural exigida.</li>
    <li>Gestión rigurosa de cambios y de la configuración.</li>
    <li>Análisis de incidentes y cultura de seguridad.</li>
</ol>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        }
    ]
};
