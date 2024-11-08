// 1. Utiliza nombre significativos. Usa formato camelCase.

//No:
let patito = 123;

// Si:
let esActivo = true;

// 2. Evitar variables globales
var variableGlobal = 'Soy global';

// Usa objetos
var miModulo = {
    miVariable: 123,
}(
    // Utiliza IIFF para encapsular tu código
    function () {
        console.log('Se ejecuta dentro de su propio contexto');
    }
)();

// 3. Evita strings o números mágicos
function cambiarEstado(nuevoEstado) {
    this.estado = nuevoEstado;
}

// No:
cambiarEstado(2);
cambiarEstado('activo');

// Si:
const ESTADO_ACTIVO = 'activo';
cambiarEstado(ESTADO_ACTIVO);

// 4. Optimizar loops
// No:
let valores = [1, 2, 3, 4, 5];

// No:
for (let i = 0; i < valores.length; i++) {
    console.log(valores[i]);
}

// Si:
for (let i = 0, len = valores.length; i < len; i++) {
    console.log(valores[i]);
}

// Mejor aún:
valores.forEach((val) => console.log(val));

// 5. Nombre de clases se escriben en Mayúsculas
class Usuario {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

// 6. Utiliza notaciones cortas

let obj = { valor: 123 };

let obj2 = new Object();
obj2.valor = 123;
