/*
 * Documentación: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object
 */
// TODO: 1. Eliminar la propiedad genero del objeto libro
console.warn('Eliminando la propiedad genero del objeto libro');
delete libro.genero;
console.log(libro);

// TODO: 2. Agregar la propiedad genero al objeto libro con el valor 'Terror'
console.warn('Agregando la propiedad genero al objeto libro');
libro.genero = 'Terror';
console.log(libro);

// TODO: 3. Modificar el valor de la propiedad genero del objeto libro
console.warn('Modificando el valor de la propiedad genero del objeto libro');
libro.genero = 'Fantasía';
console.log(libro);

// TODO: 4. Obtener arreglo con los pares [clave, valor] del objeto libro
console.warn(
    'Obteniendo arreglo con los pares [clave, valor] del objeto libro'
);
const entriesPares = Object.entries(libro);
console.log(entriesPares);

// TODO 5. Congelar objeto libro para evitar modificaciones en sus propiedades
console.warn('Congelando el objeto libro');
Object.freeze(libro);
delete libro.autor;
console.log(libro);

// TODO 6. Obtener las propiedades del objeto libro
console.warn('Obteniendo las propiedades del objeto libro');
const propiedades = Object.getOwnPropertyNames(libro);
console.log(propiedades);

// TODO 7. Obtener los valores del objeto libro
console.warn('Obteniendo los valores del objeto libro');
const valores = Object.values(libro);
console.log(valores);
