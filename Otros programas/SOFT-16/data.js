const data = {
    // Pantalla de bienvenida
    welcome: {
        title: 'SOFT-16 <br> Arquitectura de Software 2',
        image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-16/imgs/logo.png', // Cambiar por imagen real
        description: 'Aplicación de modelos especializados de arquitectura de software para entornos empresariales: sistemas distribuidos, embebidos, datos masivos, inteligencia artificial, seguridad y optimización del rendimiento.',
        instruction: 'Seleccione cada pestaña para acceder a la información'
    },
    // Temas principales y sus subtemas con pasos
    temas: [
        {
            id: 'modulo_001',
            label: 'Arquitectura en la empresa',
            subtemas: [
                {
                    id: 'm001-t001',
                    label: 'Arquitectura empresarial y su relación con la arquitectura de software',
                    steps: [
                        {
                            title: '¿Qué es la arquitectura empresarial?',
                            content: `<p>La <strong>arquitectura empresarial</strong> describe cómo se alinean la estrategia, los procesos, la información y la tecnología de una organización. La arquitectura de software es una de sus partes: define cómo se construye cada sistema dentro de ese marco.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Dominio (TOGAF)</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Describe</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Negocio</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Estrategia, capacidades y procesos.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Capacidad “Gestionar pedidos”.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Datos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Información y su gobierno.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Modelo corporativo de cliente.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Aplicaciones</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sistemas y sus integraciones.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">ERP, CRM, comercio electrónico.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Tecnología</strong></td><td style="padding:13px 12px;">Infraestructura y plataformas.</td><td style="padding:13px 12px;">Nube, redes, bases de datos.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Marcos de referencia'
                        },
                        {
                            title: 'Marcos de referencia',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Marco</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Enfoque</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>TOGAF</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Método ADM para desarrollar y gobernar la arquitectura empresarial.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Zachman</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Matriz de perspectivas (quién, qué, cómo, dónde, cuándo, por qué).</td></tr>
<tr><td style="padding:13px 12px;"><strong>ArchiMate</strong></td><td style="padding:13px 12px;">Lenguaje de modelado de arquitectura empresarial.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Un arquitecto de software en una empresa debe respetar los principios corporativos (por ejemplo, “la nube es la opción preferida”) y reutilizar las capacidades existentes antes de construir nuevas.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t002',
                    label: 'Arquitectura orientada a servicios empresariales (ESOA)',
                    steps: [
                        {
                            title: 'Servicios empresariales',
                            content: `<p>La <strong>ESOA</strong> organiza las capacidades de la empresa como servicios reutilizables que exponen contratos estándar. Un mismo servicio, como “Consultar cliente”, sirve al sitio web, a la aplicación móvil y al centro de llamadas.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Capa de servicios</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Servicios de entidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cliente, Producto, Cuenta.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Servicios de tarea o proceso</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Abrir cuenta, Procesar reclamo.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Servicios de utilidad</strong></td><td style="padding:13px 12px;">Notificaciones, auditoría, registro.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Gobierno de servicios'
                        },
                        {
                            title: 'Gobierno de servicios',
                            content: `<ul>
    <li>Catálogo o registro de servicios disponibles.</li>
    <li>Estándares de contrato (OpenAPI, WSDL) y de versionado.</li>
    <li>Gestión de API: seguridad, cuotas, analítica y portal para desarrolladores.</li>
    <li>Acuerdos de nivel de servicio (SLA).</li>
</ul>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Hoy la ESOA suele implementarse con API REST administradas por una plataforma de gestión de API en lugar de un ESB centralizado.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t003',
                    label: 'Arquitectura orientada a eventos empresariales (EEDA)',
                    steps: [
                        {
                            title: 'Eventos de negocio',
                            content: `<p>La <strong>EEDA</strong> difunde los hechos importantes del negocio (“ClienteRegistrado”, “PagoRecibido”) a toda la organización mediante una plataforma de eventos. Cada sistema reacciona sin que el emisor lo conozca.</p>
<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-cart-shopping" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Comercio electrónico</b><br><small>Publica PedidoCreado</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-tower-broadcast" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Plataforma de eventos</b><br><small>Kafka, Event Grid</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-warehouse" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>ERP</b><br><small>Reserva inventario</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-chart-line" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Analítica</b><br><small>Actualiza tableros</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-envelope" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>CRM</b><br><small>Envía confirmación</small></div></div>
</div>
</div>`,
                            nextButton: 'Siguiente: Elementos clave'
                        },
                        {
                            title: 'Elementos clave',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Elemento</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Catálogo de eventos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Lista y significado de los eventos corporativos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Esquema del evento</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Estructura versionada (Avro, JSON Schema, CloudEvents).</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Registro de esquemas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Garantiza compatibilidad entre productores y consumidores.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Retención</strong></td><td style="padding:13px 12px;">Tiempo que se conservan los eventos para reprocesarlos.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
{
  "specversion": "1.0",
  "type": "cr.tienda.pedido.creado",
  "source": "/comercio/pedidos",
  "id": "a1b2-c3d4",
  "time": "2026-11-16T15:20:00Z",
  "data": { "pedidoId": 9812, "clienteId": "C-102", "total": 54900 }
}
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t004',
                    label: 'Arquitectura orientada a datos empresariales (EDOA)',
                    steps: [
                        {
                            title: 'Los datos como activo',
                            content: `<p>La <strong>EDOA</strong> diseña la arquitectura alrededor de los datos de la empresa: dónde se originan, quién es su dueño, cómo se integran y cómo se aprovechan para decisiones.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Concepto</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Datos maestros (MDM)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Versión única y confiable de entidades clave: cliente, producto.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Gobierno de datos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Políticas de calidad, seguridad, privacidad y propiedad.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Almacén de datos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Datos integrados y estructurados para reportes.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Lago de datos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Datos en su formato original para análisis avanzado.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Malla de datos (data mesh)</strong></td><td style="padding:13px 12px;">Cada dominio publica sus datos como un producto.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Flujo de datos empresarial'
                        },
                        {
                            title: 'Flujo de datos empresarial',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-database" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Fuentes</b><br><small>ERP, CRM, web</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-gears" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Integración</b><br><small>ETL / ELT</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-warehouse" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Almacenamiento</b><br><small>Almacén o lago</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-chart-pie" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Consumo</b><br><small>BI, IA, reportes</small></div></div>
</div>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t005',
                    label: 'Integración de sistemas empresariales con arquitectura de software',
                    steps: [
                        {
                            title: 'Estilos de integración',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Estilo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Cuándo usarlo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Transferencia de archivos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un sistema genera un archivo que otro procesa.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Procesos por lotes nocturnos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Base de datos compartida</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Varios sistemas usan la misma base.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Evitar: acopla fuertemente.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Invocación remota (API)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un sistema llama a otro de forma sincrónica.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Consultas en línea.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Mensajería</strong></td><td style="padding:13px 12px;">Mensajes asincrónicos por un intermediario.</td><td style="padding:13px 12px;">Desacoplar y tolerar fallas.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Patrones y plataformas de integración'
                        },
                        {
                            title: 'Patrones y plataformas de integración',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Patrón (EIP)</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Función</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Enrutador basado en contenido</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Envía el mensaje a un destino según su contenido.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Traductor</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Convierte formatos entre sistemas.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Agregador</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Combina varios mensajes en uno.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Divisor</strong></td><td style="padding:13px 12px;">Separa un mensaje en varios.</td></tr>
</tbody>
</table>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Plataforma</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplos</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>ESB</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">MuleSoft, WSO2, IBM App Connect</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>iPaaS</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Azure Logic Apps, Boomi, Zapier empresarial</td></tr>
<tr><td style="padding:13px 12px;"><strong>Gestión de API</strong></td><td style="padding:13px 12px;">Azure API Management, Kong, Apigee</td></tr>
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
            label: 'Sistemas distribuidos',
            subtemas: [
                {
                    id: 'm002-t001',
                    label: 'Características de los sistemas distribuidos',
                    steps: [
                        {
                            title: '¿Qué es un sistema distribuido?',
                            content: `<p>Un <strong>sistema distribuido</strong> es un conjunto de computadoras independientes que se comunican por una red y se presentan al usuario como un sistema único y coherente.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Característica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Concurrencia</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Varios componentes se ejecutan al mismo tiempo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Sin reloj global</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cada nodo tiene su propio reloj.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Fallas independientes</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un nodo puede fallar sin que fallen los demás.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Transparencia</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ocultar al usuario la ubicación, replicación y fallas.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Escalabilidad</strong></td><td style="padding:13px 12px;">Crecer agregando nodos.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Las falacias de la computación distribuida'
                        },
                        {
                            title: 'Las falacias de la computación distribuida',
                            content: `<ol>
    <li>La red es confiable.</li>
    <li>La latencia es cero.</li>
    <li>El ancho de banda es infinito.</li>
    <li>La red es segura.</li>
    <li>La topología no cambia.</li>
    <li>Hay un solo administrador.</li>
    <li>El costo de transporte es cero.</li>
    <li>La red es homogénea.</li>
</ol>
<p class="nota">
<i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
Diseñar suponiendo cualquiera de estas falacias produce sistemas frágiles: siempre se deben prever tiempos de espera, reintentos y fallas parciales.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t002',
                    label: 'Modelos de arquitectura de software para sistemas distribuidos',
                    steps: [
                        {
                            title: 'Modelos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Modelo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cliente-servidor</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Clientes solicitan servicios a servidores.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Aplicaciones web.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Multinivel (n-tier)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Presentación, lógica y datos en nodos distintos.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sistemas empresariales.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Entre pares (P2P)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Todos los nodos son clientes y servidores.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">BitTorrent, blockchain.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Intermediario (broker)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un intermediario coordina la comunicación.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mensajería, CORBA.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Maestro-trabajador</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un nodo reparte tareas entre trabajadores.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Procesamiento de datos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Microservicios</strong></td><td style="padding:13px 12px;">Servicios autónomos por capacidad de negocio.</td><td style="padding:13px 12px;">Plataformas digitales.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t003',
                    label: 'Arquitectura basada en servicios REST',
                    steps: [
                        {
                            title: 'Restricciones de REST',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Restricción</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cliente-servidor</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Separación entre interfaz y almacenamiento.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Sin estado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cada solicitud contiene toda la información necesaria.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cacheable</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Las respuestas indican si se pueden almacenar en caché.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Interfaz uniforme</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Recursos identificados por URI y manipulados con métodos HTTP.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Sistema en capas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Intermediarios (balanceadores, proxys) transparentes.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Código bajo demanda (opcional)</strong></td><td style="padding:13px 12px;">El servidor puede enviar código ejecutable.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Diseño de API REST distribuidas'
                        },
                        {
                            title: 'Diseño de API REST distribuidas',
                            content: `<ul>
    <li>Versionado de la API: <code>/v1/pedidos</code> o encabezado <code>Accept-Version</code>.</li>
    <li>Operaciones <strong>idempotentes</strong> (PUT, DELETE) que pueden reintentarse sin efectos duplicados.</li>
    <li>Clave de idempotencia en POST críticos: <code>Idempotency-Key</code>.</li>
    <li>Caché HTTP con <code>ETag</code> y <code>Cache-Control</code>.</li>
    <li>Paginación, filtros y límites de solicitudes.</li>
</ul>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
El modelo de madurez de Richardson describe niveles: un solo punto de entrada (0), recursos (1), métodos HTTP (2) e hipermedia/HATEOAS (3).</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t004',
                    label: 'Arquitectura basada en mensajería (MOM)',
                    steps: [
                        {
                            title: 'Middleware orientado a mensajes',
                            content: `<p>En una arquitectura <strong>MOM</strong>, los componentes intercambian mensajes por medio de un intermediario. El emisor no espera la respuesta: deja el mensaje y continúa.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Modelo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cola (punto a punto)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cada mensaje lo procesa un solo consumidor.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Procesar pagos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Tema (publicar/suscribir)</strong></td><td style="padding:13px 12px;">Cada suscriptor recibe una copia.</td><td style="padding:13px 12px;">Notificar un pedido a varios sistemas.</td></tr>
</tbody>
</table>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tecnología</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Característica</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>RabbitMQ</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Colas con enrutamiento flexible (AMQP).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Apache Kafka</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Registro distribuido de eventos de alto volumen.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Amazon SQS / SNS</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Colas y temas administrados.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Azure Service Bus</strong></td><td style="padding:13px 12px;">Colas y temas empresariales.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Garantías de entrega'
                        },
                        {
                            title: 'Garantías de entrega',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Garantía</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Riesgo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Como máximo una vez</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se pueden perder mensajes.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Al menos una vez</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se pueden recibir duplicados: el consumidor debe ser idempotente.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Exactamente una vez</strong></td><td style="padding:13px 12px;">Costosa; requiere soporte transaccional.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
// Consumidor idempotente
async function procesarPago(mensaje) {
    if (await yaProcesado(mensaje.id)) return;     // ignora duplicados
    await cobrar(mensaje.pedidoId, mensaje.monto);
    await registrarProcesado(mensaje.id);
}
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Una <strong>cola de mensajes muertos</strong> (dead-letter queue) guarda los mensajes que fallaron varias veces para analizarlos sin bloquear la cola principal.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t005',
                    label: 'Arquitectura basada en eventos distribuidos',
                    steps: [
                        {
                            title: 'Patrones de eventos distribuidos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Patrón</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Notificación de eventos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El evento solo avisa; el consumidor consulta los detalles.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Transferencia de estado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El evento lleva los datos necesarios.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Event Sourcing</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El estado se reconstruye a partir de la secuencia de eventos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>CQRS</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Modelos separados de escritura y lectura alimentados por eventos.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Saga coreografiada</strong></td><td style="padding:13px 12px;">Cada servicio reacciona a eventos y publica el siguiente.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Ejemplo de saga'
                        },
                        {
                            title: 'Ejemplo de saga',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-file-invoice" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Pedidos</b><br><small>PedidoCreado</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-credit-card" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Pagos</b><br><small>PagoAprobado</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-boxes-stacked" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Inventario</b><br><small>StockReservado</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-truck" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Envíos</b><br><small>EnvíoProgramado</small></div></div>
</div>
</div>
<p>Si Inventario publica <em>StockInsuficiente</em>, Pagos reacciona con una <strong>compensación</strong>: reembolsa el pago, y Pedidos marca el pedido como cancelado.</p>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
El patrón <strong>Transactional Outbox</strong> garantiza que el cambio en la base de datos y la publicación del evento ocurran juntos.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_003',
            label: 'Sistemas embebidos',
            subtemas: [
                {
                    id: 'm003-t001',
                    label: 'Características de los sistemas embebidos',
                    steps: [
                        {
                            title: '¿Qué es un sistema embebido?',
                            content: `<p>Un <strong>sistema embebido</strong> es una computadora dedicada a una función específica dentro de un dispositivo mayor: un marcapasos, el control de frenos de un automóvil, un termostato o un dispositivo médico.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Característica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Implicación para la arquitectura</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Recursos limitados</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Poca memoria y procesamiento: código eficiente.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Interacción con hardware</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sensores y actuadores a través de controladores.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Restricciones de tiempo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Respuestas dentro de plazos estrictos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Alta confiabilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Funcionamiento continuo durante años.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Consumo de energía</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Operación con batería.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Difícil de actualizar</strong></td><td style="padding:13px 12px;">Actualizaciones remotas seguras (OTA).</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t002',
                    label: 'Arquitectura de software para sistemas embebidos',
                    steps: [
                        {
                            title: 'Capas típicas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Capa</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Contenido</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Aplicación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Lógica específica del producto.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Servicios / middleware</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Comunicación, registro, actualizaciones.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Sistema operativo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">RTOS (FreeRTOS, Zephyr) o Linux embebido; a veces sin sistema operativo (bare metal).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Capa de abstracción de hardware (HAL)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Interfaz uniforme para el hardware.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Controladores (drivers)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Acceso a sensores, puertos y periféricos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Hardware</strong></td><td style="padding:13px 12px;">Microcontrolador, sensores, actuadores.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
La HAL permite cambiar de microcontrolador sin reescribir la lógica de la aplicación.</p>`,
                            nextButton: 'Siguiente: Patrones frecuentes'
                        },
                        {
                            title: 'Patrones frecuentes',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Patrón</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Máquina de estados</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Modelar modos de operación (apagado, en espera, activo, error).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Superlazo (super loop)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ciclo infinito que lee sensores y actúa (sistemas simples).</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Productor-consumidor</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Tareas que se comunican por colas en un RTOS.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Watchdog</strong></td><td style="padding:13px 12px;">Reinicia el sistema si deja de responder.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
// Máquina de estados en C
typedef enum { ESPERA, CALENTANDO, LISTO, ERROR } Estado;

void actualizar(Estado *e, float temp) {
    switch (*e) {
        case ESPERA:     if (boton_presionado()) *e = CALENTANDO; break;
        case CALENTANDO: if (temp &gt;= 90.0f) *e = LISTO;
                         else if (falla_sensor()) *e = ERROR; break;
        case LISTO:      encender_luz_verde(); break;
        case ERROR:      apagar_resistencia(); break;
    }
}
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t003',
                    label: 'Arquitectura de software para sistemas en tiempo real',
                    steps: [
                        {
                            title: 'Tiempo real',
                            content: `<p>En un sistema de <strong>tiempo real</strong>, un resultado correcto entregado tarde es un resultado incorrecto.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Consecuencia de incumplir el plazo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Duro (hard)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Falla grave o catastrófica.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Bolsas de aire, control de vuelo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Firme</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El resultado tardío no sirve, pero no es catastrófico.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Fotogramas de video.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Blando (soft)</strong></td><td style="padding:13px 12px;">Se degrada la calidad.</td><td style="padding:13px 12px;">Transmisión de audio.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Planificación de tareas'
                        },
                        {
                            title: 'Planificación de tareas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Algoritmo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Prioridad fija (Rate Monotonic)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mayor prioridad a la tarea con período más corto.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Plazo más cercano (EDF)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se ejecuta la tarea cuyo plazo vence antes.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Cíclico</strong></td><td style="padding:13px 12px;">Tabla de ejecución predefinida.</td></tr>
</tbody>
</table>
</div>
<ul>
    <li>Se analiza el <strong>peor tiempo de ejecución</strong> (WCET), no el promedio.</li>
    <li>Se evita la memoria dinámica y la recolección de basura en las tareas críticas.</li>
    <li>La <strong>inversión de prioridad</strong> se previene con protocolos de herencia de prioridad.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t004',
                    label: 'Arquitectura de software para sistemas críticos',
                    steps: [
                        {
                            title: 'Sistemas críticos',
                            content: `<p>Un <strong>sistema crítico</strong> es aquel cuya falla puede causar muertes, lesiones, daños ambientales o grandes pérdidas económicas.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Norma</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Seguridad humana (safety)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Dispositivos médicos, aviónica.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">IEC 62304, DO-178C</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Misión</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Satélites, control de tráfico.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">ECSS</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Negocio</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Banca central, bolsa de valores.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Regulaciones financieras</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Automotriz</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Frenos, dirección.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">ISO 26262</td></tr>
<tr><td style="padding:13px 12px;"><strong>Industrial</strong></td><td style="padding:13px 12px;">Plantas químicas.</td><td style="padding:13px 12px;">IEC 61508</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Tácticas de arquitectura'
                        },
                        {
                            title: 'Tácticas de arquitectura',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Táctica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Redundancia</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Componentes duplicados o triplicados con votación (TMR).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Diversidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Versiones desarrolladas por equipos distintos.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Aislamiento (partitioning)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Separar funciones críticas y no críticas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Monitoreo y watchdog</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Detectar y reaccionar ante fallas.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Estado seguro</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ante una falla, pasar a un estado sin peligro.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Verificación formal</strong></td><td style="padding:13px 12px;">Demostrar matemáticamente propiedades del diseño.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t005',
                    label: 'Arquitectura de software para sistemas de control y automatización',
                    steps: [
                        {
                            title: 'Lazo de control',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-temperature-half" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Sensor</b><br><small>Mide la variable</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-microchip" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Controlador</b><br><small>Compara con el valor deseado</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-gear" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Actuador</b><br><small>Corrige</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-industry" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Proceso</b><br><small>Cambia la variable</small></div></div>
</div>
</div>
<pre class="codigo">
# Controlador PID simplificado
error = valor_deseado - medicion
integral += error * dt
derivada = (error - error_anterior) / dt
salida = Kp * error + Ki * integral + Kd * derivada
error_anterior = error
</pre>`,
                            nextButton: 'Siguiente: Pirámide de automatización'
                        },
                        {
                            title: 'Pirámide de automatización',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Nivel</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Sistema</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Función</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>5</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">ERP</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Gestión empresarial.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>4</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">MES</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Gestión de la producción.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>3</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">SCADA</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Supervisión y adquisición de datos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>2</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">PLC / DCS</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Control de procesos.</td></tr>
<tr><td style="padding:13px 12px;"><strong>1</strong></td><td style="padding:13px 12px;">Sensores y actuadores</td><td style="padding:13px 12px;">Campo.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Los estándares ISA-95 e IEC 62443 guían la integración y la ciberseguridad de los sistemas industriales; OPC UA y MQTT son protocolos frecuentes en la industria 4.0.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_004',
            label: 'Datos masivos',
            subtemas: [
                {
                    id: 'm004-t001',
                    label: 'Introducción a datos masivos y su relación con la arquitectura de software',
                    steps: [
                        {
                            title: 'Las cinco V',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">V</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Reto arquitectónico</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Volumen</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Terabytes o petabytes.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Almacenamiento distribuido.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Velocidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Datos que llegan continuamente.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Procesamiento en flujo.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Variedad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Estructurados, semiestructurados y no estructurados.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Esquemas flexibles.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Veracidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Calidad y confiabilidad.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Validación y limpieza.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Valor</strong></td><td style="padding:13px 12px;">Utilidad para el negocio.</td><td style="padding:13px 12px;">Análisis y visualización.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Cuando los datos no caben en una sola máquina, la arquitectura debe distribuir tanto el almacenamiento como el cómputo y llevar el procesamiento hacia donde están los datos.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t002',
                    label: 'Arquitectura de software para procesamiento por lotes de datos masivos',
                    steps: [
                        {
                            title: 'Procesamiento por lotes',
                            content: `<p>Procesa grandes volúmenes de datos acumulados en ejecuciones programadas (cada noche, cada hora).</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tecnología</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Hadoop MapReduce</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Divide el trabajo en fases de mapeo y reducción sobre HDFS.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Apache Spark</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Procesamiento en memoria, mucho más rápido que MapReduce.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Orquestadores</strong></td><td style="padding:13px 12px;">Apache Airflow, Azure Data Factory programan y encadenan tareas.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Ejemplo con Spark'
                        },
                        {
                            title: 'Ejemplo con Spark',
                            content: `<pre class="codigo">
from pyspark.sql import SparkSession, functions as F

spark = SparkSession.builder.appName("VentasDiarias").getOrCreate()
ventas = spark.read.parquet("s3://datos/ventas/2026/11/")

resumen = (ventas.groupBy("provincia", "categoria")
                 .agg(F.sum("monto").alias("total"), F.count("*").alias("pedidos"))
                 .orderBy(F.desc("total")))

resumen.write.mode("overwrite").parquet("s3://datos/resumen/ventas_diarias/")
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Los formatos columnares como Parquet comprimen mejor y permiten leer solo las columnas necesarias.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t003',
                    label: 'Arquitectura de software para procesamiento en tiempo real de datos masivos',
                    steps: [
                        {
                            title: 'Procesamiento de flujos',
                            content: `<p>Procesa cada evento (o pequeñas ventanas de eventos) en cuanto llega: detección de fraude, monitoreo de sensores, recomendaciones en línea.</p>
<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-mobile-screen" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Fuentes</b><br><small>Apps, sensores</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-water" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Ingesta</b><br><small>Kafka, Kinesis</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-bolt" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Procesamiento</b><br><small>Flink, Spark Streaming</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-database" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Destino</b><br><small>Tableros, alertas, BD</small></div></div>
</div>
</div>`,
                            nextButton: 'Siguiente: Conceptos de flujo'
                        },
                        {
                            title: 'Conceptos de flujo',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Concepto</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ventana fija</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Agrupa eventos por intervalos (cada 5 minutos).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ventana deslizante</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Intervalos que se superponen.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tiempo del evento vs. tiempo de proceso</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cuándo ocurrió frente a cuándo se procesó.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Marca de agua (watermark)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Límite para aceptar eventos que llegan tarde.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Estado</strong></td><td style="padding:13px 12px;">Información acumulada entre eventos (conteos, promedios).</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t004',
                    label: 'Arquitectura de software para análisis de datos distribuidos',
                    steps: [
                        {
                            title: 'Arquitecturas Lambda y Kappa',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Arquitectura</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Capas</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ventaja</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Desventaja</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Lambda</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Lotes (precisa) + velocidad (rápida) + servicio.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Precisión y baja latencia.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Dos lógicas que mantener.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Kappa</strong></td><td style="padding:13px 12px;">Solo flujo; se reprocesa repitiendo los eventos.</td><td style="padding:13px 12px;">Una sola lógica.</td><td style="padding:13px 12px;">Requiere retener los eventos.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Plataformas de análisis'
                        },
                        {
                            title: 'Plataformas de análisis',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Plataforma</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Almacén de datos en la nube</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Snowflake, BigQuery, Redshift, Synapse: consultas SQL masivas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Lakehouse</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Databricks, Delta Lake: combina lago y almacén.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Motores SQL distribuidos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Trino, Spark SQL.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Visualización</strong></td><td style="padding:13px 12px;">Power BI, Tableau, Superset.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
La arquitectura <strong>medallón</strong> organiza el lago en capas: bronce (datos crudos), plata (limpios) y oro (listos para el negocio).</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t005',
                    label: 'Arquitectura de software para almacenamiento y gestión de datos distribuidos',
                    steps: [
                        {
                            title: 'Opciones de almacenamiento',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplos</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Sistema de archivos distribuido</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">HDFS</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Grandes archivos en clústeres propios.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Almacenamiento de objetos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Amazon S3, Azure Blob, MinIO</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Lagos de datos en la nube.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>NoSQL distribuida</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cassandra, HBase, DynamoDB</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Escrituras masivas, baja latencia.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Formatos de tabla abiertos</strong></td><td style="padding:13px 12px;">Delta Lake, Apache Iceberg</td><td style="padding:13px 12px;">Transacciones ACID sobre archivos.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Gestión'
                        },
                        {
                            title: 'Gestión',
                            content: `<ul>
    <li><strong>Particionamiento</strong> por fecha u otra clave para leer solo lo necesario.</li>
    <li><strong>Replicación</strong> para tolerar fallas de nodos.</li>
    <li><strong>Catálogo de datos</strong> que documenta qué datos existen, su dueño y su linaje.</li>
    <li><strong>Ciclo de vida</strong>: mover datos antiguos a almacenamiento más barato.</li>
    <li><strong>Privacidad</strong>: anonimizar datos personales según la normativa.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_005',
            label: 'Inteligencia artificial',
            subtemas: [
                {
                    id: 'm005-t001',
                    label: 'Introducción a la inteligencia artificial y su relación con la arquitectura de software',
                    steps: [
                        {
                            title: 'Sistemas con componentes de IA',
                            content: `<p>Un sistema que usa inteligencia artificial combina software tradicional con <strong>modelos</strong> que aprenden de datos. La arquitectura debe considerar que el comportamiento del modelo es probabilístico y puede degradarse con el tiempo.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Diferencia</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Software tradicional</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Software con IA</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Lógica</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Programada explícitamente.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Aprendida de datos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Resultado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Determinista.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Probabilístico.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pruebas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Casos con resultado esperado exacto.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Métricas sobre conjuntos de evaluación.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Mantenimiento</strong></td><td style="padding:13px 12px;">Cambios en el código.</td><td style="padding:13px 12px;">Reentrenamiento por cambios en los datos.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Componentes típicos'
                        },
                        {
                            title: 'Componentes típicos',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-database" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Datos</b><br><small>Recolección y etiquetado</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-brain" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Entrenamiento</b><br><small>Modelo</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-box" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Registro de modelos</b><br><small>Versiones</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-server" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Servicio de inferencia</b><br><small>API</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-chart-line" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Monitoreo</b><br><small>Desempeño y deriva</small></div></div>
</div>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t002',
                    label: 'Arquitectura de software para el procesamiento de lenguaje natural',
                    steps: [
                        {
                            title: 'Canal de PLN',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Etapa</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Preprocesamiento</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Limpieza, normalización y división en tokens.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Representación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Vectores (embeddings) que capturan el significado.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Modelo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Clasificación, extracción de entidades, traducción, generación.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Posprocesamiento</strong></td><td style="padding:13px 12px;">Formato, filtros y validación de la salida.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Generación aumentada con recuperación'
                        },
                        {
                            title: 'Generación aumentada con recuperación (RAG)',
                            content: `<p>Las aplicaciones con modelos de lenguaje de gran tamaño (LLM) suelen usar <strong>RAG</strong>: antes de responder, se recuperan documentos relevantes de la organización y se envían al modelo como contexto.</p>
<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-question" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Pregunta</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-vector-square" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Embedding</b><br><small></small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-database" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Base vectorial</b><br><small>Busca fragmentos similares</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-robot" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>LLM</b><br><small>Responde con el contexto</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-comment" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Respuesta</b><br><small>Con fuentes</small></div></div>
</div>
</div>
<ul>
    <li>Reduce las respuestas inventadas al basarse en documentos propios.</li>
    <li>Permite actualizar el conocimiento sin reentrenar el modelo.</li>
    <li>Requiere controlar el acceso: el usuario solo debe recuperar documentos que tiene permiso de ver.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t003',
                    label: 'Arquitectura de software para el procesamiento de imágenes y videos',
                    steps: [
                        {
                            title: 'Canal de visión por computadora',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-camera" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Captura</b><br><small>Cámaras</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-crop" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Preprocesamiento</b><br><small>Redimensionar, normalizar</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-brain" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Inferencia</b><br><small>Detección, clasificación</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-bell" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Acción</b><br><small>Alertas, registros</small></div></div>
</div>
</div>`,
                            nextButton: 'Siguiente: Decisiones de arquitectura'
                        },
                        {
                            title: 'Decisiones de arquitectura',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Opción</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ventaja</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Desventaja</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Inferencia en el borde (edge)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Baja latencia, privacidad, menos ancho de banda.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Hardware limitado.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Inferencia en la nube</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Modelos grandes, fácil de actualizar.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Latencia y costo de transmisión.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Híbrida</strong></td><td style="padding:13px 12px;">Filtra en el borde y analiza en la nube.</td><td style="padding:13px 12px;">Mayor complejidad.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
El video genera grandes volúmenes: es común procesar solo algunos fotogramas por segundo o activarse cuando un sensor detecta movimiento.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t004',
                    label: 'Arquitectura de software para el aprendizaje automático',
                    steps: [
                        {
                            title: 'MLOps',
                            content: `<p><strong>MLOps</strong> aplica las prácticas de DevOps al ciclo de vida de los modelos de aprendizaje automático.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Componente</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Herramientas de ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Versionado de datos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">DVC, lakeFS</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Seguimiento de experimentos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">MLflow, Weights &amp; Biases</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Almacén de características</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Feast</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Registro de modelos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">MLflow Model Registry</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Servicio de modelos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">FastAPI, TorchServe, KServe</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Monitoreo</strong></td><td style="padding:13px 12px;">Evidently, Prometheus</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Patrones de servicio de modelos'
                        },
                        {
                            title: 'Patrones de servicio de modelos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Patrón</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Inferencia en línea</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Una API responde predicciones en tiempo real.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Inferencia por lotes</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se calculan predicciones de forma programada y se guardan.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Modelo embebido</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El modelo se incluye en la aplicación (móvil, navegador).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Despliegue sombra (shadow)</strong></td><td style="padding:13px 12px;">El modelo nuevo recibe tráfico real sin afectar respuestas.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
from fastapi import FastAPI
import joblib

app = FastAPI()
modelo = joblib.load("modelo_fraude_v3.pkl")

@app.post("/predicciones/fraude")
def predecir(transaccion: dict):
    prob = modelo.predict_proba([[transaccion["monto"], transaccion["hora"]]])[0][1]
    return {"probabilidad_fraude": round(float(prob), 3), "version_modelo": "v3"}
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t005',
                    label: 'Arquitectura de software para el procesamiento de grandes volúmenes de datos',
                    steps: [
                        {
                            title: 'Datos para IA a escala',
                            content: `<ul>
    <li>Canales de datos (pipelines) automatizados y reproducibles.</li>
    <li>Entrenamiento distribuido en varias GPU o nodos.</li>
    <li>Almacenamiento eficiente de conjuntos de datos (Parquet, TFRecord).</li>
    <li>Procesamiento paralelo de características con Spark o Ray.</li>
    <li>Control de calidad de datos antes de entrenar.</li>
</ul>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Riesgo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Mitigación</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Deriva de datos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Monitorear la distribución de entradas y reentrenar.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Sesgo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Evaluar el desempeño por grupos de población.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Costo de cómputo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Instancias bajo demanda y apagado automático.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Privacidad</strong></td><td style="padding:13px 12px;">Anonimización y aprendizaje federado.</td></tr>
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
            label: 'Seguridad',
            subtemas: [
                {
                    id: 'm006-t001',
                    label: 'Introducción a la seguridad de la información y su relación con la arquitectura de software',
                    steps: [
                        {
                            title: 'Seguridad desde el diseño',
                            content: `<p>La seguridad no se agrega al final: se diseña desde la arquitectura (<strong>security by design</strong>). Se basa en la tríada <strong>confidencialidad, integridad y disponibilidad</strong>.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Principio</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Mínimo privilegio</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cada componente tiene solo los permisos que necesita.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Defensa en profundidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Varias capas de protección.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Falla segura</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ante un error, se niega el acceso.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Superficie de ataque mínima</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Exponer solo lo necesario.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Confianza cero</strong></td><td style="padding:13px 12px;">Verificar siempre, aunque la solicitud venga de la red interna.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Modelado de amenazas STRIDE'
                        },
                        {
                            title: 'Modelado de amenazas STRIDE',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Amenaza</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Propiedad afectada</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Control</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Suplantación (Spoofing)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Autenticación</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">MFA, certificados.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Manipulación (Tampering)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Integridad</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Firmas, hash.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Repudio</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">No repudio</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Bitácoras de auditoría.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Divulgación de información</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Confidencialidad</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cifrado.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Denegación de servicio</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Disponibilidad</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Límites de solicitudes, escalamiento.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Elevación de privilegios</strong></td><td style="padding:13px 12px;">Autorización</td><td style="padding:13px 12px;">Validación de permisos.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t002',
                    label: 'Arquitectura de software para la autenticación y autorización',
                    steps: [
                        {
                            title: 'Autenticación y autorización',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;"></th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Autenticación</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Autorización</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pregunta</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Quién es usted?</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Qué puede hacer?</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Mecanismos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Contraseña, MFA, biometría, llaves de acceso (passkeys).</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Roles (RBAC), atributos (ABAC), políticas.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Estándares</strong></td><td style="padding:13px 12px;">OpenID Connect, SAML.</td><td style="padding:13px 12px;">OAuth 2.0 (alcances), OPA.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Arquitectura con un proveedor de identidad'
                        },
                        {
                            title: 'Arquitectura con un proveedor de identidad',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-user" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Usuario</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-id-badge" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Proveedor de identidad</b><br><small>Keycloak, Entra ID, Auth0</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-key" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Token</b><br><small>JWT con roles</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-door-open" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>API Gateway</b><br><small>Valida el token</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-server" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Servicios</b><br><small>Autorizan por rol</small></div></div>
</div>
</div>
<ul>
    <li>Centralizar la identidad evita que cada sistema guarde contraseñas.</li>
    <li>El inicio de sesión único (SSO) mejora la experiencia y la seguridad.</li>
    <li>Los servicios validan la firma del token sin consultar al proveedor en cada solicitud.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t003',
                    label: 'Arquitectura de software para la criptografía y gestión de claves',
                    steps: [
                        {
                            title: 'Uso de la criptografía',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Necesidad</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Técnica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Datos en tránsito</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">TLS 1.3</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">HTTPS, mTLS entre servicios.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Datos en reposo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cifrado simétrico AES-256</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Discos y bases de datos cifradas.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Contraseñas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Hash lento con sal</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">bcrypt, Argon2.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Integridad y autoría</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Firmas digitales</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Firmar tokens y documentos.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Intercambio de claves</strong></td><td style="padding:13px 12px;">Criptografía asimétrica</td><td style="padding:13px 12px;">RSA, curvas elípticas.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Gestión de claves'
                        },
                        {
                            title: 'Gestión de claves',
                            content: `<ul>
    <li>Las claves se almacenan en un servicio especializado: Azure Key Vault, AWS KMS, HashiCorp Vault.</li>
    <li>Rotación periódica de claves y certificados.</li>
    <li>Cifrado de sobre (envelope encryption): una clave maestra protege las claves de datos.</li>
    <li>Registro de auditoría de cada uso de una clave.</li>
</ul>
<p class="nota">
<i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
Nunca implemente algoritmos criptográficos propios: use bibliotecas probadas y mantenidas.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t004',
                    label: 'Arquitectura de software para la gestión de vulnerabilidades y riesgos',
                    steps: [
                        {
                            title: 'Seguridad en el ciclo de desarrollo (DevSecOps)',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Práctica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Detecta</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Herramientas</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>SAST (análisis estático)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Vulnerabilidades en el código fuente.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">SonarQube, Semgrep, CodeQL</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>SCA (dependencias)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Librerías con vulnerabilidades conocidas.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Dependabot, Snyk, npm audit</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>DAST (análisis dinámico)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Fallas en la aplicación en ejecución.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">OWASP ZAP, Burp Suite</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Escaneo de contenedores</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Imágenes vulnerables.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Trivy</td></tr>
<tr><td style="padding:13px 12px;"><strong>Secretos en el código</strong></td><td style="padding:13px 12px;">Claves expuestas en el repositorio.</td><td style="padding:13px 12px;">Gitleaks</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Gestión de riesgos'
                        },
                        {
                            title: 'Gestión de riesgos',
                            content: `<ul>
    <li>Inventariar los activos y sus dependencias (lista de materiales de software, SBOM).</li>
    <li>Clasificar las vulnerabilidades con CVSS y por la exposición real.</li>
    <li>Definir plazos de corrección según la severidad.</li>
    <li>Aplicar parches de forma automatizada y probada.</li>
</ul>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
La arquitectura facilita la corrección cuando los componentes están aislados y se pueden actualizar de forma independiente.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t005',
                    label: 'Arquitectura de software para la detección y prevención de intrusiones',
                    steps: [
                        {
                            title: 'Capas de detección y prevención',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Componente</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Función</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Firewall de aplicaciones web (WAF)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Bloquea ataques HTTP como inyección SQL y XSS.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>IDS / IPS</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Detecta o bloquea tráfico malicioso en la red.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>SIEM</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Correlaciona bitácoras de todos los sistemas y genera alertas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>EDR</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Detecta comportamiento malicioso en servidores y equipos.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Protección DDoS</strong></td><td style="padding:13px 12px;">Absorbe ataques de denegación de servicio.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Diseño para la detección'
                        },
                        {
                            title: 'Diseño para la detección',
                            content: `<ul>
    <li>Bitácoras estructuradas y centralizadas con usuario, acción, recurso y resultado.</li>
    <li>Alertas ante patrones anómalos: muchos inicios de sesión fallidos, accesos fuera de horario.</li>
    <li>Segmentación de red para contener una intrusión.</li>
    <li>Plan de respuesta a incidentes probado periódicamente.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_007',
            label: 'Optimización del rendimiento',
            subtemas: [
                {
                    id: 'm007-t001',
                    label: 'Introducción a la optimización de rendimiento y su relación con la arquitectura de software',
                    steps: [
                        {
                            title: 'Métricas de rendimiento',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Métrica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Definición</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Latencia</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Tiempo que tarda una solicitud en responderse.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Rendimiento (throughput)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Solicitudes procesadas por segundo.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Percentiles (p95, p99)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Latencia del 95 % o 99 % de las solicitudes.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Utilización</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Porcentaje de uso de CPU, memoria, red.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Tasa de error</strong></td><td style="padding:13px 12px;">Porcentaje de solicitudes fallidas.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
El promedio oculta los casos lentos: optimice con base en percentiles altos, que representan la experiencia de los usuarios más afectados.</p>`,
                            nextButton: 'Siguiente: Proceso de optimización'
                        },
                        {
                            title: 'Proceso de optimización',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-bullseye" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Definir objetivos</b><br><small>SLO</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-ruler" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Medir</b><br><small>Línea base</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-magnifying-glass" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Encontrar el cuello de botella</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-wrench" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Optimizar</b><br><small>Un cambio a la vez</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-rotate" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Volver a medir</b><br><small></small></div></div>
</div>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t002',
                    label: 'Arquitectura de software para la optimización de velocidad y eficiencia',
                    steps: [
                        {
                            title: 'Tácticas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Táctica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Caché</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Guardar respuestas frecuentes en Redis o en el navegador.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Procesamiento asincrónico</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Enviar correos desde una cola, no durante la solicitud.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Algoritmos y estructuras eficientes</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Índices y búsquedas O(log n).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Reducir viajes de red</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Agrupar solicitudes; evitar el problema N+1.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Compresión</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">gzip o Brotli en las respuestas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Precálculo</strong></td><td style="padding:13px 12px;">Vistas materializadas para reportes.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Estrategias de caché'
                        },
                        {
                            title: 'Estrategias de caché',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Estrategia</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Funcionamiento</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cache-aside</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">La aplicación busca en caché; si no está, consulta la base y la guarda.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Write-through</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se escribe en caché y en la base al mismo tiempo.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Write-behind</strong></td><td style="padding:13px 12px;">Se escribe en caché y luego, de forma asincrónica, en la base.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
async function obtenerProducto(id) {
    const enCache = await redis.get(\`producto:\${id}\`);
    if (enCache) return JSON.parse(enCache);
    const producto = await db.productos.findById(id);
    await redis.set(\`producto:\${id}\`, JSON.stringify(producto), { EX: 300 }); // 5 minutos
    return producto;
}
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t003',
                    label: 'Arquitectura de software para la escalabilidad horizontal y vertical',
                    steps: [
                        {
                            title: 'Vertical y horizontal',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;"></th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Vertical (scale up)</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Horizontal (scale out)</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cómo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Más CPU y memoria a la misma máquina.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Más máquinas o instancias.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Límite</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El hardware disponible.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Prácticamente ilimitado.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Disponibilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Punto único de falla.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Tolerante a fallas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Requisito</strong></td><td style="padding:13px 12px;">Ninguno especial.</td><td style="padding:13px 12px;">Servicios sin estado.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Diseñar para escalar horizontalmente'
                        },
                        {
                            title: 'Diseñar para escalar horizontalmente',
                            content: `<ul>
    <li>Servicios <strong>sin estado</strong>: la sesión se guarda en Redis o en un token, no en la memoria del servidor.</li>
    <li>Balanceador de carga delante de las instancias.</li>
    <li>Base de datos con réplicas de lectura y, si es necesario, particionamiento.</li>
    <li>Archivos en almacenamiento compartido (objetos), no en el disco local.</li>
</ul>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
La <strong>ley de Amdahl</strong> recuerda que la parte que no se puede paralelizar limita la mejora total.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t004',
                    label: 'Arquitectura de software para la gestión de recursos y carga de trabajo',
                    steps: [
                        {
                            title: 'Distribuir y controlar la carga',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Mecanismo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Función</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Balanceo de carga</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Reparte solicitudes: round robin, menos conexiones, por peso.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Autoescalado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Agrega o quita instancias según métricas.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Colas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Absorben picos y nivelan la carga (queue-based load leveling).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Límite de solicitudes</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Protege el sistema del abuso o de picos.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Contrapresión (backpressure)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El consumidor indica al productor que reduzca el ritmo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Mamparos (bulkhead)</strong></td><td style="padding:13px 12px;">Aíslan recursos para que una falla no consuma todo.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Grupos de conexiones'
                        },
                        {
                            title: 'Grupos de conexiones',
                            content: `<p>Abrir una conexión a la base de datos es costoso. Un <strong>grupo de conexiones</strong> (pool) reutiliza un número limitado de conexiones abiertas.</p>
<pre class="codigo">
const pool = new Pool({ max: 20, idleTimeoutMillis: 30000 });
const { rows } = await pool.query("SELECT * FROM pedidos WHERE id = $1", [id]);
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t005',
                    label: 'Arquitectura de software para la optimización de la latencia y el tiempo de respuesta',
                    steps: [
                        {
                            title: 'Fuentes de latencia',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Fuente</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Táctica</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Distancia geográfica</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Red de distribución de contenidos (CDN), regiones cercanas al usuario.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Llamadas en serie entre servicios</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Llamadas en paralelo, agregación en un BFF.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Consultas lentas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Índices, desnormalización, caché.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Arranque en frío</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Instancias mínimas siempre activas.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Colas de espera</strong></td><td style="padding:13px 12px;">Más capacidad o priorización.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Ejemplo: llamadas en paralelo'
                        },
                        {
                            title: 'Ejemplo: llamadas en paralelo',
                            content: `<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #f0cccc; margin-bottom:12px;">
<i class="fa-solid fa-xmark" aria-hidden="true" style="color:#d2232a;"></i> <strong style="color:#d2232a;">Incorrecto</strong>
<pre class="codigo">
const cliente = await obtenerCliente(id);      // 120 ms
const pedidos = await obtenerPedidos(id);      // 150 ms
const puntos  = await obtenerPuntos(id);       // 100 ms   → total ≈ 370 ms
</pre>
</div>
<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #c9e2d4; margin-bottom:12px;">
<i class="fa-solid fa-check" aria-hidden="true" style="color:#00734a;"></i> <strong style="color:#00734a;">Correcto</strong>
<pre class="codigo">
const [cliente, pedidos, puntos] = await Promise.all([
    obtenerCliente(id), obtenerPedidos(id), obtenerPuntos(id)
]);                                            // total ≈ 150 ms
</pre>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Defina tiempos de espera (timeouts) en cada llamada remota: una dependencia lenta no debe dejar al usuario esperando indefinidamente.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        }
    ]
};
