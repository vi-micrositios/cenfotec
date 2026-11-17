const data = {
    // Pantalla de bienvenida
    welcome: {
        title: 'SOFT-25 <br> Arquitectura de Software Distribuido',
        image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-25/imgs/logo.png', // Cambiar por imagen real
        description: 'Diseño de soluciones de software descentralizadas mediante patrones de sistemas distribuidos: comunicación, escalabilidad y rendimiento, persistencia, despliegue y administración, arquitecturas avanzadas y tendencias.',
        instruction: 'Seleccione cada pestaña para acceder a la información'
    },
    // Temas principales y sus subtemas con pasos
    temas: [
        {
            id: 'modulo_001',
            label: 'Introducción',
            subtemas: [
                {
                    id: 'm001-t001',
                    label: 'Conceptos básicos de arquitectura de software distribuido',
                    steps: [
                        {
                            title: 'Sistema distribuido',
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
                            nextButton: 'Siguiente: Nodos, procesos y red'
                        },
                        {
                            title: 'Nodos, procesos y red',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Concepto</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Definición</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Nodo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Computadora física o virtual que participa en el sistema.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Proceso o servicio</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Programa en ejecución dentro de un nodo.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Mensaje</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Unidad de información que se intercambia por la red.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Latencia de red</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Tiempo que tarda un mensaje en llegar.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Partición de red</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pérdida de comunicación entre grupos de nodos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Réplica</strong></td><td style="padding:13px 12px;">Copia de un dato o servicio en otro nodo.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
En un sistema distribuido no se puede distinguir con certeza entre un nodo lento y un nodo caído: solo se sabe que no respondió a tiempo.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t002',
                    label: 'Principios y beneficios de la arquitectura de software distribuido',
                    steps: [
                        {
                            title: 'Beneficios',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Beneficio</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Cómo se logra</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Escalabilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Agregar nodos para atender más carga.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Disponibilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Réplicas que sustituyen a los nodos que fallan.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Eliminación de puntos únicos de falla</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ningún componente es indispensable.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cercanía geográfica</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Nodos cerca de los usuarios para reducir la latencia.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Autonomía de equipos</strong></td><td style="padding:13px 12px;">Servicios desarrollados y desplegados por separado.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Principios de diseño'
                        },
                        {
                            title: 'Principios de diseño',
                            content: `<ul>
    <li><strong>Diseñar para la falla</strong>: todo componente puede fallar en cualquier momento.</li>
    <li><strong>Bajo acoplamiento</strong>: comunicación por contratos y, cuando sea posible, asincrónica.</li>
    <li><strong>Servicios sin estado</strong>: el estado vive en almacenes especializados.</li>
    <li><strong>Idempotencia</strong>: repetir una operación produce el mismo resultado.</li>
    <li><strong>Observabilidad</strong>: poder entender el sistema desde sus métricas, bitácoras y trazas.</li>
    <li><strong>Automatización</strong>: despliegue, escalamiento y recuperación sin intervención manual.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t003',
                    label: 'Patrones arquitectónicos para sistemas distribuidos',
                    steps: [
                        {
                            title: 'Patrones estructurales',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Patrón</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cliente-servidor</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Clientes consumen servicios de servidores centralizados.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Entre pares (P2P)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Nodos iguales que comparten recursos.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Microservicios</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Servicios autónomos por capacidad de negocio.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Orientado a eventos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Comunicación asincrónica mediante eventos.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Espacio compartido</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Nodos coordinados por una memoria distribuida.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Maestro-trabajador</strong></td><td style="padding:13px 12px;">Un coordinador reparte tareas.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Patrones de resiliencia y datos'
                        },
                        {
                            title: 'Patrones de resiliencia y datos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Patrón</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Problema que resuelve</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Circuit Breaker</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Evitar llamadas repetidas a un servicio que está fallando.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Retry con espera exponencial</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Superar fallas transitorias.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Bulkhead</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Aislar recursos para contener fallas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Saga</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Transacciones que abarcan varios servicios.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>CQRS y Event Sourcing</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Escalar lecturas y conservar el historial.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Sidecar</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Agregar funciones (seguridad, monitoreo) junto a cada servicio.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Líder y seguidores</strong></td><td style="padding:13px 12px;">Coordinar réplicas con un nodo líder.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t004',
                    label: 'Desafíos y consideraciones en la arquitectura de software distribuido',
                    steps: [
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
                            nextButton: 'Siguiente: Teorema CAP'
                        },
                        {
                            title: 'Teorema CAP',
                            content: `<p>Ante una <strong>partición de red</strong>, un sistema distribuido debe elegir entre <strong>consistencia</strong> (todos ven el mismo dato) y <strong>disponibilidad</strong> (todos reciben respuesta).</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Elección</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Comportamiento ante una partición</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>CP</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Rechaza solicitudes para no dar datos desactualizados.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Saldo bancario, inventario crítico.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>AP</strong></td><td style="padding:13px 12px;">Responde aunque los datos puedan estar desactualizados.</td><td style="padding:13px 12px;">Carrito de compras, redes sociales.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Otros desafíos: depuración difícil, consistencia eventual, versiones de API, seguridad en cada comunicación y costos operativos.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t005',
                    label: 'Arquitecturas distribuidas exitosas',
                    steps: [
                        {
                            title: 'Casos de referencia',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Organización</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Decisión arquitectónica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Lección</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Netflix</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Microservicios en la nube con ingeniería del caos (Chaos Monkey).</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Probar las fallas en producción de forma controlada aumenta la resiliencia.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Amazon</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Equipos pequeños dueños de servicios con API (“equipos de dos pizzas”).</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">La arquitectura refleja la organización de los equipos (ley de Conway).</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Uber</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Plataforma distribuida por regiones con procesamiento de eventos en tiempo real.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">La cercanía geográfica reduce la latencia.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>WhatsApp</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Erlang/OTP con millones de conexiones por servidor.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Elegir la tecnología adecuada al problema de concurrencia.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Sistema de pagos SINPE (BCCR)</strong></td><td style="padding:13px 12px;">Plataforma interbancaria de alta disponibilidad.</td><td style="padding:13px 12px;">Los sistemas financieros priorizan la consistencia.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t006',
                    label: 'Buenas prácticas en el desarrollo de software distribuido',
                    steps: [
                        {
                            title: 'Lista de buenas prácticas',
                            content: `<ol>
    <li>Defina contratos de API versionados y documentados.</li>
    <li>Establezca tiempos de espera en todas las llamadas remotas.</li>
    <li>Use reintentos con espera exponencial y variación aleatoria (jitter).</li>
    <li>Haga idempotentes las operaciones que pueden repetirse.</li>
    <li>Propague un identificador de correlación en cada solicitud.</li>
    <li>Centralice bitácoras, métricas y trazas.</li>
    <li>Automatice las pruebas, el despliegue y la infraestructura.</li>
    <li>Practique la recuperación ante desastres.</li>
</ol>
<pre class="codigo">
async function conReintentos(fn, intentos = 4) {
    for (let i = 0; i &lt; intentos; i++) {
        try { return await fn(); }
        catch (e) {
            if (i === intentos - 1) throw e;
            const espera = 2 ** i * 200 + Math.random() * 100;   // 200, 400, 800 ms + jitter
            await new Promise(r =&gt; setTimeout(r, espera));
        }
    }
}
</pre>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_002',
            label: 'Comunicación',
            subtemas: [
                {
                    id: 'm002-t001',
                    label: 'Protocolos de comunicación en sistemas distribuidos',
                    steps: [
                        {
                            title: 'Protocolos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Protocolo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Características</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso típico</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>TCP</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Confiable y ordenado.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Base de HTTP y bases de datos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>UDP</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Rápido, sin garantías.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Video en vivo, juegos, DNS.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>HTTP/1.1 y HTTP/2</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Solicitud-respuesta; HTTP/2 multiplexa.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">API REST.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>HTTP/3 (QUIC)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sobre UDP, menor latencia.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Web moderna.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>gRPC</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">HTTP/2 y Protocol Buffers; binario y tipado.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Comunicación entre microservicios.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>WebSocket</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Canal bidireccional persistente.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Chat, notificaciones en vivo.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>AMQP</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mensajería con colas.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">RabbitMQ.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>MQTT</strong></td><td style="padding:13px 12px;">Publicar/suscribir liviano.</td><td style="padding:13px 12px;">Internet de las cosas.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Ejemplo con gRPC'
                        },
                        {
                            title: 'Ejemplo con gRPC',
                            content: `<pre class="codigo">
// inventario.proto
syntax = "proto3";
service Inventario {
  rpc ConsultarStock (SolicitudStock) returns (RespuestaStock);
}
message SolicitudStock { string producto_id = 1; }
message RespuestaStock { int32 cantidad = 1; bool disponible = 2; }
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
A partir del archivo <code>.proto</code> se genera el código del cliente y del servidor en distintos lenguajes, lo que garantiza que ambos cumplan el mismo contrato.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t002',
                    label: 'Modelos de comunicación cliente-servidor y entre pares',
                    steps: [
                        {
                            title: 'Cliente-servidor y P2P',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;"></th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Cliente-servidor</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Entre pares (P2P)</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Roles</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Fijos: cliente o servidor.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cada nodo es cliente y servidor.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Control</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Centralizado.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Descentralizado.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Escalabilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Limitada por los servidores.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Crece con los pares.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Punto único de falla</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El servidor (si no hay réplicas).</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">No existe.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Ejemplos</strong></td><td style="padding:13px 12px;">Aplicaciones web, API.</td><td style="padding:13px 12px;">BitTorrent, blockchain, IPFS.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Comunicación sincrónica y asincrónica'
                        },
                        {
                            title: 'Comunicación sincrónica y asincrónica',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;"></th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Sincrónica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Asincrónica</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Funcionamiento</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El emisor espera la respuesta.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El emisor continúa sin esperar.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tecnologías</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">HTTP, gRPC.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Colas, temas, eventos.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Acoplamiento temporal</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ambos deben estar disponibles.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pueden no estarlo al mismo tiempo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Uso</strong></td><td style="padding:13px 12px;">Consultas que requieren respuesta inmediata.</td><td style="padding:13px 12px;">Procesos largos o notificaciones.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t003',
                    label: 'Sincronización y coordinación de procesos distribuidos',
                    steps: [
                        {
                            title: 'Tiempo y orden',
                            content: `<p>Sin un reloj global, los nodos no pueden saber con precisión el orden de los eventos solo por la hora local.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Mecanismo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>NTP</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sincroniza los relojes físicos con servidores de tiempo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Relojes de Lamport</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Contador lógico que ordena eventos causalmente relacionados.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Relojes vectoriales</strong></td><td style="padding:13px 12px;">Detectan si dos eventos son concurrentes.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Coordinación'
                        },
                        {
                            title: 'Coordinación',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Problema</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Solución</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Elegir un líder</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Algoritmos de elección (Bully, Raft).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Acordar un valor entre réplicas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Consenso: Paxos, Raft.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Exclusión mutua</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Bloqueos distribuidos con ZooKeeper, etcd o Redis.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Configuración compartida</strong></td><td style="padding:13px 12px;">Almacenes de coordinación (etcd, Consul).</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Raft divide el consenso en elección de líder, replicación de la bitácora y seguridad; lo usan etcd (base de Kubernetes) y muchas bases de datos distribuidas.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t004',
                    label: 'Software intermedio y servicios web en arquitecturas distribuidas',
                    steps: [
                        {
                            title: 'Software intermedio (middleware)',
                            content: `<p>El <strong>middleware</strong> es la capa que oculta la complejidad de la red y ofrece servicios comunes a las aplicaciones distribuidas.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplos</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Orientado a mensajes</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">RabbitMQ, Kafka, Azure Service Bus.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Llamadas a procedimientos remotos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">gRPC, Java RMI.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Servicios web</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">REST, SOAP, GraphQL.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>API Gateway</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Kong, Azure API Management.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Malla de servicios</strong></td><td style="padding:13px 12px;">Istio, Linkerd.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Servicios web'
                        },
                        {
                            title: 'Servicios web',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Estilo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Característica</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>REST</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Recursos y métodos HTTP; JSON.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>SOAP</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Contrato WSDL; XML; WS-Security.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>GraphQL</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El cliente define los campos que necesita.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>gRPC</strong></td><td style="padding:13px 12px;">Contratos binarios eficientes.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t005',
                    label: 'Gestión de errores y tolerancia a fallos en sistemas distribuidos',
                    steps: [
                        {
                            title: 'Tipos de fallas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Falla</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Caída (crash)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El nodo deja de funcionar.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Omisión</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se pierden mensajes.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Temporización</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">La respuesta llega fuera de tiempo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Bizantina</strong></td><td style="padding:13px 12px;">El nodo responde de forma arbitraria o maliciosa.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Circuit Breaker'
                        },
                        {
                            title: 'Circuit Breaker',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Estado</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Comportamiento</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cerrado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Las llamadas pasan normalmente; se cuentan los errores.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Abierto</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Las llamadas fallan de inmediato sin llegar al servicio.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Semiabierto</strong></td><td style="padding:13px 12px;">Se permiten algunas llamadas de prueba para verificar la recuperación.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
const CircuitBreaker = require("opossum");
const breaker = new CircuitBreaker(consultarInventario, {
    timeout: 2000,                  // falla si tarda más de 2 s
    errorThresholdPercentage: 50,   // abre con 50 % de errores
    resetTimeout: 10000             // intenta de nuevo a los 10 s
});
breaker.fallback(() =&gt; ({ disponible: null, mensaje: "Inventario no disponible" }));
const stock = await breaker.fire(productoId);
</pre>`,
                            nextButton: 'Siguiente: Otras tácticas'
                        },
                        {
                            title: 'Otras tácticas',
                            content: `<ul>
    <li>Réplicas y conmutación por error (failover).</li>
    <li>Degradación elegante: ofrecer una funcionalidad reducida.</li>
    <li>Colas de mensajes muertos para mensajes problemáticos.</li>
    <li>Verificaciones de salud (health checks).</li>
    <li>Ingeniería del caos para probar la resiliencia.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t006',
                    label: 'Seguridad y autenticación en la comunicación distribuida',
                    steps: [
                        {
                            title: 'Seguridad entre servicios',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Mecanismo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Protege</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>TLS</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Confidencialidad e integridad en tránsito.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>mTLS</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Autenticación mutua entre servicios con certificados.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>JWT</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Identidad y permisos del usuario propagados entre servicios.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>OAuth 2.0 (client credentials)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Autenticación de servicio a servicio.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>API Gateway</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Punto central de autenticación y límites.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Gestión de secretos</strong></td><td style="padding:13px 12px;">Credenciales fuera del código.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Confianza cero'
                        },
                        {
                            title: 'Confianza cero',
                            content: `<p>En una arquitectura de <strong>confianza cero</strong> ninguna solicitud se considera segura por provenir de la red interna. Cada servicio autentica y autoriza cada solicitud.</p>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Una malla de servicios (Istio, Linkerd) puede aplicar mTLS automáticamente entre todos los servicios sin modificar su código.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_003',
            label: 'Escalabilidad y rendimiento',
            subtemas: [
                {
                    id: 'm003-t001',
                    label: 'Diseño de sistemas distribuidos escalables',
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
                            nextButton: 'Siguiente: El cubo de escalabilidad'
                        },
                        {
                            title: 'El cubo de escalabilidad',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Eje</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Estrategia</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>X</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Clonar: varias copias idénticas detrás de un balanceador.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">5 instancias del servicio de catálogo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Y</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Dividir por función: servicios distintos.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Catálogo, pedidos y pagos separados.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Z</strong></td><td style="padding:13px 12px;">Particionar por datos: cada nodo atiende un subconjunto.</td><td style="padding:13px 12px;">Clientes A–M en un nodo, N–Z en otro.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t002',
                    label: 'Estrategias de particionamiento y replicación de datos',
                    steps: [
                        {
                            title: 'Particionamiento (sharding)',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Estrategia</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Funcionamiento</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Riesgo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Por rango</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cada partición tiene un rango de claves (fechas, letras).</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Particiones “calientes”.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Por hash</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">La partición se elige con hash(clave) mod N.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Rebalancear al agregar nodos.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Hash consistente</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Anillo de hash: al agregar un nodo se mueven pocas claves.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mayor complejidad.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Por directorio</strong></td><td style="padding:13px 12px;">Una tabla indica dónde está cada clave.</td><td style="padding:13px 12px;">El directorio es un punto crítico.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Replicación'
                        },
                        {
                            title: 'Replicación',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Modelo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ventaja</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Líder-seguidores</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El líder recibe escrituras; los seguidores replican.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Simple; lecturas escalables.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Multilíder</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Varios nodos aceptan escrituras.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Escritura en varias regiones.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Sin líder</strong></td><td style="padding:13px 12px;">Cualquier réplica acepta escrituras con quórum.</td><td style="padding:13px 12px;">Alta disponibilidad.</td></tr>
</tbody>
</table>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;"></th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Sincrónica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Asincrónica</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Consistencia</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Alta.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Eventual.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Latencia de escritura</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mayor.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Menor.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Riesgo</strong></td><td style="padding:13px 12px;">Bloqueo si una réplica falla.</td><td style="padding:13px 12px;">Pérdida de datos recientes si el líder falla.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t003',
                    label: 'Balanceo de carga y distribución de tareas en sistemas distribuidos',
                    steps: [
                        {
                            title: 'Algoritmos de balanceo',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Algoritmo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Round robin</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Turnos en orden.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Por peso</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Más solicitudes a los nodos más potentes.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Menos conexiones</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Al nodo con menos conexiones activas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Hash de IP</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El mismo cliente al mismo nodo.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Menor tiempo de respuesta</strong></td><td style="padding:13px 12px;">Al nodo que responde más rápido.</td></tr>
</tbody>
</table>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Nivel</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Decide según</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplos</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Capa 4 (transporte)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">IP y puerto.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">AWS NLB, HAProxy en modo TCP.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Capa 7 (aplicación)</strong></td><td style="padding:13px 12px;">URL, encabezados, cookies.</td><td style="padding:13px 12px;">NGINX, AWS ALB, Envoy.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Distribución de tareas'
                        },
                        {
                            title: 'Distribución de tareas',
                            content: `<pre class="codigo">
# Trabajadores que consumen tareas de una cola (Python + Celery)
from celery import Celery
app = Celery("tienda", broker="amqp://rabbitmq")

@app.task(bind=True, max_retries=3)
def generar_factura(self, pedido_id):
    try:
        crear_pdf_y_enviar(pedido_id)
    except ErrorTemporal as e:
        raise self.retry(exc=e, countdown=30)
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Agregar más trabajadores aumenta la capacidad de procesamiento sin modificar el código del productor.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t004',
                    label: 'Optimización de rendimiento en sistemas distribuidos',
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
                            nextButton: 'Siguiente: Reducir la comunicación'
                        },
                        {
                            title: 'Reducir la comunicación',
                            content: `<ul>
    <li>Evitar conversaciones “charlatanas”: muchas llamadas pequeñas entre servicios.</li>
    <li>Usar formatos binarios (Protocol Buffers) entre servicios internos.</li>
    <li>Colocar juntos los servicios que se comunican mucho.</li>
    <li>Replicar datos de referencia localmente en lugar de consultarlos cada vez.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t005',
                    label: 'Monitoreo y análisis de rendimiento en sistemas distribuidos',
                    steps: [
                        {
                            title: 'Observabilidad',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Pilar</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Responde</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Herramientas</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Métricas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Qué tan bien funciona? (latencia, errores, uso)</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Prometheus, Grafana</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Bitácoras (logs)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Qué pasó?</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">ELK, Loki</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Trazas distribuidas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Por dónde pasó la solicitud y dónde tardó?</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Jaeger, Zipkin, Tempo</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Estándar abierto</strong></td><td style="padding:13px 12px;">Instrumentación común</td><td style="padding:13px 12px;">OpenTelemetry</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Señales doradas'
                        },
                        {
                            title: 'Señales doradas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Señal</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo de alerta</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Latencia</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">p95 mayor a 800 ms durante 5 minutos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tráfico</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Caída súbita de solicitudes.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Errores</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Tasa de 5xx mayor al 1 %.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Saturación</strong></td><td style="padding:13px 12px;">CPU o memoria sobre el 85 %.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Defina objetivos de nivel de servicio (SLO) y un presupuesto de errores: indican cuándo priorizar la estabilidad sobre nuevas funcionalidades.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t006',
                    label: 'Pruebas de estrés y rendimiento en arquitecturas distribuidas',
                    steps: [
                        {
                            title: 'Planificar las pruebas',
                            content: `<ol>
    <li>Definir objetivos medibles (SLO).</li>
    <li>Modelar el tráfico real: rutas, proporciones y picos.</li>
    <li>Preparar un ambiente similar a producción.</li>
    <li>Ejecutar pruebas de carga, estrés, picos y resistencia.</li>
    <li>Observar métricas y trazas durante la prueba.</li>
    <li>Identificar el cuello de botella, corregir y repetir.</li>
</ol>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Herramienta</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Lenguaje del guion</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>k6</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">JavaScript</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>JMeter</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Interfaz gráfica / XML</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Gatling</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Scala, Java</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Locust</strong></td><td style="padding:13px 12px;">Python</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Ingeniería del caos'
                        },
                        {
                            title: 'Ingeniería del caos',
                            content: `<p>Consiste en introducir fallas controladas (apagar instancias, agregar latencia, cortar la red) para verificar que el sistema se recupera como se espera.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Experimento</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Hipótesis</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Apagar una instancia del servicio de pagos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El balanceador redirige y no hay errores visibles.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Agregar 2 s de latencia a inventario</strong></td><td style="padding:13px 12px;">El circuit breaker se abre y se muestra el mensaje alternativo.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Herramientas: Chaos Monkey, LitmusChaos, AWS Fault Injection Service, Azure Chaos Studio.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_004',
            label: 'Persistencia y almacenamiento',
            subtemas: [
                {
                    id: 'm004-t001',
                    label: 'Bases de datos distribuidas y replicación de datos',
                    steps: [
                        {
                            title: 'Bases de datos distribuidas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplos</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Característica</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>SQL distribuida (NewSQL)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">CockroachDB, YugabyteDB, Google Spanner</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">SQL y transacciones ACID a escala.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Documentos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">MongoDB (réplicas y fragmentos)</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Esquema flexible.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Columnar ancha</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cassandra, ScyllaDB</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Escrituras masivas sin líder.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Clave-valor</strong></td><td style="padding:13px 12px;">DynamoDB, Redis Cluster</td><td style="padding:13px 12px;">Latencia muy baja.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Replicación'
                        },
                        {
                            title: 'Replicación',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Modelo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ventaja</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Líder-seguidores</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El líder recibe escrituras; los seguidores replican.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Simple; lecturas escalables.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Multilíder</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Varios nodos aceptan escrituras.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Escritura en varias regiones.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Sin líder</strong></td><td style="padding:13px 12px;">Cualquier réplica acepta escrituras con quórum.</td><td style="padding:13px 12px;">Alta disponibilidad.</td></tr>
</tbody>
</table>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;"></th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Sincrónica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Asincrónica</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Consistencia</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Alta.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Eventual.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Latencia de escritura</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mayor.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Menor.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Riesgo</strong></td><td style="padding:13px 12px;">Bloqueo si una réplica falla.</td><td style="padding:13px 12px;">Pérdida de datos recientes si el líder falla.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t002',
                    label: 'Consistencia y coherencia en sistemas distribuidos',
                    steps: [
                        {
                            title: 'Modelos de consistencia',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Modelo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Garantía</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Fuerte (linealizable)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Toda lectura ve la escritura más reciente.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Secuencial</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Todos ven las operaciones en el mismo orden.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Causal</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se respeta el orden de operaciones relacionadas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Leer lo propio (read-your-writes)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El usuario ve sus propios cambios.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Eventual</strong></td><td style="padding:13px 12px;">Si no hay más cambios, las réplicas convergen.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Quórum'
                        },
                        {
                            title: 'Quórum',
                            content: `<p>Con <strong>N</strong> réplicas, una escritura se confirma en <strong>W</strong> réplicas y una lectura consulta <strong>R</strong> réplicas. Si <strong>W + R &gt; N</strong>, toda lectura encuentra al menos una réplica actualizada.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Configuración (N = 3)</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Efecto</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>W = 3, R = 1</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Lecturas rápidas, escrituras lentas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>W = 2, R = 2</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Equilibrio con consistencia.</td></tr>
<tr><td style="padding:13px 12px;"><strong>W = 1, R = 1</strong></td><td style="padding:13px 12px;">Muy rápido, solo consistencia eventual.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
El teorema <strong>PACELC</strong> extiende CAP: con partición se elige entre disponibilidad y consistencia; sin partición, entre latencia y consistencia.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t003',
                    label: 'Almacenamiento en la nube y servicios de almacenamiento distribuido',
                    steps: [
                        {
                            title: 'Tipos de almacenamiento en la nube',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Servicios</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Objetos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Amazon S3, Azure Blob, Google Cloud Storage</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Archivos, imágenes, respaldos, lagos de datos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Bloques</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Amazon EBS, Azure Managed Disks</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Discos de máquinas virtuales.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Archivos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Amazon EFS, Azure Files</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Carpetas compartidas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Bases administradas</strong></td><td style="padding:13px 12px;">RDS, Cosmos DB, Atlas</td><td style="padding:13px 12px;">Datos de aplicaciones.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Características'
                        },
                        {
                            title: 'Características',
                            content: `<ul>
    <li>Durabilidad muy alta mediante copias en varias zonas.</li>
    <li>Clases de almacenamiento según la frecuencia de acceso (caliente, fría, archivo).</li>
    <li>Versionado y políticas de ciclo de vida.</li>
    <li>URL firmadas para acceso temporal y seguro.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t004',
                    label: 'Sistemas de archivos distribuidos',
                    steps: [
                        {
                            title: 'Sistemas de archivos distribuidos',
                            content: `<p>Presentan archivos almacenados en muchos nodos como si estuvieran en un solo sistema de archivos.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Sistema</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Característica</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>HDFS</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Bloques grandes replicados (3 copias); optimizado para lectura secuencial.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>GFS</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Diseño de Google que inspiró HDFS.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ceph</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Objetos, bloques y archivos en un mismo clúster.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>GlusterFS</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Agrega discos de varios servidores.</td></tr>
<tr><td style="padding:13px 12px;"><strong>NFS</strong></td><td style="padding:13px 12px;">Sistema de archivos de red tradicional (no distribuido a gran escala).</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
NameNode (metadatos)
   ├── archivo ventas.parquet → bloques B1, B2, B3
DataNode 1: B1, B2      DataNode 2: B2, B3      DataNode 3: B1, B3
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Al replicar cada bloque en varios nodos, la pérdida de un disco no provoca pérdida de datos.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t005',
                    label: 'Memoria de acceso rápido distribuida y estrategias de invalidación',
                    steps: [
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
                            nextButton: 'Siguiente: Invalidación de caché'
                        },
                        {
                            title: 'Invalidación de caché',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Estrategia</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tiempo de vida (TTL)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El dato expira después de un tiempo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Invalidación explícita</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Al actualizar el dato, se elimina de la caché.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Por eventos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un evento de cambio invalida la caché en todos los nodos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Versionado de claves</strong></td><td style="padding:13px 12px;">Se cambia la clave (<code>producto:17:v2</code>).</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
Problema de la estampida (thundering herd): si una clave popular expira, muchas solicitudes consultan la base a la vez. Se mitiga con bloqueos o renovación anticipada.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t006',
                    label: 'Copias de seguridad y recuperación en sistemas distribuidos',
                    steps: [
                        {
                            title: 'Objetivos de recuperación',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Indicador</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Pregunta</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>RPO (punto de recuperación)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Cuántos datos podemos perder? Ej.: 15 minutos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>RTO (tiempo de recuperación)</strong></td><td style="padding:13px 12px;">¿Cuánto tiempo podemos estar sin servicio? Ej.: 1 hora.</td></tr>
</tbody>
</table>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Estrategia</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">RTO</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Costo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Respaldo y restauración</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Horas</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Bajo</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Luz piloto</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Decenas de minutos</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Medio</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Espera activa (warm standby)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Minutos</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Alto</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Activo-activo multirregión</strong></td><td style="padding:13px 12px;">Casi cero</td><td style="padding:13px 12px;">Muy alto</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Buenas prácticas'
                        },
                        {
                            title: 'Buenas prácticas',
                            content: `<ul>
    <li>Regla 3-2-1: tres copias, en dos medios distintos, una fuera del sitio.</li>
    <li>Respaldos inmutables contra ransomware.</li>
    <li>Restauraciones de prueba periódicas: un respaldo no probado no es un respaldo.</li>
    <li>Recuperación a un punto en el tiempo (PITR) en bases de datos.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_005',
            label: 'Despliegue y administración',
            subtemas: [
                {
                    id: 'm005-t001',
                    label: 'Técnicas de despliegue y configuración en sistemas distribuidos',
                    steps: [
                        {
                            title: 'Infraestructura como código',
                            content: `<pre class="codigo">
# Terraform: base de datos administrada
resource "azurerm_postgresql_flexible_server" "pedidos" {
  name                = "pg-pedidos-prod"
  resource_group_name = azurerm_resource_group.tienda.name
  location            = "eastus"
  sku_name            = "GP_Standard_D2s_v3"
  storage_mb          = 65536
}
</pre>
<ul>
    <li>La infraestructura se versiona en Git como el código.</li>
    <li>Ambientes idénticos y reproducibles.</li>
    <li>Herramientas: Terraform, Bicep, Pulumi, AWS CloudFormation, Ansible.</li>
</ul>`,
                            nextButton: 'Siguiente: Estrategias de despliegue'
                        },
                        {
                            title: 'Estrategias de despliegue',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Estrategia</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Funcionamiento</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ventaja</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Gradual (rolling)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Reemplaza instancias poco a poco.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sin tiempo fuera de servicio.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Azul-verde</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Dos ambientes; se cambia el tráfico de uno a otro.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Reversión inmediata.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Canario</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">La versión nueva recibe un porcentaje pequeño del tráfico.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Detecta problemas con pocos usuarios.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Banderas de funcionalidad</strong></td><td style="padding:13px 12px;">Se activa la funcionalidad sin desplegar.</td><td style="padding:13px 12px;">Separa despliegue de liberación.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
La configuración se externaliza (variables de entorno, servicios de configuración) para que la misma imagen funcione en todos los ambientes.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t002',
                    label: 'Orquestación y gestión de contenedores en arquitecturas distribuidas',
                    steps: [
                        {
                            title: 'Contenedores con Docker',
                            content: `<pre class="codigo">
# Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
USER node
EXPOSE 3000
CMD ["node", "server.js"]
</pre>
<p>Un contenedor empaqueta la aplicación con sus dependencias y se ejecuta igual en cualquier máquina.</p>`,
                            nextButton: 'Siguiente: Orquestación con Kubernetes'
                        },
                        {
                            title: 'Orquestación con Kubernetes',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Objeto</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Función</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pod</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Uno o más contenedores que se ejecutan juntos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Deployment</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mantiene el número deseado de réplicas y gestiona actualizaciones.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Service</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Dirección estable y balanceo hacia los pods.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ingress</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Entrada HTTP desde el exterior.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>ConfigMap / Secret</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Configuración y credenciales.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>HorizontalPodAutoscaler</strong></td><td style="padding:13px 12px;">Escalado automático.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
apiVersion: apps/v1
kind: Deployment
metadata:
  name: catalogo
spec:
  replicas: 3
  selector: { matchLabels: { app: catalogo } }
  template:
    metadata: { labels: { app: catalogo } }
    spec:
      containers:
        - name: catalogo
          image: registro.mitienda.com/catalogo:1.8.2
          ports: [{ containerPort: 3000 }]
          readinessProbe: { httpGet: { path: /salud, port: 3000 } }
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t003',
                    label: 'Administración de sistemas distribuidos y balanceadores de carga',
                    steps: [
                        {
                            title: 'Administración',
                            content: `<ul>
    <li><strong>Descubrimiento de servicios</strong>: DNS interno de Kubernetes, Consul.</li>
    <li><strong>Verificaciones de salud</strong>: liveness (¿está vivo?) y readiness (¿puede recibir tráfico?).</li>
    <li><strong>Gestión de certificados</strong>: renovación automática (cert-manager, Let's Encrypt).</li>
    <li><strong>Control de acceso</strong> a la infraestructura con mínimo privilegio.</li>
</ul>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Balanceador</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ámbito</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>NGINX, HAProxy, Envoy</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Software instalable.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>AWS ELB, Azure Load Balancer / Application Gateway</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Servicios administrados en la nube.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ingress Controller de Kubernetes</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Entrada HTTP al clúster.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Balanceo global (DNS)</strong></td><td style="padding:13px 12px;">Entre regiones: Route 53, Azure Front Door.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t004',
                    label: 'Escalado automático y elástico en sistemas distribuidos',
                    steps: [
                        {
                            title: 'Escalado automático',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Métrica de disparo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Reactivo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">CPU, memoria, latencia o solicitudes por segundo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Por cola</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cantidad de mensajes pendientes (KEDA).</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Programado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Horarios conocidos (planilla a fin de mes).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Predictivo</strong></td><td style="padding:13px 12px;">Patrones históricos.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata: { name: catalogo }
spec:
  scaleTargetRef: { apiVersion: apps/v1, kind: Deployment, name: catalogo }
  minReplicas: 2
  maxReplicas: 20
  metrics:
    - type: Resource
      resource: { name: cpu, target: { type: Utilization, averageUtilization: 70 } }
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
<strong>Elasticidad</strong> es la capacidad de crecer y también de reducirse cuando baja la demanda, lo que ahorra costos.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t005',
                    label: 'Monitoreo y gestión de recursos en arquitecturas distribuidas',
                    steps: [
                        {
                            title: 'Observabilidad',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Pilar</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Responde</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Herramientas</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Métricas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Qué tan bien funciona? (latencia, errores, uso)</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Prometheus, Grafana</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Bitácoras (logs)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Qué pasó?</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">ELK, Loki</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Trazas distribuidas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Por dónde pasó la solicitud y dónde tardó?</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Jaeger, Zipkin, Tempo</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Estándar abierto</strong></td><td style="padding:13px 12px;">Instrumentación común</td><td style="padding:13px 12px;">OpenTelemetry</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Gestión de recursos'
                        },
                        {
                            title: 'Gestión de recursos',
                            content: `<ul>
    <li>Definir solicitudes (requests) y límites (limits) de CPU y memoria por contenedor.</li>
    <li>Cuotas por equipo o espacio de nombres.</li>
    <li>Etiquetas para asignar costos (FinOps).</li>
    <li>Alertas de capacidad antes de que se agoten los recursos.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t006',
                    label: 'Actualización y mantenimiento de sistemas distribuidos',
                    steps: [
                        {
                            title: 'Actualizar sin interrumpir',
                            content: `<ul>
    <li>Despliegues graduales o canario con reversión automática si aumentan los errores.</li>
    <li>Compatibilidad hacia atrás en las API y en los mensajes.</li>
    <li>Migraciones de base de datos en dos fases: expandir (agregar columnas) y luego contraer (eliminar las antiguas).</li>
    <li>Ventanas de mantenimiento comunicadas para cambios mayores.</li>
</ul>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Versionado de API</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>En la URL</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>/v2/pedidos</code></td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>En el encabezado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>Accept: application/vnd.tienda.v2+json</code></td></tr>
<tr><td style="padding:13px 12px;"><strong>Política</strong></td><td style="padding:13px 12px;">Mantener la versión anterior durante un período de transición anunciado.</td></tr>
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
            label: 'Arquitecturas avanzadas',
            subtemas: [
                {
                    id: 'm006-t001',
                    label: 'Arquitecturas de microservicios y abstracción',
                    steps: [
                        {
                            title: 'Microservicios y diseño guiado por el dominio',
                            content: `<p>El <strong>diseño guiado por el dominio</strong> (DDD) ayuda a definir los límites de los microservicios mediante <strong>contextos delimitados</strong>: áreas del negocio con su propio modelo y lenguaje.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Contexto delimitado</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado de “Producto”</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Catálogo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Nombre, descripción, imágenes, categoría.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Inventario</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Código, cantidad, bodega.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Envíos</strong></td><td style="padding:13px 12px;">Peso y dimensiones.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Capas de abstracción'
                        },
                        {
                            title: 'Capas de abstracción',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Abstracción</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Oculta</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>API Gateway</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">La ubicación y cantidad de servicios internos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Backend for Frontend (BFF)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Las diferencias entre clientes web y móvil.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Malla de servicios</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Reintentos, mTLS y telemetría.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Contratos (OpenAPI, protobuf)</strong></td><td style="padding:13px 12px;">La implementación de cada servicio.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
El “monolito distribuido” es un antipatrón: servicios separados que deben desplegarse juntos porque están fuertemente acoplados.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t002',
                    label: 'Internet de las cosas (IoT) y sistemas embebidos distribuidos',
                    steps: [
                        {
                            title: 'Arquitectura IoT',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-microchip" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Dispositivos</b><br><small>Sensores y actuadores</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-tower-cell" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Puerta de enlace</b><br><small>Agrega y filtra</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-cloud" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Plataforma IoT</b><br><small>Ingesta MQTT</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-gears" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Procesamiento</b><br><small>Reglas y análisis</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-display" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Aplicaciones</b><br><small>Tableros y alertas</small></div></div>
</div>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Reto</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Solución</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Conectividad intermitente</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Almacenamiento local y envío diferido.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Millones de dispositivos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Protocolos livianos (MQTT, CoAP) y brokers escalables.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Seguridad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Identidad por dispositivo, certificados, actualizaciones OTA firmadas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Latencia</strong></td><td style="padding:13px 12px;">Procesamiento en el borde.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Gemelo digital'
                        },
                        {
                            title: 'Gemelo digital',
                            content: `<p>Un <strong>gemelo digital</strong> es una representación en la nube del estado de un dispositivo físico. Las aplicaciones consultan y modifican el gemelo, y la plataforma sincroniza con el dispositivo cuando se conecta.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t003',
                    label: 'Arquitecturas orientadas a eventos y transmisión de datos',
                    steps: [
                        {
                            title: 'Transmisión de eventos',
                            content: `<p>Plataformas como <strong>Apache Kafka</strong> almacenan los eventos en <strong>registros</strong> (logs) particionados y replicados, que varios consumidores leen a su propio ritmo.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Concepto de Kafka</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tema (topic)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Categoría de eventos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Partición</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Subdivisión ordenada del tema que permite el paralelismo.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Desplazamiento (offset)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Posición de un evento en la partición.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Grupo de consumidores</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Consumidores que se reparten las particiones.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Retención</strong></td><td style="padding:13px 12px;">Tiempo que se conservan los eventos.</td></tr>
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
                },
                {
                    id: 'm006-t004',
                    label: 'Arquitecturas sin servidor (serverless)',
                    steps: [
                        {
                            title: 'Computación sin servidor',
                            content: `<p>En el modelo <strong>sin servidor</strong>, el proveedor ejecuta funciones en respuesta a eventos y escala automáticamente desde cero. Se paga solo por el tiempo de ejecución.</p>
<pre class="codigo">
// Azure Function / AWS Lambda: crear miniatura al subir una imagen
export async function handler(evento) {
    const { bucket, clave } = evento.archivo;
    const imagen = await almacenamiento.descargar(bucket, clave);
    const miniatura = await redimensionar(imagen, 300);
    await almacenamiento.subir("miniaturas", clave, miniatura);
}
</pre>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ventajas</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Desventajas</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Sin administración de servidores.</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Arranque en frío.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Escala automática.</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Límites de tiempo de ejecución.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pago por uso.</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Dependencia del proveedor.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Ideal para cargas variables.</strong></td><td style="padding:13px 12px;">Depuración y pruebas locales más difíciles.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t005',
                    label: 'Contenedores y virtualización en sistemas distribuidos',
                    steps: [
                        {
                            title: 'Máquinas virtuales y contenedores',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;"></th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Máquina virtual</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Contenedor</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Virtualiza</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El hardware.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El sistema operativo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Incluye</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sistema operativo completo.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Solo la aplicación y sus dependencias.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Arranque</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Minutos.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Segundos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tamaño</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Gigabytes.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Megabytes.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Aislamiento</strong></td><td style="padding:13px 12px;">Fuerte.</td><td style="padding:13px 12px;">Por procesos (namespaces y cgroups).</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Contenedores con Docker'
                        },
                        {
                            title: 'Contenedores con Docker',
                            content: `<pre class="codigo">
# Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
USER node
EXPOSE 3000
CMD ["node", "server.js"]
</pre>
<p>Un contenedor empaqueta la aplicación con sus dependencias y se ejecuta igual en cualquier máquina.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t006',
                    label: 'Computación en malla',
                    steps: [
                        {
                            title: 'Computación en malla (grid)',
                            content: `<p>La <strong>computación en malla</strong> une recursos de cómputo de varias organizaciones o ubicaciones, a menudo heterogéneos, para resolver problemas de gran escala como si fueran una sola supercomputadora virtual.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Característica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Recursos distribuidos y heterogéneos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Equipos de distintas instituciones y plataformas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Middleware de malla</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Planifica tareas y gestiona la seguridad (Globus, HTCondor, BOINC).</td></tr>
<tr><td style="padding:13px 12px;"><strong>Tareas paralelizables</strong></td><td style="padding:13px 12px;">El problema se divide en muchos trabajos independientes.</td></tr>
</tbody>
</table>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>CERN WLCG</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Análisis de datos del Gran Colisionador de Hadrones.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>BOINC (computación voluntaria)</strong></td><td style="padding:13px 12px;">Investigación científica con equipos donados.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
No debe confundirse con la <strong>malla de servicios</strong> (service mesh), que gestiona la comunicación entre microservicios.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_007',
            label: 'Tendencias',
            subtemas: [
                {
                    id: 'm007-t001',
                    label: 'Tendencias actuales y futuras en sistemas distribuidos',
                    steps: [
                        {
                            title: 'Tendencias',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tendencia</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Computación en el borde</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Procesamiento cerca de los usuarios y dispositivos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Multinube e híbrida</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Combinar proveedores de nube y centros de datos propios.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>WebAssembly en el servidor</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Funciones portables, seguras y de arranque inmediato.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Plataformas internas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Equipos de plataforma que ofrecen autoservicio a los desarrolladores.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Bases de datos distribuidas globales</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Consistencia fuerte en varias regiones.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Sistemas con agentes de IA</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Servicios que coordinan modelos y herramientas.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Computación sostenible</strong></td><td style="padding:13px 12px;">Diseñar para reducir el consumo energético.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t002',
                    label: 'Arquitecturas distribuidas para aplicaciones móviles',
                    steps: [
                        {
                            title: 'Patrones para aplicaciones móviles',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Patrón</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Propósito</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Backend for Frontend (BFF)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">API adaptada a las necesidades de la app móvil.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Offline first</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">La app funciona sin conexión y sincroniza después.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Notificaciones push</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El servidor avisa a la app (FCM, APNs).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>CDN para recursos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Imágenes y archivos cerca del usuario.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Backend como servicio</strong></td><td style="padding:13px 12px;">Firebase, Supabase, AWS Amplify.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Sincronización'
                        },
                        {
                            title: 'Sincronización',
                            content: `<ul>
    <li>Cola local de operaciones pendientes.</li>
    <li>Resolución de conflictos: última escritura gana, fusión o decisión del usuario.</li>
    <li>Estructuras CRDT que se combinan sin conflictos.</li>
    <li>Envío de solo los cambios (sincronización delta).</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t003',
                    label: 'Arquitecturas distribuidas para inteligencia artificial y aprendizaje automático',
                    steps: [
                        {
                            title: 'IA distribuida',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Enfoque</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Entrenamiento con paralelismo de datos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cada GPU entrena con una parte de los datos y se combinan los gradientes.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Paralelismo de modelo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El modelo se divide entre varias GPU.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Aprendizaje federado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se entrena en los dispositivos sin centralizar los datos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Inferencia distribuida</strong></td><td style="padding:13px 12px;">Servicios de modelos replicados con balanceo y autoescalado.</td></tr>
</tbody>
</table>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Herramienta</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ray</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cómputo distribuido en Python.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Horovod, PyTorch Distributed</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Entrenamiento distribuido.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Kubeflow, KServe</strong></td><td style="padding:13px 12px;">Canales de ML y servicio de modelos en Kubernetes.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t004',
                    label: 'Arquitecturas distribuidas para aplicaciones en tiempo real',
                    steps: [
                        {
                            title: 'Aplicaciones en tiempo real',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Aplicación</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Requisito</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Chat y colaboración</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mensajes en milisegundos (WebSocket).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Seguimiento de entregas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ubicación actualizada cada pocos segundos.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Juegos en línea</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Latencia muy baja (UDP).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Mercados financieros</strong></td><td style="padding:13px 12px;">Microsegundos y orden estricto.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
// Servidor de WebSocket con Socket.IO y adaptador de Redis para varias instancias
const io = require("socket.io")(server);
const { createAdapter } = require("@socket.io/redis-adapter");
io.adapter(createAdapter(pubClient, subClient));

io.on("connection", socket =&gt; {
    socket.on("unirse", pedidoId =&gt; socket.join(\`pedido:\${pedidoId}\`));
});
// Cuando cambia la ubicación del repartidor:
io.to(\`pedido:\${id}\`).emit("ubicacion", { lat, lng });
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
El adaptador de Redis permite que un mensaje emitido en una instancia llegue a clientes conectados a otras instancias.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t005',
                    label: 'Desafíos éticos y sociales en la arquitectura de software distribuido',
                    steps: [
                        {
                            title: 'Desafíos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Desafío</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Consideración arquitectónica</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Privacidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Minimizar datos, cifrarlos y respetar la Ley 8968 y el RGPD.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Soberanía de datos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ubicar los datos en las regiones que exige la ley.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Impacto ambiental</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Elegir regiones con energía renovable y apagar recursos ociosos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Concentración de poder</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Dependencia de pocos proveedores de nube.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Vigilancia</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Limitar el rastreo y la correlación de datos personales.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Acceso equitativo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Diseñar para conexiones lentas y dispositivos modestos.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Responsabilidad ante fallas</strong></td><td style="padding:13px 12px;">Transparencia y comunicación de incidentes.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
El código de ética de ACM/IEEE para ingenieros de software pide actuar en función del interés público: las decisiones de arquitectura también son decisiones éticas.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        }
    ]
};
