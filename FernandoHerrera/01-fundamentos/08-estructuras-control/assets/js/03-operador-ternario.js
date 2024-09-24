/*
 * El operador ternario permite simplificar el código y hacerlo más legible.
 * Es recomendable usarlo solo cuando se trata de asignaciones condicionales simples
 * 
 * Sintaxis:
 * 		(condicion) ? valorSiTrue : valorSiFalse
 */

// TODO: 1. Ejemplo usando if-else para determinar si una persona es mayor de edad
let edad = 18;
let mensaje;

if (edad >= 18) {
  mensaje = 'Eres mayor de edad';
} else {
  mensaje = 'Eres menor de edad';
}
console.log(mensaje); // 'Eres mayor de edad'


// TODO: 2. Simplificar el código anterior usando el operador ternario
let mensajeSimplificado = (edad >= 18) ? 'Eres mayor de edad' : 'Eres menor de edad';
console.log(mensajeSimplificado); // 'Eres mayor de edad'


// TODO: 3. Ejemplo con múltiples condiciones
let nota = 85;
let calificacion = (nota >= 90) ? 'A' :
                   (nota >= 80) ? 'B' :
                   (nota >= 70) ? 'C' :
                   (nota >= 60) ? 'D' : 'F';
console.log({calificacion}); // 'B'


/*
 * Días de semana abrimos a las 11
 * Pero los fines de semana abrimos a las 9
 */

// Entra a un sitio web, para consultar si está abierto hoy...
const dia = 0; // 0: domingo, 1: lunes...
const horaActual = 10;

let horaApertura;
mensaje; // Está abierto, está cerrado, hoy abrimos a las XX

// if (dia === 0 || dia === 6) {
//   console.log('Fin de semana');
//   horaApertura = 9;
// } else {
//   console.log('Día de semana');
//   horaApertura = 11;
// }

horaApertura = dia === 0 || dia === 6 ? 9 : 11;

// if (horaActual >= horaApertura) {
//   mensaje = 'Está abierto';
// } else {
//   mensaje = `Está cerrado, hoy abrimos a las ${horaApertura}`;
// }

mensaje =
  horaActual >= horaApertura
    ? 'Está abierto'
    : `Está cerrado, hoy abrimos a las ${horaApertura}`;

console.log({ horaApertura, mensaje });
