const data = {
    // Pantalla de bienvenida
    welcome: {
        title: 'SOFT-17 <br> Calidad, Verificación y Validación del Software',
        image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-17/imgs/logo.png', // Cambiar por imagen real
        description: 'Implementación de estándares de calidad y técnicas de verificación y validación para construir software confiable: aseguramiento, planificación, garantía de calidad y calidad en el desarrollo y el mantenimiento.',
        instruction: 'Seleccione cada pestaña para acceder a la información'
    },
    // Temas principales y sus subtemas con pasos
    temas: [
        {
            id: 'modulo_001',
            label: 'Introducción a la calidad',
            subtemas: [
                {
                    id: 'm001-t001',
                    label: 'Definiciones y conceptos básicos de calidad del software',
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
                    id: 'm001-t002',
                    label: 'Introducción a normas y estándares de calidad del software',
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
                    id: 'm001-t003',
                    label: 'Modelos de madurez y calidad del software',
                    steps: [
                        {
                            title: 'Modelos de calidad del producto',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Modelo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Año</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Aporte</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>McCall</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">1977</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Factores agrupados en operación, revisión y transición del producto.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Boehm</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">1978</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Jerarquía de características con utilidad y mantenibilidad.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>ISO/IEC 9126</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">1991–2001</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Seis características: funcionalidad, fiabilidad, usabilidad, eficiencia, mantenibilidad, portabilidad.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>ISO/IEC 25010</strong></td><td style="padding:13px 12px;">2011, 2023</td><td style="padding:13px 12px;">Modelo actual de calidad del producto y calidad en uso.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: CMMI'
                        },
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
                    label: 'Procesos de calidad del software',
                    steps: [
                        {
                            title: 'Procesos de calidad',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Proceso</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Objetivo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Actividades</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Planificación de la calidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Definir qué significa calidad para el proyecto.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Objetivos, estándares, métricas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Aseguramiento (QA)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Prevenir defectos con buenos procesos.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Auditorías de proceso, capacitación.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Control (QC)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Detectar defectos en los productos.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Revisiones, pruebas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Mejora</strong></td><td style="padding:13px 12px;">Eliminar las causas de los defectos.</td><td style="padding:13px 12px;">Análisis de causa raíz, PHVA.</td></tr>
</tbody>
</table>
</div>
<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-clipboard-list" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Planificar</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-shield-halved" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Asegurar</b><br><small></small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-magnifying-glass" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Controlar</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-arrows-rotate" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Mejorar</b><br><small></small></div></div>
</div>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t005',
                    label: 'Introducción a métricas de calidad del software',
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
                    id: 'm001-t006',
                    label: 'Herramientas de apoyo a la calidad del software',
                    steps: [
                        {
                            title: 'Herramientas por actividad',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Actividad</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Herramientas</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Gestión de requerimientos y pruebas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Jira + Xray, Azure Test Plans, TestRail</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Análisis estático</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">SonarQube, ESLint, Pylint, Checkstyle</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pruebas unitarias</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">JUnit, pytest, Jest, xUnit</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pruebas de interfaz</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Playwright, Selenium, Cypress</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pruebas de API</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Postman, REST Assured</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Rendimiento</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">k6, JMeter</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Seguridad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">OWASP ZAP, Snyk, Dependabot</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Integración continua</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">GitHub Actions, GitLab CI, Jenkins</td></tr>
<tr><td style="padding:13px 12px;"><strong>Gestión de defectos</strong></td><td style="padding:13px 12px;">Jira, GitHub Issues</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Una herramienta no garantiza la calidad: debe integrarse en un proceso definido y su información debe usarse para tomar decisiones.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_002',
            label: 'Verificación y validación',
            subtemas: [
                {
                    id: 'm002-t001',
                    label: 'Diferencias entre verificación y validación del software',
                    steps: [
                        {
                            title: 'Verificación y validación',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;"></th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Verificación</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Validación</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pregunta (Boehm)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Estamos construyendo el producto correctamente?</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Estamos construyendo el producto correcto?</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Compara contra</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">La especificación y los estándares.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Las necesidades reales del usuario.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Momento</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Durante todo el desarrollo.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Principalmente con productos ejecutables.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Técnicas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Revisiones, inspecciones, análisis estático, pruebas.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pruebas de aceptación, prototipos, pruebas beta.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Responsables</strong></td><td style="padding:13px 12px;">Equipo de desarrollo y calidad.</td><td style="padding:13px 12px;">Usuarios y clientes.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Un sistema puede pasar toda la verificación (cumple la especificación) y fallar la validación (la especificación no era lo que el usuario necesitaba).</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t002',
                    label: 'Métodos de verificación del software',
                    steps: [
                        {
                            title: 'Métodos estáticos y dinámicos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Método</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Revisión entre pares</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Estático</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un colega revisa el trabajo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Recorrido (walkthrough)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Estático</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El autor guía al equipo por el producto.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Inspección formal</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Estático</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Proceso estructurado con roles y listas de verificación.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Análisis estático automatizado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Estático</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Herramientas que analizan el código sin ejecutarlo.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Verificación formal</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Estático</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Demostración matemática de propiedades.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Pruebas unitarias y de integración</strong></td><td style="padding:13px 12px;">Dinámico</td><td style="padding:13px 12px;">Ejecución contra la especificación.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Verificación de cada producto de trabajo'
                        },
                        {
                            title: 'Verificación de cada producto de trabajo',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Producto</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Se verifica que…</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Requerimientos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">sean completos, consistentes y verificables.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Diseño</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">cubra todos los requerimientos y respete la arquitectura.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Código</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">cumpla el estándar y el diseño.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Casos de prueba</strong></td><td style="padding:13px 12px;">cubran los requerimientos y las condiciones límite.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t003',
                    label: 'Métodos de validación del software',
                    steps: [
                        {
                            title: 'Métodos de validación',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Método</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Prototipado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El usuario evalúa versiones preliminares.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pruebas de aceptación del usuario (UAT)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El usuario ejecuta escenarios reales.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pruebas alfa</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Usuarios prueban en el ambiente del desarrollador.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pruebas beta</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Usuarios reales prueban en su propio ambiente.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pruebas de usabilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se observa a usuarios realizando tareas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Pruebas A/B</strong></td><td style="padding:13px 12px;">Se comparan dos versiones con usuarios reales.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Criterios de aceptación'
                        },
                        {
                            title: 'Criterios de aceptación',
                            content: `<pre class="codigo">
Escenario: Consultar el estado de una matrícula
  Dado que el encargado inició sesión
  Y el estudiante 1-1234-5678 está matriculado en el período 2026
  Cuando consulta la matrícula del estudiante
  Entonces ve el estado "Matriculado"
  Y ve el nombre del centro educativo
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Los criterios de aceptación se acuerdan con el cliente antes de construir: así la validación tiene una referencia objetiva.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t004',
                    label: 'Pruebas de software: tipos y objetivos',
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
                            nextButton: 'Siguiente: Objetivos de las pruebas'
                        },
                        {
                            title: 'Objetivos de las pruebas',
                            content: `<ul>
    <li>Encontrar defectos antes de que lleguen al usuario.</li>
    <li>Generar confianza en la calidad del producto.</li>
    <li>Verificar el cumplimiento de requerimientos.</li>
    <li>Proveer información para tomar decisiones de liberación.</li>
    <li>Prevenir defectos al revisar requerimientos y diseño temprano.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t005',
                    label: 'Diseño de casos de prueba',
                    steps: [
                        {
                            title: 'Estructura de un caso de prueba',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Campo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Identificador</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">CP-015</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Requerimiento</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">RF-04 Iniciar sesión</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Descripción</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Inicio de sesión con contraseña incorrecta</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Precondiciones</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El usuario ana@correo.com existe y está activo.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pasos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">1. Abrir la página de inicio de sesión. 2. Ingresar el correo. 3. Ingresar una contraseña incorrecta. 4. Presionar “Ingresar”.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Datos de prueba</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Correo: ana@correo.com; contraseña: Clave999!</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Resultado esperado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se muestra “Credenciales incorrectas” y no se inicia la sesión.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Resultado obtenido / estado</strong></td><td style="padding:13px 12px;">Se completa al ejecutar: Exitoso o Fallido.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Buenas prácticas'
                        },
                        {
                            title: 'Buenas prácticas',
                            content: `<ul>
    <li>Un objetivo por caso de prueba.</li>
    <li>Resultado esperado concreto y verificable.</li>
    <li>Pasos reproducibles por cualquier persona.</li>
    <li>Incluir casos positivos, negativos y límite.</li>
    <li>Trazar cada caso a un requerimiento.</li>
    <li>Mantener los casos independientes entre sí.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t006',
                    label: 'Técnicas de generación de casos de prueba',
                    steps: [
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
                            nextButton: 'Siguiente: Otras técnicas'
                        },
                        {
                            title: 'Otras técnicas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Técnica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Transición de estados</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sistemas con estados: pedido creado → pagado → enviado.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pruebas por pares (pairwise)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Reducir combinaciones de muchos parámetros.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Casos de uso</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un caso por flujo principal y alterno.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cobertura de sentencias y ramas (caja blanca)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Asegurar que se ejecute cada línea y cada decisión.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Conjetura de errores</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Basada en la experiencia: campos vacíos, caracteres especiales.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Pruebas exploratorias</strong></td><td style="padding:13px 12px;">Diseño y ejecución simultáneos guiados por objetivos.</td></tr>
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
            id: 'modulo_003',
            label: 'Aseguramiento de la calidad',
            subtemas: [
                {
                    id: 'm003-t001',
                    label: 'Definición y objetivos del aseguramiento de la calidad del software',
                    steps: [
                        {
                            title: 'Aseguramiento de la calidad (SQA)',
                            content: `<p>El <strong>aseguramiento de la calidad del software</strong> es el conjunto de actividades planificadas y sistemáticas que dan confianza de que los procesos y productos cumplen los requerimientos y estándares establecidos (IEEE 730).</p>
<ul>
    <li>Prevenir defectos mediante buenos procesos.</li>
    <li>Verificar el cumplimiento de estándares y procedimientos.</li>
    <li>Dar visibilidad objetiva a la dirección sobre la calidad.</li>
    <li>Promover la mejora continua.</li>
</ul>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
QA se enfoca en el <strong>proceso</strong> (prevención); QC se enfoca en el <strong>producto</strong> (detección).</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t002',
                    label: 'Procesos de aseguramiento de la calidad del software',
                    steps: [
                        {
                            title: 'Plan de SQA (IEEE 730)',
                            content: `<ol>
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
                            nextButton: 'Siguiente: Actividades continuas'
                        },
                        {
                            title: 'Actividades continuas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Actividad</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Evidencia</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Revisión de requerimientos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Lista de verificación completada.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Revisión de código</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Comentarios y aprobaciones en el pull request.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Auditoría del proceso</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Informe de cumplimiento.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Medición</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Tablero de métricas.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Gestión de no conformidades</strong></td><td style="padding:13px 12px;">Registro de acciones correctivas.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t003',
                    label: 'Inspección y revisión de software',
                    steps: [
                        {
                            title: 'Inspección de Fagan',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-calendar" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Planificación</b><br><small>Material y participantes</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-chalkboard-user" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Introducción</b><br><small>Contexto</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-book-open" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Preparación</b><br><small>Lectura individual</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-users" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Reunión</b><br><small>Registro de defectos</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-wrench" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Corrección</b><br><small>El autor corrige</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-check-double" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Seguimiento</b><br><small>Verificación</small></div></div>
</div>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Rol</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Responsabilidad</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Moderador</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Dirige la inspección.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Autor</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Responde preguntas y corrige.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Lector</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Presenta el material.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Inspectores</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Identifican defectos.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Registrador</strong></td><td style="padding:13px 12px;">Anota los defectos.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Revisión de código moderna'
                        },
                        {
                            title: 'Revisión de código moderna',
                            content: `<ul>
    <li>Pull requests pequeños (menos de 400 líneas) para una revisión efectiva.</li>
    <li>Lista de verificación: lógica, pruebas, seguridad, legibilidad.</li>
    <li>Comentarios sobre el código, nunca sobre la persona.</li>
    <li>Automatizar lo verificable (formato, linters) para enfocarse en el diseño.</li>
</ul>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Las inspecciones bien hechas detectan entre el 60 % y el 90 % de los defectos antes de las pruebas.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t004',
                    label: 'Análisis estático de código',
                    steps: [
                        {
                            title: 'Análisis estático',
                            content: `<p>Examina el código fuente <strong>sin ejecutarlo</strong> para encontrar defectos, vulnerabilidades, malas prácticas y código difícil de mantener.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Detecta</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Errores probables</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Variable usada sin inicializar.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Vulnerabilidades</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Inyección SQL, secretos en el código.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Code smells</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Funciones muy largas, código duplicado.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Incumplimiento de estándares</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Nombres o formato incorrectos.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Complejidad</strong></td><td style="padding:13px 12px;">Complejidad ciclomática alta.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Complejidad ciclomática'
                        },
                        {
                            title: 'Complejidad ciclomática',
                            content: `<p>Mide la cantidad de caminos independientes de una función: <strong>decisiones + 1</strong>. Indica el número mínimo de casos de prueba para cubrir todos los caminos.</p>
<pre class="codigo">
def clasificar(nota):          # decisiones: 3  →  complejidad = 4
    if nota &gt;= 90:
        return "Excelente"
    elif nota &gt;= 80:
        return "Muy bueno"
    elif nota &gt;= 70:
        return "Aprobado"
    return "Reprobado"
</pre>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Complejidad</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Riesgo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1 – 10</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Bajo</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>11 – 20</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Moderado</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>21 – 50</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Alto</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Más de 50</strong></td><td style="padding:13px 12px;">Muy alto: dividir la función</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
SonarQube define <strong>quality gates</strong>: condiciones (cobertura mínima, cero vulnerabilidades nuevas) que el código debe cumplir para integrarse.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t005',
                    label: 'Análisis dinámico de código',
                    steps: [
                        {
                            title: 'Análisis dinámico',
                            content: `<p>Examina el programa <strong>mientras se ejecuta</strong>.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Técnica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Detecta</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Herramientas</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pruebas con cobertura</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Código no probado.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">coverage.py, Istanbul, JaCoCo</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Perfilado (profiling)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Funciones lentas y consumo de recursos.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">cProfile, Chrome DevTools</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Detección de fugas de memoria</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Memoria que no se libera.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Valgrind, heap snapshots</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Fuzzing</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Fallas con entradas aleatorias o malformadas.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">AFL, Atheris</td></tr>
<tr><td style="padding:13px 12px;"><strong>DAST</strong></td><td style="padding:13px 12px;">Vulnerabilidades en la aplicación en ejecución.</td><td style="padding:13px 12px;">OWASP ZAP</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
pytest --cov=app --cov-report=html     # genera el reporte de cobertura
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t006',
                    label: 'Control de versiones de software',
                    steps: [
                        {
                            title: 'Control de versiones y calidad',
                            content: `<ul>
    <li>Historial completo para saber quién cambió qué y por qué.</li>
    <li>Revisión de código mediante pull requests.</li>
    <li>Ramas protegidas: no se integra sin pruebas y aprobación.</li>
    <li>Etiquetas (tags) para identificar versiones liberadas.</li>
    <li>Posibilidad de revertir cambios defectuosos.</li>
</ul>`,
                            nextButton: 'Siguiente: Estrategias de ramas'
                        },
                        {
                            title: 'Estrategias de ramas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Estrategia</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Adecuada para</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>GitHub Flow</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Rama main y ramas cortas por funcionalidad.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Despliegue continuo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Git Flow</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ramas main, develop, feature, release y hotfix.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Versiones planificadas.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Desarrollo basado en el tronco</strong></td><td style="padding:13px 12px;">Integración diaria a main con banderas de funcionalidad.</td><td style="padding:13px 12px;">Equipos con CI madura.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
git tag -a v2.3.0 -m "Versión 2.3.0: reportes de matrícula"
git push origin v2.3.0
</pre>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_004',
            label: 'Planificación y gestión',
            subtemas: [
                {
                    id: 'm004-t001',
                    label: 'Planificación de la calidad del software',
                    steps: [
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
                    id: 'm004-t002',
                    label: 'Estimación y medición de la calidad del software',
                    steps: [
                        {
                            title: 'Enfoque GQM',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Nivel</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Objetivo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mejorar la fiabilidad del sistema de matrícula.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pregunta</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Cuántos defectos llegan a producción? ¿Dónde se originan?</td></tr>
<tr><td style="padding:13px 12px;"><strong>Métricas</strong></td><td style="padding:13px 12px;">Defectos en producción por versión; defectos por módulo; DRE.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Estimar la calidad'
                        },
                        {
                            title: 'Estimar la calidad',
                            content: `<ul>
    <li>Densidad histórica de defectos para estimar cuántos se esperan.</li>
    <li>Curvas de descubrimiento de defectos durante las pruebas.</li>
    <li>Cobertura de requerimientos y de código.</li>
    <li>Modelos de crecimiento de la fiabilidad.</li>
</ul>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Si la curva de defectos encontrados por semana no disminuye, el producto aún no está listo para liberarse.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t003',
                    label: 'Monitoreo y control de la calidad del software',
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
                    id: 'm004-t004',
                    label: 'Evaluación y mejora continua de la calidad del software',
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
                    id: 'm004-t005',
                    label: 'Gestión de riesgos en la calidad del software',
                    steps: [
                        {
                            title: 'Pruebas basadas en riesgos',
                            content: `<p>Como no es posible probar todo, se prioriza según el <strong>riesgo</strong> = probabilidad de falla × impacto.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Funcionalidad</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Probabilidad</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Impacto</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Riesgo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Esfuerzo de prueba</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cálculo de pagos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Media</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Alto</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Alto</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Exhaustivo + automatizado</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Inicio de sesión</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Baja</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Alto</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Medio</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Casos clave + seguridad</td></tr>
<tr><td style="padding:13px 12px;"><strong>Cambio de tema de colores</strong></td><td style="padding:13px 12px;">Baja</td><td style="padding:13px 12px;">Bajo</td><td style="padding:13px 12px;">Bajo</td><td style="padding:13px 12px;">Prueba rápida</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Riesgos típicos de calidad'
                        },
                        {
                            title: 'Riesgos típicos de calidad',
                            content: `<ul>
    <li>Requerimientos ambiguos.</li>
    <li>Tecnología nueva para el equipo.</li>
    <li>Plazos que reducen el tiempo de pruebas.</li>
    <li>Falta de ambientes de prueba.</li>
    <li>Integraciones con terceros.</li>
    <li>Rotación de personal.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t006',
                    label: 'Gestión de cambios en la calidad del software',
                    steps: [
                        {
                            title: 'Cambios y calidad',
                            content: `<p>Cada cambio (corrección, mejora, actualización de dependencias) puede introducir defectos. Gestionar los cambios protege la calidad alcanzada.</p>
<ol>
    <li>Registrar la solicitud de cambio.</li>
    <li>Analizar el impacto con la matriz de trazabilidad.</li>
    <li>Aprobar según el riesgo.</li>
    <li>Implementar en una rama con revisión de código.</li>
    <li>Ejecutar las pruebas afectadas y la regresión.</li>
    <li>Actualizar la documentación y comunicar.</li>
</ol>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
La automatización de la regresión en el canal de CI es la principal defensa contra los defectos introducidos por cambios.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_005',
            label: 'Garantía de calidad',
            subtemas: [
                {
                    id: 'm005-t001',
                    label: 'Definición y objetivos de la garantía de calidad del software',
                    steps: [
                        {
                            title: 'Garantía de calidad',
                            content: `<p>La <strong>garantía de calidad</strong> busca demostrar, ante el cliente, la dirección o un ente externo, que la organización y sus productos cumplen los requisitos de calidad. Se apoya en evidencias objetivas: procesos documentados, registros, auditorías y certificaciones.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Objetivo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo de evidencia</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Confianza del cliente</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Informe de pruebas de aceptación firmado.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cumplimiento contractual</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Matriz de trazabilidad de requerimientos.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cumplimiento normativo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Certificado ISO 9001 vigente.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Mejora organizacional</strong></td><td style="padding:13px 12px;">Resultados de auditorías internas.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t002',
                    label: 'Procesos de garantía de calidad del software',
                    steps: [
                        {
                            title: 'Procesos',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-book" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Definir</b><br><small>Políticas y procedimientos</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-chalkboard-user" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Capacitar</b><br><small>Al personal</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-clipboard-check" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Verificar</b><br><small>Auditorías internas</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-file-circle-exclamation" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Corregir</b><br><small>No conformidades</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-user-tie" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Revisar</b><br><small>Por la dirección</small></div></div>
</div>
</div>
<ul>
    <li>Control de documentos y registros.</li>
    <li>Gestión de no conformidades y acciones correctivas y preventivas (CAPA).</li>
    <li>Revisión por la dirección de los indicadores de calidad.</li>
    <li>Gestión de la satisfacción del cliente.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t003',
                    label: 'Evaluación de proveedores de software',
                    steps: [
                        {
                            title: 'Evaluar proveedores',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Criterio</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Evidencia</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Capacidad técnica</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Proyectos similares, certificaciones del personal.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Madurez de procesos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">CMMI, ISO 9001, ISO/IEC 29110.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Calidad del producto</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Demostraciones, pruebas de concepto, métricas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Seguridad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">ISO/IEC 27001, SOC 2, pruebas de penetración.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Soporte y continuidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Acuerdos de nivel de servicio, estabilidad financiera.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Licenciamiento</strong></td><td style="padding:13px 12px;">Términos claros, propiedad del código.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Para componentes de código abierto también se evalúa: actividad de la comunidad, frecuencia de versiones, vulnerabilidades conocidas y licencia.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t004',
                    label: 'Auditorías de calidad del software',
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
                },
                {
                    id: 'm005-t005',
                    label: 'Certificación de calidad del software',
                    steps: [
                        {
                            title: 'Tipos de certificación',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Certifica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplos</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Otorga</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Organización</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">ISO 9001, ISO/IEC 27001</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Organismo certificador acreditado.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Procesos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Evaluación CMMI (SCAMPI), ISO/IEC 33000</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Evaluador autorizado.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Producto</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Evaluación según ISO/IEC 25000, Common Criteria</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Laboratorio acreditado.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Personas</strong></td><td style="padding:13px 12px;">ISTQB, CSQA, CMMI Associate</td><td style="padding:13px 12px;">Entidad certificadora.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Proceso de certificación ISO 9001'
                        },
                        {
                            title: 'Proceso de certificación ISO 9001',
                            content: `<ol>
    <li>Implementar el sistema de gestión de calidad.</li>
    <li>Realizar auditorías internas y revisión por la dirección.</li>
    <li>Auditoría de certificación en dos etapas por un organismo externo.</li>
    <li>Corregir no conformidades.</li>
    <li>Obtener el certificado (vigencia de tres años).</li>
    <li>Auditorías de seguimiento anuales.</li>
</ol>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t006',
                    label: 'Tendencias y retos en la garantía de calidad del software',
                    steps: [
                        {
                            title: 'Tendencias',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tendencia</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Desplazamiento a la izquierda (shift-left)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Calidad desde los requerimientos y el diseño.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Desplazamiento a la derecha (shift-right)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Monitoreo y pruebas en producción.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pruebas continuas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pruebas automatizadas en cada cambio.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>IA en las pruebas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Generación de casos, autorreparación de pruebas, análisis de fallas.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Calidad del código generado por IA</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Revisión y pruebas del código producido por asistentes.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Seguridad integrada (DevSecOps)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Seguridad como parte de la calidad.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Ingeniería de la fiabilidad (SRE)</strong></td><td style="padding:13px 12px;">Objetivos de servicio y presupuestos de error.</td></tr>
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
            label: 'Calidad en el desarrollo',
            subtemas: [
                {
                    id: 'm006-t001',
                    label: 'Métodos ágiles de desarrollo de software y calidad',
                    steps: [
                        {
                            title: 'La calidad en los equipos ágiles',
                            content: `<ul>
    <li>La calidad es responsabilidad de todo el equipo, no solo del probador.</li>
    <li>Las pruebas ocurren dentro de cada sprint.</li>
    <li>La <strong>definición de terminado</strong> incluye criterios de calidad.</li>
    <li>Retroalimentación frecuente del cliente.</li>
</ul>
<pre class="codigo">
Definición de terminado (ejemplo):
☐ Código revisado y aprobado por un par
☐ Pruebas unitarias con cobertura ≥ 80 %
☐ Criterios de aceptación verificados
☐ Sin defectos críticos ni altos abiertos
☐ Análisis estático sin problemas nuevos
☐ Documentación actualizada
☐ Desplegado en el ambiente de pruebas
</pre>`,
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
                    id: 'm006-t002',
                    label: 'Desarrollo guiado por pruebas (TDD) y calidad',
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
                            nextButton: 'Siguiente: Ejemplo'
                        },
                        {
                            title: 'Ejemplo',
                            content: `<pre class="codigo">
# 1. Rojo: test_descuento.py
from descuento import calcular_descuento

def test_cliente_frecuente_con_compra_alta_recibe_15_por_ciento():
    assert calcular_descuento(60000, frecuente=True) == 9000

def test_compra_baja_sin_frecuencia_no_tiene_descuento():
    assert calcular_descuento(20000, frecuente=False) == 0
</pre>
<pre class="codigo">
# 2. Verde: descuento.py
def calcular_descuento(monto, frecuente):
    if frecuente and monto &gt; 50000:
        return monto * 0.15
    return 0
</pre>
<p>3. <strong>Refactorizar</strong>: extraer constantes (<code>MONTO_MINIMO</code>, <code>TASA_FRECUENTE</code>) y volver a ejecutar las pruebas.</p>`,
                            nextButton: 'Siguiente: Beneficios y variantes'
                        },
                        {
                            title: 'Beneficios y variantes',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Beneficios</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Variantes</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Menos defectos y diseño más modular.</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">BDD: pruebas escritas en lenguaje del negocio.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Red de seguridad para refactorizar.</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">ATDD: pruebas de aceptación primero.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Documentación ejecutable.</strong></td><td style="padding:13px 12px;">—</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t003',
                    label: 'Integración continua y calidad del software',
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
                            nextButton: 'Siguiente: Calidad en el canal de CI'
                        },
                        {
                            title: 'Calidad en el canal de CI',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Etapa</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Control de calidad</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Compilación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El código compila sin errores.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Linter</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Estándar de codificación.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pruebas unitarias</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Comportamiento de cada componente.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cobertura</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Umbral mínimo.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Análisis estático y de seguridad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Quality gate de SonarQube, dependencias vulnerables.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Pruebas de integración</strong></td><td style="padding:13px 12px;">Componentes juntos.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t004',
                    label: 'Entrega continua y calidad del software',
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
                    id: 'm006-t005',
                    label: 'Despliegue continuo y calidad del software',
                    steps: [
                        {
                            title: 'Despliegue continuo',
                            content: `<p>Cada cambio que supera todas las pruebas automatizadas llega a producción sin intervención manual. Requiere una alta confianza en las pruebas y mecanismos de protección.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Mecanismo de protección</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Función</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Despliegue canario</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">La versión nueva recibe primero un porcentaje pequeño del tráfico.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Banderas de funcionalidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Activar o desactivar funciones sin desplegar.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Reversión automática</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Si aumentan los errores, se vuelve a la versión anterior.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Monitoreo y alertas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Detectar problemas en minutos.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Pruebas de humo</strong></td><td style="padding:13px 12px;">Verificación rápida después de desplegar.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t006',
                    label: 'Desarrollo y operaciones (DevOps) y calidad del software',
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
                }
            ]
        },
        {
            id: 'modulo_007',
            label: 'Calidad en el mantenimiento',
            subtemas: [
                {
                    id: 'm007-t001',
                    label: 'Definición y objetivos del mantenimiento de software',
                    steps: [
                        {
                            title: 'Mantenimiento de software',
                            content: `<p>El <strong>mantenimiento</strong> es la modificación de un producto de software después de su entrega para corregir defectos, mejorar su desempeño o adaptarlo a un entorno cambiado (ISO/IEC/IEEE 14764). Suele representar más del 60 % del costo total del ciclo de vida.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Propósito</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Correctivo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Corregir defectos.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Arreglar un cálculo de impuestos erróneo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Adaptativo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ajustarse a cambios del entorno.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Actualizar por una nueva ley o versión del sistema operativo.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Perfectivo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mejorar o agregar funciones.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Agregar un reporte solicitado.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Preventivo</strong></td><td style="padding:13px 12px;">Evitar problemas futuros.</td><td style="padding:13px 12px;">Refactorizar código complejo, actualizar dependencias.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t002',
                    label: 'Procesos de mantenimiento de software',
                    steps: [
                        {
                            title: 'Proceso ISO/IEC/IEEE 14764',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-play" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Implementación del proceso</b><br><small>Planificar</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-file-pen" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Análisis de la solicitud</b><br><small>Impacto</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-code" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Implementación</b><br><small>Modificar y probar</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-check" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Aceptación</b><br><small>Revisión</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-truck-ramp-box" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Migración</b><br><small>Si cambia el entorno</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-box-archive" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Retiro</b><br><small>Fin de vida</small></div></div>
</div>
</div>`,
                            nextButton: 'Siguiente: Gestión de solicitudes'
                        },
                        {
                            title: 'Gestión de solicitudes',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Campo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tipo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Correctivo</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Prioridad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Alta</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Módulo afectado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Facturación</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Análisis de impacto</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">3 archivos, 12 casos de prueba de regresión</td></tr>
<tr><td style="padding:13px 12px;"><strong>Esfuerzo estimado</strong></td><td style="padding:13px 12px;">6 horas</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Los acuerdos de nivel de servicio (SLA) definen el tiempo máximo de respuesta y solución según la prioridad.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t003',
                    label: 'Detección y corrección de errores',
                    steps: [
                        {
                            title: 'Ciclo de vida de un defecto',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-plus" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Nuevo</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-user-check" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Asignado</b><br><small></small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-wrench" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>En corrección</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-vial" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Corregido / en verificación</b><br><small></small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-circle-check" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Cerrado</b><br><small></small></div></div>
</div>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Campo del reporte</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Contenido</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Título</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Resumen claro del problema.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pasos para reproducir</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Secuencia exacta.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Resultado esperado y obtenido</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Comparación concreta.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Severidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Crítica, alta, media, baja.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ambiente</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Versión, navegador, sistema operativo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Evidencia</strong></td><td style="padding:13px 12px;">Capturas, bitácoras.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Análisis de causa raíz'
                        },
                        {
                            title: 'Análisis de causa raíz',
                            content: `<ol>
    <li>Reproducir el defecto con una prueba automatizada que falle.</li>
    <li>Identificar la causa con depuración y bitácoras.</li>
    <li>Corregir y verificar que la prueba pase.</li>
    <li>Ejecutar la regresión.</li>
    <li>Preguntar por qué ocurrió y cómo evitar defectos similares (cinco porqués).</li>
</ol>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
La prueba que reproduce el defecto se conserva en la suite de regresión para que el defecto no vuelva a aparecer.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t004',
                    label: 'Evolución del software',
                    steps: [
                        {
                            title: 'Leyes de Lehman',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ley</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Enunciado resumido</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cambio continuo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un sistema que se usa debe cambiar o se vuelve menos útil.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Complejidad creciente</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Al cambiar, su complejidad aumenta salvo que se trabaje para reducirla.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Crecimiento continuo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">La funcionalidad debe crecer para mantener la satisfacción del usuario.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Calidad decreciente</strong></td><td style="padding:13px 12px;">La calidad disminuye si no se adapta al entorno.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Deuda técnica'
                        },
                        {
                            title: 'Deuda técnica',
                            content: `<p>La <strong>deuda técnica</strong> es el costo futuro de elegir hoy una solución rápida en lugar de una mejor. Como una deuda financiera, genera “intereses”: cada cambio posterior cuesta más.</p>
<ul>
    <li>Hacerla visible en el backlog.</li>
    <li>Reservar capacidad en cada sprint para pagarla.</li>
    <li>Medirla con herramientas como SonarQube.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t005',
                    label: 'Reingeniería de software',
                    steps: [
                        {
                            title: 'Reingeniería',
                            content: `<p>La <strong>reingeniería</strong> reestructura un sistema existente para mejorar su calidad o adaptarlo a nuevas tecnologías, conservando su funcionalidad.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Actividad</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Inventario y análisis</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Identificar sistemas candidatos por valor y calidad.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ingeniería inversa</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Recuperar el diseño y la documentación a partir del código.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Reestructuración del código</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Refactorizar y modularizar.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Reestructuración de datos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Rediseñar el modelo de datos.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Ingeniería directa</strong></td><td style="padding:13px 12px;">Construir la nueva versión con el diseño mejorado.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Estrategias de modernización'
                        },
                        {
                            title: 'Estrategias de modernización',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Estrategia</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Rehospedar</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mover a la nube sin cambios.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Refactorizar</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mejorar el código y la arquitectura.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Reemplazar</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Adquirir o construir un sistema nuevo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Patrón Strangler Fig</strong></td><td style="padding:13px 12px;">Sustituir el sistema antiguo por partes.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t006',
                    label: 'Mejora continua del software',
                    steps: [
                        {
                            title: 'Refactorización',
                            content: `<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #f0cccc; margin-bottom:12px;">
<i class="fa-solid fa-xmark" aria-hidden="true" style="color:#d2232a;"></i> <strong style="color:#d2232a;">Incorrecto</strong>
<pre class="codigo">
function total(p) {
    let t = 0;
    for (let i = 0; i &lt; p.length; i++) { t = t + p[i].pr * p[i].c; }
    if (t &gt; 50000) t = t - t * 0.1;
    return t;
}
</pre>
</div>
<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #c9e2d4; margin-bottom:12px;">
<i class="fa-solid fa-check" aria-hidden="true" style="color:#00734a;"></i> <strong style="color:#00734a;">Correcto</strong>
<pre class="codigo">
const MONTO_PARA_DESCUENTO = 50000;
const TASA_DESCUENTO = 0.10;

function calcularSubtotal(productos) {
    return productos.reduce((suma, p) =&gt; suma + p.precio * p.cantidad, 0);
}

function calcularTotal(productos) {
    const subtotal = calcularSubtotal(productos);
    return subtotal &gt; MONTO_PARA_DESCUENTO ? subtotal * (1 - TASA_DESCUENTO) : subtotal;
}
</pre>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Refactorice solo con pruebas automatizadas que garanticen que el comportamiento no cambió.</p>`,
                            nextButton: 'Siguiente: Ciclo de mejora del producto'
                        },
                        {
                            title: 'Ciclo de mejora del producto',
                            content: `<ul>
    <li>Monitorear el uso y los errores en producción.</li>
    <li>Recoger la retroalimentación de los usuarios.</li>
    <li>Priorizar mejoras y deuda técnica en el backlog.</li>
    <li>Medir el efecto de cada mejora.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        }
    ]
};
