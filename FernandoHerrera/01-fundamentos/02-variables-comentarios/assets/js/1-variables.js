// TODO: 1. Comentarios

/*
	* Los comentarios son líneas de código que el interprete de JavaScript ignorará a la hora de ejecutarlo.
	* Nos puede servir para describir una funcionalidad o marcar cosas que haremos posterior mente.

	* Existen tres tipos de comentarios en JavaScript:
		* Comentario de una línea: se utiliza para hacer comentarios cortos.
		* Comentario de múltiples líneas: se utiliza para hacer comentarios más extensos.
		* Comentario para documentación: se utiliza para documentar el código.
*/


// TODO: 1.1 Declarar variable con comentarios para JsDoc
/**
 * Comentario para documentación
 * @type {number}
 * @description Variable que contiene el día de la semana, para más información consultar la documentación.https://jsdoc.app/?trk=article-ssr-frontend-pulse_little-text-block
 */
const hoy = 'jueves';

console.log(hoy);



// TODO: 2. Tipos de variables: var, let y const
/*
 * Las variables son un contenedor de información que apunta a un lugar de memoria en nuestros equipos.
 * Y para poder leer su valor hacermos referencia al nombre de la variable.
 */


// TODO: 2.1 declarar variable con var, es una variable global que ha existido desde el inicio de JavaScript
var a = 'Soy una una variable var';


// TODO: 2.2 declarar variable con let, es una variable local, se recomienda usar let en lugar de var
let b = 'Soy una variable let';


// TODO: 2.3 declarar variable con const, es una constante, se utiliza para valores que no van a cambiar
const c = 'Soy una constante';

console.log({ a, b, c });



// TODO: 3. Diferencias entre var y let


// TODO: 3.1 Hoisting
/* 
	* Es un comportamiento en JavaScript que mueve las declaraciones de variables y funciones 
	* al principio de su contexto de ejecución, permitiendo su uso antes de su declaración en el código.

	* REGLAS:
		* 1. La inicialización de variables con var no se elevan, 
		* 2. Las variables declaradas con let y const no pueden ser accedidas antes de su declaración e inicilización.
*/

console.warn('Hoisting');

console.log(miNombre + ' Pastelin');
var miNombre = 'Juan';

// console.log(miNombre2 + 'Pastelin');
let miNombre2 = 'Juan';


// TODO: 3.2 Re-declaración

console.warn('Re-declaración');

var mensaje = 'Mensaje 1';
var mensaje = 'Mensaje 2';
console.log(mensaje);

let mensaje2 = 'Mensaje 1';
// let mensaje2 = 'Hola de nuevo';
console.log(mensaje2);



// TODO: 3.3 Ámbito global
/* 
	* Se refiere al contexto de ejecución más externo en el que las variables y funciones son accesibles desde el código. 
	* En los navegadores el objeto global es window. 
	* En Node.js, el objeto global es global.

	* NOTAS:
	* var: Cuando se declara una variable con var en el ámbito global, se convierte en una propiedad  del objeto global.
	* En el remoto caso de que declaremos una variable que ya exista en el objeto global estaríamos volviendolo a declarar,
	* Es decir cambiando su valor original.

	* let: Cuando se declara una variable con let en el ámbito global, este no se convierte en una propiedad del objeto global, 
	* por ende no sobreescriben las variables que se encuentran el el objeto global window
*/

console.warn('Ámbito global');

// TODO: 3.3.1 Imprimir en consola el alto de la ventana del navegador del objeto window
console.log(window.outerHeight);


// TODO: 3.3.2 Declarar variable 'outerHeight' con var en el ámbito global
var outerHeight = '1020';


// TODO: 3.3.4 Declarar variable 'outerHeight' con var en el ámbito global
// let outerHeight = 1020;


// TODO: 3.3.3 Imprimir en consola el alto de la ventana del navegador del objeto window
console.log(window.outerHeight);



// TODO: 4. Uso de console
// La consola de JavaScript es una herramienta muy útil para depurar, ver el estado de una variable o ver errores.

// warning: advertencia
console.warn(a);

// error
console.error({ b });

// table: ayuda a visualizar la información en forma de tabla
console.table({ a, b, c });

/* 
	* Ejmplo de console personalizado con css

	* Especificadores de formato: %c
		* indica que el texto que sigue debe ser estilizado según las reglas CSS proporcionadas en el segundo argumento.
*/
console.log(
    '%c Mis Variables',
    'color: pink; font-weight: bold; font-size: 20px'
);



// TODO: 5. Depuración y punto de ruptura

// Desde el navegador (Herramientas del desarrollador)

// Desde el IDE
