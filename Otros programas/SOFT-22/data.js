const data = {
    // Pantalla de bienvenida
    welcome: {
        title: 'SOFT-22 <br> Programación Móvil',
        image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-22/imgs/logo.png', // Cambiar por imagen real
        description: 'Desarrollo de aplicaciones para dispositivos móviles en Android, iOS y marcos multiplataforma, con diseño de interfaces móviles, seguridad y privacidad, y funciones avanzadas como notificaciones, sensores y analítica.',
        instruction: 'Seleccione cada pestaña para acceder a la información'
    },
    // Temas principales y sus subtemas con pasos
    temas: [
        {
            id: 'modulo_001',
            label: 'Introducción a la programación móvil',
            subtemas: [
                {
                    id: 'm001-t001',
                    label: 'Fundamentos de programación móvil',
                    steps: [
                        {
                            title: '¿Qué es la programación móvil?',
                            content: `<p>La <strong>programación móvil</strong> es el desarrollo de aplicaciones para teléfonos, tabletas y otros dispositivos portátiles, considerando sus características: pantallas táctiles, sensores, batería limitada, conectividad variable y uso en movimiento.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Característica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Implicación</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pantalla pequeña y táctil</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Interfaces simples con objetivos grandes.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Batería limitada</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Optimizar el uso de CPU, red y GPS.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Conectividad intermitente</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Funcionar sin conexión y sincronizar.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Sensores</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cámara, GPS, acelerómetro, biometría.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ciclo de vida controlado por el sistema</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">La app puede pausarse o cerrarse en cualquier momento.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Distribución por tiendas</strong></td><td style="padding:13px 12px;">Revisión y políticas de Google Play y App Store.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t002',
                    label: 'Plataformas móviles y sus características',
                    steps: [
                        {
                            title: 'Android y iOS',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Aspecto</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Android</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">iOS</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Empresa</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Google (código abierto AOSP)</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Apple</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Lenguajes</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Kotlin, Java</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Swift, Objective-C</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Interfaz moderna</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Jetpack Compose</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">SwiftUI</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Entorno</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Android Studio</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Xcode (requiere macOS)</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tienda</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Google Play</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">App Store</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Diversidad de dispositivos</strong></td><td style="padding:13px 12px;">Muy alta</td><td style="padding:13px 12px;">Baja</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
En Costa Rica y Latinoamérica Android tiene la mayor participación de mercado, aunque iOS es significativo en segmentos de mayor ingreso: muchas empresas necesitan ambas plataformas.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t003',
                    label: 'Desarrollo de aplicaciones móviles nativas versus aplicaciones web móviles',
                    steps: [
                        {
                            title: 'Enfoques de desarrollo',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Enfoque</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tecnología</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ventajas</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Desventajas</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Nativa</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Kotlin, Swift</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Máximo rendimiento y acceso al hardware.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Dos bases de código.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Web móvil / PWA</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">HTML, CSS, JS</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Una sola base, sin tienda, actualización inmediata.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Acceso limitado al hardware (sobre todo en iOS).</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Multiplataforma</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Flutter, React Native, Kotlin Multiplatform</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Una base de código con apariencia nativa.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Dependencia del marco; algunas funciones requieren código nativo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Híbrida</strong></td><td style="padding:13px 12px;">Ionic, Capacitor</td><td style="padding:13px 12px;">Reutiliza la web dentro de una app.</td><td style="padding:13px 12px;">Rendimiento menor.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Aplicaciones web progresivas'
                        },
                        {
                            title: 'Aplicaciones web progresivas (PWA)',
                            content: `<pre class="codigo">
// manifest.json
{ "name": "Matrícula CR", "short_name": "Matrícula", "start_url": "/",
  "display": "standalone", "theme_color": "#164a98",
  "icons": [{ "src": "icon-192.png", "sizes": "192x192", "type": "image/png" }] }
</pre>
<pre class="codigo">
// Registro del service worker para funcionar sin conexión
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js");
}
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t004',
                    label: 'Herramientas y entornos de desarrollo para programación móvil',
                    steps: [
                        {
                            title: 'Herramientas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Herramienta</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Android Studio</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">IDE oficial de Android con emulador y perfiladores.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Xcode</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">IDE oficial de iOS con simulador e Instruments.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>VS Code</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Desarrollo con Flutter y React Native.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Gradle / Swift Package Manager</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Gestión de dependencias y compilación.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Firebase</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Autenticación, base de datos, notificaciones, analítica, Crashlytics.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Figma</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Diseño de interfaces.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Fastlane, Codemagic, Bitrise</strong></td><td style="padding:13px 12px;">Automatizar compilación y publicación.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t005',
                    label: 'Ciclo de vida de una aplicación móvil',
                    steps: [
                        {
                            title: 'Ciclo de vida del desarrollo',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-lightbulb" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Idea y estrategia</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-pen-ruler" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Diseño UX/UI</b><br><small></small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-code" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Desarrollo</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-vial" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Pruebas</b><br><small></small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-store" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Publicación</b><br><small>Tiendas</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-chart-line" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Monitoreo y mantenimiento</b><br><small></small></div></div>
</div>
</div>`,
                            nextButton: 'Siguiente: Ciclo de vida en ejecución'
                        },
                        {
                            title: 'Ciclo de vida en ejecución (Android)',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Método</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ocurre cuando…</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>onCreate</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">se crea la actividad.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>onStart</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">se vuelve visible.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>onResume</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">pasa a primer plano.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>onPause</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">pierde el primer plano.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>onStop</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">deja de ser visible.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><code>onDestroy</code></td><td style="padding:13px 12px;">se destruye.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
En iOS, SwiftUI expone los estados <code>active</code>, <code>inactive</code> y <code>background</code> mediante <code>scenePhase</code>. En ambos sistemas, guarde el estado del usuario antes de pasar a segundo plano.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t006',
                    label: 'Mejores prácticas y estándares de programación móvil',
                    steps: [
                        {
                            title: 'Buenas prácticas',
                            content: `<ol>
    <li>Arquitectura clara (MVVM) que separe la interfaz de la lógica.</li>
    <li>No bloquear el hilo principal: operaciones de red y disco en segundo plano.</li>
    <li>Diseñar para sin conexión.</li>
    <li>Pedir permisos solo cuando se necesitan y explicar por qué.</li>
    <li>Optimizar imágenes y el tamaño de la aplicación.</li>
    <li>Respetar las guías de diseño de cada plataforma.</li>
    <li>Accesibilidad: etiquetas, tamaño de letra dinámico, contraste.</li>
    <li>Pruebas automatizadas y monitoreo de fallos en producción.</li>
</ol>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
OWASP MASVS define los requisitos de seguridad para aplicaciones móviles; se estudia en el módulo de seguridad.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_002',
            label: 'Android',
            subtemas: [
                {
                    id: 'm002-t001',
                    label: 'Introducción a Android: arquitectura y componentes clave',
                    steps: [
                        {
                            title: 'Arquitectura de la plataforma',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Capa</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Contenido</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Aplicaciones</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Apps del sistema y de terceros.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Marco de trabajo de Android</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">API: actividades, notificaciones, recursos, ubicación.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Android Runtime (ART) y bibliotecas nativas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ejecución del código y bibliotecas en C/C++.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Capa de abstracción de hardware</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Interfaces para cámara, Bluetooth, sensores.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Núcleo Linux</strong></td><td style="padding:13px 12px;">Controladores, memoria, seguridad.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Componentes de una aplicación'
                        },
                        {
                            title: 'Componentes de una aplicación',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Componente</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Función</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Activity</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pantalla con interfaz de usuario.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Service</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Trabajo en segundo plano sin interfaz.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Broadcast Receiver</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Responde a eventos del sistema.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Content Provider</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Comparte datos con otras apps.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Intent</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mensaje para iniciar componentes o comunicarse.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>AndroidManifest.xml</strong></td><td style="padding:13px 12px;">Declara componentes y permisos.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
La arquitectura recomendada por Google usa capas de interfaz (Compose + ViewModel), dominio (casos de uso) y datos (repositorios).</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t002',
                    label: 'Desarrollo de interfaces de usuario en Android',
                    steps: [
                        {
                            title: 'Jetpack Compose',
                            content: `<pre class="codigo">
@Composable
fun TarjetaEstudiante(nombre: String, grado: String, onMatricular: () -&gt; Unit) {
    Card(modifier = Modifier.fillMaxWidth().padding(8.dp)) {
        Column(modifier = Modifier.padding(16.dp)) {
            Text(text = nombre, style = MaterialTheme.typography.titleMedium)
            Text(text = "Grado: $grado")
            Spacer(Modifier.height(8.dp))
            Button(onClick = onMatricular) { Text("Matricular") }
        }
    }
}
</pre>
<p>Compose es <strong>declarativo</strong>: se describe cómo debe verse la interfaz según el estado, y se vuelve a dibujar cuando el estado cambia.</p>`,
                            nextButton: 'Siguiente: Estado y ViewModel'
                        },
                        {
                            title: 'Estado y ViewModel',
                            content: `<pre class="codigo">
class EstudiantesViewModel(private val repo: RepositorioEstudiantes) : ViewModel() {
    private val _estudiantes = MutableStateFlow&lt;List&lt;Estudiante&gt;&gt;(emptyList())
    val estudiantes: StateFlow&lt;List&lt;Estudiante&gt;&gt; = _estudiantes

    init { viewModelScope.launch { _estudiantes.value = repo.obtenerTodos() } }
}

@Composable
fun PantallaEstudiantes(vm: EstudiantesViewModel = viewModel()) {
    val lista by vm.estudiantes.collectAsState()
    LazyColumn {
        items(lista) { e -&gt; TarjetaEstudiante(e.nombre, e.grado) { /* ... */ } }
    }
}
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
<code>LazyColumn</code> solo dibuja los elementos visibles: es el equivalente eficiente de una lista larga.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t003',
                    label: 'Interacción con el hardware del dispositivo móvil',
                    steps: [
                        {
                            title: 'Permisos en tiempo de ejecución',
                            content: `<pre class="codigo">
&lt;!-- AndroidManifest.xml --&gt;
&lt;uses-permission android:name="android.permission.CAMERA" /&gt;
&lt;uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" /&gt;
</pre>
<pre class="codigo">
val lanzador = rememberLauncherForActivityResult(ActivityResultContracts.RequestPermission()) { concedido -&gt;
    if (concedido) abrirCamara() else mostrarMensaje("Se necesita la cámara para escanear el carné")
}
Button(onClick = { lanzador.launch(Manifest.permission.CAMERA) }) { Text("Escanear carné") }
</pre>`,
                            nextButton: 'Siguiente: Sensores y servicios'
                        },
                        {
                            title: 'Sensores y servicios',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Hardware</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">API</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cámara</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">CameraX</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ubicación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Fused Location Provider</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Sensores de movimiento</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">SensorManager</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Biometría</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">BiometricPrompt</td></tr>
<tr><td style="padding:13px 12px;"><strong>NFC y Bluetooth</strong></td><td style="padding:13px 12px;">NfcAdapter, BluetoothLe</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Solicite el permiso justo antes de usar la función y explique para qué se usa: aumenta la aceptación y cumple las políticas de las tiendas.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t004',
                    label: 'Persistencia de datos en aplicaciones Android',
                    steps: [
                        {
                            title: 'Opciones de almacenamiento',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Opción</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>DataStore</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Preferencias y configuraciones simples (reemplaza SharedPreferences).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Room</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Base de datos SQLite con objetos.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Archivos internos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Documentos privados de la app.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Almacenamiento cifrado</strong></td><td style="padding:13px 12px;">Datos sensibles con Android Keystore.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Room'
                        },
                        {
                            title: 'Room',
                            content: `<pre class="codigo">
@Entity
data class Estudiante(@PrimaryKey val cedula: String, val nombre: String, val grado: String)

@Dao
interface EstudianteDao {
    @Query("SELECT * FROM Estudiante ORDER BY nombre")
    fun todos(): Flow&lt;List&lt;Estudiante&gt;&gt;

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun guardar(e: Estudiante)
}

@Database(entities = [Estudiante::class], version = 1)
abstract class BaseDatos : RoomDatabase() { abstract fun estudianteDao(): EstudianteDao }
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t005',
                    label: 'Acceso a servicios y recursos externos en aplicaciones Android',
                    steps: [
                        {
                            title: 'Consumo de API con Retrofit',
                            content: `<pre class="codigo">
interface ApiMatricula {
    @GET("estudiantes/{cedula}")
    suspend fun obtenerEstudiante(@Path("cedula") cedula: String): Estudiante

    @POST("matriculas")
    suspend fun matricular(@Body solicitud: SolicitudMatricula): Matricula
}

val api = Retrofit.Builder()
    .baseUrl("https://api.matricula.cr/")
    .addConverterFactory(GsonConverterFactory.create())
    .build()
    .create(ApiMatricula::class.java)
</pre>
<pre class="codigo">
viewModelScope.launch {
    try {
        val estudiante = api.obtenerEstudiante("1-1234-5678")
        _estado.value = Estado.Exito(estudiante)
    } catch (e: IOException) {
        _estado.value = Estado.Error("Sin conexión")
    }
}
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Las corrutinas de Kotlin ejecutan la solicitud fuera del hilo principal; la interfaz sigue respondiendo mientras se espera.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t006',
                    label: 'Optimización y pruebas de rendimiento en aplicaciones Android',
                    steps: [
                        {
                            title: 'Herramientas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Herramienta</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Android Studio Profiler</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">CPU, memoria, red y energía.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Baseline Profiles</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mejorar el tiempo de arranque.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Macrobenchmark</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Medir arranque y desplazamiento.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>LeakCanary</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Detectar fugas de memoria.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Firebase Performance</strong></td><td style="padding:13px 12px;">Rendimiento en dispositivos reales.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Pruebas'
                        },
                        {
                            title: 'Pruebas',
                            content: `<pre class="codigo">
// Prueba de interfaz con Compose
@get:Rule val regla = createComposeRule()

@Test fun botonMatricularVisible() {
    regla.setContent { TarjetaEstudiante("Ana", "5", onMatricular = {}) }
    regla.onNodeWithText("Matricular").assertIsDisplayed()
}
</pre>
<ul>
    <li>Pruebas unitarias con JUnit para ViewModels y repositorios.</li>
    <li>Pruebas de interfaz con Compose Testing o Espresso.</li>
    <li>Firebase Test Lab para probar en muchos dispositivos reales.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_003',
            label: 'iOS',
            subtemas: [
                {
                    id: 'm003-t001',
                    label: 'Introducción al sistema operativo iPhone (iOS): arquitectura y componentes clave',
                    steps: [
                        {
                            title: 'Arquitectura de iOS',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Capa</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Marcos de trabajo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cocoa Touch / interfaz</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">SwiftUI, UIKit.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Medios</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">AVFoundation, Core Animation.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Servicios principales</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Foundation, Core Data, Core Location.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Núcleo del sistema</strong></td><td style="padding:13px 12px;">Seguridad, kernel Darwin.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Estructura de una app SwiftUI'
                        },
                        {
                            title: 'Estructura de una app SwiftUI',
                            content: `<pre class="codigo">
@main
struct MatriculaApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}
</pre>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Elemento</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Función</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Info.plist</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Configuración y textos de permisos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Assets</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Imágenes, colores e íconos.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Capabilities</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Notificaciones, iCloud, Apple Pay.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Sandbox</strong></td><td style="padding:13px 12px;">Cada app solo accede a sus propios archivos.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t002',
                    label: 'Desarrollo de interfaces de usuario en el sistema operativo iPhone (iOS)',
                    steps: [
                        {
                            title: 'SwiftUI',
                            content: `<pre class="codigo">
struct TarjetaEstudiante: View {
    let nombre: String
    let grado: String
    var onMatricular: () -&gt; Void

    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text(nombre).font(.headline)
            Text("Grado: \\(grado)").foregroundStyle(.secondary)
            Button("Matricular", action: onMatricular)
                .buttonStyle(.borderedProminent)
        }
        .padding()
    }
}
</pre>`,
                            nextButton: 'Siguiente: Estado observable'
                        },
                        {
                            title: 'Estado observable',
                            content: `<pre class="codigo">
@Observable
class EstudiantesModelo {
    var estudiantes: [Estudiante] = []
    func cargar() async {
        estudiantes = (try? await API.obtenerEstudiantes()) ?? []
    }
}

struct ListaEstudiantes: View {
    @State private var modelo = EstudiantesModelo()
    var body: some View {
        NavigationStack {
            List(modelo.estudiantes) { e in
                NavigationLink(e.nombre) { DetalleEstudiante(estudiante: e) }
            }
            .navigationTitle("Estudiantes")
            .task { await modelo.cargar() }
        }
    }
}
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t003',
                    label: 'Interacción con el hardware del dispositivo móvil en el sistema operativo iPhone (iOS)',
                    steps: [
                        {
                            title: 'Permisos y hardware',
                            content: `<pre class="codigo">
&lt;!-- Info.plist: texto que ve el usuario al pedir el permiso --&gt;
&lt;key&gt;NSCameraUsageDescription&lt;/key&gt;
&lt;string&gt;Se usa la cámara para escanear el carné estudiantil.&lt;/string&gt;
&lt;key&gt;NSLocationWhenInUseUsageDescription&lt;/key&gt;
&lt;string&gt;Se usa la ubicación para mostrar el centro educativo más cercano.&lt;/string&gt;
</pre>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Hardware</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Marco de trabajo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cámara</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">AVFoundation, PhotosPicker</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ubicación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Core Location</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Movimiento</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Core Motion</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Biometría (Face ID, Touch ID)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">LocalAuthentication</td></tr>
<tr><td style="padding:13px 12px;"><strong>NFC</strong></td><td style="padding:13px 12px;">Core NFC</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
let contexto = LAContext()
contexto.evaluatePolicy(.deviceOwnerAuthenticationWithBiometrics,
                        localizedReason: "Confirme su identidad para ver las calificaciones") { exito, _ in
    if exito { /* mostrar datos */ }
}
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t004',
                    label: 'Persistencia de datos en aplicaciones del sistema operativo iPhone (iOS)',
                    steps: [
                        {
                            title: 'Opciones',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Opción</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>UserDefaults / @AppStorage</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Preferencias simples.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>SwiftData</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Persistencia de objetos (sucesor moderno de Core Data).</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Core Data</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Modelo de objetos maduro.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Keychain</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Contraseñas y tokens cifrados.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Archivos</strong></td><td style="padding:13px 12px;">Documentos en el sandbox.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: SwiftData'
                        },
                        {
                            title: 'SwiftData',
                            content: `<pre class="codigo">
@Model
class Estudiante {
    @Attribute(.unique) var cedula: String
    var nombre: String
    var grado: String
    init(cedula: String, nombre: String, grado: String) {
        self.cedula = cedula; self.nombre = nombre; self.grado = grado
    }
}

struct ListaLocal: View {
    @Query(sort: \\Estudiante.nombre) var estudiantes: [Estudiante]
    @Environment(\\.modelContext) private var contexto
    var body: some View {
        List(estudiantes) { Text($0.nombre) }
    }
}
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t005',
                    label: 'Acceso a servicios y recursos externos en aplicaciones del sistema operativo iPhone (iOS)',
                    steps: [
                        {
                            title: 'URLSession con async/await',
                            content: `<pre class="codigo">
struct API {
    static let base = URL(string: "https://api.matricula.cr")!

    static func obtenerEstudiante(cedula: String) async throws -&gt; Estudiante {
        let url = base.appending(path: "estudiantes/\\(cedula)")
        let (datos, respuesta) = try await URLSession.shared.data(from: url)
        guard (respuesta as? HTTPURLResponse)?.statusCode == 200 else {
            throw URLError(.badServerResponse)
        }
        return try JSONDecoder().decode(Estudiante.self, from: datos)
    }
}

struct Estudiante: Codable, Identifiable {
    var id: String { cedula }
    let cedula: String
    let nombre: String
    let grado: String
}
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
App Transport Security exige HTTPS por defecto en todas las conexiones de una app iOS.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t006',
                    label: 'Optimización y pruebas de rendimiento en aplicaciones del sistema operativo iPhone (iOS)',
                    steps: [
                        {
                            title: 'Herramientas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Herramienta</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Instruments</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Time Profiler, Allocations, Leaks, Energy Log.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Xcode Organizer</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Métricas de rendimiento y fallos de usuarios reales.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>MetricKit</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Métricas de energía y arranque desde el dispositivo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>XCTest</strong></td><td style="padding:13px 12px;">Pruebas unitarias, de interfaz y de rendimiento.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Pruebas'
                        },
                        {
                            title: 'Pruebas',
                            content: `<pre class="codigo">
final class MatriculaTests: XCTestCase {
    func testCalculoDeEdad() {
        let edad = Calculadora.edad(nacimiento: fecha("2015-03-10"), al: fecha("2026-11-16"))
        XCTAssertEqual(edad, 11)
    }

    func testRendimientoDeFiltro() {
        measure { _ = Filtro.porGrado(estudiantes: muestra10000, grado: "5") }
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
            id: 'modulo_004',
            label: 'Multiplataforma',
            subtemas: [
                {
                    id: 'm004-t001',
                    label: 'Marcos de trabajo multiplataforma: ventajas y desventajas',
                    steps: [
                        {
                            title: 'Comparación',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Marco</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Lenguaje</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Interfaz</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Característica</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Flutter</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Dart</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Motor propio de dibujo</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Interfaz idéntica en todas las plataformas; muy buen rendimiento.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>React Native</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">JavaScript / TypeScript</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Componentes nativos</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Aprovecha conocimientos de React.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Kotlin Multiplatform</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Kotlin</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Nativa o Compose Multiplatform</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Comparte lógica; interfaz nativa opcional.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>.NET MAUI</strong></td><td style="padding:13px 12px;">C#</td><td style="padding:13px 12px;">Componentes nativos</td><td style="padding:13px 12px;">Ecosistema Microsoft.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Ventajas y desventajas'
                        },
                        {
                            title: 'Ventajas y desventajas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ventajas</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Desventajas</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Una base de código para Android e iOS.</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Las funciones nuevas del sistema tardan en llegar al marco.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Menor costo y tiempo de desarrollo.</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Algunas integraciones requieren código nativo.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Equipo único.</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Tamaño de la aplicación mayor.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Recarga en caliente para desarrollar rápido.</strong></td><td style="padding:13px 12px;">Dependencia de la evolución del marco.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t002',
                    label: 'Desarrollo de interfaces de usuario multiplataforma',
                    steps: [
                        {
                            title: 'Interfaz con Flutter',
                            content: `<pre class="codigo">
class TarjetaEstudiante extends StatelessWidget {
  final String nombre;
  final String grado;
  final VoidCallback onMatricular;
  const TarjetaEstudiante({super.key, required this.nombre, required this.grado, required this.onMatricular});

  @override
  Widget build(BuildContext context) {
    return Card(
      child: ListTile(
        title: Text(nombre),
        subtitle: Text('Grado: $grado'),
        trailing: FilledButton(onPressed: onMatricular, child: const Text('Matricular')),
      ),
    );
  }
}
</pre>`,
                            nextButton: 'Siguiente: Interfaz con React Native'
                        },
                        {
                            title: 'Interfaz con React Native',
                            content: `<pre class="codigo">
export function TarjetaEstudiante({ nombre, grado, onMatricular }) {
    return (
        &lt;View style={estilos.tarjeta}&gt;
            &lt;Text style={estilos.titulo}&gt;{nombre}&lt;/Text&gt;
            &lt;Text&gt;Grado: {grado}&lt;/Text&gt;
            &lt;Pressable onPress={onMatricular} accessibilityRole="button"&gt;
                &lt;Text&gt;Matricular&lt;/Text&gt;
            &lt;/Pressable&gt;
        &lt;/View&gt;
    );
}
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t003',
                    label: 'Acceso a características del dispositivo en aplicaciones multiplataforma',
                    steps: [
                        {
                            title: 'Complementos (plugins)',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Función</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Flutter</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">React Native / Expo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cámara</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">camera, image_picker</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">expo-camera</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ubicación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">geolocator</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">expo-location</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Biometría</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">local_auth</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">expo-local-authentication</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Notificaciones</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">firebase_messaging</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">expo-notifications</td></tr>
<tr><td style="padding:13px 12px;"><strong>Almacenamiento seguro</strong></td><td style="padding:13px 12px;">flutter_secure_storage</td><td style="padding:13px 12px;">expo-secure-store</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
final posicion = await Geolocator.getCurrentPosition();
print('Lat: \${posicion.latitude}, Lng: \${posicion.longitude}');
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Cuando no existe un complemento, se escribe un <strong>canal de plataforma</strong> (Flutter) o un módulo nativo (React Native) en Kotlin y Swift.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t004',
                    label: 'Gestión de datos en aplicaciones multiplataforma',
                    steps: [
                        {
                            title: 'Estado y persistencia',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Necesidad</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Flutter</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">React Native</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Estado de la app</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Provider, Riverpod, Bloc</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Context, Redux Toolkit, Zustand</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Preferencias</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">shared_preferences</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">AsyncStorage</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Base de datos local</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">sqflite, Drift, Isar</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">SQLite, WatermelonDB</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Sincronización en la nube</strong></td><td style="padding:13px 12px;">Firebase Firestore</td><td style="padding:13px 12px;">Firebase, Supabase</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t005',
                    label: 'Integración de servicios y recursos externos en aplicaciones multiplataforma',
                    steps: [
                        {
                            title: 'Consumo de API en Flutter',
                            content: `<pre class="codigo">
import 'package:http/http.dart' as http;
import 'dart:convert';

Future&lt;Estudiante&gt; obtenerEstudiante(String cedula) async {
  final r = await http.get(Uri.parse('https://api.matricula.cr/estudiantes/$cedula'));
  if (r.statusCode != 200) throw Exception('Error \${r.statusCode}');
  return Estudiante.fromJson(jsonDecode(r.body));
}
</pre>
<ul>
    <li>Firebase: autenticación, Firestore, almacenamiento y notificaciones con un solo SDK.</li>
    <li>Mapas: Google Maps y Mapbox.</li>
    <li>Pagos: SDK de las pasarelas con modo de pruebas.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t006',
                    label: 'Pruebas y depuración en aplicaciones multiplataforma',
                    steps: [
                        {
                            title: 'Pruebas en Flutter',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Herramienta</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Unitarias</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">package:test</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>De widgets</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">flutter_test</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>De integración</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">integration_test</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Extremo a extremo</strong></td><td style="padding:13px 12px;">Patrol, Maestro</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
testWidgets('muestra el botón Matricular', (tester) async {
  await tester.pumpWidget(MaterialApp(home: TarjetaEstudiante(nombre: 'Ana', grado: '5', onMatricular: () {})));
  expect(find.text('Matricular'), findsOneWidget);
});
</pre>
<ul>
    <li>Flutter DevTools: inspector de widgets, rendimiento y memoria.</li>
    <li>React Native: Flipper / React DevTools y Detox para pruebas extremo a extremo.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_005',
            label: 'Diseño de interfaces móviles',
            subtemas: [
                {
                    id: 'm005-t001',
                    label: 'Principios de diseño de interfaces móviles',
                    steps: [
                        {
                            title: 'Principios',
                            content: `<ul>
    <li>Una tarea principal por pantalla.</li>
    <li>Contenido primero, adornos después.</li>
    <li>Objetivos táctiles de 48 × 48 dp (Android) o 44 × 44 pt (iOS).</li>
    <li>Acciones principales en la zona del pulgar.</li>
    <li>Retroalimentación inmediata (vibración, animación, mensaje).</li>
    <li>Formularios cortos con teclados adecuados y autocompletado.</li>
    <li>Estados de carga, vacío y error diseñados.</li>
</ul>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Diseñe para interrupciones: el usuario puede salir en cualquier momento y debe poder retomar donde estaba.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t002',
                    label: 'Patrones de diseño para aplicaciones móviles',
                    steps: [
                        {
                            title: 'Patrones de interfaz',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Patrón</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Barra de navegación inferior</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Hasta 5 secciones principales.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Lista con detalle</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Explorar elementos y ver su información.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Hoja inferior (bottom sheet)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Acciones o detalles sin salir de la pantalla.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Deslizar para actualizar</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Recargar contenido.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pantallas de bienvenida (onboarding)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Presentar la app en pocos pasos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Búsqueda con sugerencias</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Encontrar rápido.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Esqueletos de carga</strong></td><td style="padding:13px 12px;">Indicar que el contenido viene en camino.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Patrones de arquitectura'
                        },
                        {
                            title: 'Patrones de arquitectura',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Patrón</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>MVVM</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">La vista observa al ViewModel, que expone el estado.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>MVI / unidireccional</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Acciones → estado → vista.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Repositorio</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Fuente única de datos (local y remota).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Inyección de dependencias</strong></td><td style="padding:13px 12px;">Hilt (Android), dependencias en SwiftUI.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t003',
                    label: 'Diseño centrado en el usuario y experiencia de usuario (UX) móvil',
                    steps: [
                        {
                            title: 'UX móvil',
                            content: `<ul>
    <li>Investigar el contexto real: ¿una mano?, ¿en movimiento?, ¿con mala señal?</li>
    <li>Crear personas y escenarios móviles.</li>
    <li>Prototipar en Figma y probar en un teléfono real.</li>
    <li>Medir: tasa de finalización de tareas, retención, calificaciones en la tienda.</li>
</ul>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Métrica móvil</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Retención día 1 / 7 / 30</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Porcentaje que vuelve a abrir la app.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tasa de fallos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sesiones con cierre inesperado.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tiempo de arranque</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Segundos hasta poder usar la app.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Calificación en la tienda</strong></td><td style="padding:13px 12px;">Percepción de los usuarios.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t004',
                    label: 'Adaptación de interfaces a diferentes dispositivos móviles',
                    steps: [
                        {
                            title: 'Diversidad de pantallas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Concepto</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>dp / pt</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Unidades independientes de la densidad de píxeles.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Clases de tamaño de ventana</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Compacta, mediana, expandida (tabletas, plegables).</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Orientación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Vertical y horizontal.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Áreas seguras</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Evitar la muesca y las barras del sistema.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Tamaño de letra dinámico</strong></td><td style="padding:13px 12px;">Respetar la configuración del usuario.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
// Compose: diseño según el ancho disponible
val clase = currentWindowAdaptiveInfo().windowSizeClass
if (clase.windowWidthSizeClass == WindowWidthSizeClass.EXPANDED) {
    ListaYDetalleLadoALado()
} else {
    ListaConNavegacion()
}
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t005',
                    label: 'Accesibilidad y usabilidad en aplicaciones móviles',
                    steps: [
                        {
                            title: 'Accesibilidad móvil',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Requisito</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Android</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">iOS</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Lector de pantalla</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">TalkBack: <code>contentDescription</code> / <code>semantics</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">VoiceOver: <code>accessibilityLabel</code></td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tamaño de letra</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Unidades <code>sp</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Dynamic Type</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Contraste</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">4,5:1</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">4,5:1</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Objetivos táctiles</strong></td><td style="padding:13px 12px;">48 × 48 dp</td><td style="padding:13px 12px;">44 × 44 pt</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
// Compose
Icon(Icons.Default.Delete, contentDescription = "Eliminar estudiante")

// SwiftUI
Image(systemName: "trash").accessibilityLabel("Eliminar estudiante")
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Pruebe la app con TalkBack y VoiceOver activados: es la forma más rápida de descubrir botones sin etiqueta.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t006',
                    label: 'Evaluación y mejora del diseño de interfaces móviles',
                    steps: [
                        {
                            title: 'Evaluación',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Método</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Herramienta</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pruebas de usabilidad en dispositivo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sesiones moderadas con prototipos o la app.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Evaluación heurística</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Heurísticas de Nielsen adaptadas a móvil.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Analítica</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Firebase Analytics, embudos de conversión.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Escáner de accesibilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Accessibility Scanner (Android), Accessibility Inspector (iOS).</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Retroalimentación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Reseñas en las tiendas, encuestas en la app.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Pruebas A/B</strong></td><td style="padding:13px 12px;">Firebase Remote Config.</td></tr>
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
            label: 'Seguridad y privacidad',
            subtemas: [
                {
                    id: 'm006-t001',
                    label: 'Amenazas y riesgos de seguridad en aplicaciones móviles',
                    steps: [
                        {
                            title: 'OWASP Mobile Top 10 (2024)',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Riesgo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Uso inadecuado de credenciales</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Claves de API dentro del código de la app.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Seguridad inadecuada de la cadena de suministro</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Bibliotecas de terceros vulnerables.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Autenticación y autorización inseguras</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Validar permisos solo en la app.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Validación insuficiente de entradas y salidas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Inyección en WebViews.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Comunicación insegura</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Tráfico sin TLS.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Controles de privacidad inadecuados</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Recolectar datos innecesarios.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Protección insuficiente del binario</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ingeniería inversa del APK.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Configuración de seguridad incorrecta</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Modo de depuración en producción.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Almacenamiento de datos inseguro</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Tokens en texto plano.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Criptografía insuficiente</strong></td><td style="padding:13px 12px;">Algoritmos obsoletos.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t002',
                    label: 'Autenticación y autorización en aplicaciones móviles',
                    steps: [
                        {
                            title: 'Buenas prácticas',
                            content: `<ul>
    <li>OAuth 2.0 con PKCE para aplicaciones móviles (sin secretos en la app).</li>
    <li>Inicio de sesión con proveedores (Google, Apple) o Firebase Authentication.</li>
    <li>Biometría para desbloquear un token guardado de forma segura, no como única autenticación.</li>
    <li>Tokens de acceso de corta duración y tokens de renovación protegidos.</li>
    <li>Toda autorización se verifica en el servidor.</li>
</ul>
<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-mobile-screen" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>App</b><br><small>Genera code_verifier</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-id-badge" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Proveedor de identidad</b><br><small>Usuario inicia sesión</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-key" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Código</b><br><small>Regresa a la app</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-arrows-rotate" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Intercambio</b><br><small>Código + verifier por tokens</small></div></div>
</div>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t003',
                    label: 'Protección de datos sensibles en aplicaciones móviles',
                    steps: [
                        {
                            title: 'Dónde guardar qué',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Dato</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Android</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">iOS</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tokens y contraseñas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Android Keystore + EncryptedSharedPreferences / DataStore cifrado</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Keychain</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Base de datos sensible</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">SQLCipher</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Protección de datos de archivos (Data Protection)</td></tr>
<tr><td style="padding:13px 12px;"><strong>Datos no sensibles</strong></td><td style="padding:13px 12px;">DataStore</td><td style="padding:13px 12px;">UserDefaults</td></tr>
</tbody>
</table>
</div>
<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #f0cccc; margin-bottom:12px;">
<i class="fa-solid fa-xmark" aria-hidden="true" style="color:#d2232a;"></i> <strong style="color:#d2232a;">Incorrecto</strong>
<pre class="codigo">
prefs.edit().putString("token", token).apply()   // texto plano
</pre>
</div>
<p class="nota">
<i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
Nunca registre datos personales ni tokens en las bitácoras (Logcat, consola): otras herramientas pueden leerlas.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t004',
                    label: 'Prácticas de codificación segura para aplicaciones móviles',
                    steps: [
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
                    id: 'm006-t005',
                    label: 'Privacidad del usuario y cumplimiento normativo en aplicaciones móviles',
                    steps: [
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
                    id: 'm006-t006',
                    label: 'Pruebas de seguridad y auditoría en aplicaciones móviles',
                    steps: [
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
                }
            ]
        },
        {
            id: 'modulo_007',
            label: 'Desarrollo avanzado',
            subtemas: [
                {
                    id: 'm007-t001',
                    label: 'Integración de tecnologías emergentes en aplicaciones móviles',
                    steps: [
                        {
                            title: 'Tecnologías emergentes',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tecnología</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo de uso</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Herramientas</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>IA en el dispositivo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Reconocimiento de texto, traducción sin conexión.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">ML Kit, Core ML, Gemini Nano</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Modelos de lenguaje en la nube</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Asistentes conversacionales.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">API de proveedores de IA a través del backend</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Realidad aumentada</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Visualizar productos en el espacio.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">ARCore, ARKit</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Vestibles</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Notificaciones en el reloj.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Wear OS, watchOS</td></tr>
<tr><td style="padding:13px 12px;"><strong>Pagos sin contacto</strong></td><td style="padding:13px 12px;">Billeteras digitales.</td><td style="padding:13px 12px;">Google Pay, Apple Pay</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t002',
                    label: 'Optimización de rendimiento en aplicaciones móviles',
                    steps: [
                        {
                            title: 'Áreas de optimización',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Área</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Técnicas</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Arranque</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Inicialización diferida, perfiles de línea base.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Interfaz fluida (60/120 fps)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Evitar trabajo pesado en el hilo principal, listas perezosas.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Memoria</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Liberar recursos, imágenes con el tamaño adecuado (Coil, Kingfisher).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Red</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Caché, compresión, paginación.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Batería</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Agrupar trabajo en segundo plano, ubicación de baja precisión.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Tamaño de la app</strong></td><td style="padding:13px 12px;">Android App Bundles, eliminar recursos no usados.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t003',
                    label: 'Notificaciones y servicios en segundo plano',
                    steps: [
                        {
                            title: 'Notificaciones push',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-server" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Backend</b><br><small>Decide notificar</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-cloud" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>FCM / APNs</b><br><small>Servicio de mensajería</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-mobile-screen" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Dispositivo</b><br><small>Muestra la notificación</small></div></div>
</div>
</div>
<pre class="codigo">
// Enviar con Firebase Admin SDK (Node.js)
await admin.messaging().send({
    token: tokenDelDispositivo,
    notification: { title: "Matrícula abierta", body: "Ya puede matricular a Sofía" },
    data: { pantalla: "matricula", estudiante: "1-1234-5678" }
});
</pre>`,
                            nextButton: 'Siguiente: Trabajo en segundo plano'
                        },
                        {
                            title: 'Trabajo en segundo plano',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Plataforma</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">API</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Android</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">WorkManager</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Tareas diferibles y garantizadas (sincronizar, subir archivos).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>iOS</strong></td><td style="padding:13px 12px;">BGTaskScheduler</td><td style="padding:13px 12px;">Actualizaciones y procesamiento en segundo plano.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Los sistemas operativos limitan el trabajo en segundo plano para ahorrar batería: diseñe tareas cortas e idempotentes.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t004',
                    label: 'Uso de sensores y datos contextuales en aplicaciones móviles',
                    steps: [
                        {
                            title: 'Sensores',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Sensor</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Datos</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>GPS</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ubicación</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Rutas, geocercas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Acelerómetro y giroscopio</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Movimiento y orientación</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Contar pasos, detectar caídas.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Magnetómetro</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Dirección</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Brújula.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Proximidad y luz</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cercanía y luminosidad</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Apagar pantalla, ajustar brillo.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Barómetro</strong></td><td style="padding:13px 12px;">Presión</td><td style="padding:13px 12px;">Altitud.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
// Geocerca: notificar al llegar al centro educativo (Android)
val geocerca = Geofence.Builder()
    .setRequestId("liceo-heredia")
    .setCircularRegion(10.0024, -84.1165, 150f)
    .setTransitionTypes(Geofence.GEOFENCE_TRANSITION_ENTER)
    .setExpirationDuration(Geofence.NEVER_EXPIRE)
    .build()
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t005',
                    label: 'Integración de redes sociales y servicios en aplicaciones móviles',
                    steps: [
                        {
                            title: 'Integraciones',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Integración</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Implementación</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Inicio de sesión social</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sign in with Google, Sign in with Apple (obligatorio en iOS si se ofrecen otros sociales).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Compartir</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Hoja de compartir nativa del sistema.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Enlaces profundos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">App Links (Android) y Universal Links (iOS).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Mapas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Google Maps SDK, MapKit.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Pagos</strong></td><td style="padding:13px 12px;">Google Play Billing, StoreKit, pasarelas.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
// Compartir un comprobante con la hoja nativa (Android)
val intent = Intent(Intent.ACTION_SEND).apply {
    type = "text/plain"
    putExtra(Intent.EXTRA_TEXT, "Comprobante de matrícula: https://matricula.cr/c/9812")
}
startActivity(Intent.createChooser(intent, "Compartir comprobante"))
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t006',
                    label: 'Implementación de estrategias de monetización y análisis en aplicaciones móviles',
                    steps: [
                        {
                            title: 'Modelos de monetización',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Modelo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>De pago</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se paga al descargar.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Freemium</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Gratis con funciones premium.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Suscripción</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pago periódico.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Compras dentro de la app</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Contenido o funciones adicionales.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Publicidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Anuncios (AdMob).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Comercio</strong></td><td style="padding:13px 12px;">Venta de productos o servicios físicos.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Analítica'
                        },
                        {
                            title: 'Analítica',
                            content: `<pre class="codigo">
// Registrar un evento con Firebase Analytics (Kotlin)
Firebase.analytics.logEvent("matricula_completada") {
    param("grado", "5")
    param("metodo", "app")
}
</pre>
<ul>
    <li>Defina eventos alineados a los objetivos del negocio.</li>
    <li>Construya embudos: instalación → registro → primera matrícula.</li>
    <li>Respete la privacidad: informe y pida consentimiento cuando corresponda.</li>
</ul>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Las tiendas cobran una comisión sobre las compras de bienes digitales dentro de la app; los bienes físicos pueden cobrarse con pasarelas externas.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        }
    ]
};
