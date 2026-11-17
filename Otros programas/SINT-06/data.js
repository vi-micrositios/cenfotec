const data = {
    // Pantalla de bienvenida
    welcome: {
        title: 'SINT-06 <br> Fundamentos de Aprendizaje Automático',
        image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SINT-06/imgs/logo.png', // Cambiar por imagen real
        description: 'Herramientas y modelos de aprendizaje automático para construir programas que aprenden de los datos: fundamentos matemáticos, preprocesamiento, modelos supervisados y no supervisados, y evaluación y mejora de modelos.',
        instruction: 'Seleccione cada pestaña para acceder a la información'
    },
    // Temas principales y sus subtemas con pasos
    temas: [
        {
            id: 'modulo_001',
            label: 'Introducción al aprendizaje automático',
            subtemas: [
                {
                    id: 'm001-t001',
                    label: 'Historia y evolución del aprendizaje automático',
                    steps: [
                        {
                            title: 'Hitos del aprendizaje automático',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Año</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Hito</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1805</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Legendre y Gauss: método de mínimos cuadrados (base de la regresión).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1958</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Perceptrón de Rosenblatt.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1959</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Arthur Samuel acuña «machine learning» con un programa de damas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1986</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Árboles de decisión ID3 y retropropagación.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1995</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Máquinas de vectores de soporte.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>2001</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Bosques aleatorios.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>2007</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">scikit-learn.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>2012</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Aprendizaje profundo con GPU (AlexNet).</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>2014</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">XGBoost domina competencias con datos tabulares.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>2017 en adelante</strong></td><td style="padding:13px 12px;">Transformers y modelos fundacionales.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t002',
                    label: 'Principales conceptos del aprendizaje automático',
                    steps: [
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
                            nextButton: 'Siguiente: Sesgo y varianza'
                        },
                        {
                            title: 'Sesgo y varianza',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;"></th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Alto sesgo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Alta varianza</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Síntoma</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Subajuste: el modelo es demasiado simple.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sobreajuste: memoriza el entrenamiento.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Solución</strong></td><td style="padding:13px 12px;">Modelo más complejo, más características.</td><td style="padding:13px 12px;">Más datos, regularización, modelo más simple.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
El objetivo es la <strong>generalización</strong>: que el modelo funcione bien con datos que nunca vio.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t003',
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
                    id: 'm001-t004',
                    label: 'Aplicaciones del aprendizaje automático en la ingeniería del software',
                    steps: [
                        {
                            title: 'Aprendizaje automático para el software',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Aplicación</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Asistentes de código</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Completar, explicar y refactorizar código.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Predicción de defectos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Identificar módulos con mayor probabilidad de fallar.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Priorización de pruebas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ejecutar primero las pruebas con mayor riesgo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Clasificación de reportes de errores</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Asignar automáticamente el equipo responsable.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Detección de anomalías en producción</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Alertar sobre comportamientos inusuales en bitácoras y métricas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Estimación de esfuerzo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Predecir la duración de tareas.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Revisión de seguridad</strong></td><td style="padding:13px 12px;">Detectar patrones de código vulnerable.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t005',
                    label: 'Principales desafíos y consideraciones éticas del aprendizaje automático',
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
                            nextButton: 'Siguiente: Desafíos técnicos'
                        },
                        {
                            title: 'Desafíos técnicos',
                            content: `<ul>
    <li>Datos insuficientes, desbalanceados o de mala calidad.</li>
    <li>Deriva de datos en producción.</li>
    <li>Explicabilidad de modelos complejos.</li>
    <li>Reproducibilidad de los experimentos.</li>
    <li>Privacidad de los datos de entrenamiento.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_002',
            label: 'Fundamentos matemáticos para el aprendizaje automático',
            subtemas: [
                {
                    id: 'm002-t001',
                    label: 'Uso del álgebra lineal y operaciones matriciales',
                    steps: [
                        {
                            title: 'Vectores y matrices en el aprendizaje automático',
                            content: `<p>Los datos se representan como una <strong>matriz</strong> X de n filas (ejemplos) por m columnas (características). Un modelo lineal calcula sus predicciones con un producto matriz-vector.</p>
<pre class="codigo">
import numpy as np
X = np.array([[1, 80, 7.5],      # [sesgo, asistencia, promedio]
              [1, 60, 6.0],
              [1, 95, 9.0]])
w = np.array([-2.0, 0.05, 0.6])   # pesos
y_pred = X @ w                    # producto matricial
print(y_pred)
</pre>`,
                            nextButton: 'Siguiente: Operaciones clave'
                        },
                        {
                            title: 'Operaciones clave',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Operación</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Producto punto</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Suma ponderada de una neurona o modelo lineal.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Producto de matrices</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Aplicar una capa a un lote de datos.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Transpuesta</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cálculo de gradientes y mínimos cuadrados.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Inversa</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Solución de la regresión: w = (XᵀX)⁻¹Xᵀy.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Valores y vectores propios</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Análisis de componentes principales.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Norma</strong></td><td style="padding:13px 12px;">Distancias y regularización.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t002',
                    label: 'Uso del cálculo diferencial e integral',
                    steps: [
                        {
                            title: 'Derivadas y gradientes',
                            content: `<p>La <strong>derivada</strong> indica cómo cambia la función de pérdida cuando cambia un parámetro. El <strong>gradiente</strong> reúne las derivadas parciales respecto a todos los parámetros y señala la dirección de mayor aumento del error.</p>
<pre class="codigo">
Pérdida (error cuadrático medio):  L(w) = (1/n) Σ (yᵢ − w·xᵢ)²
Derivada respecto a w:             dL/dw = −(2/n) Σ xᵢ (yᵢ − w·xᵢ)
</pre>
<ul>
    <li>La <strong>regla de la cadena</strong> es la base de la retropropagación en redes neuronales.</li>
    <li>Las <strong>integrales</strong> aparecen en probabilidad: el área bajo una función de densidad, o el área bajo la curva ROC (AUC).</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t003',
                    label: 'Uso de la estadística descriptiva e inferencial',
                    steps: [
                        {
                            title: 'Estadística descriptiva',
                            content: `<pre class="codigo">
import pandas as pd
datos = pd.read_csv("notas.csv")
print(datos["nota"].describe())          # media, desviación, cuartiles
print(datos[["asistencia", "nota"]].corr())
</pre>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Medida</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Media y mediana</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Tendencia central.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Desviación estándar</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Dispersión.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cuartiles</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Detectar valores atípicos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Correlación</strong></td><td style="padding:13px 12px;">Relación entre variables.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Estadística inferencial'
                        },
                        {
                            title: 'Estadística inferencial',
                            content: `<ul>
    <li><strong>Muestra y población</strong>: los datos de entrenamiento son una muestra.</li>
    <li><strong>Intervalos de confianza</strong> para la métrica de un modelo.</li>
    <li><strong>Pruebas de hipótesis</strong> para comparar dos modelos o en pruebas A/B.</li>
    <li><strong>Distribuciones</strong>: normal, binomial, Bernoulli.</li>
    <li><strong>Teorema de Bayes</strong>: base del clasificador Naive Bayes.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t004',
                    label: 'Optimización y gradientes',
                    steps: [
                        {
                            title: 'Descenso de gradiente',
                            content: `<p>El <strong>descenso de gradiente</strong> ajusta los parámetros en dirección contraria al gradiente para reducir el error: <strong>w ← w − η · ∇L(w)</strong>, donde η es la tasa de aprendizaje.</p>
<pre class="codigo">
import numpy as np
x = np.array([1, 2, 3, 4]); y = np.array([2.1, 3.9, 6.2, 7.8])
w, eta = 0.0, 0.01
for paso in range(200):
    gradiente = -2 * np.mean(x * (y - w * x))
    w -= eta * gradiente
print(round(w, 3))     # ≈ 1.98
</pre>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Variante</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Datos por actualización</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Por lotes</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Todos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Estocástico (SGD)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Uno.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Por minilotes</strong></td><td style="padding:13px 12px;">Un grupo (por ejemplo, 32).</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Tasa de aprendizaje'
                        },
                        {
                            title: 'Tasa de aprendizaje',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tasa</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Efecto</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Muy pequeña</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Converge muy lento.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Adecuada</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Converge de forma estable.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Muy grande</strong></td><td style="padding:13px 12px;">Oscila o diverge.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t005',
                    label: 'Validación y evaluación de modelos de aprendizaje automático',
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
                }
            ]
        },
        {
            id: 'modulo_003',
            label: 'Preprocesamiento de datos',
            subtemas: [
                {
                    id: 'm003-t001',
                    label: 'Recolección y almacenamiento de datos',
                    steps: [
                        {
                            title: 'Fuentes de datos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Fuente</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Bases de datos de la organización</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ventas, matrícula, clientes.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Archivos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">CSV, Excel, JSON.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>API</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Datos públicos o de proveedores.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Datos abiertos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Portal de datos abiertos del Gobierno, INEC, Kaggle.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Sensores</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Dispositivos IoT.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Web</strong></td><td style="padding:13px 12px;">Extracción respetando términos de uso.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
import pandas as pd
datos = pd.read_csv("ventas.csv", parse_dates=["fecha"])
datos.to_parquet("ventas.parquet")            # formato eficiente para análisis
</pre>`,
                            nextButton: 'Siguiente: Buenas prácticas'
                        },
                        {
                            title: 'Buenas prácticas',
                            content: `<ul>
    <li>Documentar el origen y la fecha de cada conjunto de datos.</li>
    <li>Versionar los datos (DVC).</li>
    <li>Respetar la Ley 8968 de protección de datos personales.</li>
    <li>Anonimizar los datos sensibles.</li>
    <li>Separar el conjunto de prueba desde el inicio.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t002',
                    label: 'Limpieza y normalización de datos',
                    steps: [
                        {
                            title: 'Limpieza',
                            content: `<pre class="codigo">
datos = datos.drop_duplicates()
datos["provincia"] = datos["provincia"].str.strip().str.title()
datos = datos[datos["edad"].between(4, 100)]          # valores imposibles
datos["fecha"] = pd.to_datetime(datos["fecha"], errors="coerce")
</pre>`,
                            nextButton: 'Siguiente: Escalado y codificación'
                        },
                        {
                            title: 'Escalado y codificación',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Técnica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Fórmula o efecto</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Normalización mín-máx</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">(x − mín) / (máx − mín) → [0, 1]</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Redes neuronales.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Estandarización</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">(x − media) / desviación</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Regresión, SVM, k-NN.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Codificación one-hot</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Una columna binaria por categoría.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Variables categóricas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Codificación ordinal</strong></td><td style="padding:13px 12px;">Números que respetan un orden.</td><td style="padding:13px 12px;">Bajo, medio, alto.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer
prep = ColumnTransformer([
    ("num", StandardScaler(), ["edad", "ingreso"]),
    ("cat", OneHotEncoder(handle_unknown="ignore"), ["provincia"])
])
</pre>
<p class="nota">
<i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
Ajuste el escalador solo con los datos de entrenamiento y aplíquelo después a los de prueba; si no, se filtra información (data leakage).</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t003',
                    label: 'Selección y extracción de características',
                    steps: [
                        {
                            title: 'Ingeniería de características',
                            content: `<ul>
    <li>Extraer día de la semana o mes de una fecha.</li>
    <li>Crear razones: deuda / ingreso.</li>
    <li>Agrupar categorías poco frecuentes.</li>
    <li>Contar eventos por cliente.</li>
</ul>
<pre class="codigo">
datos["dia_semana"] = datos["fecha"].dt.dayofweek
datos["razon_deuda"] = datos["deuda"] / datos["ingreso"]
</pre>`,
                            nextButton: 'Siguiente: Selección de características'
                        },
                        {
                            title: 'Selección de características',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Método</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Filtro</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Correlación, información mutua, chi-cuadrado.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Envoltura</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Eliminación recursiva de características (RFE).</td></tr>
<tr><td style="padding:13px 12px;"><strong>Integrado</strong></td><td style="padding:13px 12px;">Importancia en árboles, regularización L1.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
from sklearn.feature_selection import SelectKBest, mutual_info_classif
selector = SelectKBest(mutual_info_classif, k=5).fit(X, y)
print(X.columns[selector.get_support()])
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t004',
                    label: 'Reducción de la dimensionalidad',
                    steps: [
                        {
                            title: 'La maldición de la dimensionalidad',
                            content: `<p>Con muchas características, los datos se vuelven dispersos, las distancias pierden significado y los modelos necesitan muchos más ejemplos. Reducir dimensiones simplifica el modelo y permite visualizar los datos.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Técnica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>PCA</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Lineal</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Comprimir conservando la varianza.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>t-SNE, UMAP</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">No lineal</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Visualizar en 2D.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Autocodificadores</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Neuronal</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Comprimir datos complejos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Selección de características</strong></td><td style="padding:13px 12px;">Elimina columnas</td><td style="padding:13px 12px;">Interpretabilidad.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t005',
                    label: 'Manejo de datos faltantes y ruidosos',
                    steps: [
                        {
                            title: 'Datos faltantes',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Estrategia</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Cuándo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Eliminar filas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pocos faltantes y al azar.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Imputar media o mediana</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Variables numéricas.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Imputar la moda</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Variables categóricas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Imputación por modelos (KNN)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Relaciones entre variables.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Indicador de faltante</strong></td><td style="padding:13px 12px;">Cuando la ausencia tiene significado.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
from sklearn.impute import SimpleImputer
imputador = SimpleImputer(strategy="median")
X_ent[["ingreso"]] = imputador.fit_transform(X_ent[["ingreso"]])
</pre>`,
                            nextButton: 'Siguiente: Datos ruidosos y atípicos'
                        },
                        {
                            title: 'Datos ruidosos y atípicos',
                            content: `<pre class="codigo">
q1, q3 = datos["monto"].quantile([0.25, 0.75])
iqr = q3 - q1
atipicos = datos[(datos["monto"] &lt; q1 - 1.5 * iqr) | (datos["monto"] &gt; q3 + 1.5 * iqr)]
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Antes de eliminar un valor atípico, verifique si es un error o un caso real importante (por ejemplo, un fraude).</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_004',
            label: 'Modelos de aprendizaje supervisado',
            subtemas: [
                {
                    id: 'm004-t001',
                    label: 'Regresión lineal y logística',
                    steps: [
                        {
                            title: 'Regresión lineal',
                            content: `<p>Modela una variable continua como combinación lineal de las características: <strong>ŷ = w₀ + w₁x₁ + … + wₙxₙ</strong>.</p>
<pre class="codigo">
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error
modelo = LinearRegression().fit(X_ent, y_ent)
print(modelo.coef_, modelo.intercept_)
print("MAE:", mean_absolute_error(y_prueba, modelo.predict(X_prueba)))
</pre>`,
                            nextButton: 'Siguiente: Regresión logística'
                        },
                        {
                            title: 'Regresión logística',
                            content: `<p>A pesar de su nombre, es un modelo de <strong>clasificación</strong>: aplica la función sigmoide a la combinación lineal para obtener una probabilidad entre 0 y 1.</p>
<pre class="codigo">
from sklearn.linear_model import LogisticRegression
clf = LogisticRegression(max_iter=1000).fit(X_ent, y_ent)
prob = clf.predict_proba(X_prueba)[:, 1]     # probabilidad de la clase positiva
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t002',
                    label: 'Árboles de decisión y bosques aleatorios',
                    steps: [
                        {
                            title: 'Árboles de decisión',
                            content: `<p>Un árbol divide los datos con preguntas sobre las características («¿asistencia &lt; 70 %?») hasta llegar a hojas con una predicción. Es fácil de interpretar.</p>
<pre class="codigo">
from sklearn.tree import DecisionTreeClassifier, export_text
arbol = DecisionTreeClassifier(max_depth=3).fit(X_ent, y_ent)
print(export_text(arbol, feature_names=list(X_ent.columns)))
</pre>`,
                            nextButton: 'Siguiente: Bosques aleatorios'
                        },
                        {
                            title: 'Bosques aleatorios',
                            content: `<p>Un <strong>bosque aleatorio</strong> entrena muchos árboles con muestras y características al azar, y combina sus votos. Reduce el sobreajuste de un árbol individual.</p>
<pre class="codigo">
from sklearn.ensemble import RandomForestClassifier
bosque = RandomForestClassifier(n_estimators=200, random_state=42).fit(X_ent, y_ent)
importancias = pd.Series(bosque.feature_importances_, index=X_ent.columns).sort_values(ascending=False)
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t003',
                    label: 'Máquinas de vectores de soporte',
                    steps: [
                        {
                            title: 'SVM',
                            content: `<p>Una <strong>máquina de vectores de soporte</strong> busca el hiperplano que separa las clases con el mayor margen posible. Los puntos más cercanos al hiperplano son los vectores de soporte.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Parámetro</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Efecto</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>C</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Penaliza los errores: C alto ajusta más (riesgo de sobreajuste).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>kernel</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Lineal, polinomial o RBF para fronteras no lineales.</td></tr>
<tr><td style="padding:13px 12px;"><strong>gamma</strong></td><td style="padding:13px 12px;">Alcance de la influencia de cada punto (RBF).</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
from sklearn.svm import SVC
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
svm = make_pipeline(StandardScaler(), SVC(kernel="rbf", C=1.0, gamma="scale")).fit(X_ent, y_ent)
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t004',
                    label: 'Redes neuronales artificiales',
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
                            nextButton: 'Siguiente: Capas'
                        },
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
                    id: 'm004-t005',
                    label: 'Algoritmos de clasificación y regresión',
                    steps: [
                        {
                            title: 'Otros algoritmos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Algoritmo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Idea</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Fortaleza</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>k vecinos más cercanos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Predice según los k ejemplos más cercanos.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Simple, sin entrenamiento.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Naive Bayes</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Teorema de Bayes con independencia entre características.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Muy rápido con texto.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Gradient boosting (XGBoost, LightGBM)</strong></td><td style="padding:13px 12px;">Árboles secuenciales que corrigen errores.</td><td style="padding:13px 12px;">Excelente con datos tabulares.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Comparar algoritmos'
                        },
                        {
                            title: 'Comparar algoritmos',
                            content: `<pre class="codigo">
from sklearn.model_selection import cross_val_score
modelos = {"logística": LogisticRegression(max_iter=1000), "árbol": DecisionTreeClassifier(),
           "bosque": RandomForestClassifier(), "knn": KNeighborsClassifier()}
for nombre, m in modelos.items():
    puntajes = cross_val_score(m, X, y, cv=5, scoring="f1")
    print(f"{nombre}: {puntajes.mean():.3f} ± {puntajes.std():.3f}")
</pre>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_005',
            label: 'Modelos de aprendizaje no supervisado',
            subtemas: [
                {
                    id: 'm005-t001',
                    label: 'Agrupamiento',
                    steps: [
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
                            nextButton: 'Siguiente: Elegir el número de grupos'
                        },
                        {
                            title: 'Elegir el número de grupos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Método</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Cómo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Codo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Graficar la inercia según k y buscar el «codo».</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Silueta</strong></td><td style="padding:13px 12px;">Elegir el k con mayor coeficiente de silueta.</td></tr>
</tbody>
</table>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Algoritmo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Característica</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>K-means</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Grupos esféricos; requiere k.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>DBSCAN</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Grupos de forma libre; detecta ruido.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Jerárquico</strong></td><td style="padding:13px 12px;">Dendrograma de grupos anidados.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t002',
                    label: 'Análisis de componentes principales (PCA, por sus siglas en inglés)',
                    steps: [
                        {
                            title: 'PCA',
                            content: `<p>El <strong>PCA</strong> transforma las características originales en nuevas variables (componentes) no correlacionadas, ordenadas por la cantidad de varianza que explican.</p>
<pre class="codigo">
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler
X_esc = StandardScaler().fit_transform(X)
pca = PCA(n_components=0.95)           # conservar el 95 % de la varianza
X_red = pca.fit_transform(X_esc)
print(pca.n_components_, pca.explained_variance_ratio_)
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Estandarice los datos antes del PCA: si no, las variables con valores grandes dominan los componentes.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t003',
                    label: 'Reducción de dimensionalidad',
                    steps: [
                        {
                            title: 'La maldición de la dimensionalidad',
                            content: `<p>Con muchas características, los datos se vuelven dispersos, las distancias pierden significado y los modelos necesitan muchos más ejemplos. Reducir dimensiones simplifica el modelo y permite visualizar los datos.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Técnica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>PCA</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Lineal</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Comprimir conservando la varianza.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>t-SNE, UMAP</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">No lineal</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Visualizar en 2D.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Autocodificadores</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Neuronal</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Comprimir datos complejos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Selección de características</strong></td><td style="padding:13px 12px;">Elimina columnas</td><td style="padding:13px 12px;">Interpretabilidad.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Visualizar con t-SNE'
                        },
                        {
                            title: 'Visualizar con t-SNE',
                            content: `<pre class="codigo">
from sklearn.manifold import TSNE
X_2d = TSNE(n_components=2, perplexity=30, random_state=0).fit_transform(X_esc)
plt.scatter(X_2d[:, 0], X_2d[:, 1], c=y, s=8)
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t004',
                    label: 'Detección de anomalías',
                    steps: [
                        {
                            title: 'Anomalías',
                            content: `<p>Una <strong>anomalía</strong> es un dato que se aleja del comportamiento normal: una transacción fraudulenta, un sensor defectuoso o un ataque en la red.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Método</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Idea</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Estadístico (puntaje z, IQR)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Valores lejos de la media.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Isolation Forest</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Los atípicos se aíslan con pocas divisiones.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>One-Class SVM</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Aprende la frontera de lo normal.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Autocodificador</strong></td><td style="padding:13px 12px;">Error de reconstrucción alto = anomalía.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
from sklearn.ensemble import IsolationForest
detector = IsolationForest(contamination=0.01, random_state=0).fit(transacciones)
transacciones["anomalia"] = detector.predict(transacciones) == -1
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t005',
                    label: 'Minería de texto y recomendación',
                    steps: [
                        {
                            title: 'Minería de texto no supervisada',
                            content: `<pre class="codigo">
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.decomposition import LatentDirichletAllocation
conteos = CountVectorizer(max_df=0.9, min_df=2).fit(comentarios)
lda = LatentDirichletAllocation(n_components=4, random_state=0).fit(conteos.transform(comentarios))
palabras = conteos.get_feature_names_out()
for i, tema in enumerate(lda.components_):
    print(i, [palabras[j] for j in tema.argsort()[-6:]])
</pre>
<p>El <strong>modelado de temas</strong> (LDA) descubre los temas principales de una colección de textos sin etiquetas.</p>`,
                            nextButton: 'Siguiente: Basado en usuarios y en elementos'
                        },
                        {
                            title: 'Basado en usuarios y en elementos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Funcionamiento</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Basado en usuarios</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Encuentra usuarios similares y recomienda lo que ellos calificaron bien.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Basado en elementos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Encuentra elementos similares a los que el usuario calificó bien.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Factorización de matrices</strong></td><td style="padding:13px 12px;">Descompone la matriz en factores latentes de usuarios y elementos.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity

matriz = pd.pivot_table(calificaciones, index="usuario", columns="curso", values="nota").fillna(0)
similitud = pd.DataFrame(cosine_similarity(matriz.T), index=matriz.columns, columns=matriz.columns)
print(similitud["Python"].sort_values(ascending=False).head(4))   # cursos parecidos a Python
</pre>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_006',
            label: 'Evaluación y mejora de modelos',
            subtemas: [
                {
                    id: 'm006-t001',
                    label: 'Métricas de evaluación de modelos',
                    steps: [
                        {
                            title: 'Matriz de confusión',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;"></th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Predice positivo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Predice negativo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Realmente positivo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Verdadero positivo (VP)</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Falso negativo (FN)</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Realmente negativo</strong></td><td style="padding:13px 12px;">Falso positivo (FP)</td><td style="padding:13px 12px;">Verdadero negativo (VN)</td></tr>
</tbody>
</table>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Métrica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Fórmula</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Pregunta</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Exactitud</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">(VP + VN) / total</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Cuántas acertó en total?</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Precisión</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">VP / (VP + FP)</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">De lo que predijo positivo, ¿cuánto lo era?</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Exhaustividad (recall)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">VP / (VP + FN)</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">De lo positivo, ¿cuánto encontró?</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>F1</strong></td><td style="padding:13px 12px;">2 · P · R / (P + R)</td><td style="padding:13px 12px;">Balance entre precisión y exhaustividad.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Más métricas'
                        },
                        {
                            title: 'Más métricas',
                            content: `<pre class="codigo">
from sklearn.metrics import classification_report, roc_auc_score, ConfusionMatrixDisplay
print(classification_report(y_prueba, y_pred))
print("AUC:", roc_auc_score(y_prueba, prob))
ConfusionMatrixDisplay.from_predictions(y_prueba, y_pred)
</pre>
<p class="nota">
<i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
Con clases desbalanceadas (1 % de fraude) la exactitud engaña: un modelo que siempre dice «no es fraude» tiene 99 % de exactitud. Use precisión, exhaustividad, F1 o AUC.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t002',
                    label: 'Validación cruzada y particionamiento de datos',
                    steps: [
                        {
                            title: 'Validación cruzada',
                            content: `<p>En la <strong>validación cruzada de k pliegues</strong> los datos se dividen en k partes; se entrena k veces, cada vez probando con una parte distinta, y se promedian los resultados.</p>
<pre class="codigo">
from sklearn.model_selection import StratifiedKFold, cross_validate
cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
resultados = cross_validate(bosque, X, y, cv=cv, scoring=["accuracy", "f1"])
print(resultados["test_f1"].mean())
</pre>`,
                            nextButton: 'Siguiente: Particionamientos especiales'
                        },
                        {
                            title: 'Particionamientos especiales',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Caso</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Técnica</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Clases desbalanceadas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Particionamiento estratificado.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Series de tiempo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">TimeSeriesSplit: entrenar con el pasado y probar con el futuro.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Datos agrupados (varios registros por persona)</strong></td><td style="padding:13px 12px;">GroupKFold.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t003',
                    label: 'Sintonización de hiperparámetros',
                    steps: [
                        {
                            title: 'Hiperparámetros',
                            content: `<p>Los <strong>hiperparámetros</strong> se fijan antes de entrenar (profundidad del árbol, número de vecinos, tasa de aprendizaje), a diferencia de los parámetros que el modelo aprende.</p>
<pre class="codigo">
from sklearn.model_selection import GridSearchCV
rejilla = {"n_estimators": [100, 300], "max_depth": [None, 5, 10], "min_samples_leaf": [1, 5]}
busqueda = GridSearchCV(RandomForestClassifier(random_state=0), rejilla, cv=5, scoring="f1", n_jobs=-1)
busqueda.fit(X_ent, y_ent)
print(busqueda.best_params_, busqueda.best_score_)
</pre>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Método</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Característica</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Búsqueda en rejilla</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Prueba todas las combinaciones.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Búsqueda aleatoria</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Muestras al azar; más eficiente.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Optimización bayesiana (Optuna)</strong></td><td style="padding:13px 12px;">Elige las siguientes pruebas con base en las anteriores.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t004',
                    label: 'Regularización y prevención del sobreajuste',
                    steps: [
                        {
                            title: 'Regularización',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Técnica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Efecto</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>L2 (Ridge)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Penaliza los pesos grandes; los reduce.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>L1 (Lasso)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Puede llevar pesos a cero (selección de características).</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Elastic Net</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Combina L1 y L2.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Dropout</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Apaga neuronas al azar.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Detención temprana</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Para el entrenamiento a tiempo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Poda de árboles</strong></td><td style="padding:13px 12px;">Limita la profundidad.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
from sklearn.linear_model import Ridge, Lasso
ridge = Ridge(alpha=1.0).fit(X_ent, y_ent)
lasso = Lasso(alpha=0.1).fit(X_ent, y_ent)
print("Características eliminadas por Lasso:", (lasso.coef_ == 0).sum())
</pre>`,
                            nextButton: 'Siguiente: Curvas de aprendizaje'
                        },
                        {
                            title: 'Curvas de aprendizaje',
                            content: `<p>Graficar el error de entrenamiento y de validación según la cantidad de datos o las épocas revela el problema: si ambas curvas están altas hay subajuste; si están muy separadas hay sobreajuste.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t005',
                    label: 'Métodos de mejora de modelos: ensamblado y apilamiento',
                    steps: [
                        {
                            title: 'Métodos de ensamblado',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Método</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Idea</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Bagging</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Modelos entrenados en paralelo con muestras distintas; se promedian.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Bosque aleatorio.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Boosting</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Modelos secuenciales que corrigen los errores del anterior.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">XGBoost, LightGBM.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Votación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Varios modelos distintos votan.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">VotingClassifier.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Apilamiento (stacking)</strong></td><td style="padding:13px 12px;">Un metamodelo aprende a combinar las predicciones de otros.</td><td style="padding:13px 12px;">StackingClassifier.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Apilamiento'
                        },
                        {
                            title: 'Apilamiento',
                            content: `<pre class="codigo">
from sklearn.ensemble import StackingClassifier
apilado = StackingClassifier(
    estimators=[("bosque", RandomForestClassifier()), ("svm", SVC(probability=True)), ("knn", KNeighborsClassifier())],
    final_estimator=LogisticRegression())
apilado.fit(X_ent, y_ent)
</pre>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_007',
            label: 'Aplicaciones avanzadas de aprendizaje automático',
            subtemas: [
                {
                    id: 'm007-t001',
                    label: 'Aprendizaje por refuerzo',
                    steps: [
                        {
                            title: 'Aprendizaje por refuerzo',
                            content: `<p>En el <strong>aprendizaje por refuerzo</strong> un <strong>agente</strong> aprende por prueba y error a tomar acciones en un <strong>entorno</strong> para maximizar la <strong>recompensa</strong> acumulada.</p>
<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-robot" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Agente</b><br><small>Elige una acción</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-globe" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Entorno</b><br><small>Cambia de estado</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-star" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Recompensa</b><br><small>Positiva o negativa</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-rotate" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Nuevo estado</b><br><small>El agente aprende</small></div></div>
</div>
</div>`,
                            nextButton: 'Siguiente: Diferencias con otros enfoques'
                        },
                        {
                            title: 'Diferencias con otros enfoques',
                            content: `<ul>
    <li>No hay etiquetas: solo recompensas, a veces retrasadas.</li>
    <li>Las acciones afectan los datos futuros.</li>
    <li>Dilema de <strong>exploración y explotación</strong>: probar acciones nuevas o usar las conocidas.</li>
    <li>Diseñar la recompensa es crítico: el agente optimiza exactamente lo que se mide.</li>
</ul>`,
                            nextButton: 'Siguiente: Q-learning'
                        },
                        {
                            title: 'Q-learning',
                            content: `<p>Q-learning aprende una tabla <strong>Q(s, a)</strong> con el valor esperado de cada acción en cada estado.</p>
<pre class="codigo">
import numpy as np
Q = np.zeros((entorno.observation_space.n, entorno.action_space.n))
alfa, gamma, epsilon = 0.1, 0.9, 0.1

for episodio in range(2000):
    s, _ = entorno.reset()
    terminado = False
    while not terminado:
        a = entorno.action_space.sample() if np.random.rand() &lt; epsilon else np.argmax(Q[s])
        s2, r, term, trunc, _ = entorno.step(a)
        Q[s, a] += alfa * (r + gamma * np.max(Q[s2]) - Q[s, a])
        s, terminado = s2, term or trunc
</pre>`,
                            nextButton: 'Siguiente: Otros algoritmos'
                        },
                        {
                            title: 'Otros algoritmos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Algoritmo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Idea</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>SARSA</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Como Q-learning pero aprende de la acción que realmente toma.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Deep Q-Network (DQN)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Una red neuronal aproxima la tabla Q.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Gradiente de política (REINFORCE)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Aprende directamente la probabilidad de cada acción.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Actor-crítico (A2C, PPO)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un actor elige y un crítico evalúa.</td></tr>
<tr><td style="padding:13px 12px;"><strong>RLHF</strong></td><td style="padding:13px 12px;">Ajusta modelos de lenguaje con preferencias humanas.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t002',
                    label: 'Visión por computadora',
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
                            nextButton: 'Siguiente: Clasificación con transferencia de…'
                        },
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
                    id: 'm007-t003',
                    label: 'Aprendizaje profundo (deep learning)',
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
                            nextButton: 'Siguiente: Convolución'
                        },
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
                            nextButton: 'Siguiente: Redes recurrentes'
                        },
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
                            nextButton: 'Siguiente: Transformers'
                        },
                        {
                            title: 'Transformers',
                            content: `<p>Los <strong>Transformers</strong> usan el mecanismo de <strong>atención</strong> para relacionar cada elemento de la secuencia con todos los demás. Son la base de los modelos de lenguaje actuales y también se usan en visión y audio.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t004',
                    label: 'Aprendizaje automático en entornos distribuidos y en la nube',
                    steps: [
                        {
                            title: 'Aprendizaje automático en la nube',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Servicio</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Plataformas de ML</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Azure Machine Learning, Amazon SageMaker, Google Vertex AI.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cuadernos en la nube</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Google Colab, Kaggle.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cómputo distribuido</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Spark MLlib, Ray, Dask.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Entrenamiento con varias GPU</strong></td><td style="padding:13px 12px;">PyTorch Distributed, Horovod.</td></tr>
</tbody>
</table>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Paralelismo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>De datos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cada GPU entrena con una parte de los datos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>De modelo</strong></td><td style="padding:13px 12px;">El modelo se reparte entre GPU.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Apague los recursos de cómputo cuando no se usan: las GPU en la nube tienen un costo por hora elevado.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t005',
                    label: 'Optimización de algoritmos de aprendizaje automático con computación cuántica',
                    steps: [
                        {
                            title: 'Aprendizaje automático cuántico',
                            content: `<p>La <strong>computación cuántica</strong> usa cúbits, que pueden estar en superposición y entrelazados. El aprendizaje automático cuántico explora si estos fenómenos pueden acelerar ciertas tareas.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Línea</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Optimización cuántica (QAOA, recocido)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Problemas combinatorios como rutas o selección de características.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Kernels cuánticos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mapear datos a espacios de alta dimensión.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Redes neuronales cuánticas variacionales</strong></td><td style="padding:13px 12px;">Circuitos con parámetros ajustables.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
# Circuito simple con Qiskit
from qiskit import QuantumCircuit
qc = QuantumCircuit(2)
qc.h(0)          # superposición
qc.cx(0, 1)      # entrelazamiento
qc.measure_all()
</pre>
<p class="nota">
<i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
Los computadores cuánticos actuales tienen pocos cúbits y mucho ruido; la ventaja práctica en aprendizaje automático todavía es un tema de investigación.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        }
    ]
};
