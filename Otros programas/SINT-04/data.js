const data = {
    // Pantalla de bienvenida
    welcome: {
        title: 'SINT-04 <br> Principios de Inteligencia Artificial',
        image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SINT-04/imgs/logo.png', // Cambiar por imagen real
        description: 'Fundamentos de la inteligencia artificial para desarrollar modelos que aprenden de los datos: aprendizaje automático, procesamiento del lenguaje natural, visión por computadora, redes neuronales y datos masivos.',
        instruction: 'Seleccione cada pestaña para acceder a la información'
    },
    // Temas principales y sus subtemas con pasos
    temas: [
        {
            id: 'modulo_001',
            label: 'Fundamentos de la inteligencia artificial',
            subtemas: [
                {
                    id: 'm001-t001',
                    label: 'Introducción a la inteligencia artificial',
                    steps: [
                        {
                            title: '¿Qué es la inteligencia artificial?',
                            content: `<p>La <strong>inteligencia artificial</strong> (IA) es el campo de la computación que desarrolla algoritmos y sistemas capaces de realizar tareas que normalmente requieren inteligencia humana: reconocer patrones, comprender el lenguaje, tomar decisiones o aprender de la experiencia.</p>
<div style="display:flex; flex-wrap:wrap; gap:12px; margin:12px 0;">
<div style="flex:1 1 200px; padding:14px; border:1px solid #9cc8ff; border-top:4px solid #2b93d1; border-radius:10px; background:#ffffff;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-eye" style="color:#164a98; margin-right:6px;" aria-hidden="true"></i><strong>Percibir</strong></p><p style="margin:0;">Ver imágenes, escuchar voz, leer texto.</p></div>
<div style="flex:1 1 200px; padding:14px; border:1px solid #9cc8ff; border-top:4px solid #2b93d1; border-radius:10px; background:#ffffff;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-brain" style="color:#164a98; margin-right:6px;" aria-hidden="true"></i><strong>Razonar</strong></p><p style="margin:0;">Inferir, planificar y decidir.</p></div>
<div style="flex:1 1 200px; padding:14px; border:1px solid #9cc8ff; border-top:4px solid #2b93d1; border-radius:10px; background:#ffffff;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-chart-line" style="color:#164a98; margin-right:6px;" aria-hidden="true"></i><strong>Aprender</strong></p><p style="margin:0;">Mejorar con datos y experiencia.</p></div>
<div style="flex:1 1 200px; padding:14px; border:1px solid #9cc8ff; border-top:4px solid #2b93d1; border-radius:10px; background:#ffffff;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-comments" style="color:#164a98; margin-right:6px;" aria-hidden="true"></i><strong>Interactuar</strong></p><p style="margin:0;">Comunicarse en lenguaje natural.</p></div>
</div>`,
                            nextButton: 'Siguiente: IA, aprendizaje automático y aprendizaje…'
                        },
                        {
                            title: 'IA, aprendizaje automático y aprendizaje profundo',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Campo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Definición</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Inteligencia artificial</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Todo sistema que imita capacidades inteligentes.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un sistema experto con reglas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Aprendizaje automático</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Subcampo de la IA donde el sistema aprende patrones a partir de datos.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un modelo que predice el precio de una casa.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Aprendizaje profundo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Subcampo del aprendizaje automático que usa redes neuronales de muchas capas.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Reconocimiento de rostros.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>IA generativa</strong></td><td style="padding:13px 12px;">Modelos que crean contenido nuevo: texto, imágenes, código.</td><td style="padding:13px 12px;">Asistentes conversacionales.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Se representan como círculos concéntricos: el aprendizaje profundo está dentro del aprendizaje automático, que está dentro de la inteligencia artificial.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t002',
                    label: 'Historia y evolución de la inteligencia artificial',
                    steps: [
                        {
                            title: 'Línea de tiempo',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Año</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Hito</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1950</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Alan Turing propone la prueba de Turing.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1956</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Conferencia de Dartmouth: nace el término «inteligencia artificial».</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1958</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Rosenblatt presenta el perceptrón.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1970s y 1980s</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sistemas expertos; dos «inviernos de la IA» por expectativas no cumplidas.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1986</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se populariza la retropropagación para entrenar redes neuronales.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1997</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Deep Blue vence al campeón mundial de ajedrez.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>2012</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">AlexNet gana ImageNet: despega el aprendizaje profundo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>2016</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">AlphaGo vence al campeón de Go.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>2017</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Arquitectura Transformer («Attention is all you need»).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>2022 en adelante</strong></td><td style="padding:13px 12px;">Popularización de los modelos de lenguaje de gran tamaño y la IA generativa.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Factores del avance reciente'
                        },
                        {
                            title: 'Factores del avance reciente',
                            content: `<ul>
    <li><strong>Datos</strong>: enormes volúmenes de texto, imágenes y registros digitales.</li>
    <li><strong>Cómputo</strong>: tarjetas gráficas (GPU) y aceleradores especializados.</li>
    <li><strong>Algoritmos</strong>: redes profundas, Transformers, aprendizaje por refuerzo.</li>
    <li><strong>Ecosistema abierto</strong>: bibliotecas como scikit-learn, PyTorch y TensorFlow.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t003',
                    label: 'Tipos de inteligencia artificial',
                    steps: [
                        {
                            title: 'Según su capacidad',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Estado actual</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>IA estrecha (débil)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Resuelve tareas específicas.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Es la que existe hoy: traductores, recomendadores, asistentes.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>IA general (fuerte)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Igualaría la capacidad humana en cualquier tarea intelectual.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Objeto de investigación y debate.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Superinteligencia</strong></td><td style="padding:13px 12px;">Superaría la capacidad humana.</td><td style="padding:13px 12px;">Hipotética.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Según su enfoque'
                        },
                        {
                            title: 'Según su enfoque',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Enfoque</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Cómo funciona</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Simbólica (basada en reglas)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Conocimiento escrito como reglas lógicas.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sistema experto de diagnóstico.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Basada en datos (conexionista)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Aprende patrones de ejemplos.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Red neuronal que clasifica imágenes.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Híbrida</strong></td><td style="padding:13px 12px;">Combina reglas y aprendizaje.</td><td style="padding:13px 12px;">Asistente que usa un modelo de lenguaje y reglas de negocio.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
# IA simbólica: regla escrita por una persona
def aprobar_credito(ingreso, deudas):
    return ingreso &gt; 500000 and deudas / ingreso &lt; 0.4

# IA basada en datos: la regla se aprende de ejemplos
from sklearn.tree import DecisionTreeClassifier
modelo = DecisionTreeClassifier().fit(X_historial, y_aprobado)
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t004',
                    label: 'Principios y conceptos básicos de la inteligencia artificial',
                    steps: [
                        {
                            title: 'Agentes inteligentes',
                            content: `<p>Un <strong>agente</strong> percibe su entorno mediante sensores y actúa sobre él mediante actuadores para lograr un objetivo.</p>
<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-satellite-dish" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Percepción</b><br><small>Sensores o datos</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-brain" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Decisión</b><br><small>Modelo o reglas</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-hand" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Acción</b><br><small>Actuadores o respuesta</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-globe" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Entorno</b><br><small>Cambia y se vuelve a percibir</small></div></div>
</div>
</div>`,
                            nextButton: 'Siguiente: Conceptos clave'
                        },
                        {
                            title: 'Conceptos clave',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Concepto</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Datos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ejemplos de los que aprende el sistema.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Característica (feature)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Variable de entrada: edad, precio, píxel.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Etiqueta</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Respuesta correcta en aprendizaje supervisado.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Modelo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Función que relaciona entradas con salidas.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Entrenamiento</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ajustar el modelo con datos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Inferencia</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Usar el modelo entrenado para predecir.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Búsqueda</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Explorar soluciones posibles (A*, minimax).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Representación del conocimiento</strong></td><td style="padding:13px 12px;">Cómo se guardan los hechos y reglas.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t005',
                    label: 'Ética y responsabilidad en la inteligencia artificial',
                    steps: [
                        {
                            title: 'Principios de una IA responsable',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Principio</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Pregunta</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Equidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿El sistema trata igual a todos los grupos?</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Transparencia y explicabilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Se puede entender por qué decidió algo?</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Privacidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Se protegen los datos personales?</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Seguridad y robustez</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Resiste errores y ataques?</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Responsabilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Quién responde por sus decisiones?</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Supervisión humana</strong></td><td style="padding:13px 12px;">¿Una persona puede revisar y corregir?</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Sesgo algorítmico'
                        },
                        {
                            title: 'Sesgo algorítmico',
                            content: `<p>Un modelo aprende de datos históricos; si esos datos reflejan desigualdades, el modelo las reproduce o amplifica.</p>
<ul>
    <li>Revisar la representatividad de los datos.</li>
    <li>Medir el desempeño por grupos (por ejemplo, por género o región).</li>
    <li>Documentar el modelo con fichas (model cards).</li>
    <li>Mantener a una persona en el ciclo para decisiones importantes.</li>
</ul>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Marcos de referencia: Recomendación de la UNESCO sobre la ética de la IA, principios de la OCDE y la Ley de IA de la Unión Europea, que clasifica los sistemas por nivel de riesgo.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_002',
            label: 'Aprendizaje automático (machine learning)',
            subtemas: [
                {
                    id: 'm002-t001',
                    label: 'Introducción al aprendizaje automático',
                    steps: [
                        {
                            title: '¿Qué es el aprendizaje automático?',
                            content: `<p>El <strong>aprendizaje automático</strong> (machine learning) es el área de la IA en la que los programas mejoran su desempeño en una tarea a partir de datos, sin programar explícitamente cada regla.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Programación tradicional</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Aprendizaje automático</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px;"><strong>Datos + reglas → respuestas</strong></td><td style="padding:13px 12px;">Datos + respuestas → reglas (modelo)</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Flujo de un proyecto de aprendizaje…'
                        },
                        {
                            title: 'Flujo de un proyecto de aprendizaje automático',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-database" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Datos</b><br><small>Recolectar</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-broom" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Preparar</b><br><small>Limpiar y transformar</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-gears" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Entrenar</b><br><small>Ajustar el modelo</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-scale-balanced" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Evaluar</b><br><small>Métricas</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-rocket" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Desplegar</b><br><small>Usar en producción</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-chart-line" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Monitorear</b><br><small>Revisar el desempeño</small></div></div>
</div>
</div>
<pre class="codigo">
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression

datos = pd.read_csv("estudiantes.csv")
X = datos[["asistencia", "promedio_parciales"]]
y = datos["aprobo"]
X_ent, X_prueba, y_ent, y_prueba = train_test_split(X, y, test_size=0.2, random_state=42)

modelo = LogisticRegression().fit(X_ent, y_ent)
print("Exactitud:", modelo.score(X_prueba, y_prueba))
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t002',
                    label: 'Tipos de aprendizaje automático: supervisado, no supervisado y por refuerzo',
                    steps: [
                        {
                            title: 'Tres tipos de aprendizaje',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Datos</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Objetivo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Supervisado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Con etiquetas (respuesta conocida).</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Predecir la etiqueta.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Clasificar correos como spam o no spam.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>No supervisado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sin etiquetas.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Descubrir estructura o grupos.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Segmentar clientes por comportamiento.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Por refuerzo</strong></td><td style="padding:13px 12px;">Recompensas por acciones.</td><td style="padding:13px 12px;">Aprender una política de acción.</td><td style="padding:13px 12px;">Un agente que aprende a jugar.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
También existen variantes: <strong>semisupervisado</strong> (pocas etiquetas), <strong>autosupervisado</strong> (las etiquetas salen de los mismos datos, como en los modelos de lenguaje) y <strong>aprendizaje por transferencia</strong>.</p>`,
                            nextButton: 'Siguiente: Supervisado: regresión y clasificación'
                        },
                        {
                            title: 'Supervisado: regresión y clasificación',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tarea</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Salida</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Regresión</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un número continuo.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Predecir la nota final.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Clasificación</strong></td><td style="padding:13px 12px;">Una categoría.</td><td style="padding:13px 12px;">Predecir si aprueba o no.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t003',
                    label: 'Algoritmos de aprendizaje automático: regresión, clasificación y agrupamiento',
                    steps: [
                        {
                            title: 'Algoritmos frecuentes',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tarea</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Algoritmos</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Regresión</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Regresión lineal, árboles de regresión, bosques aleatorios.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Clasificación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Regresión logística, k vecinos más cercanos, árboles de decisión, máquinas de vectores de soporte, redes neuronales.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Agrupamiento</strong></td><td style="padding:13px 12px;">K-means, DBSCAN, agrupamiento jerárquico.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Ejemplo de agrupamiento'
                        },
                        {
                            title: 'Ejemplo de agrupamiento',
                            content: `<pre class="codigo">
from sklearn.cluster import KMeans
import pandas as pd

clientes = pd.read_csv("clientes.csv")[["compras_mes", "monto_promedio"]]
kmeans = KMeans(n_clusters=3, n_init="auto", random_state=0).fit(clientes)
clientes["segmento"] = kmeans.labels_
print(clientes.groupby("segmento").mean())
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
En scikit-learn todos los modelos siguen la misma interfaz: <code>fit</code> para entrenar y <code>predict</code> para predecir.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t004',
                    label: 'Evaluación y selección de modelos de aprendizaje automático',
                    steps: [
                        {
                            title: 'Separar los datos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Conjunto</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Proporción típica</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Entrenamiento</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ajustar el modelo.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">70 %</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Validación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Elegir hiperparámetros y comparar modelos.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">15 %</td></tr>
<tr><td style="padding:13px 12px;"><strong>Prueba</strong></td><td style="padding:13px 12px;">Estimar el desempeño final, una sola vez.</td><td style="padding:13px 12px;">15 %</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Métricas básicas'
                        },
                        {
                            title: 'Métricas básicas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tarea</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Métricas</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Clasificación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Exactitud, precisión, exhaustividad (recall), F1, matriz de confusión.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Regresión</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Error absoluto medio (MAE), raíz del error cuadrático medio (RMSE), R².</td></tr>
<tr><td style="padding:13px 12px;"><strong>Agrupamiento</strong></td><td style="padding:13px 12px;">Coeficiente de silueta.</td></tr>
</tbody>
</table>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Problema</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Señal</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Solución</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Subajuste</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Error alto en entrenamiento y en prueba.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Modelo más complejo, mejores características.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Sobreajuste</strong></td><td style="padding:13px 12px;">Error bajo en entrenamiento y alto en prueba.</td><td style="padding:13px 12px;">Más datos, regularización, modelo más simple.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t005',
                    label: 'Aplicaciones del aprendizaje automático en el mundo real',
                    steps: [
                        {
                            title: 'Aplicaciones',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Sector</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Aplicación</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Finanzas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Detección de fraude, calificación crediticia.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Salud</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Apoyo al diagnóstico por imágenes, predicción de readmisiones.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Comercio</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Recomendaciones, predicción de demanda.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Agricultura</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Detección de plagas en cultivos con imágenes.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Educación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Alerta temprana de deserción estudiantil.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Transporte</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Rutas óptimas y vehículos autónomos.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Industria</strong></td><td style="padding:13px 12px;">Mantenimiento predictivo de máquinas.</td></tr>
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
            label: 'Procesamiento del lenguaje natural (NLP)',
            subtemas: [
                {
                    id: 'm003-t001',
                    label: 'Introducción al procesamiento del lenguaje natural (NLP)',
                    steps: [
                        {
                            title: '¿Qué es el PLN?',
                            content: `<p>El <strong>procesamiento del lenguaje natural</strong> (PLN o NLP) permite a las computadoras analizar, comprender y generar lenguaje humano, escrito o hablado.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tarea</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Clasificación de texto</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Detectar si una reseña es positiva.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Reconocimiento de entidades</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Encontrar nombres de personas, lugares y fechas.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Traducción automática</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Español → inglés.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Resumen</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Resumir un documento largo.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Preguntas y respuestas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Responder con base en documentos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Generación de texto</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Redactar respuestas.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Voz a texto y texto a voz</strong></td><td style="padding:13px 12px;">Asistentes de voz.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: ¿Por qué es difícil?'
                        },
                        {
                            title: '¿Por qué es difícil?',
                            content: `<ul>
    <li><strong>Ambigüedad</strong>: «banco» puede ser asiento o entidad financiera.</li>
    <li><strong>Contexto</strong>: el significado depende de lo dicho antes.</li>
    <li><strong>Variaciones</strong>: errores ortográficos, modismos costarricenses («tuanis», «mae»).</li>
    <li><strong>Ironía y sarcasmo</strong>.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t002',
                    label: 'Representación de texto y modelos de lenguaje',
                    steps: [
                        {
                            title: 'Del texto a números',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Representación</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Idea</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Limitación</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Bolsa de palabras</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cuenta cuántas veces aparece cada palabra.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pierde el orden y el significado.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>TF-IDF</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pondera las palabras frecuentes en un documento pero raras en el conjunto.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">No captura sinónimos.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Embeddings (Word2Vec, GloVe)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Vectores densos donde palabras similares quedan cerca.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un solo vector por palabra.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Embeddings contextuales (BERT)</strong></td><td style="padding:13px 12px;">El vector depende del contexto de la oración.</td><td style="padding:13px 12px;">Mayor costo de cómputo.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
from sklearn.feature_extraction.text import TfidfVectorizer
textos = ["el curso es excelente", "el curso es aburrido"]
vector = TfidfVectorizer().fit_transform(textos)
print(vector.toarray())
</pre>`,
                            nextButton: 'Siguiente: Modelos de lenguaje'
                        },
                        {
                            title: 'Modelos de lenguaje',
                            content: `<p>Un <strong>modelo de lenguaje</strong> estima la probabilidad de la siguiente palabra (token) dada la secuencia anterior. Los modelos de lenguaje de gran tamaño (LLM) son Transformers entrenados con enormes cantidades de texto.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Generación</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Estadísticos (n-gramas)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Probabilidad según las dos palabras anteriores.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Redes recurrentes</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">LSTM que procesan palabra por palabra.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Transformers</strong></td><td style="padding:13px 12px;">Atención sobre toda la secuencia a la vez: BERT, GPT, Llama.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t003',
                    label: 'Extracción de características y preprocesamiento de texto',
                    steps: [
                        {
                            title: 'Preprocesamiento',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Paso</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Normalización</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">«¡EXCELENTE curso!» → «excelente curso»</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tokenización</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">«me gustó mucho» → [me, gustó, mucho]</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Palabras vacías</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Eliminar «el», «de», «que» cuando no aportan.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Lematización</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">«corriendo», «corrió» → «correr»</td></tr>
<tr><td style="padding:13px 12px;"><strong>Derivación (stemming)</strong></td><td style="padding:13px 12px;">«programación», «programador» → «program»</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
import spacy
nlp = spacy.load("es_core_news_sm")
doc = nlp("Los estudiantes entregaron los proyectos en Heredia.")
print([(t.lemma_, t.pos_) for t in doc if not t.is_stop and not t.is_punct])
print([(e.text, e.label_) for e in doc.ents])   # entidades: Heredia → LOC
</pre>`,
                            nextButton: 'Siguiente: Características'
                        },
                        {
                            title: 'Características',
                            content: `<ul>
    <li>Frecuencias y TF-IDF.</li>
    <li>N-gramas: pares o tríos de palabras («no me gustó»).</li>
    <li>Etiquetas gramaticales y entidades.</li>
    <li>Embeddings de oraciones.</li>
    <li>Longitud, signos de exclamación, emojis.</li>
</ul>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Con modelos Transformer, el preprocesamiento manual se reduce: el tokenizador del modelo hace la mayor parte del trabajo.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t004',
                    label: 'Técnicas de clasificación y etiquetado de texto',
                    steps: [
                        {
                            title: 'Clasificación de texto',
                            content: `<pre class="codigo">
from sklearn.pipeline import make_pipeline
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression

textos = ["me encantó el servicio", "pésima atención", "muy buena comida", "no vuelvo nunca"]
etiquetas = ["positivo", "negativo", "positivo", "negativo"]

clasificador = make_pipeline(TfidfVectorizer(ngram_range=(1, 2)), LogisticRegression())
clasificador.fit(textos, etiquetas)
print(clasificador.predict(["la comida estuvo excelente"]))
</pre>`,
                            nextButton: 'Siguiente: Etiquetado de secuencias'
                        },
                        {
                            title: 'Etiquetado de secuencias',
                            content: `<p>En el <strong>etiquetado de secuencias</strong> cada palabra recibe una etiqueta: categoría gramatical o tipo de entidad.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Palabra</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Etiqueta de entidad (BIO)</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ana</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">B-PER</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Mora</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">I-PER</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>viajó</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">O</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>a</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">O</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>San</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">B-LOC</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>José</strong></td><td style="padding:13px 12px;">I-LOC</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Los modelos Transformer ajustados (fine-tuning) obtienen hoy los mejores resultados en clasificación y etiquetado.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t005',
                    label: 'Aplicaciones del procesamiento del lenguaje natural (NLP)',
                    steps: [
                        {
                            title: 'Aplicaciones',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Aplicación</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Atención al cliente</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Asistentes que responden consultas frecuentes.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Análisis de opinión</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Medir la satisfacción en redes sociales.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Búsqueda semántica</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Encontrar documentos por significado y no por palabras exactas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Extracción de información</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Leer facturas y contratos.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Accesibilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Subtítulos automáticos y lectura en voz alta.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Programación</strong></td><td style="padding:13px 12px;">Asistentes que generan y explican código.</td></tr>
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
            label: 'Visión por computadora',
            subtemas: [
                {
                    id: 'm004-t001',
                    label: 'Introducción a la visión por computadora',
                    steps: [
                        {
                            title: '¿Qué es la visión por computadora?',
                            content: `<p>La <strong>visión por computadora</strong> permite a las máquinas extraer información de imágenes y videos. Para la computadora, una imagen es una matriz de números: cada píxel tiene valores de intensidad (0 a 255) para los canales rojo, verde y azul.</p>
<pre class="codigo">
import cv2
imagen = cv2.imread("hoja_cafe.jpg")       # matriz alto × ancho × 3
print(imagen.shape)                        # (480, 640, 3)
print(imagen[100, 200])                    # valores BGR de un píxel
</pre>`,
                            nextButton: 'Siguiente: Tareas'
                        },
                        {
                            title: 'Tareas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tarea</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Pregunta</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Salida</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Clasificación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Qué hay en la imagen?</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Una etiqueta.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Detección</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Qué objetos hay y dónde?</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cuadros delimitadores.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Segmentación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿A qué objeto pertenece cada píxel?</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Máscara por píxel.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Seguimiento</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Cómo se mueve el objeto en el video?</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Trayectorias.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Reconocimiento óptico de caracteres</strong></td><td style="padding:13px 12px;">¿Qué texto hay?</td><td style="padding:13px 12px;">Texto.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t002',
                    label: 'Procesamiento de imágenes y detección de características',
                    steps: [
                        {
                            title: 'Operaciones básicas',
                            content: `<pre class="codigo">
import cv2
img = cv2.imread("placa.jpg")
gris = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)          # escala de grises
suave = cv2.GaussianBlur(gris, (5, 5), 0)              # reducir ruido
bordes = cv2.Canny(suave, 50, 150)                     # detección de bordes
_, binaria = cv2.threshold(gris, 127, 255, cv2.THRESH_BINARY)
</pre>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Operación</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Escala de grises</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Reducir información cuando el color no importa.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Filtros de suavizado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Eliminar ruido.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Detección de bordes</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Encontrar contornos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Umbralización</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Separar objeto y fondo.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Aumento de datos</strong></td><td style="padding:13px 12px;">Rotar, voltear o recortar para entrenar modelos.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Características'
                        },
                        {
                            title: 'Características',
                            content: `<p>Las <strong>características</strong> son puntos o patrones distintivos que permiten reconocer o comparar imágenes: esquinas, bordes, texturas. Algoritmos clásicos como SIFT, ORB o HOG las detectan; las redes convolucionales las aprenden automáticamente.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t003',
                    label: 'Segmentación y reconocimiento de objetos',
                    steps: [
                        {
                            title: 'Detección y segmentación',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Modelos</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Detección de objetos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cuadro y clase de cada objeto.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">YOLO, Faster R-CNN.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Segmentación semántica</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Clase de cada píxel.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">U-Net, DeepLab.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Segmentación de instancias</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cada objeto por separado, píxel a píxel.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mask R-CNN.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Segmentación general</strong></td><td style="padding:13px 12px;">Segmentar cualquier objeto indicado.</td><td style="padding:13px 12px;">Segment Anything (SAM).</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
from ultralytics import YOLO
modelo = YOLO("yolov8n.pt")                # modelo preentrenado
resultados = modelo("parqueo.jpg")
for caja in resultados[0].boxes:
    print(modelo.names[int(caja.cls)], float(caja.conf))
</pre>`,
                            nextButton: 'Siguiente: Métrica de detección'
                        },
                        {
                            title: 'Métrica de detección',
                            content: `<p>La <strong>intersección sobre la unión</strong> (IoU) compara el cuadro predicho con el real: área de la intersección dividida entre el área de la unión. Un IoU de 0,5 o más se suele considerar acierto.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t004',
                    label: 'Clasificación y reconocimiento de imágenes',
                    steps: [
                        {
                            title: 'Clasificación con transferencia de aprendizaje',
                            content: `<p>Entrenar una red desde cero requiere millones de imágenes. Con <strong>transferencia de aprendizaje</strong> se parte de un modelo preentrenado y solo se ajustan las últimas capas.</p>
<pre class="codigo">
import tensorflow as tf
base = tf.keras.applications.MobileNetV2(input_shape=(224, 224, 3), include_top=False, weights="imagenet")
base.trainable = False                                   # congelar lo aprendido

modelo = tf.keras.Sequential([
    base,
    tf.keras.layers.GlobalAveragePooling2D(),
    tf.keras.layers.Dense(3, activation="softmax")      # sana, roya, ojo de gallo
])
modelo.compile(optimizer="adam", loss="sparse_categorical_crossentropy", metrics=["accuracy"])
modelo.fit(datos_entrenamiento, validation_data=datos_validacion, epochs=5)
</pre>`,
                            nextButton: 'Siguiente: Reconocimiento facial'
                        },
                        {
                            title: 'Reconocimiento facial',
                            content: `<p>El reconocimiento facial convierte cada rostro en un vector (embedding) y compara distancias. Es una tecnología de alto riesgo: requiere consentimiento, protección de datos biométricos y evaluación de sesgos.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t005',
                    label: 'Aplicaciones de la visión por computadora en la industria y la medicina',
                    steps: [
                        {
                            title: 'Industria',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Aplicación</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Control de calidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Detectar defectos en piezas de una línea de producción.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Agricultura</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Identificar enfermedades en hojas de café.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Logística</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Leer códigos y contar inventario.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Seguridad industrial</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Verificar el uso de casco y chaleco.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Comercio</strong></td><td style="padding:13px 12px;">Cajas sin cajero.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Medicina'
                        },
                        {
                            title: 'Medicina',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Aplicación</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Radiología</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Apoyo en la detección de nódulos en radiografías.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Dermatología</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Clasificación de lesiones de piel.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Oftalmología</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Detección de retinopatía diabética.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Patología</strong></td><td style="padding:13px 12px;">Análisis de muestras de tejido.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
En medicina, la IA es una herramienta de apoyo: la decisión final corresponde al profesional de salud, y los sistemas requieren validación clínica y aprobación regulatoria.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_005',
            label: 'Redes neuronales artificiales',
            subtemas: [
                {
                    id: 'm005-t001',
                    label: 'Introducción a las redes neuronales artificiales',
                    steps: [
                        {
                            title: 'La neurona artificial',
                            content: `<p>Una <strong>neurona artificial</strong> recibe entradas, las multiplica por pesos, suma un sesgo y aplica una función de activación.</p>
<pre class="codigo">
salida = activación(w1·x1 + w2·x2 + … + wn·xn + b)
</pre>
<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-arrow-right-to-bracket" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Entradas</b><br><small>x1 … xn</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-weight-hanging" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Pesos</b><br><small>w1 … wn</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-plus" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Suma</b><br><small>+ sesgo b</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-wave-square" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Activación</b><br><small>ReLU, sigmoide</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-arrow-right-from-bracket" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Salida</b><br><small>ŷ</small></div></div>
</div>
</div>`,
                            nextButton: 'Siguiente: Funciones de activación'
                        },
                        {
                            title: 'Funciones de activación',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Función</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Fórmula</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Sigmoide</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">1 / (1 + e<sup>−x</sup>)</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Salida binaria (probabilidad).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>ReLU</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">max(0, x)</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Capas ocultas (la más común).</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tangente hiperbólica</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">tanh(x)</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Salidas entre −1 y 1.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Softmax</strong></td><td style="padding:13px 12px;">e<sup>xi</sup> / Σ e<sup>xj</sup></td><td style="padding:13px 12px;">Clasificación de varias clases.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t002',
                    label: 'Arquitectura y funcionamiento de las redes neuronales',
                    steps: [
                        {
                            title: 'Capas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Capa</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Función</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Entrada</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Recibe las características.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ocultas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Transforman los datos y aprenden representaciones.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Salida</strong></td><td style="padding:13px 12px;">Produce la predicción.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
import tensorflow as tf
modelo = tf.keras.Sequential([
    tf.keras.Input(shape=(10,)),                     # 10 características
    tf.keras.layers.Dense(32, activation="relu"),    # capa oculta
    tf.keras.layers.Dense(16, activation="relu"),
    tf.keras.layers.Dense(1, activation="sigmoid")   # probabilidad
])
modelo.summary()
</pre>`,
                            nextButton: 'Siguiente: Propagación hacia adelante'
                        },
                        {
                            title: 'Propagación hacia adelante',
                            content: `<p>Los datos fluyen de la capa de entrada a la de salida; en cada capa se aplica la operación <strong>salida = activación(W · x + b)</strong>. Una red con suficientes neuronas puede aproximar funciones muy complejas (teorema de aproximación universal).</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t003',
                    label: 'Entrenamiento y aprendizaje en las redes neuronales',
                    steps: [
                        {
                            title: 'Ciclo de entrenamiento',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-arrow-right" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Propagación</b><br><small>Predicción</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-calculator" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Pérdida</b><br><small>Error</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-arrow-left" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Retropropagación</b><br><small>Gradientes</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-sliders" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Actualización</b><br><small>Descenso de gradiente</small></div></div>
</div>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Concepto</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Función de pérdida</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mide el error: entropía cruzada (clasificación), error cuadrático (regresión).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Retropropagación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Calcula cuánto contribuye cada peso al error.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tasa de aprendizaje</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Tamaño del paso de actualización.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Época</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Una pasada completa por los datos de entrenamiento.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Lote (batch)</strong></td><td style="padding:13px 12px;">Grupo de ejemplos procesados antes de actualizar los pesos.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Entrenar en Keras'
                        },
                        {
                            title: 'Entrenar en Keras',
                            content: `<pre class="codigo">
modelo.compile(optimizer="adam", loss="binary_crossentropy", metrics=["accuracy"])
historial = modelo.fit(X_ent, y_ent, epochs=30, batch_size=32, validation_split=0.2,
                       callbacks=[tf.keras.callbacks.EarlyStopping(patience=3)])
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
<strong>EarlyStopping</strong> detiene el entrenamiento cuando el error de validación deja de mejorar, lo que ayuda a evitar el sobreajuste.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t004',
                    label: 'Redes neuronales convolucionales (CNN) para imágenes',
                    steps: [
                        {
                            title: 'Convolución',
                            content: `<p>Una <strong>red convolucional</strong> aplica filtros pequeños (por ejemplo, 3 × 3) que recorren la imagen y detectan patrones locales: bordes en las primeras capas, formas y objetos en las capas profundas.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Capa</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Función</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Convolución</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Extrae características con filtros.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Agrupación (pooling)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Reduce el tamaño y conserva lo importante.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Aplanado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Convierte el mapa en un vector.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Densa</strong></td><td style="padding:13px 12px;">Clasifica.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: CNN en Keras'
                        },
                        {
                            title: 'CNN en Keras',
                            content: `<pre class="codigo">
modelo = tf.keras.Sequential([
    tf.keras.Input(shape=(64, 64, 3)),
    tf.keras.layers.Conv2D(32, 3, activation="relu"),
    tf.keras.layers.MaxPooling2D(),
    tf.keras.layers.Conv2D(64, 3, activation="relu"),
    tf.keras.layers.MaxPooling2D(),
    tf.keras.layers.Flatten(),
    tf.keras.layers.Dense(64, activation="relu"),
    tf.keras.layers.Dense(5, activation="softmax")   # 5 clases
])
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Arquitecturas conocidas: LeNet, AlexNet, VGG, ResNet, MobileNet y EfficientNet. Los Vision Transformers (ViT) son una alternativa más reciente.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t005',
                    label: 'Redes neuronales recurrentes (RNN) para secuencias de datos',
                    steps: [
                        {
                            title: 'Redes recurrentes',
                            content: `<p>Una <strong>red recurrente</strong> procesa secuencias paso a paso y mantiene un <strong>estado oculto</strong> que resume lo visto antes. Sirve para texto, series de tiempo y audio.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Variante</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Característica</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>RNN simple</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Olvida rápido; problema del gradiente que se desvanece.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>LSTM</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Compuertas de entrada, olvido y salida que conservan información a largo plazo.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>GRU</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Versión simplificada de la LSTM.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Bidireccional</strong></td><td style="padding:13px 12px;">Lee la secuencia en ambos sentidos.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Ejemplo: predicción de una serie de tiempo'
                        },
                        {
                            title: 'Ejemplo: predicción de una serie de tiempo',
                            content: `<pre class="codigo">
# Predecir la demanda del día siguiente a partir de los últimos 14 días
modelo = tf.keras.Sequential([
    tf.keras.Input(shape=(14, 1)),
    tf.keras.layers.LSTM(32),
    tf.keras.layers.Dense(1)
])
modelo.compile(optimizer="adam", loss="mse")
modelo.fit(ventanas_X, siguiente_y, epochs=20)
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Para texto largo, los Transformers han reemplazado en gran medida a las RNN porque procesan la secuencia en paralelo y capturan mejor el contexto.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_006',
            label: 'Procesamiento de datos y datos masivos',
            subtemas: [
                {
                    id: 'm006-t001',
                    label: 'Introducción al procesamiento de datos y datos masivos',
                    steps: [
                        {
                            title: 'Datos y datos masivos',
                            content: `<p>La IA depende de datos de calidad y en cantidad. Cuando el volumen, la velocidad o la variedad superan lo que una sola máquina puede procesar, se habla de <strong>datos masivos</strong>.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">V</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Volumen</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Terabytes o petabytes.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Velocidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Datos que llegan continuamente.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Variedad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Tablas, texto, imágenes, sensores.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Veracidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Calidad y confiabilidad.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Valor</strong></td><td style="padding:13px 12px;">Utilidad para decidir.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Ciclo de vida de los datos'
                        },
                        {
                            title: 'Ciclo de vida de los datos',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-download" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Ingesta</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-database" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Almacenamiento</b><br><small></small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-broom" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Limpieza</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-gears" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Procesamiento</b><br><small></small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-chart-pie" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Análisis</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-brain" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Modelos de IA</b><br><small></small></div></div>
</div>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t002',
                    label: 'Herramientas y tecnologías para el procesamiento de datos masivos',
                    steps: [
                        {
                            title: 'Herramientas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Herramienta</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>pandas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Análisis de datos en memoria (miles a millones de filas).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Polars, DuckDB</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Procesamiento rápido de archivos grandes en una sola máquina.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Apache Spark</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Procesamiento distribuido en clústeres.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Apache Kafka</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Transmisión de eventos en tiempo real.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Apache Airflow</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Orquestación de flujos de datos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Databricks, BigQuery, Snowflake</strong></td><td style="padding:13px 12px;">Plataformas de datos en la nube.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
from pyspark.sql import SparkSession, functions as F
spark = SparkSession.builder.appName("Ventas").getOrCreate()
ventas = spark.read.parquet("ventas/")
ventas.groupBy("provincia").agg(F.sum("monto").alias("total")).show()
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t003',
                    label: 'Almacenamiento y recuperación de datos a gran escala',
                    steps: [
                        {
                            title: 'Opciones',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplos</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Almacén de datos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">BigQuery, Snowflake, Redshift</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Datos estructurados para análisis con SQL.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Lago de datos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Amazon S3, Azure Data Lake</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Datos en su formato original.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Lakehouse</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Delta Lake, Apache Iceberg</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Lago con transacciones y esquemas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>NoSQL</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">MongoDB, Cassandra</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Datos semiestructurados a gran escala.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Base vectorial</strong></td><td style="padding:13px 12px;">pgvector, Pinecone, Milvus</td><td style="padding:13px 12px;">Búsqueda por similitud de embeddings.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Los formatos columnares como Parquet comprimen los datos y permiten leer solo las columnas necesarias, lo que acelera el análisis.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t004',
                    label: 'Análisis y visualización de datos',
                    steps: [
                        {
                            title: 'Análisis exploratorio',
                            content: `<pre class="codigo">
import pandas as pd
import matplotlib.pyplot as plt

datos = pd.read_csv("matricula.csv")
print(datos.describe())                       # estadísticas descriptivas
print(datos.isna().sum())                     # valores faltantes
datos.groupby("provincia")["estudiantes"].sum().plot(kind="bar")
plt.title("Estudiantes por provincia")
plt.show()
</pre>`,
                            nextButton: 'Siguiente: Elegir la visualización'
                        },
                        {
                            title: 'Elegir la visualización',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Objetivo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Gráfico</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Comparar categorías</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Barras.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tendencia en el tiempo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Líneas.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Distribución</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Histograma o diagrama de caja.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Relación entre variables</strong></td><td style="padding:13px 12px;">Dispersión o mapa de calor de correlaciones.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t005',
                    label: 'Aplicaciones de los datos masivos en la inteligencia artificial',
                    steps: [
                        {
                            title: 'Datos masivos e IA',
                            content: `<ul>
    <li>Entrenamiento de modelos de lenguaje con billones de palabras.</li>
    <li>Sistemas de recomendación con historiales de millones de usuarios.</li>
    <li>Detección de fraude en tiempo real sobre flujos de transacciones.</li>
    <li>Mantenimiento predictivo con datos de sensores (IoT).</li>
    <li>Análisis de imágenes satelitales para agricultura y clima.</li>
</ul>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Más datos no siempre es mejor: la calidad, la representatividad y el etiquetado correcto suelen importar más que el volumen.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_007',
            label: 'Aplicaciones y futuro de la inteligencia artificial',
            subtemas: [
                {
                    id: 'm007-t001',
                    label: 'Aplicaciones de la inteligencia artificial en diferentes industrias',
                    steps: [
                        {
                            title: 'Aplicaciones',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Sector</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Aplicación</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Finanzas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Detección de fraude, calificación crediticia.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Salud</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Apoyo al diagnóstico por imágenes, predicción de readmisiones.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Comercio</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Recomendaciones, predicción de demanda.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Agricultura</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Detección de plagas en cultivos con imágenes.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Educación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Alerta temprana de deserción estudiantil.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Transporte</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Rutas óptimas y vehículos autónomos.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Industria</strong></td><td style="padding:13px 12px;">Mantenimiento predictivo de máquinas.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: IA generativa en la empresa'
                        },
                        {
                            title: 'IA generativa en la empresa',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Productividad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Resumir reuniones, redactar correos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Desarrollo de software</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Asistentes de código y generación de pruebas.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Atención al cliente</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Asistentes con base de conocimiento propia (RAG).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Mercadeo</strong></td><td style="padding:13px 12px;">Generación de contenido e imágenes.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t002',
                    label: 'Robótica y automatización',
                    steps: [
                        {
                            title: 'Robótica con IA',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Componente</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Papel de la IA</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Percepción</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Visión por computadora y sensores para entender el entorno.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Planificación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Calcular trayectorias y secuencias de acciones.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Control</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Aprendizaje por refuerzo para movimientos precisos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Interacción</strong></td><td style="padding:13px 12px;">Comprender instrucciones en lenguaje natural.</td></tr>
</tbody>
</table>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo de automatización</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Robots industriales</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Brazos de ensamblaje y empaque.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Robots móviles autónomos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Transporte en bodegas.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Automatización robótica de procesos (RPA)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Software que replica tareas administrativas en sistemas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Drones</strong></td><td style="padding:13px 12px;">Monitoreo de cultivos.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t003',
                    label: 'Asistentes virtuales y robots conversacionales',
                    steps: [
                        {
                            title: 'Tipos de asistentes',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Funcionamiento</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Basado en reglas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Árbol de opciones y palabras clave.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Menú de preguntas frecuentes.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Basado en intenciones</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Clasifica la intención y extrae entidades.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Rasa, Dialogflow.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Basado en modelos de lenguaje</strong></td><td style="padding:13px 12px;">Genera respuestas con un LLM y documentos propios.</td><td style="padding:13px 12px;">Asistente con RAG.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Componentes'
                        },
                        {
                            title: 'Componentes',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-microphone" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Entrada</b><br><small>Texto o voz</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-magnifying-glass" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Comprensión</b><br><small>Intención y entidades</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-diagram-project" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Gestión del diálogo</b><br><small>Contexto y estado</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-database" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Acciones</b><br><small>Consultas a sistemas</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-comment" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Respuesta</b><br><small>Texto o voz</small></div></div>
</div>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Un buen asistente indica que es una máquina, reconoce cuando no sabe y ofrece pasar a una persona.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t004',
                    label: 'Ética y desafíos de la inteligencia artificial',
                    steps: [
                        {
                            title: 'Principios de una IA responsable',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Principio</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Pregunta</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Equidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿El sistema trata igual a todos los grupos?</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Transparencia y explicabilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Se puede entender por qué decidió algo?</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Privacidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Se protegen los datos personales?</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Seguridad y robustez</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Resiste errores y ataques?</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Responsabilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Quién responde por sus decisiones?</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Supervisión humana</strong></td><td style="padding:13px 12px;">¿Una persona puede revisar y corregir?</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Sesgo algorítmico'
                        },
                        {
                            title: 'Sesgo algorítmico',
                            content: `<p>Un modelo aprende de datos históricos; si esos datos reflejan desigualdades, el modelo las reproduce o amplifica.</p>
<ul>
    <li>Revisar la representatividad de los datos.</li>
    <li>Medir el desempeño por grupos (por ejemplo, por género o región).</li>
    <li>Documentar el modelo con fichas (model cards).</li>
    <li>Mantener a una persona en el ciclo para decisiones importantes.</li>
</ul>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Marcos de referencia: Recomendación de la UNESCO sobre la ética de la IA, principios de la OCDE y la Ley de IA de la Unión Europea, que clasifica los sistemas por nivel de riesgo.</p>`,
                            nextButton: 'Siguiente: Desafíos actuales'
                        },
                        {
                            title: 'Desafíos actuales',
                            content: `<ul>
    <li>Respuestas inventadas (alucinaciones) en modelos generativos.</li>
    <li>Desinformación y contenido falso (deepfakes).</li>
    <li>Derechos de autor de los datos de entrenamiento.</li>
    <li>Impacto en el empleo y necesidad de nuevas habilidades.</li>
    <li>Consumo energético del entrenamiento.</li>
    <li>Concentración del poder tecnológico.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t005',
                    label: 'Tendencias y avances futuros de la inteligencia artificial',
                    steps: [
                        {
                            title: 'Tendencias',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tendencia</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Modelos multimodales</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Procesan texto, imágenes, audio y video a la vez.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Agentes de IA</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sistemas que planifican y usan herramientas para completar tareas.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Modelos pequeños y en el dispositivo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">IA local, rápida y privada.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>IA para la ciencia</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Descubrimiento de fármacos y materiales.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Regulación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Leyes y estándares de IA confiable (ISO/IEC 42001).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>IA neuro-simbólica</strong></td><td style="padding:13px 12px;">Combina razonamiento lógico y aprendizaje.</td></tr>
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
