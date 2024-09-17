// TODO: 06. Tipos de datos de una variable

// Primitivos

// 01. Boolean - true / false :: Verdadero / Falso
let isOpen = true;
let isClosed = false;


// 2. Null - Sin valor en lo absoluto
let nullValue = null;

// 3. Undefined - Variable que solo ha sido declarada pero no ha sido inicializada
let undefinedValue;

// 4. Number - Agrupa a todos los números, enteros y decimales
let number = 10;
let float = 10.5;

// 5. String - Es una cadena de caracteres, se pueden usar comillas simples, dobles o backticks
let nombre = 'Juan';
console.log(nombre);

nombre = "Pedro";

nombre = `Carlos`;

// 6. Symbol - Permite crear identificadores únicos, es decir, que no se repiten
let symbol = Symbol('a');
let symbol2 = Symbol('a');
console.log(symbol === symbol2); // false


// typeof - nos dice el tipo de dato de una variable
console.log(typeof symbol);

