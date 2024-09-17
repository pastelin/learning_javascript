// TODO: Propiedades y métodos básicos de los arreglos

// TODO: 1 Propiedad length, obtiene el número de elementos de un arreglo

// TODO 1.1 Imprimir en consola la longitud del arreglo 'meses'
console.log('Longitud: ' + meses.length);

// TODO 1.2 Imprimir en consola el último elemento de 'meses' utilizando la propiedad length
console.log(meses[meses.length - 1]);



// TODO: 2 método for-each

/*
* Nos ayuda a recorrer cada uno de los elementos del arreglo, permitiendonos ejecutar una acción por 
* cada iteración. 

* elemento: El elemento actual del arreglo que se está procesando.
* indice (opcional): El índice del elemento actual que se está procesando.
* arr (opcional): El arreglo sobre el cual se está llamando forEach.

*/

meses.forEach((elemento, indice, arr) => {
  console.log({ elemento, indice, arr });
});



// TODO: 3 método push, agrega un elemento al final del arreglo
let nuevaLongitud = meses.push('julio');

// TODO 3.1 Imprimir la nueva longitud y el arreglo
console.log({ nuevaLongitud, meses });



// TODO: 4 método unshift, agrega un elemento al inicio del arreglo
nuevaLongitud = meses.unshift('enero');

// TODO 4.1 Imprimir la nueva longitud y el arreglo
console.log({ nuevaLongitud, meses });



// TODO: 5 método pop, elimina el último elemento del arreglo
let mesBorrado = meses.pop();

// TODO 5.1 Imprimir la nueva longitud y el arreglo
console.log({ mesBorrado, meses });



// TODO: 6 método shift, elimina el primer elemento del arreglo
mesBorrado = meses.shift();

// TODO 6.1 Imprimir la nueva longitud y el arreglo
console.log({ mesBorrado, meses });



// TODO: 7 método splice

/*
  * Nos permite eliminar, agregar y/o reemplazar elementos de un arreglo.

  * Param1: Índice de inicio
  * Param2: Número de elementos a eliminar
  * Param3: Elemento(s) a agregar en el índice de inicio
*/

// TODO: 7.1 Eliminar el elemento 'febrero' en el indice 0
let mesEliminado = meses.splice(0, 1);
console.log({ mesEliminado, meses });


// TODO: 7.2 Agregar el elemento 'Feb.' en el índice 0
meses.splice(0, 0, 'Feb.');
console.log(meses);


// TODO: 7.3 Actualizar los elementos apartir del indice 1 con los valores 'Mar.', 'Abr.', 'May.', 'Jun.'
meses.splice(1, 4, 'Mar.', 'Abr.', 'May.', 'Jun.');
console.log(meses);



// TODO: 8 método indexOf, obtiene el índice de un elemento en el arreglo
let indice = meses.indexOf('May.');
console.log({ indice });

indice = meses.indexOf('En.');
console.log({ indice });