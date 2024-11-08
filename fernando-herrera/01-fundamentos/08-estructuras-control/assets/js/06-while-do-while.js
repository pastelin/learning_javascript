/*
 * Estructuras de control iterativas (while, do while, for)
 * Permiten ejecutar un bloque de código múltiples veces
 */

// TODO: 1. Sintaxis básica de while

// * While evalúa la condición antes de ejecutar el bloque de código.
// * Se ejecuta mientras la condición sea verdadera

// while (condicion) {
// Bloque de código a ejecutar
// }

// TODO: 2. Ejemplo de while con los días de la semana
console.warn('While');
const diasSemana = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo',
];

let indice = 0;

while (indice < diasSemana.length) {
    console.log(diasSemana[indice]);
    indice++;
}

console.warn('Do While');


// TODO: 3. Sintaxis básica de do while
// * Do While ejecuta el bloque de código al menos una vez y luego evalúa la condición
// * Se ejecuta mientras la condición sea verdadera

// do {
// Bloque de código a ejecutar
// } while (condicion);


// TODO: 4. Ejemplo de do while con los días de la semana

// Siempre se ejecuta al menos una vez sin importar si la condición es verdadera o falsa
let index = 0;
do {
    console.log(diasSemana[index]);
    index++;
} while (index < diasSemana.length);




// Ejemplo de uso de break y continue en un ciclo while
/*
 * Break: se utiliza para salir de un bucle antes de que haya terminado normalmente
 * Continue: se utiliza para saltar la iteración actual de un bucle y pasar a la siguiente iteración
 */
while (indice < diasSemana.length) {
    if (indice === 3) {
        // break;
        indice++;
        continue;
    }
    console.log(diasSemana[indice]);
    indice++;
}
