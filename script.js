// ==========================================
// 1. CONTROL DE FLUJO Y MANEJO DE ERRORES
// ==========================================

// 1.1. if...else
function ejemploIfElse() {
    const resultado = document.getElementById('resultado-if-else');
    let edad = Math.floor(Math.random() * 30) + 10; // Edad aleatoria entre 10 y 40
    
    let mensaje = `Edad generada: ${edad}<br>`;
    
    if (edad >= 18) {
        mensaje += "✓ Eres mayor de edad";
    } else {
        mensaje += "✗ Eres menor de edad";
    }
    
    resultado.innerHTML = mensaje;
    resultado.className = 'resultado mostrar success';
}

// 1.2. switch
function ejemploSwitch() {
    const resultado = document.getElementById('resultado-switch');
    let dia = new Date().getDay();
    let nombreDia;
    
    switch(dia) {
        case 0:
            nombreDia = "Domingo";
            break;
        case 1:
            nombreDia = "Lunes";
            break;
        case 2:
            nombreDia = "Martes";
            break;
        case 3:
            nombreDia = "Miércoles";
            break;
        case 4:
            nombreDia = "Jueves";
            break;
        case 5:
            nombreDia = "Viernes";
            break;
        case 6:
            nombreDia = "Sábado";
            break;
        default:
            nombreDia = "Día desconocido";
    }
    
    resultado.innerHTML = `Hoy es: <strong>${nombreDia}</strong>`;
    resultado.className = 'resultado mostrar info';
}

// 1.3. try/catch/throw
function ejemploTryCatch() {
    const resultado = document.getElementById('resultado-try-catch');
    
    try {
        let numero = prompt("Ingresa un número:");
        
        if (numero === null) {
            throw new Error("Operación cancelada");
        }
        
        if (isNaN(numero) || numero.trim() === "") {
            throw new Error("No es un número válido");
        }
        
        resultado.innerHTML = `✓ Número válido ingresado: <strong>${numero}</strong>`;
        resultado.className = 'resultado mostrar success';
    } catch (error) {
        resultado.innerHTML = `✗ Error: ${error.message}`;
        resultado.className = 'resultado mostrar error';
    }
}

// 1.4. Objetos Error
function ejemploErrorObj() {
    const resultado = document.getElementById('resultado-error-obj');
    
    function dividir(a, b) {
        if (b === 0) {
            throw new Error("No se puede dividir por cero");
        }
        return a / b;
    }
    
    try {
        let resultado1 = dividir(10, 2);
        let resultado2 = dividir(10, 0);
        
        resultado.innerHTML = `Resultado: ${resultado1}, ${resultado2}`;
    } catch (error) {
        resultado.innerHTML = `✗ Error capturado: ${error.message}<br>Tipo: ${error.name}`;
        resultado.className = 'resultado mostrar error';
    }
}

// ==========================================
// 2. BUCLES E ITERACIÓN
// ==========================================

// 2.1. for
function ejemploFor() {
    const resultado = document.getElementById('resultado-for');
    let salida = "Iteraciones del bucle for:<br>";
    
    for (let i = 0; i < 5; i++) {
        salida += `Iteración ${i}: ${i * 2}<br>`;
    }
    
    resultado.innerHTML = salida;
    resultado.className = 'resultado mostrar success';
}

// 2.2. while
function ejemploWhile() {
    const resultado = document.getElementById('resultado-while');
    let salida = "Iteraciones del bucle while:<br>";
    let contador = 0;
    
    while (contador < 5) {
        salida += `Contador: ${contador}<br>`;
        contador++;
    }
    
    resultado.innerHTML = salida;
    resultado.className = 'resultado mostrar success';
}

// 2.3. do...while
function ejemploDoWhile() {
    const resultado = document.getElementById('resultado-do-while');
    let salida = "Iteraciones del bucle do...while:<br>";
    let i = 0;
    
    do {
        salida += `Valor: ${i}<br>`;
        i++;
    } while (i < 5);
    
    resultado.innerHTML = salida;
    resultado.className = 'resultado mostrar success';
}

// ==========================================
// 3. FUNCIONES
// ==========================================

// 3.1. Definir Funciones
function ejemploDefinirFunciones() {
    const resultado = document.getElementById('resultado-definir-funciones');
    
    // Función declarativa
    function saludar(nombre) {
        return `Hola, ${nombre}!`;
    }
    
    // Función expresión
    const despedir = function(nombre) {
        return `Adiós, ${nombre}!`;
    };
    
    // Función flecha
    const sumar = (a, b) => a + b;
    
    let salida = "Ejemplos de definición de funciones:<br><br>";
    salida += `Función declarativa: ${saludar("María")}<br>`;
    salida += `Función expresión: ${despedir("Juan")}<br>`;
    salida += `Función flecha: 5 + 3 = ${sumar(5, 3)}<br>`;
    
    resultado.innerHTML = salida;
    resultado.className = 'resultado mostrar success';
}

// 3.2. Llamar Funciones
function ejemploLlamarFunciones() {
    const resultado = document.getElementById('resultado-llamar-funciones');
    
    function calcularArea(base, altura) {
        return (base * altura) / 2;
    }
    
    function calcularPerimetro(lado1, lado2, lado3) {
        return lado1 + lado2 + lado3;
    }
    
    let area = calcularArea(10, 5);
    let perimetro = calcularPerimetro(3, 4, 5);
    
    let salida = "Llamadas a funciones:<br><br>";
    salida += `Área del triángulo (base=10, altura=5): ${area}<br>`;
    salida += `Perímetro del triángulo (lados 3, 4, 5): ${perimetro}<br>`;
    
    resultado.innerHTML = salida;
    resultado.className = 'resultado mostrar success';
}

// ==========================================
// 4. EXPRESIONES Y OPERADORES
// ==========================================

// 4.1. Asignación y Comparación
function ejemploAsignacionComparacion() {
    const resultado = document.getElementById('resultado-asignacion');
    
    let x = 10;
    x += 5;  // x = 15
    x -= 3;  // x = 12
    
    let salida = "Operadores de Asignación:<br>";
    salida += `x = 10, x += 5, x -= 3 → Resultado: ${x}<br><br>`;
    
    salida += "Operadores de Comparación:<br>";
    salida += `5 == "5" → ${5 == "5"} (comparación de valor)<br>`;
    salida += `5 === "5" → ${5 === "5"} (comparación estricta)<br>`;
    salida += `10 > 5 → ${10 > 5}<br>`;
    salida += `10 <= 10 → ${10 <= 10}<br>`;
    salida += `7 != 7 → ${7 != 7}<br>`;
    
    resultado.innerHTML = salida;
    resultado.className = 'resultado mostrar success';
}

// 4.2. Operadores Aritméticos
function ejemploAritmeticos() {
    const resultado = document.getElementById('resultado-aritmeticos');
    
    let a = 10, b = 3;
    
    let salida = `Operadores Aritméticos (a=${a}, b=${b}):<br><br>`;
    salida += `Suma: ${a} + ${b} = ${a + b}<br>`;
    salida += `Resta: ${a} - ${b} = ${a - b}<br>`;
    salida += `Multiplicación: ${a} * ${b} = ${a * b}<br>`;
    salida += `División: ${a} / ${b} = ${(a / b).toFixed(2)}<br>`;
    salida += `Módulo: ${a} % ${b} = ${a % b}<br>`;
    salida += `Potencia: ${a} ** ${b} = ${a ** b}<br>`;
    salida += `Incremento: ++a = ${++a}<br>`;
    
    resultado.innerHTML = salida;
    resultado.className = 'resultado mostrar success';
}

// 4.3. Operadores Lógicos
function ejemploLogicos() {
    const resultado = document.getElementById('resultado-logicos');
    
    let verdadero = true, falso = false;
    
    let salida = "Operadores Lógicos:<br><br>";
    salida += `true && false = ${verdadero && falso} (AND)<br>`;
    salida += `true || false = ${verdadero || falso} (OR)<br>`;
    salida += `!true = ${!verdadero} (NOT)<br>`;
    salida += `10 > 5 && 20 < 30 = ${10 > 5 && 20 < 30}<br>`;
    salida += `10 > 15 || 20 < 30 = ${10 > 15 || 20 < 30}<br>`;
    
    resultado.innerHTML = salida;
    resultado.className = 'resultado mostrar success';
}

// ==========================================
// 5. NÚMEROS Y FECHAS
// ==========================================

// 5.1. Objeto Number
function ejemploNumber() {
    const resultado = document.getElementById('resultado-number');
    
    let num = 123.456;
    
    let salida = `Objeto Number (valor original: ${num}):<br><br>`;
    salida += `toFixed(2): ${num.toFixed(2)}<br>`;
    salida += `toPrecision(4): ${num.toPrecision(4)}<br>`;
    salida += `toExponential(2): ${num.toExponential(2)}<br>`;
    salida += `Number.isInteger(10): ${Number.isInteger(10)}<br>`;
    salida += `Number.isInteger(10.5): ${Number.isInteger(10.5)}<br>`;
    salida += `Number.isNaN(NaN): ${Number.isNaN(NaN)}<br>`;
    salida += `Number.MAX_VALUE: ${Number.MAX_VALUE}<br>`;
    salida += `Number.MIN_VALUE: ${Number.MIN_VALUE}<br>`;
    
    resultado.innerHTML = salida;
    resultado.className = 'resultado mostrar success';
}

// 5.2. Objeto Math
function ejemploMath() {
    const resultado = document.getElementById('resultado-math');
    
    let salida = "Objeto Math:<br><br>";
    salida += `Math.PI: ${Math.PI.toFixed(4)}<br>`;
    salida += `Math.E: ${Math.E.toFixed(4)}<br>`;
    salida += `Math.round(4.7): ${Math.round(4.7)}<br>`;
    salida += `Math.ceil(4.2): ${Math.ceil(4.2)}<br>`;
    salida += `Math.floor(4.8): ${Math.floor(4.8)}<br>`;
    salida += `Math.random(): ${Math.random().toFixed(4)}<br>`;
    salida += `Math.max(1, 5, 3, 9, 2): ${Math.max(1, 5, 3, 9, 2)}<br>`;
    salida += `Math.min(1, 5, 3, 9, 2): ${Math.min(1, 5, 3, 9, 2)}<br>`;
    salida += `Math.pow(2, 3): ${Math.pow(2, 3)}<br>`;
    salida += `Math.sqrt(16): ${Math.sqrt(16)}<br>`;
    salida += `Math.abs(-5): ${Math.abs(-5)}<br>`;
    
    resultado.innerHTML = salida;
    resultado.className = 'resultado mostrar success';
}

// 5.3. Objeto Date
function ejemploDate() {
    const resultado = document.getElementById('resultado-date');
    
    let fecha = new Date();
    
    let salida = "Objeto Date:<br><br>";
    salida += `toString(): ${fecha.toString()}<br>`;
    salida += `toDateString(): ${fecha.toDateString()}<br>`;
    salida += `toTimeString(): ${fecha.toTimeString()}<br>`;
    salida += `getFullYear(): ${fecha.getFullYear()}<br>`;
    salida += `getMonth(): ${fecha.getMonth() + 1} (0-11, sumamos 1)<br>`;
    salida += `getDate(): ${fecha.getDate()}<br>`;
    salida += `getDay(): ${fecha.getDay()} (0=Domingo, 6=Sábado)<br>`;
    salida += `getHours(): ${fecha.getHours()}<br>`;
    salida += `getMinutes(): ${fecha.getMinutes()}<br>`;
    salida += `getSeconds(): ${fecha.getSeconds()}<br>`;
    
    resultado.innerHTML = salida;
    resultado.className = 'resultado mostrar success';
}

// ==========================================
// 6. FORMATEO DE TEXTO
// ==========================================

// 6.1. Cadenas Literales
function ejemploCadenasLiterales() {
    const resultado = document.getElementById('resultado-cadenas');
    
    let nombre = "Juan";
    let edad = 25;
    let ciudad = "San José";
    
    // Template literals
    let mensaje = `Hola, mi nombre es ${nombre}, tengo ${edad} años y vivo en ${ciudad}`;
    
    // Cadenas multilínea
    let parrafo = `Esta es la primera línea
Esta es la segunda línea
Esta es la tercera línea`;
    
    let salida = "Cadenas Literales (Template Literals):<br><br>";
    salida += `<strong>Interpolación:</strong><br>${mensaje}<br><br>`;
    salida += `<strong>Multilínea:</strong><br>${parrafo.replace(/\n/g, '<br>')}<br><br>`;
    salida += `<strong>Expresiones:</strong><br>2 + 2 = ${2 + 2}<br>`;
    
    resultado.innerHTML = salida;
    resultado.className = 'resultado mostrar success';
}

// 6.2. Objeto String
function ejemploString() {
    const resultado = document.getElementById('resultado-string');
    
    let texto = "JavaScript es genial";
    
    let salida = `Objeto String (texto: "${texto}"):<br><br>`;
    salida += `length: ${texto.length}<br>`;
    salida += `toUpperCase(): ${texto.toUpperCase()}<br>`;
    salida += `toLowerCase(): ${texto.toLowerCase()}<br>`;
    salida += `substring(0, 10): ${texto.substring(0, 10)}<br>`;
    salida += `slice(0, 10): ${texto.slice(0, 10)}<br>`;
    salida += `split(" "): [${texto.split(" ").join(", ")}]<br>`;
    salida += `includes("genial"): ${texto.includes("genial")}<br>`;
    salida += `indexOf("es"): ${texto.indexOf("es")}<br>`;
    salida += `replace("genial", "increíble"): ${texto.replace("genial", "increíble")}<br>`;
    salida += `charAt(0): ${texto.charAt(0)}<br>`;
    salida += `trim(): "${texto.trim()}"<br>`;
    
    resultado.innerHTML = salida;
    resultado.className = 'resultado mostrar success';
}

// ==========================================
// 7. COLECCIONES INDEXADAS
// ==========================================

// 7.1. Arreglos
function ejemploArreglos() {
    const resultado = document.getElementById('resultado-arreglos');
    
    let frutas = ["manzana", "banana", "naranja"];
    let numeros = [1, 2, 3, 4, 5];
    
    let salida = "Arreglos:<br><br>";
    salida += `<strong>Arreglo de frutas:</strong> [${frutas.join(", ")}]<br>`;
    salida += `Acceso: frutas[0] = ${frutas[0]}<br>`;
    salida += `length: ${frutas.length}<br><br>`;
    
    frutas.push("uva");
    salida += `Después de push("uva"): [${frutas.join(", ")}]<br>`;
    
    frutas.pop();
    salida += `Después de pop(): [${frutas.join(", ")}]<br>`;
    
    frutas.unshift("fresa");
    salida += `Después de unshift("fresa"): [${frutas.join(", ")}]<br><br>`;
    
    salida += `<strong>Métodos de arrays:</strong><br>`;
    let dobles = numeros.map(n => n * 2);
    salida += `map(n => n * 2): [${dobles.join(", ")}]<br>`;
    
    let pares = numeros.filter(n => n % 2 === 0);
    salida += `filter(n => n % 2 === 0): [${pares.join(", ")}]<br>`;
    
    let suma = numeros.reduce((acc, n) => acc + n, 0);
    salida += `reduce((acc, n) => acc + n, 0): ${suma}<br>`;
    
    resultado.innerHTML = salida;
    resultado.className = 'resultado mostrar success';
}

// 7.2. Arreglos Tipados
function ejemploArreglosTipados() {
    const resultado = document.getElementById('resultado-arreglos-tipados');
    
    // Int8Array: enteros de 8 bits con signo (-128 a 127)
    let int8 = new Int8Array([1, 2, 3, 4, 5]);
    
    // Uint8Array: enteros de 8 bits sin signo (0 a 255)
    let uint8 = new Uint8Array([10, 20, 30, 40, 50]);
    
    // Float32Array: números de punto flotante de 32 bits
    let float32 = new Float32Array([1.5, 2.5, 3.5, 4.5]);
    
    // Int16Array: enteros de 16 bits
    let int16 = new Int16Array([1000, 2000, 3000]);
    
    let salida = "Arreglos Tipados:<br><br>";
    salida += `<strong>Int8Array:</strong> [${Array.from(int8).join(", ")}]<br>`;
    salida += `Rango: -128 a 127<br><br>`;
    
    salida += `<strong>Uint8Array:</strong> [${Array.from(uint8).join(", ")}]<br>`;
    salida += `Rango: 0 a 255<br><br>`;
    
    salida += `<strong>Float32Array:</strong> [${Array.from(float32).join(", ")}]<br>`;
    salida += `Tipo: Punto flotante 32 bits<br><br>`;
    
    salida += `<strong>Int16Array:</strong> [${Array.from(int16).join(", ")}]<br>`;
    salida += `Rango: -32768 a 32767<br>`;
    
    resultado.innerHTML = salida;
    resultado.className = 'resultado mostrar success';
}

// ==========================================
// 8. DOM - MANIPULACIÓN DEL DOCUMENTO
// ==========================================

// 8.1. getElementById
function ejemploGetElementById() {
    let elemento = document.getElementById("elemento-id");
    elemento.style.color = "red";
    elemento.style.fontWeight = "bold";
    elemento.innerHTML = "¡El texto cambió de color y peso con getElementById!";
}

// 8.2. getElementsByTagName
function ejemploGetElementsByTagName() {
    let parrafos = document.getElementsByTagName("p");
    let contadorDemo = 0;
    
    for (let p of parrafos) {
        if (p.classList.contains('demo-paragraph')) {
            p.style.fontWeight = "bold";
            p.style.color = "#667eea";
            p.innerHTML = `Párrafo modificado ${++contadorDemo}`;
        }
    }
}

// 8.3. getElementsByClassName
function ejemploGetElementsByClassName() {
    let elementos = document.getElementsByClassName("demo-class");
    let colores = ["#ffeb3b", "#4caf50", "#2196f3"];
    
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].style.backgroundColor = colores[i];
        elementos[i].style.padding = "1rem";
        elementos[i].style.fontWeight = "bold";
        elementos[i].innerHTML = `Elemento ${i + 1} modificado`;
    }
}

// 8.4. querySelector y querySelectorAll
function ejemploQuerySelector() {
    // querySelector - encuentra el primer elemento
    let primero = document.querySelector(".demo-selector");
    primero.style.backgroundColor = "#ff5722";
    primero.style.color = "white";
    primero.style.fontWeight = "bold";
    
    // querySelectorAll - encuentra todos los elementos
    let todos = document.querySelectorAll(".demo-selector");
    todos.forEach((elem, index) => {
        elem.style.border = "2px solid blue";
        elem.style.borderRadius = "5px";
        elem.style.padding = "0.5rem";
        elem.innerHTML = `Selector ${index + 1} - Modificado`;
    });
}

// 8.5. Colecciones de Objetos HTML
function ejemploColeccionesHTML() {
    const resultado = document.getElementById('resultado-colecciones-html');
    
    // document.forms - colección de formularios
    let formularios = document.forms;
    
    // document.images - colección de imágenes
    let imagenes = document.images;
    
    // document.links - colección de enlaces
    let enlaces = document.links;
    
    let salida = "Colecciones de Objetos HTML:<br><br>";
    salida += `<strong>Total de formularios:</strong> ${formularios.length}<br>`;
    salida += `<strong>Total de imágenes:</strong> ${imagenes.length}<br>`;
    salida += `<strong>Total de enlaces:</strong> ${enlaces.length}<br><br>`;
    
    if (formularios.length > 0) {
        salida += `Primer formulario ID: ${formularios[0].id || 'sin ID'}<br>`;
    }
    
    salida += `<strong>document.body:</strong> ${document.body.tagName}<br>`;
    salida += `<strong>document.title:</strong> ${document.title}<br>`;
    
    resultado.innerHTML = salida;
    resultado.className = 'resultado mostrar info';
}

// ==========================================
// FUNCIONES DE UTILIDAD
// ==========================================

// Función para limpiar todos los resultados
function limpiarResultados() {
    const resultados = document.querySelectorAll('.resultado');
    resultados.forEach(r => r.style.display = 'none');
}

// Mensaje de bienvenida en consola
console.log('%c¡Bienvenido a la Tarea 5: JavaScript!', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cEsta página demuestra diversos conceptos de JavaScript', 'color: #764ba2; font-size: 14px;');
console.log('Desarrollado para ISW-512 Diseño de Aplicaciones Web');

// Event Listeners cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('✓ Documento cargado correctamente');
    console.log('✓ Todos los ejemplos están listos para ejecutarse');
});