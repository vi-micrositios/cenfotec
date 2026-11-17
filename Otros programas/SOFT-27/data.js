const data = {
    // Pantalla de bienvenida
    welcome: {
        title: 'SOFT-27 <br> Desarrollo de Software en Cadena de Bloques',
        image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-27/imgs/logo.png', // Cambiar por imagen real
        description: 'Implementación de soluciones basadas en cadena de bloques para registrar y verificar transacciones de forma confiable y descentralizada: contratos inteligentes, plataformas, seguridad, interoperabilidad y aplicaciones empresariales.',
        instruction: 'Seleccione cada pestaña para acceder a la información'
    },
    // Temas principales y sus subtemas con pasos
    temas: [
        {
            id: 'modulo_001',
            label: 'Introducción a la cadena de bloques',
            subtemas: [
                {
                    id: 'm001-t001',
                    label: 'Introducción a la tecnología de cadena de bloques',
                    steps: [
                        {
                            title: '¿Qué es una cadena de bloques?',
                            content: `<p>Una <strong>cadena de bloques</strong> (blockchain) es un registro digital distribuido, compartido entre muchos nodos, donde las transacciones se agrupan en <strong>bloques</strong> enlazados criptográficamente. Una vez registrado, un dato es prácticamente imposible de modificar sin que la red lo detecte.</p>
<div style="display:flex; flex-wrap:wrap; gap:12px; margin:12px 0;">
<div style="flex:1 1 200px; padding:14px; border:1px solid #9cc8ff; border-top:4px solid #2b93d1; border-radius:10px; background:#ffffff;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-network-wired" style="color:#164a98; margin-right:6px;" aria-hidden="true"></i><strong>Distribuida</strong></p><p style="margin:0;">Cada nodo tiene una copia del registro.</p></div>
<div style="flex:1 1 200px; padding:14px; border:1px solid #9cc8ff; border-top:4px solid #2b93d1; border-radius:10px; background:#ffffff;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-lock" style="color:#164a98; margin-right:6px;" aria-hidden="true"></i><strong>Inmutable</strong></p><p style="margin:0;">Cambiar un bloque rompe el enlace con los siguientes.</p></div>
<div style="flex:1 1 200px; padding:14px; border:1px solid #9cc8ff; border-top:4px solid #2b93d1; border-radius:10px; background:#ffffff;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-eye" style="color:#164a98; margin-right:6px;" aria-hidden="true"></i><strong>Transparente</strong></p><p style="margin:0;">Las transacciones se pueden verificar.</p></div>
<div style="flex:1 1 200px; padding:14px; border:1px solid #9cc8ff; border-top:4px solid #2b93d1; border-radius:10px; background:#ffffff;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-handshake" style="color:#164a98; margin-right:6px;" aria-hidden="true"></i><strong>Sin intermediario central</strong></p><p style="margin:0;">El consenso de la red valida los cambios.</p></div>
</div>`,
                            nextButton: 'Siguiente: ¿Cuándo usar una cadena de bloques?'
                        },
                        {
                            title: '¿Cuándo usar una cadena de bloques?',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Pregunta</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Si la respuesta es sí…</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>¿Varias partes que no confían entre sí necesitan compartir datos?</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Puede ser útil.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>¿Se requiere un historial inmutable y auditable?</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Puede ser útil.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>¿Existe un intermediario confiable que funciona bien?</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Probablemente basta una base de datos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>¿Los datos cambian o deben borrarse con frecuencia?</strong></td><td style="padding:13px 12px;">Probablemente no conviene.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Una cadena de bloques es más lenta y costosa que una base de datos tradicional: se justifica cuando la descentralización y la confianza entre partes aportan valor real.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t002',
                    label: 'Historia y evolución de las criptomonedas',
                    steps: [
                        {
                            title: 'Línea de tiempo',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Año</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Hito</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1991</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Haber y Stornetta proponen sellar documentos digitales con marcas de tiempo encadenadas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>2008</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Satoshi Nakamoto publica el documento técnico de Bitcoin.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>2009</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se mina el bloque génesis de Bitcoin.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>2015</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Lanzamiento de Ethereum con contratos inteligentes.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>2016–2017</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Hyperledger Fabric para empresas; auge de las ofertas iniciales de monedas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>2020</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Crecimiento de las finanzas descentralizadas (DeFi).</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>2022</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ethereum pasa a prueba de participación (The Merge) y reduce su consumo energético en más del 99 %.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Hoy</strong></td><td style="padding:13px 12px;">Redes de capa 2, monedas estables y tokenización de activos reales.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t003',
                    label: 'Tipos de cadena de bloques: públicas, privadas y consorcio',
                    steps: [
                        {
                            title: 'Tipos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Quién participa</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplos</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pública</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cualquier persona.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Bitcoin, Ethereum</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Criptomonedas, DeFi, aplicaciones abiertas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Privada</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Una organización controla el acceso.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Hyperledger Besu privada</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Registros internos auditables.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Consorcio</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un grupo de organizaciones.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Hyperledger Fabric, R3 Corda</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cadenas de suministro, banca entre entidades.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Híbrida</strong></td><td style="padding:13px 12px;">Combina datos privados con anclaje público.</td><td style="padding:13px 12px;">Soluciones empresariales</td><td style="padding:13px 12px;">Privacidad con verificación pública.</td></tr>
</tbody>
</table>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;"></th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Permisionada</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Sin permiso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Validadores</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Conocidos y autorizados.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cualquiera que cumpla las reglas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Rendimiento</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Alto.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Menor.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Descentralización</strong></td><td style="padding:13px 12px;">Menor.</td><td style="padding:13px 12px;">Mayor.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t004',
                    label: 'Componentes fundamentales de una cadena de bloques',
                    steps: [
                        {
                            title: 'Estructura de un bloque',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Campo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Hash del bloque anterior</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Enlaza con el bloque previo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Marca de tiempo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Momento de creación.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Raíz de Merkle</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Resumen criptográfico de todas las transacciones.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Nonce</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Número usado en la prueba de trabajo.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Transacciones</strong></td><td style="padding:13px 12px;">Operaciones registradas.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
import hashlib, json, time

def crear_bloque(transacciones, hash_anterior):
    bloque = {"tiempo": time.time(), "transacciones": transacciones, "anterior": hash_anterior}
    bloque["hash"] = hashlib.sha256(json.dumps(bloque, sort_keys=True).encode()).hexdigest()
    return bloque

genesis = crear_bloque([], "0")
bloque1 = crear_bloque([{"de": "Ana", "para": "Luis", "monto": 5}], genesis["hash"])
</pre>`,
                            nextButton: 'Siguiente: Otros componentes'
                        },
                        {
                            title: 'Otros componentes',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Componente</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Función</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Nodo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Computadora que mantiene una copia y valida.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Billetera</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Gestiona las claves privadas y firma transacciones.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Dirección</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Identificador público derivado de la clave pública.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Transacción</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Transferencia de valor o llamada a un contrato.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Mempool</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Transacciones pendientes de incluirse en un bloque.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Contrato inteligente</strong></td><td style="padding:13px 12px;">Programa que se ejecuta en la cadena.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t005',
                    label: 'Consenso y mecanismos de seguridad en cadena de bloques',
                    steps: [
                        {
                            title: 'Mecanismos de consenso',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Mecanismo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Funcionamiento</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Prueba de trabajo (PoW)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Los mineros resuelven un problema computacional costoso.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Bitcoin</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Prueba de participación (PoS)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Los validadores bloquean fondos como garantía.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ethereum</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Prueba de autoridad (PoA)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Validadores identificados y autorizados.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Redes privadas</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Tolerancia a fallas bizantinas (PBFT)</strong></td><td style="padding:13px 12px;">Acuerdo por votación entre nodos conocidos.</td><td style="padding:13px 12px;">Hyperledger Fabric (variantes)</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Seguridad'
                        },
                        {
                            title: 'Seguridad',
                            content: `<ul>
    <li>Funciones hash (SHA-256, Keccak-256) garantizan la integridad.</li>
    <li>Firmas digitales prueban la autoría de cada transacción.</li>
    <li>La replicación en muchos nodos evita un punto único de falla.</li>
    <li>Ataque del 51 %: si alguien controla la mayoría del poder de validación podría reescribir la historia reciente.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t006',
                    label: 'Uso de cadena de bloques en diferentes industrias',
                    steps: [
                        {
                            title: 'Casos de uso',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Industria</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Aplicación</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Agroalimentaria</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Trazabilidad del café o la piña desde la finca hasta el consumidor.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Finanzas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pagos internacionales, tokenización, monedas estables.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Salud</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Trazabilidad de medicamentos y consentimiento de datos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Gobierno</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Registros, certificados académicos verificables, compras públicas.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Logística</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Seguimiento de contenedores y documentos de embarque.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Energía</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Certificados de energía renovable.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Arte y entretenimiento</strong></td><td style="padding:13px 12px;">Tokens no fungibles (NFT) y derechos de autor.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
El proyecto del curso, una <strong>plataforma de trazabilidad</strong>, aplica la cadena de bloques para registrar cada etapa de un producto de forma verificable.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_002',
            label: 'Contratos inteligentes',
            subtemas: [
                {
                    id: 'm002-t001',
                    label: 'Conceptos básicos de los contratos inteligentes',
                    steps: [
                        {
                            title: '¿Qué es un contrato inteligente?',
                            content: `<p>Un <strong>contrato inteligente</strong> es un programa almacenado en la cadena de bloques que se ejecuta automáticamente cuando se cumplen ciertas condiciones. Su código y su estado son públicos y no se pueden modificar una vez desplegado (salvo que se diseñe para actualizarse).</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Característica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Implicación</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Determinista</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Todos los nodos obtienen el mismo resultado.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Inmutable</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Los errores no se pueden corregir fácilmente: hay que probar muy bien.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Costo de ejecución (gas)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cada operación consume gas que se paga.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Autónomo</strong></td><td style="padding:13px 12px;">No requiere intermediarios para ejecutarse.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Cuentas en Ethereum'
                        },
                        {
                            title: 'Cuentas en Ethereum',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo de cuenta</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Controlada por</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tiene código</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cuenta externa (EOA)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Una clave privada (persona).</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">No</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Cuenta de contrato</strong></td><td style="padding:13px 12px;">Su propio código.</td><td style="padding:13px 12px;">Sí</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t002',
                    label: 'Lenguajes de programación para contratos inteligentes',
                    steps: [
                        {
                            title: 'Lenguajes',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Lenguaje</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Plataforma</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Características</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Solidity</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ethereum y redes compatibles con la EVM</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El más usado; sintaxis similar a JavaScript.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Vyper</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">EVM</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sintaxis tipo Python; enfocado en la seguridad.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Rust</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Solana, NEAR, Polkadot</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Rendimiento y seguridad de memoria.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Move</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Aptos, Sui</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Recursos que no se pueden copiar ni perder.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Go, Java, JavaScript</strong></td><td style="padding:13px 12px;">Hyperledger Fabric (chaincode)</td><td style="padding:13px 12px;">Lenguajes de propósito general.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t003',
                    label: 'Desarrollo de contratos inteligentes en Ethereum',
                    steps: [
                        {
                            title: 'Primer contrato en Solidity',
                            content: `<pre class="codigo">
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract RegistroTrazabilidad {
    struct Etapa {
        string descripcion;
        string ubicacion;
        uint256 fecha;
        address responsable;
    }

    mapping(string =&gt; Etapa[]) private historial;   // lote =&gt; etapas
    event EtapaRegistrada(string lote, string descripcion, address responsable);

    function registrarEtapa(string calldata lote, string calldata descripcion, string calldata ubicacion) external {
        historial[lote].push(Etapa(descripcion, ubicacion, block.timestamp, msg.sender));
        emit EtapaRegistrada(lote, descripcion, msg.sender);
    }

    function totalEtapas(string calldata lote) external view returns (uint256) {
        return historial[lote].length;
    }
}
</pre>`,
                            nextButton: 'Siguiente: Elementos de Solidity'
                        },
                        {
                            title: 'Elementos de Solidity',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Elemento</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>pragma</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Versión del compilador.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Variables de estado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se guardan en la cadena (costosas).</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>mapping</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Tabla clave → valor.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>struct</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Tipo de dato compuesto.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>event</code> / <code>emit</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Registros que las aplicaciones pueden escuchar.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>msg.sender</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Dirección que llama a la función.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>view</code> / <code>pure</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Funciones que no modifican el estado (sin costo si se llaman fuera de una transacción).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><code>modifier</code></td><td style="padding:13px 12px;">Condiciones reutilizables (por ejemplo, solo el dueño).</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Control de acceso'
                        },
                        {
                            title: 'Control de acceso',
                            content: `<pre class="codigo">
contract RegistroConRoles {
    address public administrador;
    mapping(address =&gt; bool) public productores;

    constructor() { administrador = msg.sender; }

    modifier soloAdministrador() {
        require(msg.sender == administrador, "Solo el administrador");
        _;
    }
    modifier soloProductor() {
        require(productores[msg.sender], "No es un productor autorizado");
        _;
    }

    function autorizarProductor(address cuenta) external soloAdministrador {
        productores[cuenta] = true;
    }
}
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Bibliotecas auditadas como OpenZeppelin ofrecen contratos de control de acceso (<code>Ownable</code>, <code>AccessControl</code>) y tokens estándar: úselas en lugar de escribirlos desde cero.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t004',
                    label: 'Prueba y depuración de contratos inteligentes',
                    steps: [
                        {
                            title: 'Pruebas con Hardhat',
                            content: `<pre class="codigo">
// test/RegistroTrazabilidad.js
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("RegistroTrazabilidad", () =&gt; {
    it("registra una etapa y emite el evento", async () =&gt; {
        const [productor] = await ethers.getSigners();
        const Registro = await ethers.getContractFactory("RegistroTrazabilidad");
        const registro = await Registro.deploy();

        await expect(registro.registrarEtapa("LOTE-01", "Cosecha", "Tarrazú"))
            .to.emit(registro, "EtapaRegistrada")
            .withArgs("LOTE-01", "Cosecha", productor.address);

        expect(await registro.totalEtapas("LOTE-01")).to.equal(1);
    });
});
</pre>
<pre class="codigo">
npx hardhat test
</pre>`,
                            nextButton: 'Siguiente: Depuración'
                        },
                        {
                            title: 'Depuración',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Herramienta</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>console.log</code> de Hardhat</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Imprimir valores desde Solidity en pruebas locales.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Remix IDE</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Depurador paso a paso en el navegador.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Foundry (forge)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pruebas en Solidity, fuzzing y trazas detalladas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Cobertura (solidity-coverage)</strong></td><td style="padding:13px 12px;">Porcentaje de código probado.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Pruebe también los casos que deben fallar: llamadas sin permiso, valores inválidos y desbordamientos.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t005',
                    label: 'Interacción con contratos inteligentes desde aplicaciones externas',
                    steps: [
                        {
                            title: 'Con ethers.js',
                            content: `<pre class="codigo">
import { ethers } from "ethers";

const proveedor = new ethers.BrowserProvider(window.ethereum);   // billetera del navegador
const firmante = await proveedor.getSigner();
const registro = new ethers.Contract(DIRECCION_CONTRATO, ABI, firmante);

// Transacción (cambia el estado; requiere firma y gas)
const tx = await registro.registrarEtapa("LOTE-01", "Tostado", "Heredia");
await tx.wait();

// Lectura (gratuita)
const total = await registro.totalEtapas("LOTE-01");

// Escuchar eventos
registro.on("EtapaRegistrada", (lote, descripcion) =&gt; console.log(lote, descripcion));
</pre>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Concepto</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>ABI</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Descripción en JSON de las funciones y eventos del contrato.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Proveedor</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Conexión a un nodo (Infura, Alchemy o la billetera).</td></tr>
<tr><td style="padding:13px 12px;"><strong>Firmante</strong></td><td style="padding:13px 12px;">Cuenta que firma las transacciones.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t006',
                    label: 'Mejores prácticas y consideraciones de seguridad en el desarrollo de contratos inteligentes',
                    steps: [
                        {
                            title: 'Patrón comprobar-efectos-interacciones',
                            content: `<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #f0cccc; margin-bottom:12px;">
<i class="fa-solid fa-xmark" aria-hidden="true" style="color:#d2232a;"></i> <strong style="color:#d2232a;">Vulnerable a reentrada</strong>
<pre class="codigo">
function retirar() external {
    uint256 monto = saldos[msg.sender];
    (bool ok, ) = msg.sender.call{value: monto}("");   // interacción antes de actualizar
    require(ok);
    saldos[msg.sender] = 0;                             // vulnerable a reentrada
}
</pre>
</div>
<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #c9e2d4; margin-bottom:12px;">
<i class="fa-solid fa-check" aria-hidden="true" style="color:#00734a;"></i> <strong style="color:#00734a;">Correcto</strong>
<pre class="codigo">
function retirar() external nonReentrant {
    uint256 monto = saldos[msg.sender];
    require(monto &gt; 0, "Sin saldo");                    // 1. comprobar
    saldos[msg.sender] = 0;                             // 2. efectos
    (bool ok, ) = msg.sender.call{value: monto}("");    // 3. interacciones
    require(ok, "Transferencia fallida");
}
</pre>
</div>`,
                            nextButton: 'Siguiente: Buenas prácticas'
                        },
                        {
                            title: 'Buenas prácticas',
                            content: `<ol>
    <li>Usar versiones recientes de Solidity (con verificación de desbordamiento).</li>
    <li>Reutilizar bibliotecas auditadas (OpenZeppelin).</li>
    <li>Minimizar el almacenamiento en la cadena (costoso y público).</li>
    <li>No guardar datos personales ni secretos en la cadena.</li>
    <li>Pruebas exhaustivas y análisis estático (Slither).</li>
    <li>Auditoría externa antes de desplegar en la red principal.</li>
    <li>Planificar la actualización (patrón proxy) y una pausa de emergencia.</li>
</ol>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_003',
            label: 'Plataformas y marcos de trabajo',
            subtemas: [
                {
                    id: 'm003-t001',
                    label: 'Plataformas populares de cadena de bloques',
                    steps: [
                        {
                            title: 'Plataformas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Plataforma</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Consenso</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Contratos</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ethereum</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pública</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Prueba de participación</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Solidity, Vyper</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Polygon, Arbitrum, Optimism</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Capa 2 de Ethereum</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Diversos (rollups)</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Solidity</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Solana</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pública</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Prueba de historia + participación</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Rust</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Hyperledger Fabric</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Consorcio</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ordenamiento (Raft)</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Go, Java, JavaScript</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Hyperledger Besu</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pública o privada</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">PoS, PoA, IBFT</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Solidity</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>R3 Corda</strong></td><td style="padding:13px 12px;">Consorcio financiero</td><td style="padding:13px 12px;">Notarios</td><td style="padding:13px 12px;">Kotlin, Java</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t002',
                    label: 'Desarrollo de aplicaciones descentralizadas (DApps) en Ethereum',
                    steps: [
                        {
                            title: 'Arquitectura de una DApp',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-display" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Frontend</b><br><small>React + ethers.js</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-wallet" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Billetera</b><br><small>MetaMask firma</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-cube" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Contrato inteligente</b><br><small>Lógica y estado</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-box-archive" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Almacenamiento</b><br><small>IPFS para archivos</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-magnifying-glass" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Indexador</b><br><small>The Graph para consultas</small></div></div>
</div>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Capa</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tecnología</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Interfaz</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">React, Next.js</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Conexión con billetera</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">ethers.js, viem, wagmi</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Lógica</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Contratos en Solidity</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Archivos grandes</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">IPFS (se guarda el hash en la cadena)</td></tr>
<tr><td style="padding:13px 12px;"><strong>Consultas</strong></td><td style="padding:13px 12px;">Eventos indexados (The Graph)</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Flujo de una DApp de trazabilidad'
                        },
                        {
                            title: 'Flujo de una DApp de trazabilidad',
                            content: `<ol>
    <li>El productor conecta su billetera.</li>
    <li>Registra la etapa “Cosecha” con un formulario.</li>
    <li>La billetera muestra el costo en gas y solicita la firma.</li>
    <li>La transacción se incluye en un bloque.</li>
    <li>El consumidor escanea un código QR del producto y consulta el historial completo.</li>
</ol>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Solo lo esencial se guarda en la cadena (hash, fecha, responsable); los documentos y fotos se guardan fuera de la cadena (IPFS) con su hash para verificar que no cambiaron.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t003',
                    label: 'Uso de Truffle y Ganache para el desarrollo y despliegue de aplicaciones descentralizadas',
                    steps: [
                        {
                            title: 'Truffle y Ganache',
                            content: `<p><strong>Truffle</strong> es un marco de trabajo para compilar, probar y desplegar contratos. <strong>Ganache</strong> crea una cadena de bloques local con cuentas de prueba con fondos ficticios.</p>
<pre class="codigo">
npm install -g truffle ganache
ganache                           # cadena local en http://127.0.0.1:8545
truffle init
truffle compile
truffle migrate --network development
truffle test
</pre>
<pre class="codigo">
// migrations/1_desplegar.js
const RegistroTrazabilidad = artifacts.require("RegistroTrazabilidad");
module.exports = function (deployer) {
    deployer.deploy(RegistroTrazabilidad);
};
</pre>`,
                            nextButton: 'Siguiente: Estado actual de las herramientas'
                        },
                        {
                            title: 'Estado actual de las herramientas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Herramienta</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Situación</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Truffle y Ganache</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">ConsenSys anunció su retiro en 2023; siguen siendo útiles para aprender y en proyectos existentes.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Hardhat</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Entorno en JavaScript/TypeScript con red local incluida (sucesor recomendado por ConsenSys).</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Foundry</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Herramientas muy rápidas con pruebas escritas en Solidity.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Remix</strong></td><td style="padding:13px 12px;">IDE en el navegador para prototipos.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Los conceptos (compilar, migrar o desplegar, probar con una red local) son los mismos en todas las herramientas.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t004',
                    label: 'Exploradores de cadena de bloques y herramientas de monitorización',
                    steps: [
                        {
                            title: 'Exploradores',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Herramienta</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Etherscan (y Sepolia Etherscan)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ver transacciones, bloques, contratos verificados y eventos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Blockscout</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Explorador de código abierto para redes propias.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tenderly</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Monitoreo, alertas y simulación de transacciones.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>OpenZeppelin Defender</strong></td><td style="padding:13px 12px;">Monitoreo y operaciones automatizadas.</td></tr>
</tbody>
</table>
</div>
<ul>
    <li>Verificar el código del contrato en el explorador da transparencia a los usuarios.</li>
    <li>Monitoree eventos y transacciones fallidas para detectar abusos o errores.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t005',
                    label: 'Integración de APIs y servicios externos en aplicaciones de cadena de bloques',
                    steps: [
                        {
                            title: 'Servicios',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Servicio</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Función</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Infura, Alchemy, QuickNode</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Acceso a nodos por API (RPC).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>IPFS, Pinata, Filecoin</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Almacenamiento descentralizado de archivos.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>The Graph</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Indexación y consulta de eventos con GraphQL.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Chainlink</strong></td><td style="padding:13px 12px;">Oráculos para datos externos.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
// Backend que registra en la cadena lo que recibe de un sistema existente (Node.js)
const proveedor = new ethers.JsonRpcProvider(process.env.RPC_URL);
const billetera = new ethers.Wallet(process.env.CLAVE_PRIVADA, proveedor);   // clave en un gestor de secretos
const registro = new ethers.Contract(DIRECCION, ABI, billetera);

app.post("/api/etapas", async (req, res) =&gt; {
    const tx = await registro.registrarEtapa(req.body.lote, req.body.descripcion, req.body.ubicacion);
    res.status(202).json({ hash: tx.hash });
});
</pre>
<p class="nota">
<i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
La clave privada de una cuenta del servidor da control total sobre esa cuenta: guárdela en un gestor de secretos o en un módulo de seguridad de hardware (HSM).</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t006',
                    label: 'Pruebas de rendimiento y escalabilidad en plataformas de cadena de bloques',
                    steps: [
                        {
                            title: 'Métricas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Métrica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Transacciones por segundo (TPS)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Capacidad de procesamiento.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tiempo de confirmación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Hasta que la transacción es definitiva.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Costo por transacción (gas)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Costo económico de cada operación.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Latencia de lectura</strong></td><td style="padding:13px 12px;">Tiempo de consulta al nodo.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Herramientas y optimización de gas'
                        },
                        {
                            title: 'Herramientas y optimización de gas',
                            content: `<ul>
    <li>Hyperledger Caliper: pruebas de rendimiento para varias plataformas.</li>
    <li>Reporte de gas de Hardhat (<code>hardhat-gas-reporter</code>).</li>
</ul>
<pre class="codigo">
// Optimización: calldata en lugar de memory para parámetros de solo lectura,
// tipos compactos y eventos en lugar de almacenamiento cuando el dato solo se consulta fuera de la cadena.
function registrar(bytes32 lote, uint64 fecha) external {
    emit Registro(lote, fecha, msg.sender);      // un evento es mucho más barato que guardar en storage
}
</pre>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_004',
            label: 'Seguridad',
            subtemas: [
                {
                    id: 'm004-t001',
                    label: 'Amenazas y ataques comunes en la cadena de bloques',
                    steps: [
                        {
                            title: 'Ataques',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ataque</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Mitigación</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Reentrada</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un contrato externo vuelve a llamar antes de actualizar el estado.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Comprobar-efectos-interacciones, ReentrancyGuard.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Front-running</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Alguien ve una transacción pendiente y se adelanta.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Esquemas de compromiso y revelación.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Manipulación de oráculos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Datos externos falseados.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Oráculos descentralizados.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Control de acceso deficiente</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Funciones críticas sin restricción.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Modificadores y roles.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ataque del 51 %</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Control mayoritario del consenso.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Redes grandes y descentralizadas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Phishing y robo de claves</strong></td><td style="padding:13px 12px;">Engaño para firmar o revelar la clave.</td><td style="padding:13px 12px;">Billeteras de hardware, educación.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t002',
                    label: 'Criptografía y firmas digitales en la cadena de bloques',
                    steps: [
                        {
                            title: 'Criptografía asimétrica',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-key" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Clave privada</b><br><small>Secreta</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-unlock-keyhole" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Clave pública</b><br><small>Derivada</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-at" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Dirección</b><br><small>Hash de la clave pública</small></div></div>
</div>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Concepto</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Curva elíptica secp256k1 (ECDSA)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Firmas en Bitcoin y Ethereum.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Keccak-256</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Hash usado por Ethereum.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Árbol de Merkle</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Verificar que una transacción está en un bloque sin descargarlo completo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Frase semilla (BIP-39)</strong></td><td style="padding:13px 12px;">Respaldo legible de las claves de una billetera.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Firmar y verificar'
                        },
                        {
                            title: 'Firmar y verificar',
                            content: `<pre class="codigo">
const billetera = ethers.Wallet.createRandom();
const mensaje = "Certifico la entrega del LOTE-01";
const firma = await billetera.signMessage(mensaje);

const firmante = ethers.verifyMessage(mensaje, firma);
console.log(firmante === billetera.address);   // true
</pre>
<p class="nota">
<i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
Quien tiene la clave privada controla los fondos y la identidad: nunca la comparta ni la guarde en texto plano.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t003',
                    label: 'Seguridad de las transacciones en la cadena de bloques',
                    steps: [
                        {
                            title: 'Seguridad de las transacciones',
                            content: `<ul>
    <li>Cada transacción lleva un <strong>nonce</strong> que evita repetirla.</li>
    <li>La firma garantiza que no fue alterada.</li>
    <li>La finalidad: esperar confirmaciones antes de considerarla definitiva.</li>
    <li>Revisar qué se firma: las billeteras muestran la función y los parámetros.</li>
    <li>Simular la transacción antes de enviarla.</li>
    <li>Usar billeteras multifirma para fondos o permisos críticos.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t004',
                    label: 'Auditoría y análisis forense en la cadena de bloques',
                    steps: [
                        {
                            title: 'Auditoría de contratos',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-file-code" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Revisión del alcance</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-robot" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Análisis automático</b><br><small>Slither, Mythril</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-user-secret" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Revisión manual</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-file-signature" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Informe</b><br><small>Hallazgos por severidad</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-wrench" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Corrección y verificación</b><br><small></small></div></div>
</div>
</div>`,
                            nextButton: 'Siguiente: Análisis forense'
                        },
                        {
                            title: 'Análisis forense',
                            content: `<p>Como el registro es público e inmutable, es posible rastrear el flujo de fondos y las acciones de cada dirección después de un incidente.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Herramienta</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Exploradores de bloques</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Seguir transacciones y eventos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Chainalysis, TRM Labs</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Análisis forense comercial.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Tenderly</strong></td><td style="padding:13px 12px;">Reproducir transacciones paso a paso.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t005',
                    label: 'Protección de datos y privacidad en la cadena de bloques',
                    steps: [
                        {
                            title: 'Privacidad',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Reto</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Solución</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Todo es público en una cadena pública</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Guardar solo hashes y datos no personales.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>El derecho al olvido (Ley 8968, RGPD) choca con la inmutabilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Datos personales fuera de la cadena; en la cadena, referencias que se pueden invalidar.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Datos confidenciales entre empresas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Canales privados (Fabric) o colecciones de datos privados.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Probar algo sin revelarlo</strong></td><td style="padding:13px 12px;">Pruebas de conocimiento cero.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
Nunca guarde datos personales (nombre, cédula, correo) directamente en una cadena de bloques pública.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t006',
                    label: 'Contratos inteligentes seguros y mitigación de riesgos',
                    steps: [
                        {
                            title: 'Mitigación',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Riesgo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Mitigación</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Error en el código desplegado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Patrón proxy actualizable con gobernanza.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Explotación activa</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Función de pausa (<code>Pausable</code>).</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pérdida de la clave del administrador</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Multifirma y bloqueo temporal (timelock).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Dependencias vulnerables</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Versiones fijas y auditadas.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Desconocimiento de fallas</strong></td><td style="padding:13px 12px;">Programas de recompensas por errores (bug bounty).</td></tr>
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
            label: 'Interoperabilidad y consenso',
            subtemas: [
                {
                    id: 'm005-t001',
                    label: 'Interoperabilidad entre diferentes cadenas de bloques',
                    steps: [
                        {
                            title: 'Interoperabilidad',
                            content: `<p>La <strong>interoperabilidad</strong> permite transferir activos o mensajes entre cadenas distintas.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Mecanismo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Riesgo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Puentes (bridges)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Bloquean activos en una cadena y emiten equivalentes en otra.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Han sufrido grandes ataques.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Protocolos de mensajería</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">IBC (Cosmos), CCIP (Chainlink), LayerZero.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Complejidad.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Cadenas de retransmisión</strong></td><td style="padding:13px 12px;">Polkadot conecta parachains.</td><td style="padding:13px 12px;">Dependencia del ecosistema.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t002',
                    label: 'Protocolos de consenso',
                    steps: [
                        {
                            title: 'Comparación de protocolos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Protocolo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Finalidad</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Rendimiento</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tolerancia</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Energía</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>PoW</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Probabilística</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Bajo</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">&lt; 50 % del poder de cómputo</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Muy alta</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>PoS (Gasper en Ethereum)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Económica (épocas)</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Medio</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">&lt; 1/3 del stake malicioso para finalidad</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Baja</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>PoA</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Rápida</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Alto</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Validadores confiables</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Baja</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>PBFT / IBFT</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Inmediata</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Alto en redes pequeñas</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">&lt; 1/3 de nodos bizantinos</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Baja</td></tr>
<tr><td style="padding:13px 12px;"><strong>Raft</strong></td><td style="padding:13px 12px;">Inmediata</td><td style="padding:13px 12px;">Alto</td><td style="padding:13px 12px;">Solo fallas por caída (no bizantinas)</td><td style="padding:13px 12px;">Baja</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Las redes empresariales con participantes conocidos suelen preferir PBFT, IBFT o Raft por su finalidad inmediata.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t003',
                    label: 'Soluciones de escalabilidad y fragmentación en la cadena de bloques',
                    steps: [
                        {
                            title: 'El trilema de la cadena de bloques',
                            content: `<p>Es difícil maximizar a la vez <strong>descentralización</strong>, <strong>seguridad</strong> y <strong>escalabilidad</strong>.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Solución</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Rollups optimistas (capa 2)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Agrupan transacciones fuera de la cadena y publican el resultado; asumen validez salvo prueba de fraude.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Rollups de conocimiento cero</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Publican una prueba criptográfica de validez.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Canales de estado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Transacciones entre partes fuera de la cadena (Lightning Network).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cadenas laterales</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cadenas independientes conectadas por un puente.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Fragmentación (sharding) y danksharding</strong></td><td style="padding:13px 12px;">Dividir los datos o la ejecución en fragmentos.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t004',
                    label: 'Intercambios atómicos y tecnologías de intercambio descentralizado',
                    steps: [
                        {
                            title: 'Intercambios atómicos',
                            content: `<p>Un <strong>intercambio atómico</strong> permite intercambiar activos entre dos cadenas sin intermediario: o se completan ambas partes, o ninguna. Usa contratos con bloqueo por hash y tiempo (HTLC).</p>
<ol>
    <li>Ana genera un secreto y bloquea sus fondos con el hash del secreto.</li>
    <li>Luis bloquea sus fondos en la otra cadena con el mismo hash.</li>
    <li>Ana retira los fondos de Luis revelando el secreto.</li>
    <li>Luis usa el secreto revelado para retirar los fondos de Ana.</li>
    <li>Si alguien no cumple, los fondos regresan al vencer el plazo.</li>
</ol>`,
                            nextButton: 'Siguiente: Intercambios descentralizados'
                        },
                        {
                            title: 'Intercambios descentralizados (DEX)',
                            content: `<p>Los <strong>creadores de mercado automatizados</strong> (AMM), como Uniswap, usan fondos de liquidez y una fórmula (x · y = k) para fijar el precio sin libro de órdenes.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t005',
                    label: 'Oráculos y acceso a datos externos en la cadena de bloques',
                    steps: [
                        {
                            title: 'El problema del oráculo',
                            content: `<p>Un contrato inteligente no puede consultar Internet: necesita un <strong>oráculo</strong> que lleve datos externos (precios, clima, resultados, sensores) a la cadena.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Centralizado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Una empresa publica el dato (punto único de falla).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Descentralizado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Red de nodos que agregan fuentes (Chainlink).</td></tr>
<tr><td style="padding:13px 12px;"><strong>De hardware</strong></td><td style="padding:13px 12px;">Sensores IoT firman lecturas (temperatura de un contenedor).</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
// Consumir un precio de Chainlink
AggregatorV3Interface feed = AggregatorV3Interface(DIRECCION_FEED_USD);
(, int256 precio, , uint256 actualizado, ) = feed.latestRoundData();
require(block.timestamp - actualizado &lt; 1 hours, "Dato desactualizado");
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t006',
                    label: 'Desarrollo de soluciones multiplataforma utilizando protocolos de consenso',
                    steps: [
                        {
                            title: 'Soluciones multicadena',
                            content: `<ul>
    <li>Desplegar el mismo contrato en varias redes compatibles con la EVM.</li>
    <li>Usar mensajería entre cadenas para sincronizar estados.</li>
    <li>Abstraer la red en el frontend (wagmi y viem soportan varias redes).</li>
    <li>Elegir la red según el costo, la velocidad y la comunidad de usuarios.</li>
</ul>
<pre class="codigo">
// hardhat.config.js: varias redes de prueba
networks: {
    sepolia: { url: process.env.SEPOLIA_RPC, accounts: [process.env.CLAVE] },
    amoy:    { url: process.env.POLYGON_AMOY_RPC, accounts: [process.env.CLAVE] }
}
</pre>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_006',
            label: 'Aplicaciones empresariales',
            subtemas: [
                {
                    id: 'm006-t001',
                    label: 'Soluciones en cadena de bloques para la gestión de la cadena de suministro',
                    steps: [
                        {
                            title: 'Trazabilidad',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-seedling" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Finca</b><br><small>Cosecha</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-industry" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Beneficio</b><br><small>Procesamiento</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-fire" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Tostadora</b><br><small>Tostado</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-ship" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Exportación</b><br><small>Embarque</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-store" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Comercio</b><br><small>Venta</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-qrcode" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Consumidor</b><br><small>Escanea el QR</small></div></div>
</div>
</div>
<ul>
    <li>Cada actor registra su etapa firmada con su identidad.</li>
    <li>Certificados (orgánico, comercio justo) se guardan como documentos con hash.</li>
    <li>Sensores IoT pueden registrar temperatura y humedad.</li>
    <li>El consumidor verifica el origen real del producto.</li>
</ul>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Ejemplos reales: IBM Food Trust y proyectos de trazabilidad de café y cacao en Latinoamérica.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t002',
                    label: 'Registros y notarización de documentos en cadena de bloques',
                    steps: [
                        {
                            title: 'Notarización',
                            content: `<p>Se guarda en la cadena el <strong>hash</strong> de un documento con su marca de tiempo. Cualquiera puede verificar después que el documento no cambió, sin publicar su contenido.</p>
<pre class="codigo">
import hashlib
with open("titulo_bachillerato.pdf", "rb") as f:
    huella = hashlib.sha256(f.read()).hexdigest()
# Se registra 'huella' en el contrato; para verificar, se recalcula y se compara.
</pre>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Aplicación</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Beneficio</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Títulos académicos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Verificación instantánea por empleadores.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Contratos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Prueba de existencia y fecha.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Registros de propiedad</strong></td><td style="padding:13px 12px;">Historial transparente.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t003',
                    label: 'Simbolización de activos y financiación descentralizada (DeFi)',
                    steps: [
                        {
                            title: 'Tokens',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Estándar</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>ERC-20</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Fungible (todos iguales)</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Monedas, puntos de lealtad.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>ERC-721</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">No fungible (único)</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Certificado de un lote específico.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>ERC-1155</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Múltiple</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Videojuegos, inventarios.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>ERC-3643</strong></td><td style="padding:13px 12px;">Valores con permisos</td><td style="padding:13px 12px;">Tokenización regulada de activos.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract PuntosCafe is ERC20 {
    constructor() ERC20("Puntos Cafe", "PCAF") { _mint(msg.sender, 1_000_000 * 10 ** decimals()); }
}
</pre>`,
                            nextButton: 'Siguiente: Finanzas descentralizadas'
                        },
                        {
                            title: 'Finanzas descentralizadas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Servicio DeFi</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Préstamos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Préstamos con garantía en criptoactivos (Aave).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Intercambios</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">DEX con AMM.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Monedas estables</strong></td><td style="padding:13px 12px;">Valor ligado al dólar.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
Las DeFi implican riesgos técnicos, de mercado y regulatorios; en Costa Rica, el BCCR y la SUGEF han emitido advertencias sobre los criptoactivos.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t004',
                    label: 'Votación y sistemas de identidad en cadena de bloques',
                    steps: [
                        {
                            title: 'Identidad autosoberana',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Concepto</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Identificador descentralizado (DID)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Identificador controlado por la persona, no por una empresa.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Credencial verificable</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Documento firmado por un emisor (universidad, gobierno).</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Billetera de identidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">La persona guarda y presenta sus credenciales.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Divulgación selectiva</strong></td><td style="padding:13px 12px;">Probar “soy mayor de edad” sin revelar la fecha de nacimiento.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Votación'
                        },
                        {
                            title: 'Votación',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ventajas</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Retos</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Registro auditable e inmutable.</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Secreto del voto.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Conteo transparente.</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Coacción y compra de votos.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Votación remota.</strong></td><td style="padding:13px 12px;">Acceso equitativo y confianza ciudadana.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Hoy la votación con cadena de bloques se usa principalmente en organizaciones (DAO, cooperativas); su uso en elecciones nacionales sigue siendo muy debatido.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t005',
                    label: 'Aplicaciones de cadena de bloques en el sector financiero y banca',
                    steps: [
                        {
                            title: 'Aplicaciones',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Aplicación</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pagos transfronterizos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Liquidación más rápida y económica.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Monedas digitales de bancos centrales (CBDC)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Dinero digital emitido por el banco central.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Financiamiento del comercio</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cartas de crédito digitales compartidas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Conozca a su cliente (KYC) compartido</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Verificación reutilizable entre entidades.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Tokenización de bonos y valores</strong></td><td style="padding:13px 12px;">Emisión y liquidación digital.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t006',
                    label: 'Integración de cadena de bloques en sistemas existentes y migración de datos',
                    steps: [
                        {
                            title: 'Integración',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-database" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Sistema existente</b><br><small>ERP, base de datos</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-server" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Servicio de integración</b><br><small>API + billetera del servidor</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-cube" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Cadena de bloques</b><br><small>Registro inmutable</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-magnifying-glass" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Indexador</b><br><small>Consultas rápidas</small></div></div>
</div>
</div>
<ol>
    <li>Identificar qué datos necesitan inmutabilidad y verificación compartida.</li>
    <li>Mantener la base de datos como fuente operativa; registrar en la cadena hashes y eventos clave.</li>
    <li>Exponer una API que oculte la complejidad de la cadena.</li>
    <li>Migrar datos históricos por lotes, registrando sus hashes.</li>
    <li>Monitorear y conciliar ambos registros.</li>
</ol>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t007',
                    label: 'Cadena de bloques para analítica de datos',
                    steps: [
                        {
                            title: 'Analítica',
                            content: `<ul>
    <li>Los eventos de los contratos son una fuente de datos estructurada y confiable.</li>
    <li>Herramientas: Dune Analytics, Google BigQuery con conjuntos de datos públicos de Ethereum, The Graph.</li>
    <li>Indicadores de un sistema de trazabilidad: tiempo entre etapas, lotes por productor, certificaciones vigentes.</li>
</ul>
<pre class="codigo">
-- Dune / SQL: etapas registradas por día en el contrato de trazabilidad
SELECT date_trunc('day', evt_block_time) AS dia, count(*) AS etapas
FROM trazabilidad_ethereum.RegistroTrazabilidad_evt_EtapaRegistrada
GROUP BY 1 ORDER BY 1;
</pre>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_007',
            label: 'Desarrollo avanzado',
            subtemas: [
                {
                    id: 'm007-t001',
                    label: 'Desarrollo de capas de aplicación y protocolos personalizados',
                    steps: [
                        {
                            title: 'Capas de una solución',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Capa</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplos</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Capa 0</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Infraestructura de interoperabilidad (Polkadot, Cosmos).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Capa 1</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cadena base (Ethereum, Solana).</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Capa 2</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Escalabilidad (rollups).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Capa de aplicación</strong></td><td style="padding:13px 12px;">Contratos y DApps.</td></tr>
</tbody>
</table>
</div>
<ul>
    <li>Protocolos personalizados: reglas de negocio codificadas en un conjunto de contratos con estándares propios.</li>
    <li>Cadenas específicas de aplicación (appchains) con Cosmos SDK o Substrate.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t002',
                    label: 'Mejora de la escalabilidad y el rendimiento de las plataformas de cadena de bloques',
                    steps: [
                        {
                            title: 'Estrategias',
                            content: `<ul>
    <li>Desplegar en una red de capa 2 para reducir costos.</li>
    <li>Agrupar operaciones (batching).</li>
    <li>Mover datos y cálculos fuera de la cadena y guardar solo compromisos (hashes, raíces de Merkle).</li>
    <li>Optimizar el gas del contrato.</li>
    <li>Usar indexadores para lecturas en lugar de consultar la cadena directamente.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t003',
                    label: 'Investigación y desarrollo de soluciones de consenso innovadoras',
                    steps: [
                        {
                            title: 'Líneas de investigación',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Línea</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Consenso basado en grafos (DAG)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Transacciones en un grafo en lugar de una cadena lineal (IOTA, Hedera).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Prueba de historia</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Reloj verificable para ordenar eventos (Solana).</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Protocolos BFT modernos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">HotStuff, Tendermint: finalidad rápida.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Separación de proponente y constructor</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Reducir la extracción de valor máximo (MEV).</td></tr>
<tr><td style="padding:13px 12px;"><strong>Consenso resistente a la computación cuántica</strong></td><td style="padding:13px 12px;">Firmas poscuánticas.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t004',
                    label: 'Implementación de mecanismos de privacidad y confidencialidad en la cadena de bloques',
                    steps: [
                        {
                            title: 'Mecanismos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Mecanismo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pruebas de conocimiento cero (zk-SNARK, zk-STARK)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Demostrar que algo es cierto sin revelar los datos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Canales y colecciones privadas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Datos visibles solo para ciertos miembros (Fabric).</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cómputo multiparte</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Calcular sobre datos de varias partes sin revelarlos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cifrado homomórfico</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Operar sobre datos cifrados.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Entornos de ejecución confiables</strong></td><td style="padding:13px 12px;">Hardware seguro (TEE).</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t005',
                    label: 'Optimización y auditoría de contratos inteligentes',
                    steps: [
                        {
                            title: 'Herramientas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Herramienta</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Slither</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Análisis estático.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Mythril</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ejecución simbólica.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Echidna, Foundry fuzz</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Fuzzing de propiedades.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Certora</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Verificación formal.</td></tr>
<tr><td style="padding:13px 12px;"><strong>hardhat-gas-reporter</strong></td><td style="padding:13px 12px;">Consumo de gas.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
slither contracts/RegistroTrazabilidad.sol
forge test --fuzz-runs 10000
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Optimizar el gas nunca debe sacrificar la legibilidad ni la seguridad del contrato.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t006',
                    label: 'Tendencias futuras y aplicaciones emergentes en la cadena de bloques',
                    steps: [
                        {
                            title: 'Tendencias',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tendencia</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tokenización de activos del mundo real</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Bonos, inmuebles y materias primas en la cadena.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Abstracción de cuentas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Billeteras más fáciles: recuperación social, pago de gas por terceros.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Identidad digital y credenciales verificables</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Adopción por gobiernos y universidades.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Convergencia con IA</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Procedencia de datos y modelos, agentes con billeteras.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Regulación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Marcos como MiCA en Europa y avances regionales.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Sostenibilidad</strong></td><td style="padding:13px 12px;">Consensos de bajo consumo y créditos de carbono verificables.</td></tr>
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
