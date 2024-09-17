/*
 * Los arreglos en JavaScript son estructuras de datos que permiten almacenar múltiples valores en una sola variable.

 * Los arreglos pueden almacenar cualquier tipo de dato, inclusive funciones, arreglos u objetos literales.
*/

// TODO: 1. Declaración de Arreglos:
// Podemos realizar las declaración de arreglos de dos formas:

// TODO 1.1 Declar arreglo usando el constructor de Array
// const meses = new Array('febrero', 'marzo', 'abril', 'mayo', 'junio');

// TODO 1.2 Declarar un arreglo utilizando corchetes []
let meses = ['febrero', 'marzo', 'abril', 'mayo', 'junio'];
console.log( meses );



// TODO 2. Acceso a Elementos:
// NOTA: Los elementos de un arreglo se acceden utilizando índices, "Siempre comienzan en 0"

// TODO 2.1 Imprimir el primer elemento de nuestro arreglo
// console.log(meses[0]);

// TODO 2.1 Imprimir el ultimo eleemnto de nuestro arreglo
// console.log(meses[4]);


// TODO: Tarea 1
let arregloCosas = [
  true,
  123,
  'JS',
  1 + 2,
  function () {},
  () => {},
  { a: 1 },
  ['lunes', 'martes', 'miercoles', 'jueves', ['sabado', 'domingo']],
];

// TODO: T1.1 Del arreglo arregloCosas, imprimir en consola el valor 'JS'
console.log(arregloCosas[2]);

// TODO: T1.2 Del arreglo arregloCosas, imprimir en consola el valor 'miercoles'
console.log(arregloCosas[7][3]);

// TODO: T1.3 Del arreglo arregloCosas, imprimir en consola el valor 'domingo'
console.log(arregloCosas[7][4][1]);