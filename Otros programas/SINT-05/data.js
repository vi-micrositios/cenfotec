const data = {
    // Pantalla de bienvenida
    welcome: {
        title: 'SINT-05 <br> Modelado y Arquitectura en Inteligencia Artificial',
        image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SINT-05/imgs/logo.png', // Cambiar por imagen real
        description: 'Modelado y arquitectura de sistemas de inteligencia artificial que reconocen patrones, predicen, clasifican y generan texto: componentes y API, arquitecturas, sistemas de recomendación, redes neuronales, lenguaje natural y aprendizaje por refuerzo.',
        instruction: 'Seleccione cada pestaña para acceder a la información'
    },
    // Temas principales y sus subtemas con pasos
    temas: [
        {
            id: 'modulo_001',
            label: 'Modelado de aplicaciones de inteligencia artificial',
            subtemas: [
                {
                    id: 'm001-t001',
                    label: 'Particularidades de inteligencia artificial a nivel de modelado',
                    steps: [
                        {
                            title: '¿Qué cambia al modelar con IA?',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Aspecto</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Software tradicional</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Software con IA</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Comportamiento</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Determinista, definido por código.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Probabilístico, definido por datos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Requisitos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Funcionales exactos.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Metas de desempeño (por ejemplo, F1 ≥ 0,85).</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Componentes</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Código y base de datos.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Código, datos, modelo y canales de entrenamiento.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pruebas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Casos con resultado esperado.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Evaluación estadística y monitoreo.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Evolución</strong></td><td style="padding:13px 12px;">Cambios de código.</td><td style="padding:13px 12px;">Reentrenamiento por deriva de datos.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Al modelar una aplicación con IA se representan explícitamente los datos, el modelo, su versión y el ciclo de reentrenamiento, no solo las clases y los servicios.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t002',
                    label: 'Tipos de modelos de inteligencia artificial y sus aplicaciones',
                    steps: [
                        {
                            title: 'Tipos de modelos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Modelo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Aplicación</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Clasificadores</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Detección de spam, diagnóstico de apoyo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Regresores</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Predicción de demanda o precios.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Agrupamiento</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Segmentación de clientes.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Recomendadores</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Productos, cursos o películas.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Redes convolucionales</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Imágenes y video.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Modelos de secuencias y Transformers</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Texto, traducción, series de tiempo.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Modelos generativos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Texto, imágenes, código.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Agentes de refuerzo</strong></td><td style="padding:13px 12px;">Control y toma de decisiones.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t003',
                    label: 'Proceso de desarrollo de aplicaciones de inteligencia artificial',
                    steps: [
                        {
                            title: 'CRISP-DM',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Fase</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Actividades</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Comprensión del negocio</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Objetivo, criterio de éxito, restricciones.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Comprensión de los datos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Recolección y análisis exploratorio.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Preparación de los datos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Limpieza, transformación, características.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Modelado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Selección y entrenamiento de modelos.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Evaluación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Métricas y validación con el negocio.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Despliegue</strong></td><td style="padding:13px 12px;">Integración en la aplicación y monitoreo.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
CRISP-DM es iterativo: la evaluación suele llevar de vuelta a la preparación de datos o a la comprensión del negocio.</p>`,
                            nextButton: 'Siguiente: MLOps'
                        },
                        {
                            title: 'MLOps',
                            content: `<p><strong>MLOps</strong> aplica prácticas de DevOps a los modelos: versionado de datos y modelos, canales automatizados de entrenamiento, registro de modelos, despliegue y monitoreo.</p>
<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-database" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Datos versionados</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-gears" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Entrenamiento automatizado</b><br><small></small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-box-archive" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Registro de modelos</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-server" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Servicio</b><br><small>API</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-chart-line" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Monitoreo</b><br><small>Deriva y desempeño</small></div></div>
</div>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t004',
                    label: 'Enfoques de modelado para aplicaciones de inteligencia artificial',
                    steps: [
                        {
                            title: 'Enfoques',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Enfoque</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Cuándo usarlo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Usar una API de IA existente</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Tareas generales (traducción, visión, LLM) y poco tiempo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ajustar un modelo preentrenado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Tarea específica con datos propios moderados.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Entrenar un modelo propio</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Datos únicos y necesidad de control total.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Reglas + IA (híbrido)</strong></td><td style="padding:13px 12px;">Requisitos regulatorios o lógica de negocio estricta.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Representar el sistema'
                        },
                        {
                            title: 'Representar el sistema',
                            content: `<ul>
    <li>Diagrama de casos de uso con el actor «modelo de IA» cuando decide o sugiere.</li>
    <li>Diagrama de componentes con modelo, servicio de inferencia y almacén de datos.</li>
    <li>Diagrama de flujo de datos desde la fuente hasta la predicción.</li>
    <li>Ficha del modelo (model card): propósito, datos, métricas, limitaciones.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t005',
                    label: 'Consideraciones éticas en el modelado de inteligencia artificial',
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
                            nextButton: 'Siguiente: Ética desde el diseño'
                        },
                        {
                            title: 'Ética desde el diseño',
                            content: `<ol>
    <li>Evaluar el impacto antes de construir: ¿a quién puede perjudicar?</li>
    <li>Documentar los datos (datasheets) y el modelo (model cards).</li>
    <li>Medir el desempeño por grupos.</li>
    <li>Diseñar la supervisión humana y la apelación.</li>
    <li>Registrar las decisiones para auditoría.</li>
</ol>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_002',
            label: 'Modelado de componentes y API de inteligencia artificial',
            subtemas: [
                {
                    id: 'm002-t001',
                    label: 'Integración de interfaces de programación de aplicaciones (API) de inteligencia artificial en el modelado de aplicaciones',
                    steps: [
                        {
                            title: 'API de IA',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo de API</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplos de uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Modelos de lenguaje</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Generación de texto, resumen, clasificación.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Visión</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Reconocimiento de objetos, lectura de documentos.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Voz</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Voz a texto y texto a voz.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Traducción</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Traducción automática.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Embeddings</strong></td><td style="padding:13px 12px;">Búsqueda semántica y recomendaciones.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
# Llamada desde el backend (nunca exponga la clave en el frontend)
import os, requests
r = requests.post(
    os.environ["URL_API_IA"],
    headers={"Authorization": f"Bearer {os.environ['CLAVE_API_IA']}"},
    json={"texto": "El curso me pareció excelente", "tarea": "sentimiento"},
    timeout=15)
print(r.json())
</pre>`,
                            nextButton: 'Siguiente: Consideraciones de integración'
                        },
                        {
                            title: 'Consideraciones de integración',
                            content: `<ul>
    <li>Tiempo de espera y reintentos.</li>
    <li>Costo por solicitud y límites de uso.</li>
    <li>Privacidad: qué datos se envían al proveedor.</li>
    <li>Caché de respuestas repetidas.</li>
    <li>Plan alternativo si el servicio no responde.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t002',
                    label: 'Uso de bibliotecas y marcos de trabajo de inteligencia artificial en el modelado',
                    steps: [
                        {
                            title: 'Bibliotecas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Biblioteca</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>NumPy, pandas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cálculo numérico y manejo de datos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>scikit-learn</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Aprendizaje automático clásico.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>PyTorch</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Aprendizaje profundo flexible.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>TensorFlow / Keras</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Aprendizaje profundo y despliegue.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Hugging Face Transformers</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Modelos preentrenados de lenguaje y visión.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>spaCy</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Procesamiento del lenguaje natural.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>LangChain, LlamaIndex</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Aplicaciones con modelos de lenguaje y RAG.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>OpenCV</strong></td><td style="padding:13px 12px;">Procesamiento de imágenes.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Ejemplo con Hugging Face'
                        },
                        {
                            title: 'Ejemplo con Hugging Face',
                            content: `<pre class="codigo">
from transformers import pipeline
clasificador = pipeline("sentiment-analysis", model="pysentimiento/robertuito-sentiment-analysis")
print(clasificador("El profe explica muy bien"))
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t003',
                    label: 'Diseño de componentes reutilizables para la inteligencia artificial',
                    steps: [
                        {
                            title: 'Componente de inferencia',
                            content: `<pre class="codigo">
from abc import ABC, abstractmethod

class Clasificador(ABC):
    @abstractmethod
    def predecir(self, texto: str) -&gt; dict: ...

class ClasificadorLocal(Clasificador):
    def __init__(self, ruta_modelo):
        import joblib
        self.modelo = joblib.load(ruta_modelo)
    def predecir(self, texto):
        prob = self.modelo.predict_proba([texto])[0]
        return {"etiqueta": self.modelo.classes_[prob.argmax()], "confianza": float(prob.max())}

class ClasificadorAPI(Clasificador):
    def predecir(self, texto):
        ...  # llama a un servicio externo
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Una interfaz común permite cambiar un modelo local por un servicio externo sin modificar el resto de la aplicación.</p>`,
                            nextButton: 'Siguiente: Componentes reutilizables'
                        },
                        {
                            title: 'Componentes reutilizables',
                            content: `<ul>
    <li>Canales de preprocesamiento (scikit-learn Pipeline).</li>
    <li>Cargadores de datos.</li>
    <li>Evaluadores de métricas.</li>
    <li>Servicios de inferencia con la misma interfaz.</li>
    <li>Plantillas de instrucciones (prompts) versionadas.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t004',
                    label: 'Selección y evaluación de interfaces de programación de aplicaciones (API) y componentes de inteligencia artificial',
                    steps: [
                        {
                            title: 'Criterios',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Criterio</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Pregunta</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Calidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Qué tan bien resuelve la tarea con mis datos de prueba?</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Idioma</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Funciona bien en español?</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Latencia</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Responde a tiempo para el usuario?</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Costo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Cuánto cuesta por solicitud y al mes?</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Privacidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Dónde se procesan y guardan los datos?</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Licencia</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Permite uso comercial?</td></tr>
<tr><td style="padding:13px 12px;"><strong>Dependencia</strong></td><td style="padding:13px 12px;">¿Puedo cambiar de proveedor fácilmente?</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Prepare un conjunto de evaluación propio (por ejemplo, 100 preguntas reales con respuesta esperada) para comparar opciones con datos y no con impresiones.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t005',
                    label: 'Desarrollo de interfaces y servicios para la interacción con la inteligencia artificial',
                    steps: [
                        {
                            title: 'Servicio de inferencia con FastAPI',
                            content: `<pre class="codigo">
from fastapi import FastAPI
from pydantic import BaseModel
import joblib

app = FastAPI()
modelo = joblib.load("modelo_sentimiento.pkl")

class Entrada(BaseModel):
    texto: str

@app.post("/sentimiento")
def predecir(entrada: Entrada):
    etiqueta = modelo.predict([entrada.texto])[0]
    return {"texto": entrada.texto, "sentimiento": etiqueta, "version_modelo": "1.2"}
</pre>
<pre class="codigo">
uvicorn servicio:app --reload
</pre>`,
                            nextButton: 'Siguiente: Experiencia de usuario con IA'
                        },
                        {
                            title: 'Experiencia de usuario con IA',
                            content: `<ul>
    <li>Indicar que el contenido fue generado por IA.</li>
    <li>Mostrar el nivel de confianza cuando sea útil.</li>
    <li>Permitir corregir o dar retroalimentación.</li>
    <li>Mostrar indicadores de carga y respuestas en flujo (streaming).</li>
    <li>Explicar las limitaciones.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_003',
            label: 'Modelado de arquitecturas para aplicaciones de inteligencia artificial',
            subtemas: [
                {
                    id: 'm003-t001',
                    label: 'Patrones arquitectónicos comunes en aplicaciones de inteligencia artificial',
                    steps: [
                        {
                            title: 'Patrones',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Patrón</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Modelo como servicio</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El modelo se expone mediante una API independiente.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Inferencia por lotes</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Las predicciones se calculan periódicamente y se guardan.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Inferencia en línea</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Predicción en tiempo real por solicitud.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Modelo embebido</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El modelo corre dentro de la aplicación o el dispositivo.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>RAG</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Recuperar documentos y enviarlos como contexto al modelo de lenguaje.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Agente con herramientas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El modelo decide qué funciones o API llamar.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Humano en el ciclo</strong></td><td style="padding:13px 12px;">Una persona valida las decisiones de baja confianza.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Arquitectura RAG'
                        },
                        {
                            title: 'Arquitectura RAG',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-question" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Pregunta</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-vector-square" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Embedding</b><br><small></small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-database" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Base vectorial</b><br><small>Fragmentos relevantes</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-robot" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Modelo de lenguaje</b><br><small>Responde con contexto</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-comment" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Respuesta</b><br><small>Con fuentes</small></div></div>
</div>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t002',
                    label: 'Diseño y optimización de arquitecturas de sistemas de inteligencia artificial',
                    steps: [
                        {
                            title: 'Componentes',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Componente</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Función</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ingesta de datos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Recolectar y validar datos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Almacén de características</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Características consistentes para entrenamiento e inferencia.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Entrenamiento</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Canales reproducibles.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Registro de modelos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Versiones y métricas.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Servicio de inferencia</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">API escalable.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Monitoreo</strong></td><td style="padding:13px 12px;">Desempeño, deriva y costos.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Optimización'
                        },
                        {
                            title: 'Optimización',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Técnica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Efecto</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cuantización</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Reduce la precisión numérica para modelos más pequeños y rápidos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Destilación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un modelo pequeño aprende de uno grande.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Caché</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Reutiliza respuestas frecuentes.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Agrupación de solicitudes</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Aprovecha mejor la GPU.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Modelo según la tarea</strong></td><td style="padding:13px 12px;">Usar modelos pequeños para tareas simples.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t003',
                    label: 'Modelado de flujos de datos en aplicaciones de inteligencia artificial',
                    steps: [
                        {
                            title: 'Flujo de datos',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-database" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Fuentes</b><br><small>BD, API, archivos</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-filter" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Validación</b><br><small>Esquema y calidad</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-wand-magic-sparkles" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Transformación</b><br><small>Características</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-brain" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Modelo</b><br><small>Entrenamiento o inferencia</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-floppy-disk" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Resultados</b><br><small>Predicciones guardadas</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-chart-line" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Retroalimentación</b><br><small>Nuevas etiquetas</small></div></div>
</div>
</div>
<ul>
    <li>Separar el flujo de entrenamiento (fuera de línea) del de inferencia (en línea).</li>
    <li>Aplicar exactamente las mismas transformaciones en ambos para evitar el desfase entre entrenamiento y servicio.</li>
    <li>Registrar el linaje: de qué datos salió cada modelo.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t004',
                    label: 'Escalabilidad y rendimiento en el modelado de aplicaciones de inteligencia artificial',
                    steps: [
                        {
                            title: 'Escalar la inferencia',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Estrategia</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Escalado horizontal</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Varias réplicas del servicio de inferencia detrás de un balanceador.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>GPU y aceleradores</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Para modelos grandes.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Procesamiento asincrónico</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Colas para tareas largas (generar un informe).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Autoescalado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Según la cantidad de solicitudes.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Respuesta en flujo</strong></td><td style="padding:13px 12px;">Mostrar el texto mientras se genera.</td></tr>
</tbody>
</table>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Métrica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo de meta</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Latencia p95</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">&lt; 800 ms</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Solicitudes por segundo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">200</td></tr>
<tr><td style="padding:13px 12px;"><strong>Costo por 1 000 predicciones</strong></td><td style="padding:13px 12px;">&lt; $0,50</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t005',
                    label: 'Implementación de arquitecturas híbridas para la inteligencia artificial',
                    steps: [
                        {
                            title: 'Arquitecturas híbridas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Combinación</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Reglas + modelo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Las reglas filtran casos claros; el modelo decide los dudosos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Borde + nube</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Detección rápida en el dispositivo y análisis profundo en la nube.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Modelo propio + API externa</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Clasificador local y LLM externo solo cuando se necesita.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Simbólico + neuronal</strong></td><td style="padding:13px 12px;">Grafo de conocimiento con un modelo de lenguaje.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
def responder(pregunta):
    if es_saludo(pregunta):                      # regla
        return "¡Hola! ¿En qué le ayudo?"
    intencion, confianza = clasificador.predecir(pregunta)   # modelo propio
    if confianza &gt; 0.8:
        return respuestas_fijas[intencion]
    return llm_con_documentos(pregunta)           # modelo de lenguaje con RAG
</pre>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_004',
            label: 'Modelado de sistemas de recomendación',
            subtemas: [
                {
                    id: 'm004-t001',
                    label: 'Conceptos clave en los sistemas de recomendación',
                    steps: [
                        {
                            title: 'Sistemas de recomendación',
                            content: `<p>Un <strong>sistema de recomendación</strong> sugiere elementos (productos, cursos, películas) que probablemente interesen a un usuario.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Enfoque</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Idea</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Filtrado colaborativo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Usuarios parecidos tienen gustos parecidos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Basado en contenido</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Recomendar elementos parecidos a los que le gustaron.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Híbrido</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Combina ambos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Basado en popularidad</strong></td><td style="padding:13px 12px;">Lo más visto o vendido.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Matriz usuario-elemento'
                        },
                        {
                            title: 'Matriz usuario-elemento',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Usuario</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Python</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Redes</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">IA</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Bases de datos</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ana</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">5</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">?</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">4</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">3</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Luis</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">4</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">2</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">5</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">?</td></tr>
<tr><td style="padding:13px 12px;"><strong>Sofía</strong></td><td style="padding:13px 12px;">?</td><td style="padding:13px 12px;">5</td><td style="padding:13px 12px;">?</td><td style="padding:13px 12px;">4</td></tr>
</tbody>
</table>
</div>
<ul>
    <li>Retroalimentación <strong>explícita</strong>: calificaciones.</li>
    <li>Retroalimentación <strong>implícita</strong>: clics, compras, tiempo de visualización.</li>
    <li>Problema del <strong>arranque en frío</strong>: usuarios o elementos nuevos sin historial.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t002',
                    label: 'Modelado de filtros colaborativos',
                    steps: [
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
                },
                {
                    id: 'm004-t003',
                    label: 'Algoritmos de recomendación basados en contenido',
                    steps: [
                        {
                            title: 'Recomendación por contenido',
                            content: `<pre class="codigo">
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

cursos = pd.read_csv("cursos.csv")              # nombre, descripcion
tfidf = TfidfVectorizer(stop_words=None).fit_transform(cursos["descripcion"])
sim = cosine_similarity(tfidf)

def recomendar(indice, n=3):
    orden = sim[indice].argsort()[::-1][1:n + 1]
    return cursos.iloc[orden]["nombre"].tolist()
</pre>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ventajas</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Desventajas</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>No necesita datos de otros usuarios.</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Recomienda cosas muy parecidas (poca diversidad).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Funciona con elementos nuevos.</strong></td><td style="padding:13px 12px;">Depende de buenas descripciones.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t004',
                    label: 'Personalización y adaptabilidad en los sistemas de recomendación',
                    steps: [
                        {
                            title: 'Personalización',
                            content: `<ul>
    <li>Perfil del usuario actualizado con cada interacción.</li>
    <li>Contexto: hora, dispositivo, ubicación.</li>
    <li>Recomendaciones por sesión (lo que hace ahora).</li>
    <li>Equilibrio entre explotar gustos conocidos y explorar novedades.</li>
    <li>Diversidad y serendipia para evitar burbujas.</li>
</ul>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Los recomendadores modernos usan embeddings de usuarios y elementos aprendidos con redes neuronales, y modelos de dos torres para recuperar candidatos a gran escala.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t005',
                    label: 'Evaluación y mejora de los sistemas de recomendación',
                    steps: [
                        {
                            title: 'Métricas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Métrica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Mide</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>RMSE</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Error al predecir calificaciones.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Precisión@k</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cuántas de las k recomendaciones fueron relevantes.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Exhaustividad@k</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cuántos elementos relevantes aparecieron en las k recomendaciones.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>NDCG</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Calidad del orden de la lista.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cobertura y diversidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Variedad del catálogo recomendado.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Tasa de clics y conversión</strong></td><td style="padding:13px 12px;">Efecto real en pruebas A/B.</td></tr>
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
            label: 'Modelado de redes neuronales artificiales',
            subtemas: [
                {
                    id: 'm005-t001',
                    label: 'Particularidades en el modelado de redes neuronales artificiales',
                    steps: [
                        {
                            title: 'Decisiones de diseño',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Decisión</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Opciones</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Arquitectura</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Densa, convolucional, recurrente, Transformer.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Profundidad y ancho</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Número de capas y neuronas.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Activaciones</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">ReLU, sigmoide, softmax.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Función de pérdida</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Según la tarea.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Optimizador</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">SGD, Adam.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Regularización</strong></td><td style="padding:13px 12px;">Dropout, L2, aumento de datos.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Comience con una arquitectura simple conocida para el tipo de dato y aumente la complejidad solo si el desempeño lo requiere.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t002',
                    label: 'Tipos de redes neuronales y sus aplicaciones',
                    steps: [
                        {
                            title: 'Tipos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Red</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Datos</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Aplicación</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Perceptrón multicapa</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Tablas</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Clasificación y regresión.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Convolucional (CNN)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Imágenes</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Clasificación y detección.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Recurrente (RNN, LSTM)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Secuencias</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Series de tiempo, texto.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Transformer</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Texto, imágenes, audio</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Modelos de lenguaje, traducción.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Autocodificador</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cualquiera</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Compresión, detección de anomalías.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Generativa adversaria (GAN)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Imágenes</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Generación de imágenes.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Difusión</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Imágenes, audio</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Generación de imágenes de alta calidad.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Red de grafos (GNN)</strong></td><td style="padding:13px 12px;">Grafos</td><td style="padding:13px 12px;">Redes sociales, moléculas.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t003',
                    label: 'Modelado de redes neuronales convolucionales',
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
                    id: 'm005-t004',
                    label: 'Modelado de redes neuronales recurrentes',
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
                },
                {
                    id: 'm005-t005',
                    label: 'Optimización y entrenamiento de redes neuronales',
                    steps: [
                        {
                            title: 'Técnicas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Técnica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Propósito</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Optimizador Adam</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ajusta la tasa de aprendizaje por parámetro.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Programación de la tasa de aprendizaje</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Reducirla durante el entrenamiento.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Normalización por lotes</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Estabiliza y acelera el entrenamiento.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Dropout</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Apaga neuronas al azar para evitar el sobreajuste.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Detención temprana</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Para cuando la validación deja de mejorar.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Aumento de datos</strong></td><td style="padding:13px 12px;">Más variedad de ejemplos.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
modelo = tf.keras.Sequential([
    tf.keras.Input(shape=(20,)),
    tf.keras.layers.Dense(64, activation="relu"),
    tf.keras.layers.BatchNormalization(),
    tf.keras.layers.Dropout(0.3),
    tf.keras.layers.Dense(1, activation="sigmoid")
])
modelo.compile(optimizer=tf.keras.optimizers.Adam(1e-3), loss="binary_crossentropy", metrics=["AUC"])
</pre>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_006',
            label: 'Modelado de procesamiento del lenguaje natural',
            subtemas: [
                {
                    id: 'm006-t001',
                    label: 'Introducción a las tecnologías del lenguaje humano',
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
                    id: 'm006-t002',
                    label: 'Modelado de lenguaje en procesamiento del lenguaje natural',
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
                    id: 'm006-t003',
                    label: 'Modelado de análisis de sentimientos y clasificación de texto',
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
                            nextButton: 'Siguiente: Análisis de sentimientos con un modelo…'
                        },
                        {
                            title: 'Análisis de sentimientos con un modelo preentrenado',
                            content: `<pre class="codigo">
from transformers import pipeline
analizador = pipeline("sentiment-analysis", model="pysentimiento/robertuito-sentiment-analysis")
for comentario in ["Excelente servicio", "Tardaron mucho", "Normal"]:
    print(comentario, analizador(comentario)[0])
</pre>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Nivel</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Polaridad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Positivo, negativo, neutro.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Emociones</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Alegría, enojo, tristeza.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Basado en aspectos</strong></td><td style="padding:13px 12px;">«La comida buena, el servicio lento».</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t004',
                    label: 'Modelado de generación de texto y traducción automática',
                    steps: [
                        {
                            title: 'Generación de texto',
                            content: `<p>Los modelos generativos producen texto prediciendo un token tras otro. Parámetros como la <strong>temperatura</strong> controlan la creatividad: valores bajos dan respuestas más predecibles.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Técnica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ingeniería de instrucciones (prompting)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Dar rol, contexto, ejemplos y formato esperado.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pocos ejemplos (few-shot)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Incluir ejemplos en la instrucción.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>RAG</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Basar la respuesta en documentos propios.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Ajuste fino</strong></td><td style="padding:13px 12px;">Adaptar el modelo con datos propios.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Traducción automática'
                        },
                        {
                            title: 'Traducción automática',
                            content: `<pre class="codigo">
from transformers import pipeline
traductor = pipeline("translation", model="Helsinki-NLP/opus-mt-es-en")
print(traductor("La matrícula cierra el viernes.")[0]["translation_text"])
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
La traducción automática neuronal usa la arquitectura codificador-decodificador; la métrica BLEU compara la traducción con traducciones de referencia.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t005',
                    label: 'Modelado de robots conversacionales y asistentes virtuales',
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
                            nextButton: 'Siguiente: Asistente con RAG'
                        },
                        {
                            title: 'Asistente con RAG',
                            content: `<pre class="codigo">
def responder(pregunta, historial):
    fragmentos = base_vectorial.buscar(embeber(pregunta), k=4)
    instruccion = f"""Usted es el asistente de matrícula de la universidad.
Responda solo con la información de los documentos. Si no está, dígalo.
Documentos: {fragmentos}
Historial: {historial}
Pregunta: {pregunta}"""
    return llm.generar(instruccion, temperatura=0.2)
</pre>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_007',
            label: 'Modelado de aprendizaje por refuerzo',
            subtemas: [
                {
                    id: 'm007-t001',
                    label: 'Particularidades en modelado de aprendizaje por refuerzo',
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
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t002',
                    label: 'Modelado de agentes y entornos en el aprendizaje por refuerzo',
                    steps: [
                        {
                            title: 'Proceso de decisión de Markov',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Elemento</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Símbolo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo (robot en una bodega)</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Estados</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">S</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Posición del robot.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Acciones</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">A</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Arriba, abajo, izquierda, derecha.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Transiciones</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">P(s' | s, a)</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Probabilidad de llegar a la nueva posición.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Recompensa</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">R</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">+10 al entregar, −1 por paso, −5 al chocar.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Factor de descuento</strong></td><td style="padding:13px 12px;">γ</td><td style="padding:13px 12px;">0,9: valora más las recompensas cercanas.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Entorno con Gymnasium'
                        },
                        {
                            title: 'Entorno con Gymnasium',
                            content: `<pre class="codigo">
import gymnasium as gym
entorno = gym.make("FrozenLake-v1", is_slippery=False)
estado, _ = entorno.reset()
for _ in range(20):
    accion = entorno.action_space.sample()            # acción al azar
    estado, recompensa, termino, truncado, _ = entorno.step(accion)
    if termino or truncado:
        estado, _ = entorno.reset()
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t003',
                    label: 'Algoritmos y técnicas clave en el aprendizaje por refuerzo',
                    steps: [
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
                    id: 'm007-t004',
                    label: 'Modelado de problemas de decisión y planificación',
                    steps: [
                        {
                            title: 'Formular el problema',
                            content: `<ol>
    <li>Definir el objetivo y la recompensa.</li>
    <li>Definir los estados observables.</li>
    <li>Definir las acciones posibles.</li>
    <li>Construir o elegir un simulador seguro.</li>
    <li>Elegir el algoritmo según el tamaño de los espacios.</li>
    <li>Evaluar la política en escenarios nuevos.</li>
</ol>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Problema</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Estado</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Acción</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Recompensa</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Semáforo inteligente</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Autos en cada vía.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cambiar o mantener la luz.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">− tiempo de espera total.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Inventario</strong></td><td style="padding:13px 12px;">Unidades en bodega.</td><td style="padding:13px 12px;">Cantidad a pedir.</td><td style="padding:13px 12px;">Ventas − costo de almacenamiento.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t005',
                    label: 'Aplicaciones prácticas del aprendizaje por refuerzo',
                    steps: [
                        {
                            title: 'Aplicaciones',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Área</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Juegos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">AlphaGo y agentes de videojuegos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Robótica</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Aprender a caminar o manipular objetos.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Energía</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Optimizar la refrigeración de centros de datos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Finanzas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Estrategias de inversión (con mucho riesgo).</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Recomendaciones</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Optimizar el compromiso a largo plazo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Modelos de lenguaje</strong></td><td style="padding:13px 12px;">Alinear respuestas con preferencias humanas (RLHF).</td></tr>
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
