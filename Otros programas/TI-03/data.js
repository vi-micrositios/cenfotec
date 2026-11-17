const data = {
    // Pantalla de bienvenida
    welcome: {
        title: 'TI-03 <br> Arquitectura de Computadoras',
        image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/TI-03/imgs/logo.png', // Cambiar por imagen real
        description: 'Estructura y organización de los componentes de una computadora y del sistema operativo: arquitecturas de procesadores, interconexión de componentes, administración de recursos y programación de bajo nivel.',
        instruction: 'Seleccione cada pestaña para acceder a la información'
    },
    // Temas principales y sus subtemas con pasos
    temas: [
        {
            id: 'modulo_001',
            label: 'Introducción a la arquitectura de computadoras',
            subtemas: [
                {
                    id: 'm001-t001',
                    label: 'Historia de la arquitectura de computadoras',
                    steps: [
                        {
                            title: 'Generaciones de computadoras',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Generación</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tecnología</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Primera (1940–1956)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Tubos de vacío.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">ENIAC, UNIVAC.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Segunda (1956–1963)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Transistores.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">IBM 1401.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tercera (1964–1971)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Circuitos integrados.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">IBM System/360.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cuarta (1971–hoy)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Microprocesadores.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Intel 4004, computadoras personales.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Actual</strong></td><td style="padding:13px 12px;">Multinúcleo, SoC, aceleradores de IA.</td><td style="padding:13px 12px;">Teléfonos inteligentes, servidores en la nube.</td></tr>
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
                    id: 'm001-t002',
                    label: 'Componentes básicos de una computadora',
                    steps: [
                        {
                            title: 'Componentes',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Componente</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Función</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Unidad central de procesamiento (CPU)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ejecuta instrucciones.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Memoria principal (RAM)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Guarda datos y programas en uso.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Almacenamiento (SSD, HDD)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Guarda datos de forma permanente.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Placa madre y buses</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Conectan los componentes.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Dispositivos de entrada y salida</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Teclado, pantalla, red.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Fuente de poder</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Suministra energía.</td></tr>
<tr><td style="padding:13px 12px;"><strong>GPU</strong></td><td style="padding:13px 12px;">Procesamiento gráfico y paralelo.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Partes de la CPU'
                        },
                        {
                            title: 'Partes de la CPU',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Parte</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Función</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Unidad de control</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Busca, decodifica y coordina la ejecución de instrucciones.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Unidad aritmético-lógica (ALU)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Operaciones aritméticas y lógicas.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Registros</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Memoria interna muy rápida (contador de programa, acumulador).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Memoria caché (L1, L2, L3)</strong></td><td style="padding:13px 12px;">Copia rápida de datos usados con frecuencia.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t003',
                    label: 'Arquitecturas de Von Neumann y Harvard',
                    steps: [
                        {
                            title: 'Von Neumann y Harvard',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;"></th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Von Neumann</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Harvard</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Memoria</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Una sola memoria para instrucciones y datos.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Memorias separadas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Buses</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un bus compartido.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Buses separados.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ventaja</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Simple y flexible.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Lee instrucción y dato a la vez.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Limitación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cuello de botella de Von Neumann.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Más compleja.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Uso</strong></td><td style="padding:13px 12px;">Computadoras de propósito general.</td><td style="padding:13px 12px;">Microcontroladores y DSP.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Los procesadores actuales son híbridos: memoria principal unificada (Von Neumann) y cachés L1 separadas para instrucciones y datos (Harvard modificada).</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t004',
                    label: 'Procesamiento de datos: instrucciones y operaciones aritméticas',
                    steps: [
                        {
                            title: 'Ciclo de instrucción',
                            content: `<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-download" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Búsqueda</b><br><small>Lee la instrucción en la dirección del PC</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-code" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Decodificación</b><br><small>Interpreta la operación</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-gears" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Ejecución</b><br><small>La ALU opera</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-floppy-disk" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Escritura</b><br><small>Guarda el resultado</small></div></div>
</div>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo de instrucción</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Transferencia</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cargar de memoria a registro.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Aritmética</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sumar, restar.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Lógica</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">AND, OR, desplazamientos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Control</strong></td><td style="padding:13px 12px;">Saltos y llamadas.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Aritmética binaria'
                        },
                        {
                            title: 'Aritmética binaria',
                            content: `<pre class="codigo">
  0101   (5)
+ 0011   (3)
------
  1000   (8)

Complemento a dos para −3 en 4 bits: 0011 → 1100 + 1 = 1101
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
El <strong>complemento a dos</strong> permite que la misma circuitería sume números positivos y negativos.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t005',
                    label: 'Organización de la memoria principal',
                    steps: [
                        {
                            title: 'Jerarquía de memoria',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Nivel</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tamaño típico</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tiempo de acceso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Registros</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Bytes</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">&lt; 1 ns</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Caché L1</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">32–64 KB por núcleo</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">~1 ns</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Caché L2/L3</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">MB</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">3–15 ns</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>RAM</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">GB</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">~80 ns</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>SSD</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cientos de GB a TB</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">~100 µs</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Disco duro</strong></td><td style="padding:13px 12px;">TB</td><td style="padding:13px 12px;">~10 ms</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
La jerarquía aprovecha la <strong>localidad</strong>: los programas tienden a reutilizar datos recientes (temporal) y cercanos (espacial).</p>`,
                            nextButton: 'Siguiente: Direccionamiento'
                        },
                        {
                            title: 'Direccionamiento',
                            content: `<ul>
    <li>La memoria es un arreglo de celdas, cada una con una dirección.</li>
    <li>Con n bits de dirección se acceden 2ⁿ posiciones.</li>
    <li>Orden de bytes: little endian (x86, ARM típico) o big endian.</li>
</ul>
<pre class="codigo">
#include &lt;stdio.h&gt;
int main(void) {
    int x = 42;
    printf("Valor: %d  Dirección: %p\\n", x, (void *)&amp;x);
    return 0;
}
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t006',
                    label: 'Diseño de circuitos digitales',
                    steps: [
                        {
                            title: 'Compuertas lógicas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">A</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">B</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">AND</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">OR</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">XOR</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">NAND</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>0</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">0</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">0</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">0</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">0</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">1</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>0</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">1</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">0</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">1</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">1</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">1</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>1</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">0</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">0</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">1</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">1</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">1</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>1</strong></td><td style="padding:13px 12px;">1</td><td style="padding:13px 12px;">1</td><td style="padding:13px 12px;">1</td><td style="padding:13px 12px;">0</td><td style="padding:13px 12px;">0</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Con solo compuertas NAND se puede construir cualquier otro circuito lógico.</p>`,
                            nextButton: 'Siguiente: Circuitos combinacionales y secuenciales'
                        },
                        {
                            title: 'Circuitos combinacionales y secuenciales',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Característica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplos</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Combinacional</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">La salida depende solo de las entradas actuales.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sumador, multiplexor, decodificador.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Secuencial</strong></td><td style="padding:13px 12px;">Tiene memoria del estado anterior.</td><td style="padding:13px 12px;">Flip-flop, registro, contador.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
Semisumador:  Suma = A XOR B     Acarreo = A AND B
</pre>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_002',
            label: 'Arquitecturas de procesadores',
            subtemas: [
                {
                    id: 'm002-t001',
                    label: 'Arquitecturas de computadoras con conjunto de instrucciones reducidas y complejas (RISC y CISC, por sus siglas en inglés)',
                    steps: [
                        {
                            title: 'RISC y CISC',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;"></th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">RISC</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">CISC</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Instrucciones</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pocas, simples, tamaño fijo.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Muchas, complejas, tamaño variable.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ciclos por instrucción</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Generalmente uno.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Varios.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Acceso a memoria</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Solo cargar y guardar.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Muchas instrucciones operan en memoria.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Registros</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Muchos.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Menos.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Ejemplos</strong></td><td style="padding:13px 12px;">ARM, RISC-V.</td><td style="padding:13px 12px;">x86.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Los procesadores x86 modernos traducen internamente sus instrucciones CISC a microoperaciones similares a RISC.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t002',
                    label: 'Procesadores de un solo núcleo y de múltiples núcleos',
                    steps: [
                        {
                            title: 'Multinúcleo',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Concepto</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Núcleo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Unidad de procesamiento independiente.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Hilo de hardware (SMT, Hyper-Threading)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un núcleo ejecuta dos hilos intercalados.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Núcleos heterogéneos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Núcleos de alto rendimiento y de eficiencia (big.LITTLE).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Caché compartida</strong></td><td style="padding:13px 12px;">L3 común entre núcleos.</td></tr>
</tbody>
</table>
</div>
<p>Más núcleos solo aceleran un programa si este está dividido en tareas paralelas; la <strong>ley de Amdahl</strong> limita la ganancia según la parte secuencial.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t003',
                    label: 'Procesamiento paralelo y distribuido',
                    steps: [
                        {
                            title: 'Taxonomía de Flynn',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Clase</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Instrucciones / datos</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>SISD</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Una / uno</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Procesador simple.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>SIMD</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Una / muchos</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Instrucciones vectoriales, GPU.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>MISD</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Muchas / uno</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sistemas tolerantes a fallas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>MIMD</strong></td><td style="padding:13px 12px;">Muchas / muchos</td><td style="padding:13px 12px;">Multinúcleo, clústeres.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Paralelismo en la práctica'
                        },
                        {
                            title: 'Paralelismo en la práctica',
                            content: `<pre class="codigo">
# Paralelismo con procesos en Python
from concurrent.futures import ProcessPoolExecutor

def es_primo(n):
    return n &gt; 1 and all(n % d for d in range(2, int(n ** 0.5) + 1))

with ProcessPoolExecutor() as ejecutor:          # usa todos los núcleos
    resultados = list(ejecutor.map(es_primo, range(1_000_000, 1_000_200)))
</pre>
<p>El procesamiento <strong>distribuido</strong> reparte el trabajo entre varias computadoras conectadas por red (clústeres, nube).</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t004',
                    label: 'Arquitectura de computadoras avanzadas con conjunto reducido de instrucciones (ARM, por sus siglas en inglés)',
                    steps: [
                        {
                            title: 'ARM',
                            content: `<ul>
    <li>Arquitectura RISC licenciada a fabricantes que diseñan sus propios chips.</li>
    <li>Alta eficiencia energética: domina teléfonos, tabletas y dispositivos embebidos.</li>
    <li>Presente también en computadoras portátiles y servidores en la nube.</li>
    <li>Perfiles: Cortex-A (aplicaciones), Cortex-R (tiempo real), Cortex-M (microcontroladores).</li>
</ul>
<pre class="codigo">
@ ARM (AArch32): sumar dos números
    MOV  R0, #5        @ R0 = 5
    MOV  R1, #3        @ R1 = 3
    ADD  R2, R0, R1    @ R2 = R0 + R1
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t005',
                    label: 'Arquitectura x86',
                    steps: [
                        {
                            title: 'x86 y x86-64',
                            content: `<ul>
    <li>Arquitectura CISC iniciada con el Intel 8086 (1978).</li>
    <li>Compatibilidad hacia atrás durante más de cuatro décadas.</li>
    <li>x86-64 (AMD64) amplió a 64 bits y más registros.</li>
    <li>Domina computadoras de escritorio y servidores.</li>
</ul>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Registro (64 bits)</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso típico</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>RAX</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Acumulador y valor de retorno.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>RBX, RCX, RDX</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Propósito general.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>RSP</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Puntero de pila.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>RIP</strong></td><td style="padding:13px 12px;">Puntero de instrucción.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
; x86-64 (sintaxis Intel)
    mov rax, 5
    add rax, 3        ; rax = 8
</pre>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_003',
            label: 'Interconexión de componentes',
            subtemas: [
                {
                    id: 'm003-t001',
                    label: 'Buses y puertos',
                    steps: [
                        {
                            title: 'Buses',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Bus</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Transporta</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Bus de datos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Los datos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Bus de direcciones</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">La dirección de memoria o dispositivo.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Bus de control</strong></td><td style="padding:13px 12px;">Señales de lectura, escritura, interrupciones.</td></tr>
</tbody>
</table>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Interfaz</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>PCI Express</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Tarjetas gráficas, SSD NVMe, red.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>SATA</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Discos y SSD.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>USB</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Periféricos externos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Thunderbolt</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Alta velocidad externa.</td></tr>
<tr><td style="padding:13px 12px;"><strong>HDMI / DisplayPort</strong></td><td style="padding:13px 12px;">Video.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t002',
                    label: 'Sistemas de entrada/salida',
                    steps: [
                        {
                            title: 'Técnicas de entrada y salida',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Técnica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Funcionamiento</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso de la CPU</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>E/S programada (sondeo)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">La CPU pregunta repetidamente si el dispositivo está listo.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Alto.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Interrupciones</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El dispositivo avisa a la CPU cuando está listo.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Medio.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Acceso directo a memoria (DMA)</strong></td><td style="padding:13px 12px;">Un controlador transfiere datos sin la CPU.</td><td style="padding:13px 12px;">Bajo.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Las interrupciones permiten que la CPU haga otro trabajo mientras espera al teclado, al disco o a la red.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t003',
                    label: 'Controladores y adaptadores de red',
                    steps: [
                        {
                            title: 'Tarjeta de red',
                            content: `<ul>
    <li>La <strong>NIC</strong> conecta la computadora a la red (Ethernet o Wi-Fi).</li>
    <li>Tiene una dirección MAC única.</li>
    <li>Funciona en las capas física y de enlace de datos.</li>
    <li>El <strong>controlador</strong> (driver) permite que el sistema operativo la use.</li>
    <li>Las NIC modernas descargan trabajo de la CPU (checksums, segmentación).</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t004',
                    label: 'Protocolos de comunicación de redes',
                    steps: [
                        {
                            title: 'Protocolos y capas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Capa</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Protocolos</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Aplicación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">HTTP, DNS, SMTP</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Transporte</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">TCP, UDP</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Red</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">IPv4, IPv6, ICMP</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Enlace</strong></td><td style="padding:13px 12px;">Ethernet, Wi-Fi (802.11)</td></tr>
</tbody>
</table>
</div>
<p>El hardware de red implementa las capas inferiores, el sistema operativo implementa TCP/IP y las aplicaciones usan la capa de aplicación mediante <strong>sockets</strong>.</p>
<pre class="codigo">
import socket
s = socket.create_connection(("example.com", 80))
s.sendall(b"GET / HTTP/1.1\\r\\nHost: example.com\\r\\n\\r\\n")
print(s.recv(200))
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t005',
                    label: 'Sistemas de almacenamiento masivo',
                    steps: [
                        {
                            title: 'Tecnologías',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tecnología</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Característica</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Disco duro (HDD)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Platos magnéticos; gran capacidad y bajo costo; lento.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>SSD SATA</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Memoria flash; mucho más rápido.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>SSD NVMe</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Flash por PCIe; el más rápido.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cinta magnética</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Respaldo a largo plazo.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Almacenamiento en red (NAS, SAN)</strong></td><td style="padding:13px 12px;">Compartido entre equipos.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: RAID'
                        },
                        {
                            title: 'RAID',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Nivel</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Funcionamiento</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Beneficio</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>RAID 0</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Datos repartidos.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Velocidad (sin redundancia).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>RAID 1</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Espejo.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Redundancia.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>RAID 5</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Paridad distribuida.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Redundancia con buen aprovechamiento.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>RAID 10</strong></td><td style="padding:13px 12px;">Espejo + reparto.</td><td style="padding:13px 12px;">Velocidad y redundancia.</td></tr>
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
            label: 'Introducción a los sistemas operativos',
            subtemas: [
                {
                    id: 'm004-t001',
                    label: 'Historia de los sistemas operativos',
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
                },
                {
                    id: 'm004-t002',
                    label: 'Tipos de sistemas operativos: de tiempo real, multiproceso y monousuario',
                    steps: [
                        {
                            title: 'Tipos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Característica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Monousuario monotarea</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un usuario, un programa a la vez.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">MS-DOS.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Monousuario multitarea</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un usuario, varios programas.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Windows, macOS de escritorio.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Multiusuario</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Varios usuarios a la vez.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Linux en servidores.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Multiproceso</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Usa varios procesadores o núcleos.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sistemas modernos.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>De tiempo real</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Respuestas dentro de plazos garantizados.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">FreeRTOS, VxWorks.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Embebidos y móviles</strong></td><td style="padding:13px 12px;">Optimizados para dispositivos específicos.</td><td style="padding:13px 12px;">Android, firmware.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t003',
                    label: 'Funciones y servicios del sistema operativo',
                    steps: [
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
                            nextButton: 'Siguiente: Núcleo y modo de ejecución'
                        },
                        {
                            title: 'Núcleo y modo de ejecución',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Modo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Puede</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Modo núcleo (kernel)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Acceder a todo el hardware.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Modo usuario</strong></td><td style="padding:13px 12px;">Solo lo permitido; pide servicios mediante llamadas al sistema.</td></tr>
</tbody>
</table>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo de núcleo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Monolítico</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Linux.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Micronúcleo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">QNX, MINIX.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Híbrido</strong></td><td style="padding:13px 12px;">Windows NT, XNU (macOS).</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t004',
                    label: 'Programación de sistemas operativos',
                    steps: [
                        {
                            title: 'Programación de sistemas',
                            content: `<p>La programación de sistemas usa las interfaces del sistema operativo para crear procesos, manejar archivos y comunicarse entre programas. En sistemas tipo UNIX se usa el estándar POSIX.</p>
<pre class="codigo">
#include &lt;stdio.h&gt;
#include &lt;unistd.h&gt;
#include &lt;sys/wait.h&gt;

int main(void) {
    pid_t pid = fork();                 /* crea un proceso hijo */
    if (pid == 0) {
        printf("Soy el hijo, PID %d\\n", getpid());
        execlp("ls", "ls", "-l", NULL);  /* reemplaza el programa */
    } else {
        wait(NULL);                     /* el padre espera */
        printf("El hijo terminó\\n");
    }
    return 0;
}
</pre>
<pre class="codigo">
gcc procesos.c -o procesos
./procesos
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t005',
                    label: 'Seguridad y protección del sistema operativo',
                    steps: [
                        {
                            title: 'Mecanismos de protección',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Mecanismo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Usuarios y grupos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Identidad de quien ejecuta.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Permisos de archivos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Lectura, escritura y ejecución (rwx).</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Mínimo privilegio</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">No trabajar como administrador.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Aislamiento de memoria</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un proceso no puede leer la memoria de otro.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>ASLR y DEP</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Dificultan la explotación de vulnerabilidades.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Actualizaciones</strong></td><td style="padding:13px 12px;">Corrigen vulnerabilidades.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
ls -l informe.txt          # -rw-r----- 1 ana docentes ...
chmod 640 informe.txt      # dueño: rw, grupo: r, otros: nada
sudo apt update &amp;&amp; sudo apt upgrade
</pre>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_005',
            label: 'Administración de recursos del sistema',
            subtemas: [
                {
                    id: 'm005-t001',
                    label: 'Administración de memoria',
                    steps: [
                        {
                            title: 'Memoria virtual',
                            content: `<p>La <strong>memoria virtual</strong> da a cada proceso un espacio de direcciones propio. El sistema operativo traduce las direcciones virtuales a físicas mediante <strong>páginas</strong> y una tabla de páginas.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Concepto</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Página y marco</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Bloques de tamaño fijo (por ejemplo, 4 KB) en memoria virtual y física.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>TLB</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Caché de traducciones.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Fallo de página</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">La página no está en RAM y se trae del disco.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Intercambio (swap)</strong></td><td style="padding:13px 12px;">Mover páginas al disco cuando falta RAM.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Algoritmos de reemplazo'
                        },
                        {
                            title: 'Algoritmos de reemplazo',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Algoritmo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Reemplaza</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>FIFO</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">La página más antigua.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>LRU</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">La usada hace más tiempo.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Óptimo</strong></td><td style="padding:13px 12px;">La que no se usará por más tiempo (teórico).</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
Cuando hay demasiados fallos de página, el sistema pasa más tiempo intercambiando que trabajando (hiperpaginación o thrashing).</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t002',
                    label: 'Administración de procesos',
                    steps: [
                        {
                            title: 'Procesos e hilos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;"></th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Proceso</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Hilo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Definición</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Programa en ejecución con su propia memoria.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Flujo de ejecución dentro de un proceso.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Memoria</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Separada.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Compartida con los demás hilos.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Creación</strong></td><td style="padding:13px 12px;">Más costosa.</td><td style="padding:13px 12px;">Más liviana.</td></tr>
</tbody>
</table>
</div>
<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-plus" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Nuevo</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-hourglass-half" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Listo</b><br><small></small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-play" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>En ejecución</b><br><small></small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-pause" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Bloqueado</b><br><small>Espera E/S</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-stop" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Terminado</b><br><small></small></div></div>
</div>
</div>`,
                            nextButton: 'Siguiente: Sincronización'
                        },
                        {
                            title: 'Sincronización',
                            content: `<p>Cuando varios hilos acceden a datos compartidos se produce una <strong>condición de carrera</strong>. Se previene con exclusión mutua.</p>
<pre class="codigo">
import threading
contador = 0
candado = threading.Lock()

def sumar():
    global contador
    for _ in range(100_000):
        with candado:           # solo un hilo a la vez
            contador += 1

hilos = [threading.Thread(target=sumar) for _ in range(4)]
[h.start() for h in hilos]; [h.join() for h in hilos]
print(contador)                  # 400000
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Un <strong>interbloqueo</strong> (deadlock) ocurre cuando dos procesos esperan cada uno un recurso que tiene el otro.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t003',
                    label: 'Planificación de procesos',
                    steps: [
                        {
                            title: 'Algoritmos de planificación',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Algoritmo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Funcionamiento</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Característica</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>FCFS</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Primero en llegar, primero en ser atendido.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Simple; procesos cortos esperan mucho.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>SJF</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El trabajo más corto primero.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Minimiza la espera promedio; requiere conocer la duración.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Round Robin</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Turnos con un quantum de tiempo.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Equitativo; bueno para sistemas interactivos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Por prioridades</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Atiende la mayor prioridad.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Riesgo de inanición; se usa envejecimiento.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Colas multinivel</strong></td><td style="padding:13px 12px;">Varias colas con distintos algoritmos.</td><td style="padding:13px 12px;">Usado en sistemas reales.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Ejemplo FCFS'
                        },
                        {
                            title: 'Ejemplo FCFS',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Proceso</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ráfaga (ms)</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Inicio</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Fin</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Espera</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>P1</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">8</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">0</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">8</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">0</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>P2</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">4</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">8</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">12</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">8</td></tr>
<tr><td style="padding:13px 12px;"><strong>P3</strong></td><td style="padding:13px 12px;">2</td><td style="padding:13px 12px;">12</td><td style="padding:13px 12px;">14</td><td style="padding:13px 12px;">12</td></tr>
</tbody>
</table>
</div>
<p>Espera promedio = (0 + 8 + 12) / 3 = <strong>6,67 ms</strong>. Con SJF (P3, P2, P1) sería (0 + 2 + 6) / 3 = 2,67 ms.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t004',
                    label: 'Administración de archivos y directorios',
                    steps: [
                        {
                            title: 'Sistemas de archivos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Sistema</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>NTFS</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Windows.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>ext4</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Linux.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>APFS</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">macOS e iOS.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>FAT32 / exFAT</strong></td><td style="padding:13px 12px;">Memorias USB.</td></tr>
</tbody>
</table>
</div>
<ul>
    <li>Estructura jerárquica de directorios.</li>
    <li>Metadatos: nombre, tamaño, fechas, permisos.</li>
    <li>Asignación de bloques: contigua, enlazada o indexada (inodos).</li>
    <li>Bitácora (journaling) para recuperarse de apagones.</li>
</ul>
<pre class="codigo">
mkdir proyecto &amp;&amp; cd proyecto
touch notas.txt
ls -la
df -h            # espacio de los sistemas de archivos
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t005',
                    label: 'Administración de dispositivos de entrada/salida',
                    steps: [
                        {
                            title: 'Gestión de E/S',
                            content: `<ul>
    <li>Los <strong>controladores</strong> traducen órdenes generales en instrucciones específicas del dispositivo.</li>
    <li>Los <strong>búferes</strong> almacenan datos temporalmente.</li>
    <li>El <strong>spooling</strong> pone en cola los trabajos (impresión).</li>
    <li>La planificación del disco ordena las solicitudes para reducir movimientos.</li>
</ul>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo de dispositivo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>De bloques</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Discos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>De caracteres</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Teclado, puerto serie.</td></tr>
<tr><td style="padding:13px 12px;"><strong>De red</strong></td><td style="padding:13px 12px;">Tarjetas de red.</td></tr>
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
            label: 'Programación de bajo nivel',
            subtemas: [
                {
                    id: 'm006-t001',
                    label: 'Programación en lenguaje ensamblador',
                    steps: [
                        {
                            title: 'Lenguaje ensamblador',
                            content: `<p>El <strong>ensamblador</strong> representa las instrucciones de máquina con nombres legibles. Cada arquitectura tiene el suyo.</p>
<pre class="codigo">
; Linux x86-64 (NASM): imprimir un mensaje
section .data
    mensaje db "Hola, CENFOTEC", 10
    largo   equ $ - mensaje

section .text
    global _start
_start:
    mov rax, 1          ; llamada al sistema write
    mov rdi, 1          ; salida estándar
    mov rsi, mensaje
    mov rdx, largo
    syscall
    mov rax, 60         ; exit
    xor rdi, rdi
    syscall
</pre>
<pre class="codigo">
nasm -f elf64 hola.asm &amp;&amp; ld hola.o -o hola &amp;&amp; ./hola
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t002',
                    label: 'Programación en C',
                    steps: [
                        {
                            title: 'C, el lenguaje de los sistemas',
                            content: `<p>C ofrece acceso directo a la memoria mediante <strong>punteros</strong> y genera código muy eficiente. Linux, Windows y la mayoría de los sistemas embebidos están escritos en C.</p>
<pre class="codigo">
#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

int main(void) {
    int n = 5;
    int *datos = malloc(n * sizeof(int));     /* memoria dinámica */
    if (datos == NULL) return 1;
    for (int i = 0; i &lt; n; i++) datos[i] = i * i;
    for (int *p = datos; p &lt; datos + n; p++) printf("%d ", *p);
    free(datos);                              /* liberar */
    return 0;
}
</pre>`,
                            nextButton: 'Siguiente: Riesgos'
                        },
                        {
                            title: 'Riesgos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Error</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Consecuencia</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Desbordamiento de búfer</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Corrupción de memoria y vulnerabilidades.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Olvidar free</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Fuga de memoria.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Usar memoria liberada</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Comportamiento indefinido.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Puntero nulo</strong></td><td style="padding:13px 12px;">Caída del programa.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Herramientas como Valgrind y AddressSanitizer (<code>gcc -fsanitize=address</code>) detectan estos errores.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t003',
                    label: 'Llamadas al sistema',
                    steps: [
                        {
                            title: 'Llamadas al sistema',
                            content: `<p>Una <strong>llamada al sistema</strong> es la forma en que un programa en modo usuario pide un servicio al núcleo: abrir un archivo, crear un proceso, enviar datos por la red.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Categoría</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplos (POSIX)</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Procesos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">fork, exec, wait, exit</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Archivos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">open, read, write, close</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Memoria</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">mmap, brk</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Comunicación</strong></td><td style="padding:13px 12px;">pipe, socket</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
#include &lt;fcntl.h&gt;
#include &lt;unistd.h&gt;
int main(void) {
    int fd = open("salida.txt", O_WRONLY | O_CREAT | O_TRUNC, 0644);
    write(fd, "Hola\\n", 5);
    close(fd);
    return 0;
}
</pre>
<pre class="codigo">
strace ./programa      # muestra las llamadas al sistema que hace un programa (Linux)
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t004',
                    label: 'Depuración y optimización de programas',
                    steps: [
                        {
                            title: 'Depuración con GDB',
                            content: `<pre class="codigo">
gcc -g -O0 programa.c -o programa
gdb ./programa
(gdb) break main
(gdb) run
(gdb) next
(gdb) print variable
(gdb) backtrace
</pre>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Herramienta</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>GDB</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Depurar paso a paso.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Valgrind</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Errores de memoria.</td></tr>
<tr><td style="padding:13px 12px;"><strong>perf, gprof</strong></td><td style="padding:13px 12px;">Perfilar el tiempo de ejecución.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Optimización'
                        },
                        {
                            title: 'Optimización',
                            content: `<ul>
    <li>Medir antes de optimizar (perfilador).</li>
    <li>Elegir algoritmos y estructuras adecuados.</li>
    <li>Aprovechar la caché: recorrer arreglos en orden.</li>
    <li>Usar optimizaciones del compilador (<code>-O2</code>).</li>
    <li>Evitar llamadas al sistema innecesarias.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t005',
                    label: 'Programación de controladores de dispositivos',
                    steps: [
                        {
                            title: 'Controladores',
                            content: `<p>Un <strong>controlador</strong> (driver) es código del núcleo que permite al sistema operativo comunicarse con un dispositivo. En Linux se escriben como módulos que se cargan y descargan.</p>
<pre class="codigo">
#include &lt;linux/module.h&gt;
#include &lt;linux/init.h&gt;

static int __init iniciar(void) {
    pr_info("Modulo cargado\\n");
    return 0;
}
static void __exit salir(void) {
    pr_info("Modulo descargado\\n");
}
module_init(iniciar);
module_exit(salir);
MODULE_LICENSE("GPL");
</pre>
<pre class="codigo">
make
sudo insmod mi_modulo.ko
dmesg | tail
sudo rmmod mi_modulo
</pre>
<p class="nota">
<i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
Un error en un controlador puede bloquear todo el sistema: practique en una máquina virtual.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_007',
            label: 'Tendencias y evolución de la arquitectura de computadores',
            subtemas: [
                {
                    id: 'm007-t001',
                    label: 'Computación cuántica',
                    steps: [
                        {
                            title: 'Computación cuántica',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Concepto</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cúbit</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Unidad de información cuántica; puede estar en superposición de 0 y 1.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Superposición</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Varios estados a la vez hasta medir.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Entrelazamiento</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cúbits correlacionados aunque estén separados.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Decoherencia</strong></td><td style="padding:13px 12px;">Pérdida del estado cuántico por el entorno.</td></tr>
</tbody>
</table>
</div>
<ul>
    <li>Aplicaciones prometedoras: simulación de moléculas, optimización, criptografía.</li>
    <li>Amenaza a la criptografía actual (algoritmo de Shor): impulsa la criptografía poscuántica.</li>
    <li>Los equipos actuales son ruidosos y de pocos cúbits (era NISQ).</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t002',
                    label: 'Arquitecturas de computadoras neuromórficas',
                    steps: [
                        {
                            title: 'Computación neuromórfica',
                            content: `<p>Las arquitecturas <strong>neuromórficas</strong> imitan el cerebro: neuronas y sinapsis en hardware que se comunican mediante pulsos (redes neuronales de impulsos). Procesan de forma paralela, por eventos y con muy bajo consumo.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;"></th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Von Neumann</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Neuromórfica</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Memoria y cómputo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Separados.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Integrados.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ejecución</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sincronizada por reloj.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Por eventos.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Consumo</strong></td><td style="padding:13px 12px;">Mayor.</td><td style="padding:13px 12px;">Muy bajo.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Ejemplos de investigación: Intel Loihi e IBM TrueNorth.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t003',
                    label: 'Sistemas en chip (SoC, por sus siglas en inglés)',
                    steps: [
                        {
                            title: 'Sistema en chip',
                            content: `<p>Un <strong>SoC</strong> integra en un solo chip la CPU, la GPU, la memoria caché, controladores, módem y aceleradores (por ejemplo, de IA). Es la base de teléfonos, tabletas y muchas computadoras portátiles.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ventajas</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Desventajas</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Menor consumo y tamaño.</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Difícil de actualizar por partes.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Mayor velocidad de comunicación interna.</strong></td><td style="padding:13px 12px;">Diseño y fabricación complejos.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t004',
                    label: 'Tecnología de memoria no volátil',
                    steps: [
                        {
                            title: 'Memorias no volátiles',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tecnología</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Característica</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>NAND flash (SLC, MLC, TLC, QLC)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Base de los SSD; más bits por celda = más capacidad y menor durabilidad.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>3D NAND</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Celdas apiladas verticalmente.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>MRAM</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Magnética; rápida y durable.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>ReRAM y PCM</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Resistiva y de cambio de fase; candidatas a memoria universal.</td></tr>
<tr><td style="padding:13px 12px;"><strong>CXL</strong></td><td style="padding:13px 12px;">Interconexión para compartir memoria entre procesadores.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm007-t005',
                    label: 'Arquitecturas de procesadores basadas en inteligencia artificial',
                    steps: [
                        {
                            title: 'Aceleradores de IA',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Acelerador</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Característica</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>GPU</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Miles de núcleos para operaciones matriciales.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>TPU</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Diseñada por Google para redes neuronales.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>NPU</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Unidad de procesamiento neuronal integrada en teléfonos y portátiles.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>FPGA</strong></td><td style="padding:13px 12px;">Hardware reconfigurable.</td></tr>
</tbody>
</table>
</div>
<ul>
    <li>Operaciones de multiplicación y acumulación masivamente paralelas.</li>
    <li>Precisión reducida (FP16, INT8) para ganar velocidad.</li>
    <li>Memoria de alto ancho de banda (HBM).</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        }
    ]
};
