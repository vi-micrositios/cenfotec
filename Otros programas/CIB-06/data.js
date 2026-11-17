const data = {
    // Pantalla de bienvenida
    welcome: {
        title: 'CIB-06 <br> Desarrollo Seguro del Software',
        image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/CIB-06/imgs/logo.png', // Cambiar por imagen real
        description: 'Mecanismos de defensa en todas las fases del ciclo de vida del software para prevenir ataques y corregir vulnerabilidades antes de la implementación: requisitos, diseño, codificación, pruebas y operación seguras.',
        instruction: 'Seleccione cada pestaña para acceder a la información'
    },
    // Temas principales y sus subtemas con pasos
    temas: [
        {
            id: 'modulo_001',
            label: 'Conceptos de software seguro',
            subtemas: [
                {
                    id: 'm001-t001',
                    label: 'Tríada de seguridad de la información',
                    steps: [
                        {
                            title: 'La tríada CIA',
                            content: `<div style="display:flex; flex-wrap:wrap; gap:12px; margin:12px 0;">
<div style="flex:1 1 200px; padding:14px; border:1px solid #9cc8ff; border-top:4px solid #2b93d1; border-radius:10px; background:#ffffff;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-user-secret" style="color:#164a98; margin-right:6px;" aria-hidden="true"></i><strong>Confidencialidad</strong></p><p style="margin:0;">Solo las personas autorizadas acceden a la información.</p></div>
<div style="flex:1 1 200px; padding:14px; border:1px solid #9cc8ff; border-top:4px solid #2b93d1; border-radius:10px; background:#ffffff;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-check-double" style="color:#164a98; margin-right:6px;" aria-hidden="true"></i><strong>Integridad</strong></p><p style="margin:0;">La información no se modifica sin autorización y es exacta.</p></div>
<div style="flex:1 1 200px; padding:14px; border:1px solid #9cc8ff; border-top:4px solid #2b93d1; border-radius:10px; background:#ffffff;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-server" style="color:#164a98; margin-right:6px;" aria-hidden="true"></i><strong>Disponibilidad</strong></p><p style="margin:0;">La información y los servicios están accesibles cuando se necesitan.</p></div>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Propiedad</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ataque típico</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Consecuencia</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Confidencialidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Robo de credenciales, fuga de una base de datos.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Exposición de datos personales.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Integridad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Manipulación de parámetros, inyección SQL.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Saldos o notas alterados.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Disponibilidad</strong></td><td style="padding:13px 12px;">Denegación de servicio (DoS), ransomware.</td><td style="padding:13px 12px;">El sistema no atiende a los usuarios.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Más allá de la tríada'
                        },
                        {
                            title: 'Más allá de la tríada',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Propiedad</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Autenticidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se puede verificar la identidad del origen.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>No repudio</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El autor no puede negar una acción.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Responsabilidad (accountability)</strong></td><td style="padding:13px 12px;">Cada acción se asocia a quien la hizo.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t002',
                    label: 'Mecanismos de confidencialidad, integridad y disponibilidad de la información',
                    steps: [
                        {
                            title: 'Mecanismos por propiedad',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Propiedad</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Mecanismos</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Confidencialidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cifrado (AES, TLS), control de acceso, enmascaramiento de datos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Integridad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Funciones hash (SHA-256), HMAC, firmas digitales, validación de entradas, transacciones.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Disponibilidad</strong></td><td style="padding:13px 12px;">Redundancia, balanceo de carga, respaldos, limitación de solicitudes, monitoreo.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Uso de la criptografía'
                        },
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
                    id: 'm001-t003',
                    label: 'Seguridad de la información y privacidad de los datos',
                    steps: [
                        {
                            title: 'Seguridad frente a privacidad',
                            content: `<p>La <strong>seguridad</strong> protege la información; la <strong>privacidad</strong> es el derecho de las personas a decidir sobre sus datos personales. Se puede tener un sistema seguro que, aun así, recolecta más datos de los necesarios.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Principio de privacidad</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">En el software</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Minimización</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Recolectar solo lo necesario.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Finalidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Usar los datos solo para el fin informado.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Consentimiento</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pedir autorización clara.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Derechos ARCO</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Acceso, rectificación, cancelación y oposición.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Privacidad por diseño</strong></td><td style="padding:13px 12px;">Considerarla desde los requisitos.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
En Costa Rica rige la Ley 8968 de Protección de la Persona frente al Tratamiento de sus Datos Personales; en Europa, el RGPD.</p>`,
                            nextButton: 'Siguiente: Privacidad'
                        },
                        {
                            title: 'Privacidad',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Requisito</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ley 8968 (Costa Rica)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Consentimiento informado y derechos de acceso, rectificación y eliminación.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>RGPD (Europa)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Aplica si hay usuarios en la Unión Europea.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Etiquetas de privacidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Declaración de datos recolectados en Google Play (Data safety) y App Store (Privacy Nutrition Labels).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>App Tracking Transparency (iOS)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pedir permiso para rastrear entre apps.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Minimización</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Recolectar solo lo necesario.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Datos de menores</strong></td><td style="padding:13px 12px;">Requisitos adicionales de consentimiento.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t004',
                    label: 'Responsabilidad, auditoría y registro en la seguridad del software',
                    steps: [
                        {
                            title: 'Registros de auditoría',
                            content: `<p>Un buen registro permite responder <strong>quién</strong> hizo <strong>qué</strong>, <strong>cuándo</strong>, <strong>desde dónde</strong> y con qué <strong>resultado</strong>.</p>
<p><strong>python</strong></p>
<pre class="codigo">
import logging, json
from datetime import datetime, timezone

audit = logging.getLogger("auditoria")

def registrar(usuario, accion, recurso, exito, ip):
    audit.info(json.dumps({
        "fecha": datetime.now(timezone.utc).isoformat(),
        "usuario": usuario, "accion": accion,
        "recurso": recurso, "exito": exito, "ip": ip,
    }))

registrar("ana", "LOGIN", "/api/sesion", False, "10.0.0.5")
</pre>
<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #f0cccc; margin-bottom:12px;">
<i class="fa-solid fa-xmark" aria-hidden="true" style="color:#d2232a;"></i> <strong style="color:#d2232a;">Incorrecto</strong>
<pre class="codigo">
Registrar contraseñas, números de tarjeta o tokens en los registros.
</pre>
</div>
<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #c9e2d4; margin-bottom:12px;">
<i class="fa-solid fa-check" aria-hidden="true" style="color:#00734a;"></i> <strong style="color:#00734a;">Correcto</strong>
<pre class="codigo">
Proteger los registros contra modificación, centralizarlos (SIEM) y definir cuánto tiempo se conservan.
</pre>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t005',
                    label: 'No repudio, firmas digitales y cadena de bloques',
                    steps: [
                        {
                            title: 'No repudio',
                            content: `<p>El <strong>no repudio</strong> impide que el autor de un mensaje o transacción niegue haberlo hecho. Se logra con <strong>firmas digitales</strong>: solo quien posee la llave privada puede firmar, y cualquiera puede verificar con la llave pública.</p>
<p><strong>python</strong></p>
<pre class="codigo">
from cryptography.hazmat.primitives.asymmetric import ed25519

privada = ed25519.Ed25519PrivateKey.generate()
publica = privada.public_key()

mensaje = b"Transferir 50 000 colones a la cuenta X"
firma = privada.sign(mensaje)
publica.verify(firma, mensaje)   # lanza InvalidSignature si se alteró
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
En Costa Rica, la firma digital certificada tiene el mismo valor que la firma manuscrita (Ley 8454).</p>`,
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
                    id: 'm001-t006',
                    label: 'Principios de diseño de seguridad en el desarrollo de software',
                    steps: [
                        {
                            title: 'Principios de Saltzer y Schroeder',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Principio</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Mínimo privilegio</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cada componente con los permisos mínimos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Valores predeterminados seguros</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Negar por defecto.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Mediación completa</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Verificar cada acceso, no solo el primero.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Economía del mecanismo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Diseños simples son más fáciles de asegurar.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Diseño abierto</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">La seguridad no depende de ocultar el diseño.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Separación de privilegios</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Exigir más de una condición.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Mínimo mecanismo común</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Reducir recursos compartidos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Aceptabilidad psicológica</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">La seguridad debe ser fácil de usar.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Defensa en profundidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Varias capas de protección.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Fallar de forma segura</strong></td><td style="padding:13px 12px;">Ante un error, negar el acceso.</td></tr>
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
            label: 'Ciclo de vida seguro del software y gestión de riesgos',
            subtemas: [
                {
                    id: 'm002-t001',
                    label: 'Modelos de madurez',
                    steps: [
                        {
                            title: 'Modelos de madurez de seguridad',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Modelo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>OWASP SAMM</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Evalúa cinco funciones (gobierno, diseño, implementación, verificación y operaciones) en niveles de 0 a 3.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>BSIMM</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Describe las prácticas observadas en organizaciones reales.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>NIST SSDF (SP 800-218)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Marco de prácticas de desarrollo seguro.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>CMMI</strong></td><td style="padding:13px 12px;">Madurez general de procesos, base para los anteriores.</td></tr>
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
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t002',
                    label: 'Procesos y estándares de configuración de seguridad',
                    steps: [
                        {
                            title: 'Configuración segura',
                            content: `<p>Una <strong>línea base de configuración</strong> define cómo deben configurarse servidores, bases de datos, contenedores y aplicaciones. Los errores de configuración están en el OWASP Top 10 (A05).</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Estándar</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>CIS Benchmarks</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Guías de configuración por producto.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>DISA STIG</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Guías del Departamento de Defensa de EE. UU.</td></tr>
<tr><td style="padding:13px 12px;"><strong>ISO/IEC 27001 (anexo A)</strong></td><td style="padding:13px 12px;">Controles de seguridad.</td></tr>
</tbody>
</table>
</div>
<ul>
    <li>Eliminar cuentas, servicios y páginas de ejemplo.</li>
    <li>Cambiar credenciales predeterminadas.</li>
    <li>Desactivar mensajes de error detallados en producción.</li>
    <li>Aplicar encabezados HTTP de seguridad.</li>
    <li>Gestionar la configuración como código y revisarla.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t003',
                    label: 'Prácticas de seguridad en el ciclo de vida del software',
                    steps: [
                        {
                            title: 'Ciclo de vida de desarrollo seguro (SDL)',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-graduation-cap" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Capacitación</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-clipboard-list" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Requisitos</b><br><small>Seguridad y privacidad</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-pen-ruler" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Diseño</b><br><small>Modelado de amenazas</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-code" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Implementación</b><br><small>Codificación segura, SAST</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-vial" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Verificación</b><br><small>DAST, pruebas de penetración</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-rocket" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Liberación</b><br><small>Plan de respuesta</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-eye" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Respuesta</b><br><small>Monitoreo</small></div></div>
</div>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
<strong>Desplazar a la izquierda</strong> (shift left): corregir una vulnerabilidad en diseño cuesta mucho menos que en producción.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t004',
                    label: 'Seguridad en la planificación predictiva y adaptativa',
                    steps: [
                        {
                            title: 'Predictiva frente a adaptativa',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;"></th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Predictiva (cascada)</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Adaptativa (ágil)</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Requisitos de seguridad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se definen al inicio.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Historias de seguridad y criterios de aceptación en cada iteración.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Revisión de diseño</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Una revisión formal.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Modelado de amenazas ligero por funcionalidad.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pruebas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Fase de pruebas al final.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Automatizadas en cada integración.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Rol</strong></td><td style="padding:13px 12px;">Equipo de seguridad externo.</td><td style="padding:13px 12px;">Campeones de seguridad dentro del equipo.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
Historia de abuso:
  Como atacante, quiero probar miles de contraseñas en el inicio de sesión
  para tomar el control de una cuenta.

Criterio de aceptación de seguridad:
  Después de 5 intentos fallidos, la cuenta se bloquea 15 minutos
  y se registra el evento.
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t005',
                    label: 'Proceso de gestión de riesgos.',
                    steps: [
                        {
                            title: 'Proceso de gestión de riesgos (ISO 31000 / NIST SP 800-30)',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-magnifying-glass" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Identificar</b><br><small>Activos, amenazas, vulnerabilidades</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-chart-simple" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Analizar</b><br><small>Probabilidad e impacto</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-ranking-star" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Evaluar</b><br><small>Priorizar</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-shield-halved" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Tratar</b><br><small>Mitigar, transferir, evitar, aceptar</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-eye" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Monitorear</b><br><small></small></div></div>
</div>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Probabilidad \\ Impacto</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Bajo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Medio</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Alto</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Alta</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Medio</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Alto</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Crítico</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Media</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Bajo</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Medio</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Alto</td></tr>
<tr><td style="padding:13px 12px;"><strong>Baja</strong></td><td style="padding:13px 12px;">Bajo</td><td style="padding:13px 12px;">Bajo</td><td style="padding:13px 12px;">Medio</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Riesgo = probabilidad × impacto. El riesgo residual es el que queda después de aplicar controles.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t006',
                    label: 'Riesgos operativos en el entorno de integración e implementación',
                    steps: [
                        {
                            title: 'Riesgos en la tubería CI/CD',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Riesgo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Control</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Secretos en el repositorio</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Gestor de secretos y escaneo con gitleaks.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Dependencias comprometidas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Fijar versiones y analizar con SCA.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ejecutores (runners) con demasiados permisos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mínimo privilegio y ejecutores efímeros.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cambios sin revisión</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ramas protegidas y aprobaciones obligatorias.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Artefactos alterados</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Firmar artefactos y verificar antes de desplegar.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Diferencias entre ambientes</strong></td><td style="padding:13px 12px;">Infraestructura como código.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: ¿Qué es la integración continua?'
                        },
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
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_003',
            label: 'Requisitos de software seguro',
            subtemas: [
                {
                    id: 'm003-t001',
                    label: 'Administración de requisitos de seguridad',
                    steps: [
                        {
                            title: 'Requerimientos de seguridad',
                            content: `<p>Los requerimientos de seguridad protegen la <strong>confidencialidad</strong>, la <strong>integridad</strong> y la <strong>disponibilidad</strong> de la información (tríada CIA).</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Área</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo de requerimiento</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Autenticación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El usuario se identifica con correo y contraseña de al menos 12 caracteres.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Autorización</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Solo el director puede eliminar estudiantes.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Confidencialidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Los datos personales viajan cifrados con HTTPS.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Integridad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cada cambio de datos registra el usuario, la fecha y la hora.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Disponibilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se realiza una copia de seguridad diaria de la base de datos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Privacidad</strong></td><td style="padding:13px 12px;">Se cumple la Ley 8968 de Protección de la Persona frente al Tratamiento de sus Datos Personales.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Casos de mal uso'
                        },
                        {
                            title: 'Casos de mal uso',
                            content: `<p>Un <strong>caso de mal uso</strong> describe lo que un atacante intentaría hacer. Ayuda a descubrir requerimientos de seguridad.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Caso de mal uso</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Requerimiento de seguridad que genera</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Adivinar contraseñas probando muchas combinaciones.</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Bloquear la cuenta 15 minutos después de 5 intentos fallidos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Consultar estudiantes de otro centro modificando la URL.</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Verificar en el servidor que el usuario pertenece al centro consultado.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Insertar código en un campo de texto.</strong></td><td style="padding:13px 12px;">Validar y escapar todas las entradas del usuario.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t002',
                    label: 'Requisitos funcionales y no funcionales',
                    steps: [
                        {
                            title: 'Requisitos de seguridad funcionales y no funcionales',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Funcional</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El sistema debe solicitar un segundo factor de autenticación a los administradores.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Funcional</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El sistema debe permitir al usuario descargar sus datos personales.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>No funcional</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Todas las comunicaciones deben usar TLS 1.2 o superior.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>No funcional</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Las contraseñas deben almacenarse con Argon2id o bcrypt.</td></tr>
<tr><td style="padding:13px 12px;"><strong>No funcional</strong></td><td style="padding:13px 12px;">El sistema debe soportar 1000 solicitudes por segundo sin degradarse.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
OWASP ASVS (Application Security Verification Standard) es un catálogo de requisitos verificables organizado en tres niveles.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t003',
                    label: 'Patrones de ataque conocidos',
                    steps: [
                        {
                            title: 'Catálogos de ataques',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Catálogo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Contenido</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>CAPEC</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Patrones de ataque (por ejemplo, CAPEC-66 Inyección SQL).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>CWE</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Debilidades de software (por ejemplo, CWE-79 XSS).</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>CVE</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Vulnerabilidades concretas en productos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>MITRE ATT&CK</strong></td><td style="padding:13px 12px;">Tácticas y técnicas de adversarios.</td></tr>
</tbody>
</table>
</div>
<p>Usar estos catálogos al definir requisitos ayuda a escribir <strong>casos de abuso</strong>: cómo un atacante intentaría usar mal cada funcionalidad.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t004',
                    label: 'Matriz de trazabilidad de requisitos de seguridad',
                    steps: [
                        {
                            title: 'Matriz de trazabilidad',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Requisito</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Origen</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Diseño</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Código</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Prueba</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Estado</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>RS-01 Contraseñas con Argon2id</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">ASVS 2.4.1</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Servicio de autenticación</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">auth/hash.py</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">PS-01</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Verificado</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>RS-02 Bloqueo tras 5 intentos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Caso de abuso CA-03</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Controlador de sesión</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">auth/login.py</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">PS-02</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Verificado</td></tr>
<tr><td style="padding:13px 12px;"><strong>RS-03 Cifrado en tránsito</strong></td><td style="padding:13px 12px;">Ley 8968</td><td style="padding:13px 12px;">Balanceador con TLS</td><td style="padding:13px 12px;">infra/nginx.conf</td><td style="padding:13px 12px;">PS-05</td><td style="padding:13px 12px;">Pendiente</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
La matriz demuestra ante una auditoría que cada requisito se implementó y se probó.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t005',
                    label: 'Políticas y marcos de seguridad',
                    steps: [
                        {
                            title: 'Marcos de seguridad',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Marco</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Enfoque</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>ISO/IEC 27001 y 27002</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sistema de gestión de seguridad de la información y controles.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>NIST Cybersecurity Framework 2.0</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Gobernar, identificar, proteger, detectar, responder y recuperar.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>NIST SSDF</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Desarrollo seguro.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>CIS Controls</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">18 controles priorizados.</td></tr>
<tr><td style="padding:13px 12px;"><strong>COBIT</strong></td><td style="padding:13px 12px;">Gobierno de TI.</td></tr>
</tbody>
</table>
</div>
<p>Una <strong>política de seguridad</strong> es un documento aprobado por la dirección que define reglas obligatorias, por ejemplo, la política de contraseñas o de clasificación de la información.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t006',
                    label: 'Requisitos de cumplimiento: leyes, regulaciones y estándares',
                    steps: [
                        {
                            title: 'Cumplimiento',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Norma</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ámbito</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ley 8968 (Costa Rica)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Datos personales.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ley 8454 (Costa Rica)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Firma digital.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ley 9048 (Costa Rica)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Delitos informáticos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>RGPD (Unión Europea)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Datos personales de residentes europeos.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>PCI DSS</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Datos de tarjetas de pago.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>HIPAA (EE. UU.)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Datos de salud.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Normativa SUGEF</strong></td><td style="padding:13px 12px;">Gestión de TI en entidades financieras.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
El cumplimiento se traduce en requisitos verificables: por ejemplo, PCI DSS exige no almacenar el código de seguridad de la tarjeta.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_004',
            label: 'Arquitectura y diseño de software seguro',
            subtemas: [
                {
                    id: 'm004-t001',
                    label: 'Arquitectura segura',
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
                    id: 'm004-t002',
                    label: 'Principios y patrones de diseño seguro',
                    steps: [
                        {
                            title: 'Patrones de diseño seguro',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Patrón</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Propósito</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Punto único de autenticación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Centralizar el inicio de sesión (SSO, OAuth 2.0 / OpenID Connect).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Puerta de enlace de API</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Aplicar autenticación, límites y registro en un solo lugar.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Validador de entradas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Validar todas las entradas con listas permitidas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Bóveda de secretos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Guardar llaves fuera del código.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Sesión segura</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Identificadores aleatorios, expiración y cookies HttpOnly y Secure.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Confianza cero</strong></td><td style="padding:13px 12px;">Verificar siempre, incluso dentro de la red.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Autenticación y autorización'
                        },
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
                    id: 'm004-t003',
                    label: 'Modelado e inteligencia de amenazas',
                    steps: [
                        {
                            title: 'Modelado de amenazas con STRIDE',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Amenaza</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Propiedad violada</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Mitigación</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Suplantación (Spoofing)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Autenticación</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Autenticación fuerte, MFA.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Manipulación (Tampering)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Integridad</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Firmas, HMAC, validación.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Repudio</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">No repudio</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Registros de auditoría.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Divulgación de información</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Confidencialidad</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cifrado, control de acceso.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Denegación de servicio</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Disponibilidad</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Límites de solicitudes, escalamiento.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Elevación de privilegios</strong></td><td style="padding:13px 12px;">Autorización</td><td style="padding:13px 12px;">Mínimo privilegio, verificación en el servidor.</td></tr>
</tbody>
</table>
</div>
<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-diagram-project" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Diagrama de flujo de datos</b><br><small>Con límites de confianza</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-bug" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Identificar amenazas</b><br><small>STRIDE</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-shield-halved" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Mitigar</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-check" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Validar</b><br><small></small></div></div>
</div>
</div>`,
                            nextButton: 'Siguiente: Inteligencia de amenazas'
                        },
                        {
                            title: 'Inteligencia de amenazas',
                            content: `<p>La <strong>inteligencia de amenazas</strong> aporta información sobre atacantes reales, sus técnicas (MITRE ATT&CK) e indicadores de compromiso. Sirve para priorizar qué amenazas modelar primero.</p>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Herramientas: OWASP Threat Dragon y Microsoft Threat Modeling Tool.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t004',
                    label: 'Propiedades de seguridad y restricciones en el diseño',
                    steps: [
                        {
                            title: 'Propiedades y restricciones',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Propiedad</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Decisión de diseño</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Confidencialidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cifrar columnas sensibles en la base de datos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Integridad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Transacciones y firmas en mensajes entre servicios.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Disponibilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Réplicas en dos zonas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Autenticación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Proveedor de identidad central.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Autorización</strong></td><td style="padding:13px 12px;">Control de acceso basado en roles (RBAC) o atributos (ABAC).</td></tr>
</tbody>
</table>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Restricción</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Legal</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Los datos deben quedarse en el país.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tecnológica</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El sistema heredado solo soporta TLS 1.2.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>De rendimiento</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El cifrado no puede agregar más de 50 ms.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>De costo</strong></td><td style="padding:13px 12px;">Presupuesto limitado para un HSM.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t005',
                    label: 'Sistemas de control de seguridad',
                    steps: [
                        {
                            title: 'Tipos de controles',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplos</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Preventivo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Firewall, validación de entradas, MFA.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Detectivo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">IDS, registros de auditoría, alertas.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Correctivo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Parches, restauración de respaldos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Disuasivo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Avisos legales.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Compensatorio</strong></td><td style="padding:13px 12px;">Monitoreo extra cuando no se puede parchar.</td></tr>
</tbody>
</table>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Naturaleza</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplos</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Administrativo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Políticas, capacitación.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Técnico</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cifrado, control de acceso.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Físico</strong></td><td style="padding:13px 12px;">Acceso al centro de datos.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Capas de detección y prevención'
                        },
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
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t006',
                    label: 'Verificación del diseño',
                    steps: [
                        {
                            title: 'Revisión de seguridad del diseño',
                            content: `<ul>
    <li>¿Se identificaron todos los límites de confianza?</li>
    <li>¿Cada amenaza STRIDE tiene una mitigación o un riesgo aceptado?</li>
    <li>¿La autorización se verifica en el servidor?</li>
    <li>¿Cómo se gestionan los secretos?</li>
    <li>¿Qué pasa si un componente falla?</li>
    <li>¿Los registros permiten investigar un incidente?</li>
</ul>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
La revisión la hace alguien distinto del diseñador y sus hallazgos se registran como defectos de diseño.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_005',
            label: 'Implementación segura de software',
            subtemas: [
                {
                    id: 'm005-t001',
                    label: 'Estándares de codificación seguros',
                    steps: [
                        {
                            title: 'Estándares',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Estándar</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ámbito</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>SEI CERT</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">C, C++, Java, Perl.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>OWASP Secure Coding Practices</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Lista general independiente del lenguaje.</td></tr>
<tr><td style="padding:13px 12px;"><strong>MISRA C</strong></td><td style="padding:13px 12px;">Sistemas embebidos críticos.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Prácticas'
                        },
                        {
                            title: 'Prácticas',
                            content: `<ol>
    <li>No incluir secretos en el código; usar un backend intermediario.</li>
    <li>Forzar HTTPS y considerar la fijación de certificados.</li>
    <li>Validar las entradas, también en WebViews y enlaces profundos.</li>
    <li>Desactivar el modo de depuración y ofuscar el código (R8 en Android).</li>
    <li>Mantener actualizadas las dependencias.</li>
    <li>Minimizar los permisos solicitados.</li>
    <li>Verificar la integridad de la app (Play Integrity, App Attest).</li>
</ol>
<pre class="codigo">
&lt;!-- network_security_config.xml: bloquear tráfico sin cifrar --&gt;
&lt;network-security-config&gt;
    &lt;base-config cleartextTrafficPermitted="false" /&gt;
&lt;/network-security-config&gt;
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t002',
                    label: 'Medidas de seguridad en el proceso de compilación y control de versiones',
                    steps: [
                        {
                            title: 'Compilación segura',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Medida</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Advertencias como errores</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">gcc -Wall -Werror</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Protecciones del compilador</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">-fstack-protector-strong, -D_FORTIFY_SOURCE=2, PIE</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Compilaciones reproducibles</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mismo código → mismo binario.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Firma de artefactos</strong></td><td style="padding:13px 12px;">Sigstore cosign.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Control de versiones seguro'
                        },
                        {
                            title: 'Control de versiones seguro',
                            content: `<ul>
    <li>Ramas protegidas y revisión obligatoria por pares.</li>
    <li>Commits firmados (GPG o SSH).</li>
    <li>Archivo .gitignore para excluir .env y llaves.</li>
    <li>Escaneo de secretos antes de cada commit (pre-commit + gitleaks).</li>
    <li>Si un secreto se publicó, revocarlo: borrarlo del historial no basta.</li>
</ul>
<p><strong>yaml</strong></p>
<pre class="codigo">
# .pre-commit-config.yaml
repos:
  - repo: https://github.com/gitleaks/gitleaks
    rev: v8.18.0
    hooks:
      - id: gitleaks
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t003',
                    label: 'Enfoques de seguridad en aplicaciones administradas',
                    steps: [
                        {
                            title: 'Código administrado',
                            content: `<p>En lenguajes con <strong>entorno administrado</strong> (Java, C#/.NET, Python, JavaScript) la máquina virtual gestiona la memoria, lo que elimina desbordamientos de búfer clásicos. Pero siguen existiendo riesgos.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Riesgo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Mitigación</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Deserialización insegura</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">No deserializar datos no confiables; usar JSON con esquemas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Reflexión y carga dinámica de código</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Restringir clases permitidas.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Excepciones con datos sensibles</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mensajes genéricos al usuario.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Dependencias vulnerables</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Análisis de composición (SCA).</td></tr>
<tr><td style="padding:13px 12px;"><strong>Inyección</strong></td><td style="padding:13px 12px;">Consultas parametrizadas y ORM.</td></tr>
</tbody>
</table>
</div>
<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #f0cccc; margin-bottom:12px;">
<i class="fa-solid fa-xmark" aria-hidden="true" style="color:#d2232a;"></i> <strong style="color:#d2232a;">Incorrecto</strong>
<pre class="codigo">
import pickle
datos = pickle.loads(request.body)   # ejecuta código arbitrario
</pre>
</div>
<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #c9e2d4; margin-bottom:12px;">
<i class="fa-solid fa-check" aria-hidden="true" style="color:#00734a;"></i> <strong style="color:#00734a;">Correcto</strong>
<pre class="codigo">
import json
datos = json.loads(request.body)     # solo datos
</pre>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t004',
                    label: 'Fallas de implementación y estrategias de mitigación',
                    steps: [
                        {
                            title: 'Fallas comunes',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Falla (CWE)</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Mitigación</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Inyección SQL (CWE-89)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Consultas parametrizadas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>XSS (CWE-79)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Codificar la salida según el contexto; CSP.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Desbordamiento de búfer (CWE-787)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Funciones con límites; lenguajes seguros en memoria.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Control de acceso roto (CWE-862)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Verificar permisos en cada solicitud.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Credenciales en el código (CWE-798)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Variables de entorno y bóveda de secretos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Condición de carrera (CWE-362)</strong></td><td style="padding:13px 12px;">Bloqueos y operaciones atómicas.</td></tr>
</tbody>
</table>
</div>
<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #f0cccc; margin-bottom:12px;">
<i class="fa-solid fa-xmark" aria-hidden="true" style="color:#d2232a;"></i> <strong style="color:#d2232a;">Incorrecto</strong>
<pre class="codigo">
cur.execute("SELECT * FROM usuarios WHERE correo = '" + correo + "'")
</pre>
</div>
<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #c9e2d4; margin-bottom:12px;">
<i class="fa-solid fa-check" aria-hidden="true" style="color:#00734a;"></i> <strong style="color:#00734a;">Correcto</strong>
<pre class="codigo">
cur.execute("SELECT * FROM usuarios WHERE correo = %s", (correo,))
</pre>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t005',
                    label: 'Vulnerabilidades, exposiciones y patrones de ataque',
                    steps: [
                        {
                            title: 'CVE, CWE, CVSS',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Término</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Vulnerabilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Debilidad que un atacante puede aprovechar.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Exposición</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Error que da acceso a información o funciones.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>CVE</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Identificador público de una vulnerabilidad (CVE-2021-44228, Log4Shell).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>CVSS</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Puntaje de severidad de 0 a 10.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Exploit</strong></td><td style="padding:13px 12px;">Código que aprovecha la vulnerabilidad.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Seguridad en el ciclo de desarrollo'
                        },
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
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t006',
                    label: 'Riesgos de seguridad en aplicaciones web, software de código abierto y componentes de terceros',
                    steps: [
                        {
                            title: 'OWASP Top 10 (2021)',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Código</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Riesgo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>A01</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Control de acceso roto</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>A02</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Fallas criptográficas</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>A03</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Inyección</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>A04</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Diseño inseguro</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>A05</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Configuración de seguridad incorrecta</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>A06</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Componentes vulnerables y desactualizados</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>A07</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Fallas de identificación y autenticación</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>A08</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Fallas de integridad de software y datos</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>A09</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Fallas de registro y monitoreo</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>A10</strong></td><td style="padding:13px 12px;">Falsificación de solicitudes del lado del servidor (SSRF)</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Código abierto y terceros'
                        },
                        {
                            title: 'Código abierto y terceros',
                            content: `<ul>
    <li>Mantener un inventario de componentes (SBOM).</li>
    <li>Analizar dependencias con OWASP Dependency-Check, npm audit, pip-audit o Dependabot.</li>
    <li>Revisar la licencia y la actividad del proyecto antes de adoptarlo.</li>
    <li>Actualizar con frecuencia.</li>
</ul>
<p><strong>bash</strong></p>
<pre class="codigo">
pip-audit -r requirements.txt
npm audit --audit-level=high
</pre>`,
                            nextButton: 'Siguiente: Riesgos más comunes'
                        },
                        {
                            title: 'Riesgos más comunes',
                            content: `<p>El proyecto <strong>OWASP Top 10</strong> recopila los riesgos de seguridad más frecuentes en aplicaciones web.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Riesgo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Prevención</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Inyección</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Datos del usuario que se ejecutan como código o consulta.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Validar y usar consultas parametrizadas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>XSS</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Inyección de JavaScript en la página.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mostrar datos con <code>textContent</code>, escapar HTML.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Autenticación débil</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Contraseñas débiles o guardadas en texto plano.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Hash con bcrypt, reglas de contraseña.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Control de acceso roto</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Usuarios que acceden a recursos ajenos.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Verificar permisos en el servidor.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Exposición de datos</strong></td><td style="padding:13px 12px;">Información sensible sin cifrar.</td><td style="padding:13px 12px;">HTTPS y variables de entorno.</td></tr>
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
            label: 'Pruebas de software seguro',
            subtemas: [
                {
                    id: 'm006-t001',
                    label: 'Pruebas de seguridad funcionales y no funcionales',
                    steps: [
                        {
                            title: 'Tipos de pruebas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Qué verifica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Funcional</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Que los controles funcionan.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un usuario sin rol de administrador recibe 403.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>No funcional</strong></td><td style="padding:13px 12px;">Resistencia ante ataques y condiciones adversas.</td><td style="padding:13px 12px;">El sistema resiste fuerza bruta y carga alta.</td></tr>
</tbody>
</table>
</div>
<p><strong>python</strong></p>
<pre class="codigo">
def test_estudiante_no_ve_notas_de_otro(client, token_estudiante):
    r = client.get("/api/notas/otro-estudiante",
                   headers={"Authorization": f"Bearer {token_estudiante}"})
    assert r.status_code == 403
</pre>`,
                            nextButton: 'Siguiente: Pruebas'
                        },
                        {
                            title: 'Pruebas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Técnica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Herramientas</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Análisis estático (SAST)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">MobSF, Semgrep, Android Lint</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Análisis dinámico</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">MobSF, Frida, Objection</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Intercepción de tráfico</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Burp Suite, mitmproxy</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Revisión de dependencias</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Dependabot, Snyk</td></tr>
<tr><td style="padding:13px 12px;"><strong>Verificación contra estándar</strong></td><td style="padding:13px 12px;">OWASP MASVS y guía de pruebas MASTG</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Una auditoría de seguridad verifica la app contra los niveles de OWASP MASVS (L1 estándar, L2 defensa en profundidad) y documenta los hallazgos y su corrección.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t002',
                    label: 'Escaneo de vulnerabilidades y escaneo de contenido',
                    steps: [
                        {
                            title: 'Herramientas de análisis',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Técnica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Analiza</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Herramientas</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>SAST</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Código fuente.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Semgrep, SonarQube, CodeQL.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>DAST</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Aplicación en ejecución.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">OWASP ZAP, Burp Suite.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>SCA</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Dependencias.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Dependabot, Snyk, Trivy.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Escaneo de infraestructura</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Servidores y puertos.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Nessus, OpenVAS, Nmap.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Escaneo de contenido</strong></td><td style="padding:13px 12px;">Archivos, imágenes de contenedor, secretos.</td><td style="padding:13px 12px;">Trivy, gitleaks, ClamAV.</td></tr>
</tbody>
</table>
</div>
<p><strong>bash</strong></p>
<pre class="codigo">
semgrep --config p/owasp-top-ten .
trivy image miapp:1.0
docker run -t ghcr.io/zaproxy/zaproxy zap-baseline.py -t https://staging.miapp.cr
</pre>`,
                            nextButton: 'Siguiente: Análisis estático'
                        },
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
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t003',
                    label: 'Inyección de fallas, pruebas de estrés y pruebas de rotura',
                    steps: [
                        {
                            title: 'Pruebas para romper el sistema',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Técnica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Idea</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Herramientas</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Fuzzing</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Enviar entradas aleatorias o malformadas.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">AFL++, Atheris, RESTler.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Inyección de fallas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Provocar errores (red caída, disco lleno).</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Chaos Monkey, Toxiproxy.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Estrés</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Llevar el sistema más allá de su capacidad.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">JMeter, k6, Locust.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Rotura</strong></td><td style="padding:13px 12px;">Buscar el punto de falla y verificar que falle de forma segura.</td><td style="padding:13px 12px;"></td></tr>
</tbody>
</table>
</div>
<p><strong>python</strong></p>
<pre class="codigo">
import atheris, sys, json

def probar(datos):
    try:
        json.loads(datos)
    except (ValueError, UnicodeDecodeError):
        pass   # errores esperados; cualquier otra excepción es un hallazgo

atheris.Setup(sys.argv, probar)
atheris.Fuzz()
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t004',
                    label: 'Revisiones manuales de código y búsqueda de código malicioso incrustado',
                    steps: [
                        {
                            title: 'Revisión manual de seguridad',
                            content: `<ul>
    <li>Puntos de entrada de datos y su validación.</li>
    <li>Autenticación, autorización y manejo de sesiones.</li>
    <li>Uso de criptografía.</li>
    <li>Manejo de errores y registros.</li>
    <li>Consultas a bases de datos y comandos del sistema.</li>
</ul>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
La guía OWASP Code Review ofrece listas de verificación por tema.</p>`,
                            nextButton: 'Siguiente: Código malicioso incrustado'
                        },
                        {
                            title: 'Código malicioso incrustado',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Señal</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Puertas traseras</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Usuario o contraseña fijos que saltan la autenticación.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Bombas lógicas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Código que se activa en una fecha.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Código ofuscado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cadenas en base64 que se ejecutan con eval.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Conexiones ocultas</strong></td><td style="padding:13px 12px;">Envío de datos a dominios desconocidos.</td></tr>
</tbody>
</table>
</div>
<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #f0cccc; margin-bottom:12px;">
<i class="fa-solid fa-xmark" aria-hidden="true" style="color:#d2232a;"></i> <strong style="color:#d2232a;">Incorrecto</strong>
<pre class="codigo">
if usuario == "soporte" and clave == "Xy7!2024":
    return True   # acceso oculto
</pre>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t005',
                    label: 'Proceso de seguimiento de defectos de seguridad',
                    steps: [
                        {
                            title: 'Ciclo de un defecto de seguridad',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-bug" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Reporte</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-scale-balanced" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Clasificación</b><br><small>Severidad CVSS</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-user" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Asignación</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-wrench" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Corrección</b><br><small></small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-vial" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Verificación</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-lock" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Cierre</b><br><small></small></div></div>
</div>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Severidad</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Plazo de corrección sugerido</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Crítica</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">24 a 72 horas</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Alta</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">7 días</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Media</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">30 días</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Baja</strong></td><td style="padding:13px 12px;">Próxima versión</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Los defectos de seguridad se registran con acceso restringido para no divulgar la vulnerabilidad antes de corregirla. Una política de divulgación responsable (security.txt) indica cómo reportar.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t006',
                    label: 'Pruebas de verificación y validación y las pruebas de aceptación',
                    steps: [
                        {
                            title: 'Verificación, validación y aceptación',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;"></th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Pregunta</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo de seguridad</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Verificación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Construimos el producto correctamente?</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El código cumple el requisito RS-01 de almacenamiento de contraseñas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Validación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Construimos el producto correcto?</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Los controles protegen realmente los datos de los estudiantes.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Aceptación</strong></td><td style="padding:13px 12px;">¿El cliente lo aprueba?</td><td style="padding:13px 12px;">Prueba de penetración externa sin hallazgos críticos.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Una prueba de penetración la realiza un equipo independiente, con autorización escrita y alcance definido.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_007',
            label: 'Seguridad en las operaciones y el mantenimiento',
            subtemas: [
                {
                    id: 'm007-t001',
                    label: 'Instalación segura de software',
                    steps: [
                        {
                            title: 'Instalación segura',
                            content: `<ul>
    <li>Verificar la integridad del instalador (hash SHA-256 o firma).</li>
    <li>Instalar con el mínimo de componentes necesarios.</li>
    <li>Cambiar credenciales predeterminadas.</li>
    <li>Ejecutar servicios con cuentas sin privilegios.</li>
    <li>Aplicar la línea base de configuración.</li>
    <li>Documentar la instalación.</li>
</ul>
<p><strong>bash</strong></p>
<pre class="codigo">
sha256sum app-1.4.2.tar.gz
cat app-1.4.2.tar.gz.sha256      # deben coincidir
cosign verify --key cosign.pub registro.cr/app:1.4.2
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t002',
                    label: 'Automatización de las pruebas de seguridad',
                    steps: [
                        {
                            title: 'DevSecOps',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-code-commit" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Commit</b><br><small>Secretos</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-magnifying-glass" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>SAST y SCA</b><br><small></small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-box" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Contenedor</b><br><small>Escaneo de imagen</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-flask" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>DAST</b><br><small>En staging</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-rocket" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Despliegue</b><br><small></small></div></div>
</div>
</div>
<p><strong>yaml</strong></p>
<pre class="codigo">
# .github/workflows/seguridad.yml
name: seguridad
on: [push, pull_request]
jobs:
  analisis:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: gitleaks/gitleaks-action@v2
      - run: pip install semgrep pip-audit
      - run: semgrep --config p/default --error
      - run: pip-audit -r requirements.txt
</pre>`,
                            nextButton: 'Siguiente: Pruebas en GitHub Actions'
                        },
                        {
                            title: 'Pruebas en GitHub Actions',
                            content: `<pre class="codigo">
# .github/workflows/pruebas.yml
name: Pruebas automatizadas
on:
  pull_request:
  schedule:
    - cron: "0 6 * * *"          # regresión completa diaria
jobs:
  pruebas:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with: { python-version: "3.12" }
      - run: pip install -r requirements.txt
      - run: playwright install --with-deps chromium
      - run: pytest -m regresion -n auto --html=reporte.html
        env:
          URL_BASE: \${{ vars.URL_STAGING }}
          CLAVE_PRUEBAS: \${{ secrets.CLAVE_PRUEBAS }}
      - uses: actions/upload-artifact@v4
        if: always()
        with: { name: reporte, path: reporte.html }
</pre>
<ul>
    <li>Las pruebas se ejecutan en cada pull request y bloquean la integración si fallan.</li>
    <li>El reporte se guarda como artefacto aunque haya fallas.</li>
    <li>Los secretos se configuran en el repositorio.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t003',
                    label: 'Monitoreo continuo de seguridad de la información',
                    steps: [
                        {
                            title: 'Monitoreo continuo',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Componente</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Función</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>SIEM</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Centraliza y correlaciona eventos (Wazuh, Splunk, Elastic).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>IDS/IPS</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Detecta y bloquea tráfico malicioso.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>WAF</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Filtra ataques a aplicaciones web.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Alertas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Avisan de patrones sospechosos.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Tableros</strong></td><td style="padding:13px 12px;">Indicadores de seguridad.</td></tr>
</tbody>
</table>
</div>
<ul>
    <li>Muchos inicios de sesión fallidos desde una IP.</li>
    <li>Acceso a horas inusuales.</li>
    <li>Aumento de errores 500.</li>
    <li>Descargas masivas de datos.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t004',
                    label: 'Gestión de vulnerabilidades, respuesta a incidentes y análisis forense',
                    steps: [
                        {
                            title: 'Respuesta a incidentes (NIST SP 800-61)',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-clipboard-check" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Preparación</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-magnifying-glass" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Detección y análisis</b><br><small></small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-hand" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Contención</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-broom" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Erradicación</b><br><small></small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-rotate" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Recuperación</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-book" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Lecciones aprendidas</b><br><small></small></div></div>
</div>
</div>`,
                            nextButton: 'Siguiente: Análisis forense'
                        },
                        {
                            title: 'Análisis forense',
                            content: `<ul>
    <li>Preservar la evidencia antes de modificar el sistema.</li>
    <li>Mantener la cadena de custodia.</li>
    <li>Trabajar sobre copias con hash verificado.</li>
    <li>Construir una línea de tiempo con los registros.</li>
</ul>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
La gestión de vulnerabilidades es un ciclo continuo: inventariar, escanear, priorizar, corregir y verificar.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t005',
                    label: 'Continuidad de las operaciones y recuperación ante desastres',
                    steps: [
                        {
                            title: 'Continuidad',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Concepto</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>BCP</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Plan de continuidad del negocio.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>DRP</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Plan de recuperación ante desastres.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>RTO</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Tiempo máximo para restaurar el servicio.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>RPO</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pérdida máxima de datos aceptable.</td></tr>
<tr><td style="padding:13px 12px;"><strong>BIA</strong></td><td style="padding:13px 12px;">Análisis de impacto en el negocio.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Objetivos de recuperación'
                        },
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
                },
                {
                    id: 'm007-t006',
                    label: 'Cadena de suministro de software seguro',
                    steps: [
                        {
                            title: 'Cadena de suministro',
                            content: `<p>Ataques como SolarWinds (2020) o la puerta trasera en xz-utils (2024) mostraron que comprometer una herramienta o dependencia afecta a miles de organizaciones.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Práctica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Herramienta</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Inventario de componentes (SBOM)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Syft, CycloneDX, SPDX.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Firma y verificación de artefactos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sigstore cosign.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Niveles de integridad de la compilación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">SLSA.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Evaluación de proyectos de código abierto</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">OpenSSF Scorecard.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Repositorio interno de paquetes</strong></td><td style="padding:13px 12px;">Nexus, Artifactory.</td></tr>
</tbody>
</table>
</div>
<p><strong>bash</strong></p>
<pre class="codigo">
syft dir:. -o cyclonedx-json &gt; sbom.json
grype sbom:sbom.json
</pre>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        }
    ]
};
