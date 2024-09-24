/*
	* Los tipos de datos se dividen en dos categorías principales:
		* Primitivos (boolean, null, undefined, number, string, symbol)
		* Objetos (object, array, function)

	* Los tipos primitivos son pasados por valor, es decir se le asigna una copia del valor original.
	* Los objetos son pasados por referencia es decir, se le asigna la dirección de memoria del objeto original.
*/

// TODO: 1. Ejemplo con tipos primitivos
let a = 10;
let b = a;
a = 30;
console.log({ a, b });


// TODO: 2. Ejemplo con tipos Object
let juan = { nombre: 'Juan' };
let ana = juan;
ana.nombre = 'Ana';
console.log({ juan, ana });


// TODO 3. Ejemplo de función que recibe un objeto y retorna un objeto modificado
let cambiaNombre = (persona) => {
    persona.nombre = 'Tony';
    return persona;
};

let peter = { nombre: 'Peter' };
let tony = cambiaNombre(peter);

console.log({ peter, tony });


// TODO 4. Ejemplo rompiendo la referencia de un objeto, utilizando el operador spread ...
// * Es una herramienta que nos permite copiar, combinar y manipular datos.
// * Se puede utilizar en objetos {} y arreglos [].

let ricardo = { nombre: 'Ricardo' };
let adriana = { ...ricardo };
adriana.nombre = 'Adriana';

console.log({ ricardo, adriana });


// TODO 5. Ejemplo rompiendo la referencia desde una función, utilizando el operador spread ...
cambiaNombre = ({...persona} ) => {
    persona.nombre = 'Leo';
    return persona;
};

luis = { nombre: 'Luis' };
leo = cambiaNombre(luis);

console.log({ luis, leo });


// TODO 6. Ejemplo de referencia de un arreglo
const frutas = ['Manzana', 'Pera', 'Piña'];
const otrasFrutas = frutas;
otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas });


// TODO 7. Ejemplo rompiendo la referencia de un arreglo utilizando el operador spread ...
const frutas2 = ['Manzana', 'Pera', 'Piña'];
const otrasFrutas2 = [...frutas2];
otrasFrutas2.push('Mango');
console.table({ frutas2, otrasFrutas2 });




// TODO 7.1 Copiar un arreglo con el operador spread ...
// console.time('spread');
// const otrasFrutas2 = [...frutas2];
// console.timeEnd('spread');

// TODO 7.2 Copiar un arreglo con el método slice
// console.time('slice');
// const otrasFrutas3 = frutas2.slice();
// console.timeEnd('slice');

// otrasFrutas2.push('Mango');
// otrasFrutas3.push('Mango');

// console.table({ frutas2, otrasFrutas2, otrasFrutas3 });
