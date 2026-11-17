const data = {
    // Pantalla de bienvenida
    welcome: {
        title: 'FUN-01 <br> Introducción a las Tecnologías de Información',
        image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/FUN-01/imgs/logo.png', // Cambiar por imagen real
        description: 'Metodologías, estándares, procesos y herramientas para digitalizar, almacenar, transmitir y recuperar datos: representación de datos, sistemas operativos, software, redes, bases de datos y el papel de las TIC en la empresa y la sociedad.',
        instruction: 'Seleccione cada pestaña para acceder a la información'
    },
    // Temas principales y sus subtemas con pasos
    temas: [
        {
            id: 'modulo_001',
            label: 'Introducción y evolución de la tecnología de información y comunicación',
            subtemas: [
                {
                    id: 'm001-t001',
                    label: 'Programación-computación-comunicación',
                    steps: [
                        {
                            title: 'Tres pilares de las TIC',
                            content: `<div style="display:flex; flex-wrap:wrap; gap:12px; margin:12px 0;">
<div style="flex:1 1 200px; padding:14px; border:1px solid #9cc8ff; border-top:4px solid #2b93d1; border-radius:10px; background:#ffffff;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-code" style="color:#164a98; margin-right:6px;" aria-hidden="true"></i><strong>Programación</strong></p><p style="margin:0;">Escribir instrucciones para que la computadora resuelva problemas.</p></div>
<div style="flex:1 1 200px; padding:14px; border:1px solid #9cc8ff; border-top:4px solid #2b93d1; border-radius:10px; background:#ffffff;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-microchip" style="color:#164a98; margin-right:6px;" aria-hidden="true"></i><strong>Computación</strong></p><p style="margin:0;">Procesar y almacenar datos con hardware y software.</p></div>
<div style="flex:1 1 200px; padding:14px; border:1px solid #9cc8ff; border-top:4px solid #2b93d1; border-radius:10px; background:#ffffff;"><p style="margin:0 0 6px 0;"><i class="fa-solid fa-tower-broadcast" style="color:#164a98; margin-right:6px;" aria-hidden="true"></i><strong>Comunicación</strong></p><p style="margin:0;">Transmitir información entre dispositivos y personas.</p></div>
</div>
<p>Las <strong>tecnologías de información y comunicación</strong> (TIC) integran estos tres pilares: un mensaje de WhatsApp se escribe con un programa, se procesa en el teléfono y viaja por redes hasta otra persona.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t002',
                    label: 'La revolución de las computadoras',
                    steps: [
                        {
                            title: 'De las máquinas de cálculo a la computadora personal',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Época</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Hito</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1642</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pascalina: calculadora mecánica de Pascal.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1837</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Máquina analítica de Babbage; Ada Lovelace escribe el primer algoritmo.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1946</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">ENIAC, computadora electrónica de propósito general.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1971</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Primer microprocesador (Intel 4004).</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1981</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Computadora personal de IBM.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1991</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">World Wide Web.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>2007</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Teléfonos inteligentes.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>2020s</strong></td><td style="padding:13px 12px;">Nube, IA generativa e Internet de las cosas.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Ley de Moore'
                        },
                        {
                            title: 'Ley de Moore',
                            content: `<p>En 1965 Gordon Moore observó que la cantidad de transistores en un chip se duplicaba aproximadamente cada dos años. Esta tendencia guió la industria durante décadas; hoy se desacelera por límites físicos, lo que impulsa el paralelismo y los procesadores especializados.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t003',
                    label: 'Conceptos básicos: dato, sistemas, abstracción, software, hardware, telecomunicaciones, microprocesadores',
                    steps: [
                        {
                            title: 'Conceptos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Concepto</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Definición</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Dato</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Representación de un hecho sin interpretar.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">«25».</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Información</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Datos procesados con significado.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">«La temperatura es 25 °C».</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Sistema</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Conjunto de partes que interactúan con un objetivo.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sistema de matrícula.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Abstracción</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Concentrarse en lo esencial y ocultar detalles.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Usar un control remoto sin saber de electrónica.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Hardware</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Parte física.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Procesador, pantalla.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Software</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Programas e instrucciones.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sistema operativo, aplicaciones.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Telecomunicaciones</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Transmisión de información a distancia.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Internet, telefonía.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Microprocesador</strong></td><td style="padding:13px 12px;">Chip que ejecuta las instrucciones.</td><td style="padding:13px 12px;">CPU de una computadora.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Del dato al conocimiento'
                        },
                        {
                            title: 'Del dato al conocimiento',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-database" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Datos</b><br><small>Hechos aislados</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-circle-info" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Información</b><br><small>Datos con contexto</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-lightbulb" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Conocimiento</b><br><small>Comprender</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-scale-balanced" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Decisión</b><br><small>Actuar</small></div></div>
</div>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t004',
                    label: 'Usos de las tecnologías de información y comunicación',
                    steps: [
                        {
                            title: 'Usos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ámbito</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplos</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Educación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Plataformas virtuales, simuladores.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Salud</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Expediente digital (EDUS), telemedicina.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Gobierno</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Trámites digitales, firma digital.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Comercio</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Comercio electrónico, pagos móviles.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Entretenimiento</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Videojuegos, transmisión de video.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ciencia</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Simulación, análisis de datos.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Agricultura</strong></td><td style="padding:13px 12px;">Sensores de riego, drones.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t005',
                    label: 'Personajes y hechos importantes: computadoras actuales y telecomunicaciones',
                    steps: [
                        {
                            title: 'Personajes',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Persona</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Aporte</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ada Lovelace</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Primer algoritmo para una máquina.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Alan Turing</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Bases teóricas de la computación.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>John von Neumann</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Arquitectura de programa almacenado.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Grace Hopper</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Primer compilador y el lenguaje COBOL.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Claude Shannon</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Teoría de la información.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Vint Cerf y Bob Kahn</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Protocolos TCP/IP.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tim Berners-Lee</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">World Wide Web.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Franklin Chang Díaz</strong></td><td style="padding:13px 12px;">Astronauta costarricense e investigador en propulsión espacial.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Telecomunicaciones'
                        },
                        {
                            title: 'Telecomunicaciones',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Año</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Hito</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1876</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Teléfono.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1969</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">ARPANET.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1983</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Adopción de TCP/IP.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1990s</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Telefonía móvil digital y acceso a Internet.</td></tr>
<tr><td style="padding:13px 12px;"><strong>2019 en adelante</strong></td><td style="padding:13px 12px;">Redes 5G.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t006',
                    label: 'Tecnologías digitales: convergencia, almacenamiento, multimedios, usos',
                    steps: [
                        {
                            title: 'Convergencia digital',
                            content: `<p>La <strong>convergencia</strong> es la integración de servicios que antes estaban separados (teléfono, televisión, cámara, computadora) en un solo dispositivo o red, gracias a que todo se representa digitalmente.</p>`,
                            nextButton: 'Siguiente: Almacenamiento y multimedios'
                        },
                        {
                            title: 'Almacenamiento y multimedios',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Medio</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Formatos comunes</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Texto</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">TXT, DOCX, PDF</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Imagen</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">JPG, PNG, WebP, SVG</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Audio</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">MP3, AAC, WAV</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Video</strong></td><td style="padding:13px 12px;">MP4 (H.264), WebM</td></tr>
</tbody>
</table>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Almacenamiento</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Local</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Disco o SSD.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Extraíble</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Memoria USB.</td></tr>
<tr><td style="padding:13px 12px;"><strong>En la nube</strong></td><td style="padding:13px 12px;">Google Drive, OneDrive.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
La <strong>compresión</strong> reduce el tamaño: sin pérdida (ZIP, PNG) o con pérdida (JPG, MP3), que elimina detalles poco perceptibles.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_002',
            label: 'Representación de datos y sistemas de numeración',
            subtemas: [
                {
                    id: 'm002-t001',
                    label: 'Bit y Byte',
                    steps: [
                        {
                            title: 'Bit y byte',
                            content: `<p>Un <strong>bit</strong> es la unidad mínima de información: 0 o 1. Un <strong>byte</strong> son 8 bits y puede representar 2⁸ = 256 valores distintos.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Bits</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Combinaciones</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">2</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>4 (nibble)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">16</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>8 (byte)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">256</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>16</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">65 536</td></tr>
<tr><td style="padding:13px 12px;"><strong>32</strong></td><td style="padding:13px 12px;">4 294 967 296</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
Letra A en ASCII = 65 = 01000001  (1 byte)
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t002',
                    label: 'Códigos simbólicos',
                    steps: [
                        {
                            title: 'Códigos de caracteres',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Código</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Bits</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Característica</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>ASCII</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">7</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">128 caracteres: letras inglesas, números y símbolos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>ASCII extendido / ISO-8859-1</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">8</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Agrega letras con tilde y la ñ.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Unicode</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Variable</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Más de 149 000 caracteres de todos los idiomas y emojis.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>UTF-8</strong></td><td style="padding:13px 12px;">8 a 32</td><td style="padding:13px 12px;">Codificación de Unicode más usada en la web.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
print(ord("ñ"), "ñ".encode("utf-8"))      # 241 b'\\xc3\\xb1'
print(chr(65))                             # A
</pre>`,
                            nextButton: 'Siguiente: Otros códigos'
                        },
                        {
                            title: 'Otros códigos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Código</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Código de barras</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Productos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Código QR</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Enlaces, pagos.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Morse</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Telegrafía.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>BCD</strong></td><td style="padding:13px 12px;">Dígitos decimales en binario.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t003',
                    label: 'Unidades de medida',
                    steps: [
                        {
                            title: 'Unidades de almacenamiento',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Unidad</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Decimal (SI)</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Binaria (IEC)</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Kilobyte (KB) / Kibibyte (KiB)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">1 000 bytes</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">1 024 bytes</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Megabyte (MB) / MiB</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">10⁶ bytes</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">1 048 576 bytes</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Gigabyte (GB) / GiB</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">10⁹ bytes</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">2³⁰ bytes</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Terabyte (TB) / TiB</strong></td><td style="padding:13px 12px;">10¹² bytes</td><td style="padding:13px 12px;">2⁴⁰ bytes</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Por eso un disco de «1 TB» aparece en el sistema operativo como unos 931 GB: el fabricante usa unidades decimales y el sistema, binarias.</p>`,
                            nextButton: 'Siguiente: Velocidad de transmisión'
                        },
                        {
                            title: 'Velocidad de transmisión',
                            content: `<p>La velocidad de las redes se mide en <strong>bits</strong> por segundo (Mb/s), no en bytes. Un plan de 100 Mb/s descarga como máximo 12,5 MB por segundo.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t004',
                    label: 'Sistemas numéricos: tipos y conversiones',
                    steps: [
                        {
                            title: 'Sistemas numéricos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Sistema</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Base</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Dígitos</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Binario</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">2</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">0, 1</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Octal</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">8</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">0–7</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Decimal</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">10</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">0–9</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Hexadecimal</strong></td><td style="padding:13px 12px;">16</td><td style="padding:13px 12px;">0–9, A–F</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Conversiones'
                        },
                        {
                            title: 'Conversiones',
                            content: `<pre class="codigo">
Decimal → binario (divisiones sucesivas entre 2):
  13 / 2 = 6 residuo 1
   6 / 2 = 3 residuo 0
   3 / 2 = 1 residuo 1
   1 / 2 = 0 residuo 1      → leer de abajo hacia arriba: 1101

Binario → decimal:
  1101 = 1·8 + 1·4 + 0·2 + 1·1 = 13

Binario → hexadecimal (grupos de 4 bits):
  1010 1111 = A F → AF
</pre>
<pre class="codigo">
print(bin(13), oct(13), hex(13))      # 0b1101 0o15 0xd
print(int("1101", 2), int("AF", 16))  # 13 175
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t005',
                    label: 'Datos en microcontroladores',
                    steps: [
                        {
                            title: 'Microcontroladores',
                            content: `<p>Un <strong>microcontrolador</strong> (como el de Arduino o ESP32) es una pequeña computadora en un chip que lee sensores y controla actuadores. Trabaja con datos binarios: entradas digitales (0/1) y analógicas convertidas a números.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo de dato</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Digital</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Botón presionado (1) o no (0).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Analógico (ADC de 10 bits)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Valor de 0 a 1023 de un sensor de luz.</td></tr>
<tr><td style="padding:13px 12px;"><strong>PWM</strong></td><td style="padding:13px 12px;">Brillo de un LED de 0 a 255.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
// Arduino: encender un LED si hay poca luz
const int SENSOR = A0, LED = 9;
void setup() { pinMode(LED, OUTPUT); Serial.begin(9600); }
void loop() {
  int luz = analogRead(SENSOR);          // 0 a 1023
  Serial.println(luz);
  digitalWrite(LED, luz &lt; 300 ? HIGH : LOW);
  delay(500);
}
</pre>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_003',
            label: 'Conceptos básicos de sistemas operativos y máquinas virtuales',
            subtemas: [
                {
                    id: 'm003-t001',
                    label: 'Importancia de los sistemas operativos',
                    steps: [
                        {
                            title: '¿Por qué es importante el sistema operativo?',
                            content: `<p>El <strong>sistema operativo</strong> es el software que administra el hardware y ofrece servicios a los programas y a las personas. Sin él, cada aplicación tendría que saber controlar directamente el disco, la memoria o la pantalla.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Sistema operativo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Dispositivos</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Windows</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Computadoras personales.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>macOS</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Computadoras Apple.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Linux</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Servidores, nube, supercomputadoras.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Android, iOS</strong></td><td style="padding:13px 12px;">Teléfonos y tabletas.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t002',
                    label: 'Objetivos fundamentales y funciones de los sistemas operativos',
                    steps: [
                        {
                            title: 'Objetivos',
                            content: `<ul>
    <li><strong>Comodidad</strong>: facilitar el uso de la computadora.</li>
    <li><strong>Eficiencia</strong>: aprovechar bien los recursos.</li>
    <li><strong>Capacidad de evolución</strong>: incorporar nuevas funciones y hardware.</li>
</ul>`,
                            nextButton: 'Siguiente: Funciones'
                        },
                        {
                            title: 'Funciones',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Función</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Gestión de procesos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Crear, planificar y terminar programas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Gestión de memoria</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Asignar y proteger la memoria.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Sistema de archivos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Organizar los datos en archivos y carpetas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Entrada y salida</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Controlar los dispositivos mediante controladores.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Seguridad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Usuarios, permisos y aislamiento.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Interfaz</strong></td><td style="padding:13px 12px;">Línea de comandos o gráfica.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t003',
                    label: 'El sistema operativo en el sistema de cómputo',
                    steps: [
                        {
                            title: 'Capas del sistema de cómputo',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Capa</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Usuarios</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Personas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Aplicaciones</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Navegador, procesador de texto.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Sistema operativo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Windows, Linux.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Hardware</strong></td><td style="padding:13px 12px;">CPU, memoria, discos.</td></tr>
</tbody>
</table>
</div>
<p>El sistema operativo actúa como <strong>intermediario</strong>: las aplicaciones le piden servicios y él controla el hardware.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t004',
                    label: 'Máquina virtual (abstracta o extendida)',
                    steps: [
                        {
                            title: 'El sistema operativo como máquina extendida',
                            content: `<p>El sistema operativo presenta una <strong>máquina abstracta</strong> más fácil de usar que el hardware real: en lugar de sectores del disco, el programador ve archivos; en lugar de interrupciones, ve funciones.</p>`,
                            nextButton: 'Siguiente: Máquinas virtuales'
                        },
                        {
                            title: 'Máquinas virtuales',
                            content: `<p>Una <strong>máquina virtual</strong> es una computadora simulada por software que ejecuta su propio sistema operativo dentro de otro. Un <strong>hipervisor</strong> reparte el hardware real entre varias máquinas virtuales.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo de hipervisor</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplos</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tipo 1 (sobre el hardware)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">VMware ESXi, Hyper-V, KVM.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Tipo 2 (sobre un sistema operativo)</strong></td><td style="padding:13px 12px;">VirtualBox, VMware Workstation.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Las máquinas virtuales permiten practicar con otros sistemas operativos sin riesgo para la computadora principal.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t005',
                    label: 'Utilidades del sistema operativo',
                    steps: [
                        {
                            title: 'Utilidades',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Utilidad</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Función</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo en Windows / Linux</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Explorador de archivos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Organizar archivos.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Explorador / Nautilus</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Administrador de tareas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ver y cerrar procesos.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Administrador de tareas / top, htop</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Desfragmentador y optimizador</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Optimizar discos.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Optimizar unidades</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Respaldo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Copias de seguridad.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Historial de archivos / rsync</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Antivirus</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Proteger contra malware.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Microsoft Defender</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Terminal</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Comandos.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">PowerShell / Bash</td></tr>
<tr><td style="padding:13px 12px;"><strong>Compresión</strong></td><td style="padding:13px 12px;">Reducir el tamaño de archivos.</td><td style="padding:13px 12px;">ZIP / tar, gzip</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t006',
                    label: 'Evolución de los sistemas operativos',
                    steps: [
                        {
                            title: 'Evolución',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Época</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Característica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplos</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1950s</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Procesamiento por lotes.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Monitores residentes.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1960s</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Multiprogramación y tiempo compartido.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">OS/360, CTSS, MULTICS.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1970s</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sistemas portables.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">UNIX, escrito en C.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1980s</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Computadoras personales e interfaces gráficas.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">MS-DOS, Mac OS, Windows.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1990s</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Software libre y redes.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Linux, Windows NT.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>2007 en adelante</strong></td><td style="padding:13px 12px;">Móviles y nube.</td><td style="padding:13px 12px;">iOS, Android, sistemas para contenedores.</td></tr>
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
            label: 'Clasificación del software y programación de computadoras',
            subtemas: [
                {
                    id: 'm004-t001',
                    label: 'Clasificación general: software de aplicación, de sistema',
                    steps: [
                        {
                            title: 'Tipos de software',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Función</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplos</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>De sistema</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Administra el hardware y da servicios.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sistema operativo, controladores, firmware.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>De aplicación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Resuelve tareas del usuario.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Navegador, hoja de cálculo, juegos.</td></tr>
<tr><td style="padding:13px 12px;"><strong>De programación</strong></td><td style="padding:13px 12px;">Herramientas para crear software.</td><td style="padding:13px 12px;">Editores, compiladores, depuradores.</td></tr>
</tbody>
</table>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Licencia</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Característica</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Propietario</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Uso con restricciones; código cerrado.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Libre / código abierto</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se puede estudiar, modificar y compartir.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Freeware</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Gratuito, pero cerrado.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>SaaS</strong></td><td style="padding:13px 12px;">Se usa por Internet mediante suscripción.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t002',
                    label: 'Concepto y formas de programación',
                    steps: [
                        {
                            title: '¿Qué es programar?',
                            content: `<p><strong>Programar</strong> es escribir instrucciones precisas (un algoritmo traducido a un lenguaje) para que la computadora resuelva un problema.</p>
<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-magnifying-glass" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Analizar el problema</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-diagram-project" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Diseñar el algoritmo</b><br><small>Pseudocódigo o diagrama</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-code" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Codificar</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-vial" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Probar</b><br><small></small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-wrench" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Mantener</b><br><small></small></div></div>
</div>
</div>`,
                            nextButton: 'Siguiente: Paradigmas'
                        },
                        {
                            title: 'Paradigmas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Paradigma</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Idea</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Lenguajes</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Imperativo / estructurado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Secuencia de instrucciones.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">C, Python.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Orientado a objetos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Objetos con datos y comportamiento.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Java, C#, Python.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Funcional</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Funciones sin efectos secundarios.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Haskell, JavaScript.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Declarativo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Qué se quiere, no cómo.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">SQL, HTML.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Visual por bloques</strong></td><td style="padding:13px 12px;">Bloques que encajan.</td><td style="padding:13px 12px;">Scratch, MakeCode.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
# Python: promedio de notas
notas = [85, 92, 78]
promedio = sum(notas) / len(notas)
print(f"Promedio: {promedio:.1f}")
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t003',
                    label: 'Programación de dispositivos',
                    steps: [
                        {
                            title: 'Programar el mundo físico',
                            content: `<p>Además de computadoras, se programan microcontroladores, robots, drones, electrodomésticos y sensores. Este tipo de programación interactúa con <strong>entradas</strong> (sensores, botones) y <strong>salidas</strong> (LED, motores, pantallas).</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Plataforma</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Lenguaje</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Arduino</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">C/C++</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Prototipos electrónicos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>ESP32</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">C/C++, MicroPython</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">IoT con Wi-Fi.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Raspberry Pi</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Python</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Computadora pequeña con Linux.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>micro:bit</strong></td><td style="padding:13px 12px;">Bloques, Python</td><td style="padding:13px 12px;">Educación.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
En el tema «Datos en microcontroladores» hay un ejemplo de programa para Arduino.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t004',
                    label: 'Lenguaje de alto nivel y de bajo nivel',
                    steps: [
                        {
                            title: 'Niveles de lenguaje',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Nivel</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Características</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Lenguaje de máquina</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Binario; lo ejecuta directamente la CPU.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">10110000 01100001</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ensamblador (bajo nivel)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Nemónicos; depende de la arquitectura.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">MOV AL, 61h</td></tr>
<tr><td style="padding:13px 12px;"><strong>Alto nivel</strong></td><td style="padding:13px 12px;">Cercano al lenguaje humano; portable.</td><td style="padding:13px 12px;">print("Hola")</td></tr>
</tbody>
</table>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;"></th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Bajo nivel</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Alto nivel</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Control del hardware</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Total.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Limitado.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Facilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Difícil.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Fácil.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Portabilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Baja.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Alta.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Uso</strong></td><td style="padding:13px 12px;">Controladores, sistemas embebidos.</td><td style="padding:13px 12px;">Aplicaciones.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t005',
                    label: 'Máquinas multinivel',
                    steps: [
                        {
                            title: 'La computadora como máquina multinivel',
                            content: `<p>Tanenbaum describe la computadora como una serie de niveles; cada uno ofrece una máquina virtual más sencilla al nivel superior.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Nivel</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>5 Lenguajes orientados a problemas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Python, Java.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>4 Lenguaje ensamblador</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Nemónicos.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>3 Sistema operativo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Servicios y llamadas al sistema.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>2 Arquitectura del conjunto de instrucciones (ISA)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Instrucciones de máquina.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1 Microarquitectura</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">ALU, registros, rutas de datos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>0 Lógica digital</strong></td><td style="padding:13px 12px;">Compuertas.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t006',
                    label: 'Traducción, ejecución de programas y lenguajes',
                    steps: [
                        {
                            title: 'Compiladores e intérpretes',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;"></th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Compilador</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Intérprete</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Funcionamiento</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Traduce todo el programa a código de máquina antes de ejecutarlo.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Traduce y ejecuta línea por línea.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Velocidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ejecución rápida.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Más lento.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Errores</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se detectan al compilar.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Aparecen al ejecutar.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Ejemplos</strong></td><td style="padding:13px 12px;">C, C++, Rust.</td><td style="padding:13px 12px;">Python, JavaScript (con compilación JIT).</td></tr>
</tbody>
</table>
</div>
<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-file-code" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Código fuente</b><br><small>programa.c</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-gears" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Compilador</b><br><small>gcc</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-file" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Código objeto</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-link" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Enlazador</b><br><small></small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-play" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Ejecutable</b><br><small></small></div></div>
</div>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Java y C# usan un enfoque híbrido: compilan a un código intermedio (bytecode) que ejecuta una máquina virtual.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_005',
            label: 'Introducción a las redes de computadoras y bases de datos',
            subtemas: [
                {
                    id: 'm005-t001',
                    label: 'Concepto de red: clasificaciones',
                    steps: [
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
                    id: 'm005-t002',
                    label: 'Componentes de software y de hardware',
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
                            nextButton: 'Siguiente: Componentes de software'
                        },
                        {
                            title: 'Componentes de software',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Software</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Función</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Protocolos (TCP/IP)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Reglas de comunicación.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Sistema operativo de red</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Administra recursos compartidos.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Controladores</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Permiten usar la tarjeta de red.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Aplicaciones</strong></td><td style="padding:13px 12px;">Navegador, correo, videollamadas.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t003',
                    label: 'Redes alámbricas e inalámbricas',
                    steps: [
                        {
                            title: 'Alámbricas e inalámbricas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;"></th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Alámbrica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Inalámbrica</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Medio</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cobre o fibra óptica.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ondas de radio.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Velocidad y estabilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Alta y estable.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Variable; depende de la distancia y obstáculos.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Movilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Limitada.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Alta.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Seguridad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Requiere acceso físico.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Requiere cifrado (WPA3).</td></tr>
<tr><td style="padding:13px 12px;"><strong>Ejemplos</strong></td><td style="padding:13px 12px;">Ethernet.</td><td style="padding:13px 12px;">Wi-Fi, Bluetooth, 4G/5G.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t004',
                    label: 'Internet y sus aplicaciones básicas',
                    steps: [
                        {
                            title: '¿Qué es Internet?',
                            content: `<p><strong>Internet</strong> es la red mundial de redes interconectadas mediante TCP/IP. La <strong>web</strong> es uno de sus servicios, no Internet en sí.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Servicio</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Protocolo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Web</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">HTTP/HTTPS</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Correo electrónico</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">SMTP, IMAP</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Transferencia de archivos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">FTP, SFTP</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Nombres de dominio</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">DNS</td></tr>
<tr><td style="padding:13px 12px;"><strong>Mensajería y videollamadas</strong></td><td style="padding:13px 12px;">Varios sobre TCP/UDP</td></tr>
</tbody>
</table>
</div>
<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-keyboard" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>URL</b><br><small>www.ucenfotec.ac.cr</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-address-book" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>DNS</b><br><small>Traduce a una IP</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-server" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Servidor</b><br><small>Responde</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-display" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Navegador</b><br><small>Muestra la página</small></div></div>
</div>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t005',
                    label: 'Bases de datos: sistemas de bases y lenguaje de consultas',
                    steps: [
                        {
                            title: 'Bases de datos',
                            content: `<p>Una <strong>base de datos</strong> es un conjunto organizado de datos relacionados. Un <strong>sistema gestor de bases de datos</strong> (SGBD) permite crearla, consultarla y protegerla.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">SGBD</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>MySQL, PostgreSQL, SQL Server, Oracle</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Relacionales (SQL).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>MongoDB</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Documentos (NoSQL).</td></tr>
<tr><td style="padding:13px 12px;"><strong>SQLite</strong></td><td style="padding:13px 12px;">Relacional embebida en aplicaciones.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: SQL'
                        },
                        {
                            title: 'SQL',
                            content: `<pre class="codigo">
SELECT nombre, provincia
FROM estudiantes
WHERE provincia = 'Heredia'
ORDER BY nombre;
</pre>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Instrucción</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Función</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>SELECT</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Consultar.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>INSERT</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Agregar.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>UPDATE</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Modificar.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>DELETE</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Eliminar.</td></tr>
<tr><td style="padding:13px 12px;"><strong>CREATE TABLE</strong></td><td style="padding:13px 12px;">Crear una tabla.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t006',
                    label: 'Bases de datos relacionales y prácticas elementales',
                    steps: [
                        {
                            title: 'Modelo relacional',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Concepto</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tabla</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Conjunto de registros de una entidad.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Fila (registro)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un elemento.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Columna (atributo)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Una característica.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Llave primaria</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Identifica cada fila de forma única.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Llave foránea</strong></td><td style="padding:13px 12px;">Relaciona con otra tabla.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Práctica elemental'
                        },
                        {
                            title: 'Práctica elemental',
                            content: `<pre class="codigo">
CREATE TABLE cursos (
    codigo VARCHAR(10) PRIMARY KEY,
    nombre VARCHAR(80) NOT NULL
);
CREATE TABLE matriculas (
    id INT PRIMARY KEY,
    estudiante VARCHAR(80),
    codigo_curso VARCHAR(10) REFERENCES cursos(codigo)
);
INSERT INTO cursos VALUES ('FUN-01', 'Introducción a las TI');
INSERT INTO matriculas VALUES (1, 'Ana Mora', 'FUN-01');

SELECT m.estudiante, c.nombre
FROM matriculas m JOIN cursos c ON c.codigo = m.codigo_curso;
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Puede practicar SQL sin instalar nada con SQLite en línea o con DB Browser for SQLite.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_006',
            label: 'Tecnología de información y comunicación en la empresa',
            subtemas: [
                {
                    id: 'm006-t001',
                    label: 'Usos empresariales de las tecnologías de información y comunicación',
                    steps: [
                        {
                            title: 'TIC en la empresa',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Sistema</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Función</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>ERP</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Integra finanzas, inventario, compras y planillas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>CRM</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Gestiona la relación con los clientes.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Comercio electrónico</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ventas en línea.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Inteligencia de negocios (BI)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Tableros y análisis para decidir.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Colaboración</strong></td><td style="padding:13px 12px;">Correo, videollamadas, documentos compartidos.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
La <strong>transformación digital</strong> no es solo comprar tecnología: implica cambiar procesos y cultura para aprovecharla.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t002',
                    label: 'Administración de la información',
                    steps: [
                        {
                            title: 'Gestión de la información',
                            content: `<ul>
    <li>Definir qué información es valiosa y quién es responsable de ella.</li>
    <li>Garantizar la calidad: exacta, completa y actualizada.</li>
    <li>Respaldar y proteger.</li>
    <li>Cumplir la Ley 8968 de protección de datos personales.</li>
    <li>Definir cuánto tiempo se conserva y cómo se elimina.</li>
</ul>
<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-plus" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Crear</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-floppy-disk" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Almacenar</b><br><small></small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-share-nodes" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Usar y compartir</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-box-archive" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Archivar</b><br><small></small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-trash" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Eliminar</b><br><small></small></div></div>
</div>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t003',
                    label: 'Desarrollo de software y sistemas de información',
                    steps: [
                        {
                            title: 'Sistemas de información',
                            content: `<p>Un <strong>sistema de información</strong> reúne personas, procesos, datos y tecnología para recolectar, procesar y distribuir información que apoya las decisiones.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Nivel</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Transaccional (TPS)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Operativo</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Punto de venta.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Gerencial (MIS)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Táctico</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Reportes de ventas mensuales.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Apoyo a decisiones (DSS)</strong></td><td style="padding:13px 12px;">Estratégico</td><td style="padding:13px 12px;">Tablero con proyecciones.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Ciclo de desarrollo'
                        },
                        {
                            title: 'Ciclo de desarrollo',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-clipboard-list" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Requerimientos</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-pen-ruler" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Diseño</b><br><small></small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-code" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Construcción</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-vial" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Pruebas</b><br><small></small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-rocket" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Implantación</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-wrench" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Mantenimiento</b><br><small></small></div></div>
</div>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t004',
                    label: 'Administración de redes y plataformas tecnológicas',
                    steps: [
                        {
                            title: 'Administración de plataformas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Área</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tareas</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Redes</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Configurar, monitorear y asegurar conexiones.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Servidores</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Instalar, actualizar y respaldar.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Nube</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Gestionar servicios en AWS, Azure o Google Cloud.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Usuarios</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cuentas, permisos y soporte.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Monitoreo</strong></td><td style="padding:13px 12px;">Disponibilidad y rendimiento.</td></tr>
</tbody>
</table>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Modelo de nube</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ofrece</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>IaaS</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Infraestructura (máquinas virtuales).</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Amazon EC2.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>PaaS</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Plataforma para desplegar aplicaciones.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Azure App Service.</td></tr>
<tr><td style="padding:13px 12px;"><strong>SaaS</strong></td><td style="padding:13px 12px;">Aplicación lista para usar.</td><td style="padding:13px 12px;">Microsoft 365.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t005',
                    label: 'Administración de servicios habilitados por tecnologías de información y comunicación',
                    steps: [
                        {
                            title: 'Gestión de servicios de TI',
                            content: `<p>La gestión de servicios de TI se enfoca en entregar valor al usuario. <strong>ITIL</strong> es el marco de buenas prácticas más usado.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Práctica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Mesa de servicio</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Punto único de contacto para los usuarios.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Gestión de incidentes</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Restaurar el servicio lo antes posible.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Gestión de problemas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Eliminar la causa raíz.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Gestión de cambios</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cambios controlados.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Acuerdos de nivel de servicio (SLA)</strong></td><td style="padding:13px 12px;">Compromisos medibles.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t006',
                    label: 'Seguridad en las tecnologías de información',
                    steps: [
                        {
                            title: 'Seguridad de la información',
                            content: `<p>La seguridad protege la <strong>confidencialidad</strong>, la <strong>integridad</strong> y la <strong>disponibilidad</strong> de la información.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Amenaza</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Protección</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Phishing</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Desconfiar de enlaces y verificar remitentes.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Malware y ransomware</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Antivirus, actualizaciones y respaldos.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Contraseñas robadas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Contraseñas únicas y autenticación de dos factores.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Redes públicas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Usar HTTPS o VPN.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Pérdida del equipo</strong></td><td style="padding:13px 12px;">Cifrado y bloqueo.</td></tr>
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
            label: 'Subdisciplinas, interacción humano-tecnología e impactos',
            subtemas: [
                {
                    id: 'm007-t001',
                    label: 'Ciencia de la computación y sistemas de información',
                    steps: [
                        {
                            title: 'Disciplinas de la computación',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Disciplina</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Enfoque</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ciencias de la computación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Teoría, algoritmos y fundamentos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Sistemas de información</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Uso de la tecnología en las organizaciones.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ingeniería del software</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Desarrollo sistemático de software de calidad.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tecnologías de información</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Infraestructura y servicios tecnológicos.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ingeniería en computadores</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Hardware y su integración con el software.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Ciberseguridad</strong></td><td style="padding:13px 12px;">Protección de sistemas y datos.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
ACM e IEEE publican guías curriculares (Computing Curricula) que describen estas disciplinas.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t002',
                    label: 'Ingeniería: semejanzas y diferencias (computadores, software, tecnologías de información, telemática, producción digital)',
                    steps: [
                        {
                            title: 'Comparación',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ingeniería</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Se enfoca en</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo de trabajo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>En computadores</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Diseño de hardware y sistemas embebidos.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Diseñar una placa electrónica.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Del software</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Procesos y técnicas para construir software.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Desarrollar una aplicación bancaria.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>En tecnologías de información</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Infraestructura, redes y servicios.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Administrar la nube de una empresa.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Telemática</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Telecomunicaciones e informática.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Diseñar redes de comunicación.</td></tr>
<tr><td style="padding:13px 12px;"><strong>En producción digital</strong></td><td style="padding:13px 12px;">Contenidos multimedia y experiencias digitales.</td><td style="padding:13px 12px;">Producir videojuegos o animación.</td></tr>
</tbody>
</table>
</div>
<p><strong>Semejanzas</strong>: base en matemática, programación y resolución de problemas; trabajo en equipo; ética profesional.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t003',
                    label: 'Funcionalidad, adaptabilidad y accesibilidad',
                    steps: [
                        {
                            title: 'Características de una buena tecnología',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Característica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Funcionalidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Hace lo que el usuario necesita.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Adaptabilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se ajusta a distintos dispositivos, contextos y cambios.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Accesibilidad</strong></td><td style="padding:13px 12px;">Puede usarla cualquier persona, incluidas las personas con discapacidad.</td></tr>
</tbody>
</table>
</div>
<ul>
    <li>Texto alternativo en imágenes.</li>
    <li>Subtítulos en videos.</li>
    <li>Navegación con teclado.</li>
    <li>Buen contraste y letra ampliable.</li>
</ul>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
La Ley 7600 de Costa Rica promueve la igualdad de oportunidades, incluido el acceso a la información.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t004',
                    label: 'Impactos sociales, económicos y éticos',
                    steps: [
                        {
                            title: 'Impactos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ámbito</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Positivo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Negativo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Social</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Comunicación y acceso a la información.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Brecha digital, adicción, desinformación.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Económico</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Nuevos empleos y negocios.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Automatización de puestos.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ambiental</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Teletrabajo, menos papel.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Residuos electrónicos y consumo energético.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Ético</strong></td><td style="padding:13px 12px;">Transparencia.</td><td style="padding:13px 12px;">Privacidad, sesgos algorítmicos.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
El código de ética de ACM pide contribuir al bienestar de la sociedad, evitar el daño y respetar la privacidad.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t005',
                    label: 'Internet de las cosas',
                    steps: [
                        {
                            title: 'Internet de las cosas (IoT)',
                            content: `<p>La <strong>IoT</strong> conecta objetos físicos (sensores, electrodomésticos, vehículos) a Internet para recolectar datos y actuar de forma automática.</p>
<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-temperature-half" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Sensor</b><br><small>Mide</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-microchip" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Microcontrolador</b><br><small>Procesa</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-wifi" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Red</b><br><small>Envía</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-cloud" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Nube</b><br><small>Almacena y analiza</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-mobile-screen" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Aplicación</b><br><small>Muestra y controla</small></div></div>
</div>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Aplicación</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Hogar</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Luces y cerraduras inteligentes.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Agricultura</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Riego según la humedad del suelo.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ciudades</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Semáforos y parqueos inteligentes.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Salud</strong></td><td style="padding:13px 12px;">Relojes que miden el pulso.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t006',
                    label: 'Computación física e interacción humano-máquina',
                    steps: [
                        {
                            title: 'Computación física',
                            content: `<p>La <strong>computación física</strong> crea sistemas que perciben y responden al mundo real mediante sensores y actuadores. Combina electrónica, programación y diseño de interacción.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Forma de interacción</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Táctil</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pantallas y botones.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Voz</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Asistentes de voz.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Gestos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sensores de movimiento.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Realidad aumentada y virtual</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Visores.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Vestibles</strong></td><td style="padding:13px 12px;">Relojes inteligentes.</td></tr>
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
