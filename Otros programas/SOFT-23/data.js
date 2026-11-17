const data = {
    // Pantalla de bienvenida
    welcome: {
        title: 'SOFT-23 <br> Proyecto Integrador 3',
        image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-23/imgs/logo.png', // Cambiar por imagen real
        description: 'Integración del desarrollo móvil nativo y multiplataforma, el diseño de interfaces centrado en el usuario, la seguridad y los procesos de verificación, validación y calidad para construir una aplicación móvil.',
        instruction: 'Seleccione cada pestaña para acceder a la información'
    },
    // Temas principales y sus subtemas con pasos
    temas: [
        {
            id: 'modulo_001',
            label: 'Android e iOS',
            subtemas: [
                {
                    id: 'm001-t001',
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
                    id: 'm001-t002',
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
                    id: 'm001-t003',
                    label: 'Persistencia de datos en aplicaciones de Android y en el sistema operativo iPhone (iOS)',
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
                            nextButton: 'Siguiente: Opciones'
                        },
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
                    id: 'm001-t004',
                    label: 'Acceso a servicios y recursos externos en aplicaciones Android y en el sistema operativo iPhone (iOS)',
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
                            nextButton: 'Siguiente: URLSession con async/await'
                        },
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
                    id: 'm001-t005',
                    label: 'Optimización y pruebas de rendimiento en aplicaciones Android y en el sistema operativo iPhone (iOS)',
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
                            nextButton: 'Siguiente: Herramientas'
                        },
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
            id: 'modulo_002',
            label: 'Multiplataforma',
            subtemas: [
                {
                    id: 'm002-t001',
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
                    id: 'm002-t002',
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
                    id: 'm002-t003',
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
                    id: 'm002-t004',
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
                    id: 'm002-t005',
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
                    id: 'm002-t006',
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
            id: 'modulo_003',
            label: 'Diseño de interfaces móviles',
            subtemas: [
                {
                    id: 'm003-t001',
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
                    id: 'm003-t002',
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
                    id: 'm003-t003',
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
                    id: 'm003-t004',
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
                    id: 'm003-t005',
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
                    id: 'm003-t006',
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
            id: 'modulo_004',
            label: 'Seguridad y privacidad',
            subtemas: [
                {
                    id: 'm004-t001',
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
                    id: 'm004-t002',
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
                    id: 'm004-t003',
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
                    id: 'm004-t004',
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
                    id: 'm004-t005',
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
                    id: 'm004-t006',
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
            id: 'modulo_005',
            label: 'Desarrollo avanzado',
            subtemas: [
                {
                    id: 'm005-t001',
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
                    id: 'm005-t002',
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
                    id: 'm005-t003',
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
                    id: 'm005-t004',
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
                    id: 'm005-t005',
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
                    id: 'm005-t006',
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
        },
        {
            id: 'modulo_006',
            label: 'Verificación y validación',
            subtemas: [
                {
                    id: 'm006-t001',
                    label: 'Diferencias entre verificación y validación del software',
                    steps: [
                        {
                            title: 'Verificación y validación',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;"></th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Verificación</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Validación</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pregunta (Boehm)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Estamos construyendo el producto correctamente?</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Estamos construyendo el producto correcto?</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Compara contra</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">La especificación y los estándares.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Las necesidades reales del usuario.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Momento</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Durante todo el desarrollo.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Principalmente con productos ejecutables.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Técnicas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Revisiones, inspecciones, análisis estático, pruebas.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pruebas de aceptación, prototipos, pruebas beta.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Responsables</strong></td><td style="padding:13px 12px;">Equipo de desarrollo y calidad.</td><td style="padding:13px 12px;">Usuarios y clientes.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Un sistema puede pasar toda la verificación (cumple la especificación) y fallar la validación (la especificación no era lo que el usuario necesitaba).</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t002',
                    label: 'Métodos de verificación del software',
                    steps: [
                        {
                            title: 'Métodos estáticos y dinámicos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Método</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Revisión entre pares</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Estático</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un colega revisa el trabajo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Recorrido (walkthrough)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Estático</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El autor guía al equipo por el producto.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Inspección formal</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Estático</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Proceso estructurado con roles y listas de verificación.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Análisis estático automatizado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Estático</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Herramientas que analizan el código sin ejecutarlo.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Verificación formal</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Estático</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Demostración matemática de propiedades.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Pruebas unitarias y de integración</strong></td><td style="padding:13px 12px;">Dinámico</td><td style="padding:13px 12px;">Ejecución contra la especificación.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Verificación de cada producto de trabajo'
                        },
                        {
                            title: 'Verificación de cada producto de trabajo',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Producto</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Se verifica que…</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Requerimientos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">sean completos, consistentes y verificables.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Diseño</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">cubra todos los requerimientos y respete la arquitectura.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Código</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">cumpla el estándar y el diseño.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Casos de prueba</strong></td><td style="padding:13px 12px;">cubran los requerimientos y las condiciones límite.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t003',
                    label: 'Métodos de validación del software',
                    steps: [
                        {
                            title: 'Métodos de validación',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Método</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Prototipado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El usuario evalúa versiones preliminares.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pruebas de aceptación del usuario (UAT)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El usuario ejecuta escenarios reales.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pruebas alfa</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Usuarios prueban en el ambiente del desarrollador.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pruebas beta</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Usuarios reales prueban en su propio ambiente.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pruebas de usabilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se observa a usuarios realizando tareas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Pruebas A/B</strong></td><td style="padding:13px 12px;">Se comparan dos versiones con usuarios reales.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Criterios de aceptación'
                        },
                        {
                            title: 'Criterios de aceptación',
                            content: `<pre class="codigo">
Escenario: Consultar el estado de una matrícula
  Dado que el encargado inició sesión
  Y el estudiante 1-1234-5678 está matriculado en el período 2026
  Cuando consulta la matrícula del estudiante
  Entonces ve el estado "Matriculado"
  Y ve el nombre del centro educativo
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Los criterios de aceptación se acuerdan con el cliente antes de construir: así la validación tiene una referencia objetiva.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t004',
                    label: 'Pruebas de software: tipos y objetivos',
                    steps: [
                        {
                            title: 'Niveles de prueba',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Nivel</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Qué prueba</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Responsable típico</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Unitaria</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Una función o clase aislada.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Desarrollador</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Integración</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">La comunicación entre componentes.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Desarrollador o probador</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Sistema</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El sistema completo contra la especificación.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Equipo de pruebas</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Aceptación</strong></td><td style="padding:13px 12px;">Que el sistema satisface al usuario.</td><td style="padding:13px 12px;">Cliente o usuario</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Tipos y técnicas'
                        },
                        {
                            title: 'Tipos y técnicas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Clasificación</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplos</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Funcionales</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Verifican lo que el sistema hace.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>No funcionales</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Rendimiento, carga, seguridad, usabilidad, compatibilidad.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Caja negra</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Partición de equivalencia, valores límite, tablas de decisión.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Caja blanca</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cobertura de sentencias, de ramas y de caminos.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Regresión</strong></td><td style="padding:13px 12px;">Verifican que un cambio no dañó lo que ya funcionaba.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Siete principios de las pruebas (ISTQB): las pruebas muestran presencia de defectos, no su ausencia; las pruebas exhaustivas son imposibles; probar temprano ahorra; los defectos se agrupan; las pruebas se desgastan; dependen del contexto; la ausencia de errores es una falacia.</p>`,
                            nextButton: 'Siguiente: Objetivos de las pruebas'
                        },
                        {
                            title: 'Objetivos de las pruebas',
                            content: `<ul>
    <li>Encontrar defectos antes de que lleguen al usuario.</li>
    <li>Generar confianza en la calidad del producto.</li>
    <li>Verificar el cumplimiento de requerimientos.</li>
    <li>Proveer información para tomar decisiones de liberación.</li>
    <li>Prevenir defectos al revisar requerimientos y diseño temprano.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t005',
                    label: 'Diseño de casos de prueba',
                    steps: [
                        {
                            title: 'Estructura de un caso de prueba',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Campo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Identificador</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">CP-015</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Requerimiento</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">RF-04 Iniciar sesión</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Descripción</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Inicio de sesión con contraseña incorrecta</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Precondiciones</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El usuario ana@correo.com existe y está activo.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pasos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">1. Abrir la página de inicio de sesión. 2. Ingresar el correo. 3. Ingresar una contraseña incorrecta. 4. Presionar “Ingresar”.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Datos de prueba</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Correo: ana@correo.com; contraseña: Clave999!</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Resultado esperado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se muestra “Credenciales incorrectas” y no se inicia la sesión.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Resultado obtenido / estado</strong></td><td style="padding:13px 12px;">Se completa al ejecutar: Exitoso o Fallido.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Buenas prácticas'
                        },
                        {
                            title: 'Buenas prácticas',
                            content: `<ul>
    <li>Un objetivo por caso de prueba.</li>
    <li>Resultado esperado concreto y verificable.</li>
    <li>Pasos reproducibles por cualquier persona.</li>
    <li>Incluir casos positivos, negativos y límite.</li>
    <li>Trazar cada caso a un requerimiento.</li>
    <li>Mantener los casos independientes entre sí.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t006',
                    label: 'Técnicas de generación de casos de prueba',
                    steps: [
                        {
                            title: 'Partición de equivalencia',
                            content: `<p>Divide las entradas en <strong>clases</strong> cuyos valores deberían comportarse igual; se prueba un valor representativo de cada clase.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Clase (edad para registrarse: 18 a 65)</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Valor representativo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Resultado</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Inválida: menor de 18</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">10</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Rechazado</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Válida: 18 a 65</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">35</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Aceptado</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Inválida: mayor de 65</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">80</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Rechazado</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Inválida: no numérica</strong></td><td style="padding:13px 12px;">“abc”</td><td style="padding:13px 12px;">Mensaje de error</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Análisis de valores límite'
                        },
                        {
                            title: 'Análisis de valores límite',
                            content: `<p>Los defectos se concentran en los bordes. Se prueban los valores en el límite y a cada lado.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Límite</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Valores a probar</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Inferior (18)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">17, 18, 19</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Superior (65)</strong></td><td style="padding:13px 12px;">64, 65, 66</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Tabla de decisión'
                        },
                        {
                            title: 'Tabla de decisión',
                            content: `<p>Útil cuando el resultado depende de combinaciones de condiciones.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Condición / acción</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">R1</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">R2</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">R3</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">R4</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>¿Cliente frecuente?</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sí</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sí</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">No</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">No</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>¿Compra mayor a ₡50 000?</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sí</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">No</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sí</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">No</td></tr>
<tr><td style="padding:13px 12px;"><strong>Descuento</strong></td><td style="padding:13px 12px;">15 %</td><td style="padding:13px 12px;">5 %</td><td style="padding:13px 12px;">10 %</td><td style="padding:13px 12px;">0 %</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Otras técnicas'
                        },
                        {
                            title: 'Otras técnicas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Técnica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Transición de estados</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sistemas con estados: pedido creado → pagado → enviado.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pruebas por pares (pairwise)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Reducir combinaciones de muchos parámetros.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Casos de uso</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un caso por flujo principal y alterno.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cobertura de sentencias y ramas (caja blanca)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Asegurar que se ejecute cada línea y cada decisión.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Conjetura de errores</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Basada en la experiencia: campos vacíos, caracteres especiales.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Pruebas exploratorias</strong></td><td style="padding:13px 12px;">Diseño y ejecución simultáneos guiados por objetivos.</td></tr>
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
            label: 'Calidad en el desarrollo',
            subtemas: [
                {
                    id: 'm007-t001',
                    label: 'Métodos ágiles de desarrollo de software y calidad',
                    steps: [
                        {
                            title: 'La calidad en los equipos ágiles',
                            content: `<ul>
    <li>La calidad es responsabilidad de todo el equipo, no solo del probador.</li>
    <li>Las pruebas ocurren dentro de cada sprint.</li>
    <li>La <strong>definición de terminado</strong> incluye criterios de calidad.</li>
    <li>Retroalimentación frecuente del cliente.</li>
</ul>
<pre class="codigo">
Definición de terminado (ejemplo):
☐ Código revisado y aprobado por un par
☐ Pruebas unitarias con cobertura ≥ 80 %
☐ Criterios de aceptación verificados
☐ Sin defectos críticos ni altos abiertos
☐ Análisis estático sin problemas nuevos
☐ Documentación actualizada
☐ Desplegado en el ambiente de pruebas
</pre>`,
                            nextButton: 'Siguiente: Cuadrantes de pruebas ágiles'
                        },
                        {
                            title: 'Cuadrantes de pruebas ágiles',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Cuadrante</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Enfoque</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplos</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Q1</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Tecnología, apoyan al equipo.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pruebas unitarias y de componentes.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Q2</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Negocio, apoyan al equipo.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pruebas funcionales, BDD, prototipos.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Q3</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Negocio, critican el producto.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Exploratorias, usabilidad, UAT.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Q4</strong></td><td style="padding:13px 12px;">Tecnología, critican el producto.</td><td style="padding:13px 12px;">Rendimiento, seguridad.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t002',
                    label: 'Desarrollo guiado por pruebas (TDD) y calidad',
                    steps: [
                        {
                            title: 'El ciclo de TDD',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-circle-xmark" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Rojo</b><br><small>Escribir una prueba que falla</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-circle-check" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Verde</b><br><small>Código mínimo para que pase</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-broom" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Refactorizar</b><br><small>Mejorar sin cambiar el comportamiento</small></div></div>
</div>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
TDD es una técnica de <strong>diseño</strong>: escribir la prueba primero obliga a pensar en la interfaz y en el comportamiento esperado.</p>`,
                            nextButton: 'Siguiente: Ejemplo'
                        },
                        {
                            title: 'Ejemplo',
                            content: `<pre class="codigo">
# 1. Rojo: test_descuento.py
from descuento import calcular_descuento

def test_cliente_frecuente_con_compra_alta_recibe_15_por_ciento():
    assert calcular_descuento(60000, frecuente=True) == 9000

def test_compra_baja_sin_frecuencia_no_tiene_descuento():
    assert calcular_descuento(20000, frecuente=False) == 0
</pre>
<pre class="codigo">
# 2. Verde: descuento.py
def calcular_descuento(monto, frecuente):
    if frecuente and monto &gt; 50000:
        return monto * 0.15
    return 0
</pre>
<p>3. <strong>Refactorizar</strong>: extraer constantes (<code>MONTO_MINIMO</code>, <code>TASA_FRECUENTE</code>) y volver a ejecutar las pruebas.</p>`,
                            nextButton: 'Siguiente: Beneficios y variantes'
                        },
                        {
                            title: 'Beneficios y variantes',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Beneficios</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Variantes</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Menos defectos y diseño más modular.</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">BDD: pruebas escritas en lenguaje del negocio.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Red de seguridad para refactorizar.</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">ATDD: pruebas de aceptación primero.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Documentación ejecutable.</strong></td><td style="padding:13px 12px;">—</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t003',
                    label: 'Integración continua y calidad del software',
                    steps: [
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
                            nextButton: 'Siguiente: Ejemplo con GitHub Actions'
                        },
                        {
                            title: 'Ejemplo con GitHub Actions',
                            content: `<pre class="codigo">
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]
jobs:
  pruebas:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run lint
      - run: npm test
</pre>
<ul>
    <li>Mantenga la compilación rápida (idealmente menos de 10 minutos).</li>
    <li>Si la compilación falla, corregirla es la prioridad del equipo.</li>
    <li>Todo el código, la configuración y las pruebas viven en el repositorio.</li>
</ul>`,
                            nextButton: 'Siguiente: Calidad en el canal de CI'
                        },
                        {
                            title: 'Calidad en el canal de CI',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Etapa</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Control de calidad</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Compilación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El código compila sin errores.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Linter</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Estándar de codificación.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pruebas unitarias</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Comportamiento de cada componente.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cobertura</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Umbral mínimo.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Análisis estático y de seguridad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Quality gate de SonarQube, dependencias vulnerables.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Pruebas de integración</strong></td><td style="padding:13px 12px;">Componentes juntos.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t004',
                    label: 'Entrega continua y calidad del software',
                    steps: [
                        {
                            title: 'Entrega y despliegue continuos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Práctica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Alcance</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Integración continua</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cada cambio se compila y prueba automáticamente.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Entrega continua</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cada cambio que pasa las pruebas queda <strong>listo</strong> para producción; el paso final es manual.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Despliegue continuo</strong></td><td style="padding:13px 12px;">Cada cambio que pasa las pruebas se publica en producción <strong>automáticamente</strong>.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Canal de entrega'
                        },
                        {
                            title: 'Canal de entrega (pipeline)',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-code" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Commit</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-hammer" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Build y pruebas unitarias</b><br><small></small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-flask" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Pruebas de integración</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-server" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Ambiente de pruebas (staging)</b><br><small></small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-user-check" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Aprobación</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-rocket" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Producción</b><br><small></small></div></div>
</div>
</div>
<ul>
    <li>El mismo artefacto (paquete o imagen) se promueve de un ambiente a otro.</li>
    <li>Los ambientes se crean con <strong>infraestructura como código</strong> para que sean idénticos.</li>
    <li>Estrategias de despliegue seguro: azul-verde, canario, banderas de funcionalidad.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t005',
                    label: 'Despliegue continuo y calidad del software',
                    steps: [
                        {
                            title: 'Despliegue continuo',
                            content: `<p>Cada cambio que supera todas las pruebas automatizadas llega a producción sin intervención manual. Requiere una alta confianza en las pruebas y mecanismos de protección.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Mecanismo de protección</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Función</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Despliegue canario</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">La versión nueva recibe primero un porcentaje pequeño del tráfico.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Banderas de funcionalidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Activar o desactivar funciones sin desplegar.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Reversión automática</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Si aumentan los errores, se vuelve a la versión anterior.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Monitoreo y alertas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Detectar problemas en minutos.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Pruebas de humo</strong></td><td style="padding:13px 12px;">Verificación rápida después de desplegar.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t006',
                    label: 'Desarrollo y operaciones (DevOps) y calidad del software',
                    steps: [
                        {
                            title: '¿Qué es DevOps?',
                            content: `<p><strong>DevOps</strong> es una cultura y un conjunto de prácticas que unen a los equipos de desarrollo (Dev) y operaciones (Ops) para entregar software con rapidez, calidad y estabilidad.</p>
<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-calendar" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Planificar</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-code" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Codificar</b><br><small></small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-hammer" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Construir</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-vial" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Probar</b><br><small></small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-box" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Liberar</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-rocket" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Desplegar</b><br><small></small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-gears" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Operar</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-chart-line" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Monitorear</b><br><small></small></div></div>
</div>
</div>`,
                            nextButton: 'Siguiente: Principios y métricas'
                        },
                        {
                            title: 'Principios y métricas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Principio (CALMS)</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cultura</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Colaboración y responsabilidad compartida.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Automatización</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Build, pruebas, despliegue e infraestructura automatizados.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Lean</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Lotes pequeños y eliminación de desperdicios.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Medición</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Decisiones basadas en datos.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Compartir</strong></td><td style="padding:13px 12px;">Conocimiento y herramientas comunes.</td></tr>
</tbody>
</table>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Métrica DORA</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Mide</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Frecuencia de despliegue</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cada cuánto se publica en producción.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tiempo de entrega de cambios</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Desde el commit hasta producción.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tasa de fallas de cambios</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Porcentaje de despliegues que causan incidentes.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Tiempo de recuperación</strong></td><td style="padding:13px 12px;">Cuánto tarda en restablecerse el servicio.</td></tr>
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
