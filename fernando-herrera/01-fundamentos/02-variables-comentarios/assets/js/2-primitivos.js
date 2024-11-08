// TODO: 6. Tipos de datos primitivos

// TODO 6.1 Boolean - true / false :: Verdadero / Falso
let isOpen = true;
let isClosed = false;

console.log({isOpen, isClosed});

// TODO 6.2 Null - Sin valor en lo absoluto
let nullValue = null;

console.log({nullValue});

// TODO 6.3 Undefined - Variable que solo ha sido declarada pero no ha sido inicializada
let undefinedValue;

console.log({undefinedValue});

// TODO 6.4 Number - Agrupa a todos los números, enteros y decimales
let number = 10;
let float = 10.5;

console.log({number, float});

// TODO 6.5 String - Es una cadena de caracteres, se pueden usar comillas simples, dobles o backticks
let nombre = 'Juan';
console.log(nombre);

nombre = "Pedro";

nombre = `Carlos`;

// TODO 6.6 Symbol - Permite crear identificadores únicos, es decir, que no se repiten
let symbol = Symbol('a');
let symbol2 = Symbol('a');
console.log(symbol === symbol2); // false


// TODO 6.7 typeof - nos indica el tipo de dato de una variable
console.log(typeof symbol);