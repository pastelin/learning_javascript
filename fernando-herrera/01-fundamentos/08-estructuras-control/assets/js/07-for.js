/*
 * For se utiliza para ejecutar un bloque de código un número específico de veces.
 */

const diasSemana = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Domingo',
];

// TODO: 1. Sintaxis de for tradicional

/*
 * for (inicialización; condición; incremento) {
 	* Bloque de código a ejecutar
 * }
 */

// TODO: 2. Ejemplo de for tradicional impimiendo los días de la semana
console.warn('For tradicional');
for (let index = 0; index < diasSemana.length; index++) {
  console.log(diasSemana[index]);
}

// TODO: 3. Ejemplo de for in
// * For in se utiliza para iterar sobre el indice de un arreglo o las propiedades de un objeto
console.warn('For in');
for (const index in diasSemana) {
  console.log(diasSemana[index]);
}

// TODO: 4. Ejemplo de for of
// * For of se utiliza para iterar sobre los valores de un arreglo o de un objeto iterable
console.warn('For of');
for (const dia of diasSemana) {
  console.log(dia);
}
