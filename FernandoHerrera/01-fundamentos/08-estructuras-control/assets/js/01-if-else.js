/*
* Las estructuras de control son bloques de código que permiten dirigir el flujo de ejecución del programa 
* con base en condiciones o repeticiones
* 
*  Estructuras de control condicionales (if, else if, else, switch y operador ternario)
*/

// TODO 1. Estructura de Control If, Ejecuta un bloque de código si una condición es verdadera.
let a = 10;

if (a > 5) {
  console.log('A es mayor que 5');
}

// TODO 2. Estructura de Control If Else, Ejecuta un bloque de código si una condición es verdadera y otro bloque si es falsa.
if (a >= 10) {
  console.log('A es mayor o igual a 10');
} else {
  console.log('A es menor a 10');
}

// TODO 3. Estructura de Control Else If, Permite evaluar múltiples condiciones en secuencia.
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
