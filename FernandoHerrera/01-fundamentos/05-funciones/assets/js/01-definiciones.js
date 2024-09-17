/*

* Son bloques de código que se pueden definir una vez y reutilizar en cualquier parte de nuestro programa.

* Es buena practica declarar las funciones al inicio del archivo para tener un mejor orden en el código. 
* Las funciones son bloques de código que se pueden reutilizar en cualquier parte de nuestro programa.

*/


// TODO: 1. Declaración de una función tradicional
function saludar () {
	console.log('Hola Mundo');
}

// saludar();
// let saludar = 'Hi';
// saludar();


//TODO: 2. Declaración de una función anónima
const saludar2 = function () {
	console.log('Hola Mundo');
}

saludar2();

//TODO: 3. Declaración de una función con parametros
const saludarConParametros = function (nombre) {
	console.log(`Hola ${nombre}`);
}

saludarConParametros('Juan');

// TODO: Objeto Arguments en funciones
const saludarConArguments = function (nombre) {
	console.log(arguments);
	console.log(`Hola ${nombre}`);
}

saludarConArguments('Juan', 27, 'JS');


// TODO: 4. Declaración de una función de fecha o lambda functions
/*
* Son más eficientes que las funciones tradicionales.
* Evitan la sobreescritura del objeto this.
*/

const saludarFlecha = (nombre) => {
	console.log('Hola Flecha ' + nombre);
}

saludarFlecha('Juan');