// TODO: 01. Comentarios
// console.log('Hola Mundo');
/*
* console.log('Hola Mundo');
*/
/**	
 * console.log('Hola Mundo');
 */



// TODO: 02. Tipos de variables: var, let y const
// Las variables son un contenedor de información que apunta a un lugar de memoria en nuestros equipos. 
// Y para poder leer su valor hacermos referencia al nombre de la variable.

// var: es una variable global, ha existido desde el inicio de JavaScript
var a = "Soy una una variable var";

// let: es una variable local, se recomienda usar let en lugar de var
let b = "Soy una variable let";

// const: es una constante, su valor no puede cambiar
const c = "Soy una constante";



// TODO: 03. Diferencias entre var y let

/* 
	* Hoisting
	* el hoisting es un comportamiento en JavaScript que mueve las declaraciones de variables y funciones 
	* al principio de su contexto de ejecución, permitiendo su uso antes de su declaración en el código.

	* Sin embargo, la inicialización de variables con var no se elevan, 
	* y las variables declaradas con let y const no pueden ser accedidas antes de su declaración e inicilización.

*/

// console.log(miNombre + ' Pastelin');
// var miNombre = 'Juan';

// console.log(miNombre + 'Pastelin');
// let miNombre = 'Juan';


// Re-declaración

// var mensaje = 'Hola';
// var mensaje = 'Hola de nuevo';
// console.log(mensaje);

// let mensaje = 'Hola';
// let mensaje = 'Hola de nuevo';


/* 
	* Ámbito global 
	* El ámbito global en JavaScript se refiere al contexto de ejecución más externo en el que las variables 
	* y funciones son accesibles desde cualquier parte del código. 
	* En un entorno de navegador, el objeto global es el objeto window. 
	* En Node.js, el objeto global es global.

	* var: Cuando se declara una variable con var en el ámbito global, se convierte en una propiedad 
	* del objeto global (window en navegadores), y en el remoto caso de que declaremos una variable 
	* que ya exista en el objeto window estaríamos volviendolo a declarar, cambiando su valor original.

	* let: Cuando se declara una variable con let en el ámbito global, 
	* no se convierte en una propiedad del objeto global, por ende no sobreescriben las variables 
	* que se encuentran el el objeto global window
*/

// console.log(window.outerHeight);
// var outerHeight = '1020';
// console.log(window.outerHeight);


// let outerHeight = 1020;
// console.log(window.outerHeight);



// TODO: 04. Uso de console
// la consola de JavaScript es una herramienta muy útil para depurar, ver el estado de una variable y ver errores.

// warning: advertencia
console.warn(a);

// error
console.error({ b });

// table: muestra una tabla con los datos que se le pasan como argumento
console.table({ a, b, c });

// console personalizado con css, se puede utilizar para mostrar mensajes importantes
// Especificadores de formato: %c 
// indica que el texto que sigue debe ser estilizado según las reglas CSS proporcionadas 
// como el segundo argumento.
console.log(
  '%c Mis Variables',
  'color: pink; font-weight: bold; font-size: 20px'
);

// TODO: 05. Depuración y punto de ruptura

// Desde el navegador (Herramientas del desarrollador)

// Desde el IDE
