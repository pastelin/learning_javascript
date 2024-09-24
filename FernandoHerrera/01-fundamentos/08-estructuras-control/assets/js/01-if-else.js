/*
 * Las estructuras de control son bloques de código que permiten dirigir el flujo de ejecución del programa
 * con base en condiciones o repeticiones
 *
 *  Estructuras de control condicionales (if, else if, else, switch y operador ternario)
 */

// TODO 1. Estructura de Control If, Ejecuta un bloque de código si una condición es verdadera.
let edad = 10;

if (edad >= 18) {
    console.log('Es mayor de edad');
}

// TODO 2. Estructura de Control If Else, Ejecuta un bloque de código si una condición es verdadera y otro bloque si es falsa.
if (a >= 18) {
    console.log('Es mayor de edad');
} else {
    console.log('Es menor de edad');
}

// TODO 3. Estructura de Control Else If, Permite evaluar múltiples condiciones en secuencia.

edad = 25;

if (edad < 13) {
    console.log("Eres un niño");
} else if (edad >= 13 && edad < 20) {
    console.log("Eres un adolescente");
} else if (edad >= 20 && edad < 65) {
    console.log("Eres un adulto");
} else {
    console.log("Eres un adulto mayor");
}
















const hoy = new Date();
let dia = hoy.getDay(); // 0: Domingo, 1: Lunes, 2: Martes...
console.log({ dia });

if (dia === 0) {
    console.log('Domingo');
} else if (dia === 1) {
    console.log('Lunes');
} else if (dia === 2) {
    console.log('Martes');
} else {
    console.log('No es Lunes, Martes o Domingo');
}





















// Sin usar If Else, o Switch, únicamente objetos
dia = 3; // 0: Domingo, 1: Lunes, 2: Martes...
const diasLetras = [
    'domingo',
    'lunes',
    'martes',
    'miércoles',
    'jueves',
    'viernes',
    'sábado',
];
console.log(diasLetras[dia] || 'Día no válido');
