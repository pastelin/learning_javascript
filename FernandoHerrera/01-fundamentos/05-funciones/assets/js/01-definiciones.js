/*

* Son bloques de código que se pueden definir una vez y reutilizar en cualquier parte de nuestro programa.

* TIPS
	* 1. Es buena practica declarar las funciones al inicio del archivo para tener un mejor orden en el código. 
*/

// TODO: 1. Ejemplo de declaración de una función tradicional
function saludar() {
    console.log('Hola Mundo');
}

// saludar();
// var saludar = 'Hi';
// saludar();

//TODO: 2. Ejemplo de declaración de una función anónima
// * Son funciones que no tienen un nombre y se suelen asignar a variables.
const funcionAnonima = function () {
    console.log('Hola Mundo');
};

funcionAnonima();

//TODO: 3.  Ejemplo de declaración de una función con parametros
const saludarConParametros = function (nombre) {
    console.log(`Hola ${nombre}`);
};

saludarConParametros('Juan');

// TODO: 4. Uso del ojeto Arguments en funciones
// * Arguments es un objeto que contiene todos los argumentos pasados a la función 
const saludarConArguments = function (nombre) {
    console.log(arguments);
    console.log(`Hola ${nombre}`);
};

saludarConArguments('Juan', 27, 'JS');

// TODO: 5. Ejemplo de declaración de una función de fecha o lambda functions
/*
 * Son una forma más concisa de escribir funciones anónimas
 * Sintaxis básica:
 	* const nombreFuncion = () => { ... }; 
 */

const saludarFlecha = (nombre) => {
    console.log('Hola Flecha ' + nombre);
};

saludarFlecha('Juan');
