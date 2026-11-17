const data = {
    // Pantalla de bienvenida
    welcome: {
        title: 'TI-01 <br> Fundamentos de Redes',
        image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/TI-01/imgs/logo.png', // Cambiar por imagen real
        description: 'Configuración de conmutadores y enrutadores, medios de red, direccionamiento IPv4 e IPv6, y fundamentos de seguridad para crear redes pequeñas fiables, estables y eficientes.',
        instruction: 'Seleccione cada pestaña para acceder a la información'
    },
    // Temas principales y sus subtemas con pasos
    temas: [
        {
            id: 'modulo_001',
            label: 'Introducción a las redes',
            subtemas: [
                {
                    id: 'm001-t001',
                    label: 'Impacto de las redes en la vida cotidiana',
                    steps: [
                        {
                            title: 'Las redes en la vida diaria',
                            content: `<p>Una <strong>red de computadoras</strong> conecta dispositivos para compartir información y recursos. Casi todo lo que hacemos depende de ellas: estudiar en línea, pagar con SINPE Móvil, ver videos, trabajar de forma remota o pedir comida por una aplicación.</p>
<div style="display:flex; flex-wrap:wrap; gap:12px; margin:12px 0;">
<div style="flex:1 1 200px; padding:14px; border:1px solid #9cc8ff; border-top:4px solid #2b93d1; border-radius:10px; background:#ffffff;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-graduation-cap" style="color:#164a98; margin-right:6px;" aria-hidden="true"></i><strong>Educación</strong></p><p style="margin:0;">Aulas virtuales y recursos en línea.</p></div>
<div style="flex:1 1 200px; padding:14px; border:1px solid #9cc8ff; border-top:4px solid #2b93d1; border-radius:10px; background:#ffffff;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-building-columns" style="color:#164a98; margin-right:6px;" aria-hidden="true"></i><strong>Banca</strong></p><p style="margin:0;">Transferencias y pagos en tiempo real.</p></div>
<div style="flex:1 1 200px; padding:14px; border:1px solid #9cc8ff; border-top:4px solid #2b93d1; border-radius:10px; background:#ffffff;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-briefcase" style="color:#164a98; margin-right:6px;" aria-hidden="true"></i><strong>Trabajo</strong></p><p style="margin:0;">Teletrabajo, videollamadas, nube.</p></div>
<div style="flex:1 1 200px; padding:14px; border:1px solid #9cc8ff; border-top:4px solid #2b93d1; border-radius:10px; background:#ffffff;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-house-signal" style="color:#164a98; margin-right:6px;" aria-hidden="true"></i><strong>Hogar</strong></p><p style="margin:0;">Televisión, domótica, dispositivos inteligentes.</p></div>
</div>`,
                            nextButton: 'Siguiente: Redes humanas y redes de datos'
                        },
                        {
                            title: 'Redes humanas y redes de datos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Elemento de la comunicación</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">En una conversación</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">En una red de datos</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Origen</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Quien habla.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Computadora que envía.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Canal</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El aire.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cable, fibra o señal inalámbrica.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Destino</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Quien escucha.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Servidor o computadora que recibe.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Reglas</strong></td><td style="padding:13px 12px;">Idioma y turnos.</td><td style="padding:13px 12px;">Protocolos (TCP/IP, HTTP).</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Igual que las personas necesitan un idioma común, los dispositivos necesitan <strong>protocolos</strong> comunes para entenderse.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t002',
                    label: 'Componentes, conexiones, tipos y topologías en las redes de internet',
                    steps: [
                        {
                            title: 'Componentes',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Componente</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplos</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Función</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Dispositivos finales</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Computadoras, teléfonos, impresoras, servidores.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Origen o destino de los mensajes.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Dispositivos intermedios</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Conmutadores (switch), enrutadores (router), puntos de acceso, firewalls.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Conectan y dirigen el tráfico.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Medios</strong></td><td style="padding:13px 12px;">Cable de cobre, fibra óptica, inalámbrico.</td><td style="padding:13px 12px;">Transportan las señales.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Tipos de redes'
                        },
                        {
                            title: 'Tipos de redes',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Alcance</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>PAN</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Personal, pocos metros.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Audífonos Bluetooth.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>LAN</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un edificio o campus.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Red del laboratorio.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>WLAN</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">LAN inalámbrica.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Wi-Fi de la universidad.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>MAN</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Una ciudad.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Red metropolitana de un proveedor.</td></tr>
<tr><td style="padding:13px 12px;"><strong>WAN</strong></td><td style="padding:13px 12px;">Países y continentes.</td><td style="padding:13px 12px;">Internet.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Topologías'
                        },
                        {
                            title: 'Topologías',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Topología</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ventaja</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Desventaja</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Estrella</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Todos conectados a un dispositivo central.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Fácil de administrar.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Si falla el centro, falla todo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Bus</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un cable compartido.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Barata.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Colisiones; obsoleta.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Anillo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cada nodo conectado a dos vecinos.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ordenada.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Una falla puede cortar el anillo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Malla</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Varios caminos entre nodos.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Redundancia.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Costosa.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Híbrida</strong></td><td style="padding:13px 12px;">Combinación.</td><td style="padding:13px 12px;">Flexible.</td><td style="padding:13px 12px;">Más compleja.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
La <strong>topología física</strong> es cómo están conectados los cables; la <strong>lógica</strong> es cómo viajan los datos.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t003',
                    label: 'Seguridad y tendencias en redes confiables',
                    steps: [
                        {
                            title: 'Redes confiables',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Característica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tolerancia a fallas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Caminos redundantes para que una falla no detenga el servicio.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Escalabilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Crecer sin afectar a los usuarios actuales.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Calidad de servicio (QoS)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Priorizar el tráfico sensible, como voz y video.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Seguridad</strong></td><td style="padding:13px 12px;">Confidencialidad, integridad y disponibilidad.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Tendencias'
                        },
                        {
                            title: 'Tendencias',
                            content: `<ul>
    <li>Traiga su propio dispositivo (BYOD).</li>
    <li>Colaboración en línea y videoconferencia.</li>
    <li>Computación en la nube.</li>
    <li>Internet de las cosas.</li>
    <li>Wi-Fi 6/7 y redes 5G.</li>
    <li>Redes definidas por software (SDN).</li>
</ul>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Amenaza</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Protección</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Virus y malware</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Antivirus y actualizaciones.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Accesos no autorizados</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Contraseñas fuertes y firewall.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Robo de información</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cifrado (HTTPS, VPN).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Denegación de servicio</strong></td><td style="padding:13px 12px;">Protección del proveedor y filtrado.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t004',
                    label: 'Rol del profesional de ingeniería del software en el manejo de redes',
                    steps: [
                        {
                            title: '¿Por qué un ingeniero de software necesita saber de redes?',
                            content: `<ul>
    <li>Las aplicaciones web, móviles y en la nube se comunican por la red.</li>
    <li>Diagnosticar problemas: ¿es el código, el servidor o la red?</li>
    <li>Configurar puertos, DNS, certificados y firewalls al desplegar.</li>
    <li>Diseñar aplicaciones seguras que cifren sus comunicaciones.</li>
    <li>Optimizar el rendimiento considerando la latencia y el ancho de banda.</li>
</ul>
<pre class="codigo">
ping www.ucenfotec.ac.cr          # ¿responde el servidor?
nslookup www.ucenfotec.ac.cr      # ¿qué IP tiene?
tracert www.ucenfotec.ac.cr       # ¿por dónde pasan los paquetes? (Windows)
curl -I https://www.ucenfotec.ac.cr   # encabezados HTTP de la respuesta
</pre>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_002',
            label: 'Configuración básica de conmutadores y medios de red',
            subtemas: [
                {
                    id: 'm002-t001',
                    label: 'Acceso y navegación en el sistema operativos de los dispositivos de red',
                    steps: [
                        {
                            title: 'Sistema operativo de red',
                            content: `<p>Los conmutadores y enrutadores tienen su propio sistema operativo (por ejemplo, Cisco IOS) que se administra por línea de comandos (CLI).</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Método de acceso</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Consola</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cable directo; se usa para la configuración inicial.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>SSH</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Acceso remoto cifrado (recomendado).</td></tr>
<tr><td style="padding:13px 12px;"><strong>Telnet</strong></td><td style="padding:13px 12px;">Acceso remoto sin cifrar (evitar).</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Modos de comando'
                        },
                        {
                            title: 'Modos de comando',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Modo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Indicador</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Para entrar</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>EXEC de usuario</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>Switch&gt;</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Al conectarse.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>EXEC privilegiado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>Switch#</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>enable</code></td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Configuración global</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>Switch(config)#</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>configure terminal</code></td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Configuración de interfaz</strong></td><td style="padding:13px 12px;"><code>Switch(config-if)#</code></td><td style="padding:13px 12px;"><code>interface fa0/1</code></td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
Switch&gt; enable
Switch# configure terminal
Switch(config)# hostname SW-Lab1
SW-Lab1(config)# exit
SW-Lab1# show running-config
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
La tecla <strong>Tab</strong> completa comandos y <strong>?</strong> muestra la ayuda contextual. <code>end</code> regresa al modo privilegiado.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t002',
                    label: 'Configuración básica, configuración de puertos, direccionamiento y estructura de comandos de los dispositivos de red',
                    steps: [
                        {
                            title: 'Configuración básica segura',
                            content: `<pre class="codigo">
SW-Lab1(config)# enable secret Cl4veSegur@
SW-Lab1(config)# line console 0
SW-Lab1(config-line)# password C0ns0la!
SW-Lab1(config-line)# login
SW-Lab1(config-line)# exit
SW-Lab1(config)# service password-encryption
SW-Lab1(config)# banner motd #Acceso solo para personal autorizado#
SW-Lab1(config)# end
SW-Lab1# copy running-config startup-config
</pre>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Archivo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Dónde está</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Contenido</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>running-config</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">RAM</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Configuración activa (se pierde al apagar).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>startup-config</strong></td><td style="padding:13px 12px;">NVRAM</td><td style="padding:13px 12px;">Configuración guardada que carga al iniciar.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Dirección IP de administración'
                        },
                        {
                            title: 'Dirección IP de administración',
                            content: `<pre class="codigo">
SW-Lab1(config)# interface vlan 1
SW-Lab1(config-if)# ip address 192.168.10.2 255.255.255.0
SW-Lab1(config-if)# no shutdown
SW-Lab1(config-if)# exit
SW-Lab1(config)# ip default-gateway 192.168.10.1
</pre>
<p>Estructura de un comando: <strong>comando</strong> + <strong>palabras clave</strong> + <strong>argumentos</strong>. En <code>ip address 192.168.10.2 255.255.255.0</code>, la dirección y la máscara son argumentos.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t003',
                    label: 'Tramas, direcciones y tablas de direcciones de redes',
                    steps: [
                        {
                            title: 'La trama Ethernet',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Campo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tamaño</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Contenido</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Preámbulo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">8 bytes</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sincronización.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>MAC de destino</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">6 bytes</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">A quién va.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>MAC de origen</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">6 bytes</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Quién la envía.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tipo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">2 bytes</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Protocolo superior (IPv4: 0x0800, IPv6: 0x86DD).</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Datos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">46 a 1500 bytes</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El paquete.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>FCS</strong></td><td style="padding:13px 12px;">4 bytes</td><td style="padding:13px 12px;">Verificación de errores (CRC).</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Tabla de direcciones MAC'
                        },
                        {
                            title: 'Tabla de direcciones MAC',
                            content: `<p>El conmutador aprende la MAC de origen de cada trama y el puerto por donde llegó. Así sabe por qué puerto reenviar las tramas siguientes.</p>
<pre class="codigo">
SW-Lab1# show mac address-table
          Mac Address Table
Vlan    Mac Address       Type        Ports
----    -----------       --------    -----
   1    00d0.97a1.3b01    DYNAMIC     Fa0/1
   1    0060.2f84.1c22    DYNAMIC     Fa0/2
</pre>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Situación</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Acción del conmutador</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>MAC de destino conocida</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Reenvía solo por ese puerto.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>MAC de destino desconocida</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Inunda por todos los puertos menos el de origen.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Difusión (FF:FF:FF:FF:FF:FF)</strong></td><td style="padding:13px 12px;">Inunda por todos los puertos.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t004',
                    label: 'Velocidades y métodos de reenvío conmutadores',
                    steps: [
                        {
                            title: 'Métodos de reenvío',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Método</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Funcionamiento</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Característica</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Almacenamiento y reenvío</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Recibe la trama completa y verifica el FCS antes de reenviar.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Descarta tramas con errores; el más usado.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Corte (cut-through)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Reenvía al leer la MAC de destino.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Menor latencia; reenvía errores.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Libre de fragmentos</strong></td><td style="padding:13px 12px;">Lee los primeros 64 bytes antes de reenviar.</td><td style="padding:13px 12px;">Intermedio.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Velocidad y dúplex'
                        },
                        {
                            title: 'Velocidad y dúplex',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Estándar</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Velocidad</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Fast Ethernet</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">100 Mb/s</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Gigabit Ethernet</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">1 Gb/s</td></tr>
<tr><td style="padding:13px 12px;"><strong>10 Gigabit Ethernet</strong></td><td style="padding:13px 12px;">10 Gb/s</td></tr>
</tbody>
</table>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Modo dúplex</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Comunicación</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Semidúplex</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">En un sentido a la vez.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Dúplex completo</strong></td><td style="padding:13px 12px;">En ambos sentidos a la vez.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
SW-Lab1(config)# interface fa0/1
SW-Lab1(config-if)# speed auto
SW-Lab1(config-if)# duplex auto
SW-Lab1(config-if)# mdix auto
</pre>
<p class="nota">
<i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
Un desajuste de dúplex (un extremo en completo y otro en semidúplex) provoca colisiones y lentitud difíciles de diagnosticar.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t005',
                    label: 'Reglas, protocolos y organizaciones estándares',
                    steps: [
                        {
                            title: 'Reglas de la comunicación',
                            content: `<ul>
    <li>Codificación del mensaje.</li>
    <li>Formato y encapsulamiento.</li>
    <li>Tamaño del mensaje.</li>
    <li>Sincronización: control de flujo, tiempo de espera.</li>
    <li>Opciones de entrega: unidifusión, multidifusión, difusión.</li>
</ul>`,
                            nextButton: 'Siguiente: Suite de protocolos TCP/IP'
                        },
                        {
                            title: 'Suite de protocolos TCP/IP',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Protocolo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Función</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>HTTP / HTTPS</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Páginas web.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>DNS</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Traducir nombres a direcciones IP.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>DHCP</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Asignar direcciones IP automáticamente.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>TCP</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Entrega confiable y ordenada.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>UDP</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Entrega rápida sin confirmación.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>IP</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Direccionamiento y enrutamiento.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Ethernet</strong></td><td style="padding:13px 12px;">Acceso al medio en la LAN.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Organizaciones de estándares'
                        },
                        {
                            title: 'Organizaciones de estándares',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Organización</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Responsabilidad</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>IETF</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Estándares de Internet (RFC).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>IEEE</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ethernet (802.3) y Wi-Fi (802.11).</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>ISO</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Modelo OSI.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>ICANN e IANA</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Asignación de direcciones IP y nombres de dominio.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>ITU</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Telecomunicaciones.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>EIA/TIA</strong></td><td style="padding:13px 12px;">Cableado estructurado.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t006',
                    label: 'Modelos de referencia, encapsulamiento y acceso de los datos',
                    steps: [
                        {
                            title: 'Modelos OSI y TCP/IP',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Capa OSI</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Capa TCP/IP</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">PDU</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplos</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>7 Aplicación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Aplicación</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Datos</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">HTTP, DNS</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>6 Presentación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Aplicación</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Datos</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">TLS, JPEG</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>5 Sesión</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Aplicación</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Datos</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sesiones</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>4 Transporte</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Transporte</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Segmento</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">TCP, UDP</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>3 Red</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Internet</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Paquete</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">IP, ICMP</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>2 Enlace de datos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Acceso a la red</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Trama</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ethernet, Wi-Fi</td></tr>
<tr><td style="padding:13px 12px;"><strong>1 Física</strong></td><td style="padding:13px 12px;">Acceso a la red</td><td style="padding:13px 12px;">Bits</td><td style="padding:13px 12px;">Cable, señal</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Encapsulamiento'
                        },
                        {
                            title: 'Encapsulamiento',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-file" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Datos</b><br><small>Aplicación</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-box" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Segmento</b><br><small>+ encabezado TCP (puertos)</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-boxes-stacked" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Paquete</b><br><small>+ encabezado IP (direcciones IP)</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-truck" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Trama</b><br><small>+ encabezado Ethernet (MAC) + FCS</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-wave-square" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Bits</b><br><small>Señal en el medio</small></div></div>
</div>
</div>
<p>Al recibir, el proceso se invierte (<strong>desencapsulamiento</strong>): cada capa quita su encabezado y entrega el contenido a la capa superior.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_003',
            label: 'Modelos de capas y resolución de direccionamiento',
            subtemas: [
                {
                    id: 'm003-t001',
                    label: 'Propósito, funcionamiento y características de la capa física, la capa de enlace de datos y capa de red',
                    steps: [
                        {
                            title: 'Capa física',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Medio</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Señal</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Característica</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cobre UTP (Cat 5e, 6)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Eléctrica</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Económico; hasta 100 m; sensible a interferencias.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Fibra óptica</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Luz</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Largas distancias, gran ancho de banda, inmune a interferencias.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Inalámbrico</strong></td><td style="padding:13px 12px;">Ondas de radio</td><td style="padding:13px 12px;">Movilidad; afectado por obstáculos e interferencias.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Ancho de banda: capacidad teórica. Rendimiento (throughput): lo que realmente se transfiere.</p>`,
                            nextButton: 'Siguiente: Capa de enlace de datos'
                        },
                        {
                            title: 'Capa de enlace de datos',
                            content: `<ul>
    <li>Prepara los paquetes en tramas para el medio.</li>
    <li>Controla el acceso al medio (CSMA/CD en Ethernet antiguo, CSMA/CA en Wi-Fi).</li>
    <li>Detecta errores con el FCS.</li>
    <li>Usa direcciones físicas (MAC).</li>
</ul>`,
                            nextButton: 'Siguiente: Capa de red'
                        },
                        {
                            title: 'Capa de red',
                            content: `<ul>
    <li>Direccionamiento lógico con IP.</li>
    <li>Encapsulamiento en paquetes.</li>
    <li>Enrutamiento: elegir el mejor camino entre redes.</li>
    <li>Desencapsulamiento en el destino.</li>
</ul>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Campo IPv4</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Función</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Versión</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">4.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>TTL</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Saltos restantes; evita bucles.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Protocolo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">TCP (6), UDP (17), ICMP (1).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>IP de origen y destino</strong></td><td style="padding:13px 12px;">Direcciones lógicas.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t002',
                    label: 'Propósito, funcionamiento y características de la capa de transporte y aplicación',
                    steps: [
                        {
                            title: 'Capa de transporte',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;"></th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">TCP</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">UDP</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Conexión</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Orientado a conexión (saludo de tres vías).</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sin conexión.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Confiabilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Confirma, reordena y retransmite.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">No garantiza entrega.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Velocidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mayor sobrecarga.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Menor sobrecarga.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Usos</strong></td><td style="padding:13px 12px;">Web, correo, transferencia de archivos.</td><td style="padding:13px 12px;">Video en vivo, voz, DNS, juegos.</td></tr>
</tbody>
</table>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Puerto</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Servicio</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>20/21</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">FTP</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>22</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">SSH</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>25</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">SMTP</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>53</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">DNS</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>67/68</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">DHCP</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>80</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">HTTP</td></tr>
<tr><td style="padding:13px 12px;"><strong>443</strong></td><td style="padding:13px 12px;">HTTPS</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Capa de aplicación'
                        },
                        {
                            title: 'Capa de aplicación',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Protocolo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Función</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>DNS</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Resuelve nombres de dominio.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>DHCP</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Asigna configuración IP.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>HTTP/HTTPS</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Web.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>SMTP, POP3, IMAP</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Correo electrónico.</td></tr>
<tr><td style="padding:13px 12px;"><strong>FTP, SFTP</strong></td><td style="padding:13px 12px;">Transferencia de archivos.</td></tr>
</tbody>
</table>
</div>
<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-laptop" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Cliente</b><br><small>DHCP Discover</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-server" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Servidor DHCP</b><br><small>Offer</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-laptop" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Cliente</b><br><small>Request</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-server" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Servidor DHCP</b><br><small>Acknowledge</small></div></div>
</div>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t003',
                    label: 'Sistemas numéricos binaria y hexadecimal',
                    steps: [
                        {
                            title: 'Binario',
                            content: `<p>Cada octeto de una dirección IPv4 tiene 8 bits. Cada posición vale una potencia de 2.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Posición</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">2⁷</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">2⁶</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">2⁵</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">2⁴</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">2³</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">2²</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">2¹</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">2⁰</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Valor</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">128</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">64</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">32</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">16</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">8</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">4</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">2</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">1</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>192 =</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">1</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">1</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">0</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">0</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">0</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">0</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">0</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">0</td></tr>
<tr><td style="padding:13px 12px;"><strong>168 =</strong></td><td style="padding:13px 12px;">1</td><td style="padding:13px 12px;">0</td><td style="padding:13px 12px;">1</td><td style="padding:13px 12px;">0</td><td style="padding:13px 12px;">1</td><td style="padding:13px 12px;">0</td><td style="padding:13px 12px;">0</td><td style="padding:13px 12px;">0</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
192.168.10.5  →  11000000.10101000.00001010.00000101
</pre>`,
                            nextButton: 'Siguiente: Hexadecimal'
                        },
                        {
                            title: 'Hexadecimal',
                            content: `<p>El hexadecimal usa 16 símbolos (0–9 y A–F). Cada dígito representa 4 bits. Se usa en direcciones MAC e IPv6.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Decimal</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Binario</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Hex</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>10</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">1010</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">A</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>15</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">1111</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">F</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>168</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">1010 1000</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">A8</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>255</strong></td><td style="padding:13px 12px;">1111 1111</td><td style="padding:13px 12px;">FF</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
# Comprobar conversiones con Python
print(bin(168), hex(168), int("A8", 16), int("11000000", 2))
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t004',
                    label: 'Comparación de las funciones de la dirección Control de Acceso al Medio (MAC) y de la dirección Protocolo de Internet (IP)',
                    steps: [
                        {
                            title: 'MAC e IP',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;"></th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Dirección MAC</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Dirección IP</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Capa</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Enlace de datos (2).</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Red (3).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tamaño</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">48 bits (12 dígitos hex).</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">32 bits (IPv4) o 128 bits (IPv6).</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ejemplo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">00-1A-2B-3C-4D-5E</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">192.168.10.5</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Asignación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Grabada en la tarjeta de red.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Configurada o asignada por DHCP.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Alcance</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Entrega dentro de la red local.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Entrega de extremo a extremo entre redes.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Cambia en el camino</strong></td><td style="padding:13px 12px;">Sí, en cada salto.</td><td style="padding:13px 12px;">No (salvo NAT).</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Analogía: la IP es la dirección de la casa (destino final) y la MAC es la placa del vehículo que hace cada tramo del viaje.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t005',
                    label: 'Propósito del Protocolo de Resolución de Direcciones (ARP)',
                    steps: [
                        {
                            title: 'ARP',
                            content: `<p>Para enviar una trama en la red local, el equipo necesita la MAC del destino. <strong>ARP</strong> la descubre a partir de la dirección IP.</p>
<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-bullhorn" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Solicitud ARP</b><br><small>Difusión: ¿quién tiene 192.168.10.1?</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-reply" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Respuesta ARP</b><br><small>Unidifusión: soy yo, mi MAC es…</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-table" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Tabla ARP</b><br><small>Se guarda la asociación IP–MAC</small></div></div>
</div>
</div>
<pre class="codigo">
arp -a                    # ver la tabla ARP en Windows o Linux
Router# show ip arp       # en un enrutador
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Si el destino está en otra red, el equipo pide por ARP la MAC de su <strong>puerta de enlace</strong>, no la del destino final.</p>
<p class="nota">
<i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
El envenenamiento ARP (ARP spoofing) envía respuestas falsas para interceptar tráfico; se mitiga con inspección dinámica de ARP en los conmutadores.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t006',
                    label: 'Funcionamiento de la detección de vecinos Protocolo de Internet versión 6 (IPv6)',
                    steps: [
                        {
                            title: 'Neighbor Discovery (ND)',
                            content: `<p>IPv6 no usa ARP. En su lugar usa <strong>Neighbor Discovery</strong>, basado en mensajes ICMPv6.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Mensaje</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Función</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Solicitud de vecino (NS)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pregunta la MAC asociada a una dirección IPv6 (equivale a la solicitud ARP).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Anuncio de vecino (NA)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Responde con la MAC.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Solicitud de enrutador (RS)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un equipo pide información de la red.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Anuncio de enrutador (RA)</strong></td><td style="padding:13px 12px;">El enrutador informa el prefijo y la puerta de enlace (base de SLAAC).</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
ND usa direcciones de multidifusión de nodo solicitado en lugar de difusiones, lo que reduce el tráfico innecesario.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_004',
            label: 'Configuración básica de un enrutador',
            subtemas: [
                {
                    id: 'm004-t001',
                    label: 'Configuración de los parámetros iniciales del enrutador',
                    steps: [
                        {
                            title: 'Configuración inicial',
                            content: `<pre class="codigo">
Router&gt; enable
Router# configure terminal
Router(config)# hostname R1
R1(config)# enable secret Cl4veSegur@
R1(config)# line console 0
R1(config-line)# password C0ns0la!
R1(config-line)# login
R1(config-line)# exit
R1(config)# line vty 0 4
R1(config-line)# transport input ssh
R1(config-line)# login local
R1(config-line)# exit
R1(config)# username admin secret Adm1n!2026
R1(config)# ip domain-name lab.cr
R1(config)# crypto key generate rsa modulus 2048
R1(config)# service password-encryption
R1(config)# banner motd #Acceso restringido#
R1(config)# end
R1# copy running-config startup-config
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Configurar SSH en lugar de Telnet evita que las contraseñas viajen en texto plano.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t002',
                    label: 'Configuración de las interfaces de los dispositivos',
                    steps: [
                        {
                            title: 'Interfaces del enrutador',
                            content: `<pre class="codigo">
R1(config)# interface g0/0/0
R1(config-if)# description Enlace a la LAN de estudiantes
R1(config-if)# ip address 192.168.10.1 255.255.255.0
R1(config-if)# ipv6 address 2001:db8:acad:10::1/64
R1(config-if)# ipv6 address fe80::1 link-local
R1(config-if)# no shutdown
R1(config-if)# exit
R1(config)# ipv6 unicast-routing
</pre>
<pre class="codigo">
R1# show ip interface brief
Interface    IP-Address     OK? Method Status   Protocol
G0/0/0       192.168.10.1   YES manual up       up
G0/0/1       192.168.20.1   YES manual up       up
</pre>`,
                            nextButton: 'Siguiente: Comandos de verificación'
                        },
                        {
                            title: 'Comandos de verificación',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Comando</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Muestra</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>show ip interface brief</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Resumen de interfaces, IP y estado.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>show ip route</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Tabla de enrutamiento.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>show interfaces</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Detalle y errores de cada interfaz.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>show ipv6 interface brief</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Interfaces IPv6.</td></tr>
<tr><td style="padding:13px 12px;"><code>show running-config</code></td><td style="padding:13px 12px;">Configuración activa.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t003',
                    label: 'Configuración de la puerta de enlace predeterminada',
                    steps: [
                        {
                            title: 'Puerta de enlace predeterminada',
                            content: `<p>La <strong>puerta de enlace predeterminada</strong> es la dirección del enrutador al que un equipo envía los paquetes destinados a otras redes. Sin ella, el equipo solo puede comunicarse dentro de su propia red.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Dispositivo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Configuración</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Computadora</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">IP 192.168.10.20, máscara 255.255.255.0, puerta de enlace 192.168.10.1.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Conmutador (administración remota)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>ip default-gateway 192.168.10.1</code></td></tr>
<tr><td style="padding:13px 12px;"><strong>Enrutador hacia Internet</strong></td><td style="padding:13px 12px;"><code>ip route 0.0.0.0 0.0.0.0 203.0.113.1</code> (ruta predeterminada)</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
Si una computadora puede hacer ping a equipos de su red pero no a otras redes, revise primero la puerta de enlace.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_005',
            label: 'Asignación de direcciones IPv4 e IPv6',
            subtemas: [
                {
                    id: 'm005-t001',
                    label: 'Estructura y tipos de las direcciones Protocolo de Internet versión 4 (IPv4) y Protocolo de Internet versión 6 (IPv6)',
                    steps: [
                        {
                            title: 'IPv4',
                            content: `<p>Una dirección IPv4 tiene 32 bits divididos en una porción de <strong>red</strong> y una de <strong>host</strong>. La <strong>máscara</strong> indica dónde termina la red.</p>
<pre class="codigo">
Dirección:  192.168.10.20
Máscara:    255.255.255.0   (/24)
Red:        192.168.10.0
Difusión:   192.168.10.255
Hosts:      192.168.10.1 – 192.168.10.254  (254 hosts)
</pre>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Rango o ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Privadas (RFC 1918)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Bucle invertido</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">127.0.0.1</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Enlace local (APIPA)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">169.254.0.0/16</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Públicas</strong></td><td style="padding:13px 12px;">Enrutables en Internet.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: IPv6'
                        },
                        {
                            title: 'IPv6',
                            content: `<p>IPv6 usa 128 bits escritos en 8 grupos hexadecimales. Se abrevia omitiendo los ceros iniciales y reemplazando una sola secuencia de grupos en cero por <code>::</code>.</p>
<pre class="codigo">
Completa:   2001:0db8:0000:0000:0000:0000:0000:0001
Abreviada:  2001:db8::1
</pre>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo IPv6</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Prefijo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Unidifusión global</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">2000::/3</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Como las IPv4 públicas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Enlace local</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">fe80::/10</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Solo dentro del enlace.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Local única</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">fc00::/7</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Privadas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Multidifusión</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">ff00::/8</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Grupos (reemplaza la difusión).</td></tr>
<tr><td style="padding:13px 12px;"><strong>Bucle invertido</strong></td><td style="padding:13px 12px;">::1</td><td style="padding:13px 12px;">El propio equipo.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t002',
                    label: 'Segmentación, división y creación de subredes en una red Protocolo de Internet versión 4 (IPv4) y Protocolo de Internet versión 6 (IPv6)',
                    steps: [
                        {
                            title: '¿Por qué segmentar?',
                            content: `<ul>
    <li>Reducir el tráfico de difusión.</li>
    <li>Mejorar la seguridad separando departamentos.</li>
    <li>Organizar por ubicación o función.</li>
    <li>Aprovechar mejor las direcciones.</li>
</ul>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Subred</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>192.168.10.0/26</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Administración</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>192.168.10.64/26</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Laboratorio</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>192.168.10.128/26</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Estudiantes</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>192.168.10.192/26</strong></td><td style="padding:13px 12px;">Servidores</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Subredes en IPv6'
                        },
                        {
                            title: 'Subredes en IPv6',
                            content: `<p>En IPv6 se usa el <strong>ID de subred</strong> de 16 bits entre el prefijo global /48 y la interfaz /64. No hay que ahorrar direcciones: cada subred es /64.</p>
<pre class="codigo">
Prefijo asignado: 2001:db8:acad::/48
Subred 1:         2001:db8:acad:1::/64
Subred 2:         2001:db8:acad:2::/64
...
Hasta 65 536 subredes /64
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t003',
                    label: 'División de subredes Protocolo de Internet versión 4 (IPv4) y Protocolo de Internet versión 6 (IPv6)',
                    steps: [
                        {
                            title: 'Procedimiento',
                            content: `<ol>
    <li>Determinar cuántas subredes o cuántos hosts se necesitan.</li>
    <li>Tomar bits prestados de la porción de host: subredes = 2ⁿ.</li>
    <li>Calcular hosts por subred: 2ʰ − 2.</li>
    <li>Calcular el salto (incremento) = 256 − valor del octeto de la máscara.</li>
    <li>Listar red, primer host, último host y difusión de cada subred.</li>
</ol>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Prefijo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Máscara</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Hosts por subred</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>/24</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">255.255.255.0</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">254</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>/25</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">255.255.255.128</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">126</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>/26</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">255.255.255.192</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">62</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>/27</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">255.255.255.224</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">30</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>/28</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">255.255.255.240</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">14</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>/30</strong></td><td style="padding:13px 12px;">255.255.255.252</td><td style="padding:13px 12px;">2</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: VLSM'
                        },
                        {
                            title: 'VLSM',
                            content: `<p>Con <strong>máscaras de longitud variable</strong> (VLSM) cada subred recibe el tamaño que necesita, empezando por la más grande.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Necesidad</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Hosts</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Subred asignada</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Laboratorio</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">50</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">192.168.10.0/26</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Oficinas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">25</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">192.168.10.64/27</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Servidores</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">10</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">192.168.10.96/28</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Enlace R1–R2</strong></td><td style="padding:13px 12px;">2</td><td style="padding:13px 12px;">192.168.10.112/30</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
import ipaddress
red = ipaddress.ip_network("192.168.10.0/24")
for subred in red.subnets(new_prefix=26):
    hosts = list(subred.hosts())
    print(subred, hosts[0], hosts[-1], subred.broadcast_address)
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t004',
                    label: 'Configuración y direccionamiento de direcciones Protocolo de Internet versión 4 (IPv4) y Protocolo de Internet versión 6 (IPv6)',
                    steps: [
                        {
                            title: 'Asignación estática y dinámica',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Método</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">IPv4</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">IPv6</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Estático</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Configuración manual.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Configuración manual.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Dinámico</strong></td><td style="padding:13px 12px;">DHCPv4.</td><td style="padding:13px 12px;">SLAAC, DHCPv6 sin estado o con estado.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
R1(config)# ip dhcp excluded-address 192.168.10.1 192.168.10.10
R1(config)# ip dhcp pool ESTUDIANTES
R1(dhcp-config)# network 192.168.10.0 255.255.255.0
R1(dhcp-config)# default-router 192.168.10.1
R1(dhcp-config)# dns-server 8.8.8.8
</pre>`,
                            nextButton: 'Siguiente: Verificar en el equipo'
                        },
                        {
                            title: 'Verificar en el equipo',
                            content: `<pre class="codigo">
ipconfig /all          # Windows
ip addr                # Linux
ipconfig /release &amp;&amp; ipconfig /renew   # renovar la dirección DHCP
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Asigne direcciones estáticas a servidores, impresoras y equipos de red; use DHCP para los equipos de usuarios.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t005',
                    label: 'Diseño de red estructurado.',
                    steps: [
                        {
                            title: 'Modelo jerárquico',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Capa</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Función</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Núcleo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Transporte rápido y redundante entre partes de la red.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Distribución</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Enrutamiento, políticas y filtrado entre VLAN.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Acceso</strong></td><td style="padding:13px 12px;">Conexión de los dispositivos finales.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
En redes pequeñas, el núcleo y la distribución suelen combinarse en un <strong>núcleo colapsado</strong>.</p>`,
                            nextButton: 'Siguiente: Proceso de diseño'
                        },
                        {
                            title: 'Proceso de diseño',
                            content: `<ol>
    <li>Levantar los requerimientos: usuarios, aplicaciones, crecimiento.</li>
    <li>Diseñar la topología lógica y física.</li>
    <li>Planificar el direccionamiento (tabla de subredes).</li>
    <li>Seleccionar dispositivos y cableado (cableado estructurado TIA-568).</li>
    <li>Documentar: diagramas, tabla de direcciones, configuraciones.</li>
    <li>Probar y validar.</li>
</ol>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Dispositivo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Interfaz</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Dirección IP</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Máscara</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Puerta de enlace</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>R1</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">G0/0/0</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">192.168.10.1</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">255.255.255.192</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">—</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>SW1</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">VLAN 1</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">192.168.10.2</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">255.255.255.192</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">192.168.10.1</td></tr>
<tr><td style="padding:13px 12px;"><strong>PC-Lab1</strong></td><td style="padding:13px 12px;">NIC</td><td style="padding:13px 12px;">192.168.10.20</td><td style="padding:13px 12px;">255.255.255.192</td><td style="padding:13px 12px;">192.168.10.1</td></tr>
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
            label: 'Fundamentos de seguridad y creación de redes pequeñas',
            subtemas: [
                {
                    id: 'm006-t001',
                    label: 'Vulnerabilidades, amenazas a la seguridad, ataques de red y mitigaciones',
                    steps: [
                        {
                            title: 'Vulnerabilidades y amenazas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo de vulnerabilidad</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tecnológica</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Protocolos sin cifrado, sistemas sin actualizar.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>De configuración</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Contraseñas por defecto, servicios innecesarios.</td></tr>
<tr><td style="padding:13px 12px;"><strong>De política</strong></td><td style="padding:13px 12px;">Falta de reglas de uso y contraseñas.</td></tr>
</tbody>
</table>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ataque</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Reconocimiento</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Escaneo de puertos y recolección de información.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Acceso</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Robo de contraseñas, hombre en el medio.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Denegación de servicio (DoS/DDoS)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Saturar un servicio para que no responda.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Malware</strong></td><td style="padding:13px 12px;">Virus, gusanos, troyanos, ransomware.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Mitigaciones'
                        },
                        {
                            title: 'Mitigaciones',
                            content: `<ul>
    <li>Respaldos periódicos y probados.</li>
    <li>Actualizaciones de sistemas y firmware.</li>
    <li>Autenticación, autorización y registro (AAA).</li>
    <li>Firewalls y listas de control de acceso.</li>
    <li>Seguridad de los equipos finales (antivirus, cifrado).</li>
    <li>Capacitación de los usuarios.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t002',
                    label: 'Seguridad de los dispositivos',
                    steps: [
                        {
                            title: 'Endurecimiento de dispositivos',
                            content: `<pre class="codigo">
R1(config)# security passwords min-length 10
R1(config)# login block-for 120 attempts 3 within 60
R1(config)# line vty 0 4
R1(config-line)# exec-timeout 5 0
R1(config-line)# transport input ssh
R1(config-line)# exit
R1(config)# ip ssh version 2
R1(config)# no ip http server
R1(config)# interface g0/0/2
R1(config-if)# shutdown          ! desactivar interfaces sin uso
</pre>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Medida</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Propósito</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Contraseñas fuertes y cifradas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Evitar accesos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Bloqueo tras intentos fallidos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Frenar ataques de fuerza bruta.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cierre por inactividad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Evitar sesiones abiertas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Solo SSH</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cifrar la administración.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Apagar servicios e interfaces sin uso</strong></td><td style="padding:13px 12px;">Reducir la superficie de ataque.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t003',
                    label: 'Dispositivos y topologías de una red pequeña',
                    steps: [
                        {
                            title: 'Red pequeña',
                            content: `<p>Una red pequeña (hogar, oficina, pyme) suele tener un enrutador con conexión a Internet, uno o dos conmutadores, un punto de acceso inalámbrico y los equipos de los usuarios.</p>
<pre class="codigo">
           Internet
              |
          [Router R1]
              |
          [Switch SW1] ---- [Punto de acceso Wi-Fi]
          /    |    \\
      PC1    PC2   Impresora
</pre>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Aplicación o servicio</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Protocolo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Navegación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">HTTP/HTTPS</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Correo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">SMTP, IMAP</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Archivos compartidos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">SMB</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Voz sobre IP</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">SIP, RTP</td></tr>
<tr><td style="padding:13px 12px;"><strong>Asignación de IP</strong></td><td style="padding:13px 12px;">DHCP</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t004',
                    label: 'Selección de dispositivos y asignación de direcciones para redes pequeñas',
                    steps: [
                        {
                            title: 'Selección de dispositivos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Criterio</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Pregunta</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Costo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Cabe en el presupuesto?</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Puertos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Cuántos y de qué velocidad?</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Expansión</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Permite crecer (modular)?</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Características</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Soporta VLAN, PoE, QoS, Wi-Fi 6?</td></tr>
<tr><td style="padding:13px 12px;"><strong>Administración</strong></td><td style="padding:13px 12px;">¿Se puede administrar de forma remota y segura?</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Plan de direccionamiento'
                        },
                        {
                            title: 'Plan de direccionamiento',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Rango</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>192.168.1.1</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Puerta de enlace (enrutador)</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>192.168.1.2 – .10</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Conmutadores y puntos de acceso (estáticas)</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>192.168.1.11 – .20</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Servidores e impresoras (estáticas)</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>192.168.1.100 – .200</strong></td><td style="padding:13px 12px;">Equipos de usuarios (DHCP)</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Documente el plan: cuando falle un equipo, sabrá de inmediato qué dirección debería tener.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t005',
                    label: 'Redundancia en redes pequeñas y administración del tráfico',
                    steps: [
                        {
                            title: 'Redundancia',
                            content: `<ul>
    <li>Enlaces dobles entre conmutadores (con STP para evitar bucles).</li>
    <li>Dos proveedores de Internet o un enlace de respaldo (4G/5G).</li>
    <li>Fuentes de poder redundantes y UPS.</li>
    <li>Respaldos de las configuraciones.</li>
</ul>
<p class="nota">
<i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
Los enlaces redundantes sin el protocolo Spanning Tree (STP) generan bucles de capa 2 y tormentas de difusión.</p>`,
                            nextButton: 'Siguiente: Administración del tráfico'
                        },
                        {
                            title: 'Administración del tráfico',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo de tráfico</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Prioridad</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Motivo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Voz</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Alta</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sensible al retardo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Video</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Alta</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sensible al retardo y la pérdida.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Datos</strong></td><td style="padding:13px 12px;">Normal</td><td style="padding:13px 12px;">Tolera retrasos.</td></tr>
</tbody>
</table>
</div>
<p>La <strong>calidad de servicio</strong> (QoS) clasifica y prioriza el tráfico para que las aplicaciones críticas funcionen bien aunque la red esté congestionada.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t006',
                    label: 'Mensajes de Protocolo de Control de Mensajes de Internet (ICMP) y pruebas de funcionalidades de red',
                    steps: [
                        {
                            title: 'ICMP',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Mensaje</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Echo request / reply</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ping.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Destino inalcanzable</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">No se llegó a la red, el host o el puerto.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tiempo excedido</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El TTL llegó a 0 (traceroute).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>RA/RS, NS/NA (ICMPv6)</strong></td><td style="padding:13px 12px;">Detección de vecinos y de enrutadores.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Pruebas'
                        },
                        {
                            title: 'Pruebas',
                            content: `<pre class="codigo">
ping 127.0.0.1               # 1. ¿Funciona TCP/IP en el equipo?
ping 192.168.10.1            # 2. ¿Llego a la puerta de enlace?
ping 8.8.8.8                 # 3. ¿Llego a Internet?
ping www.ucenfotec.ac.cr     # 4. ¿Funciona DNS?
tracert 8.8.8.8              # ¿Dónde se pierde el camino?
</pre>
<pre class="codigo">
R1# show ip interface brief
R1# show cdp neighbors          ! dispositivos vecinos
R1# show version                ! IOS, memoria, tiempo encendido
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Diagnostique de abajo hacia arriba: cable y luces (física), IP y máscara, puerta de enlace, DNS y por último la aplicación.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        }
    ]
};
