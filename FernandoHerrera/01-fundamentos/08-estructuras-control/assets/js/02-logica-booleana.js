/*
	* La lógica booleana se basa en valores booleanos (true y false) 
	* y operadores lógicos que permiten combinar y evaluar expresiones booleanas

	* Los operadores lógicos más comunes son ! (NOT), && (AND) y || (OR)
*/

const regresaTrue = () => {
  console.log('Regresa true');
  return true;
};

const regresaFalse = () => {
  console.log('Regresa false');
  return false;
};

// TODO 1. Operador NOT o Negación (!), invierte el valor booleano de una expresión
console.warn('Not o negación');
console.log(true); // true
console.log(!true); // false
console.log(!false); // true
console.log(!regresaFalse()); // true

// TODO 2. Operador AND (&&), devuelve true si ambos valores son verdaderos
console.warn('And'); // true si todos los valores son verdaderos
console.log(true && true); // true
console.log(true && false); // false

// TODO 3. Operador OR (||), devuelve true si alguno de los valores es verdadero
console.warn('OR'); // true si alguno de los valores es verdadero
console.log(true || false); // true
console.log(false || false); // false


// TODO 4. Cortocircuito en operadores lógicos, es una técnica que permite no evaluar todas las expresiones de una operación lógica

// TODO 4.1 Operador AND (&&), si la primera expresión es falsa, no se evalua la segunda expresión
console.warn('Cortocircuito en AND (&&)');
console.log(regresaFalse() && regresaTrue()); // false

// TODO 4.2 Operador OR (||), si la primera expresión es verdadera, no se evalua la segunda expresión
console.warn('Cortocircuito en OR (||)');
console.log(regresaTrue() || regresaFalse()); // true


/*
	* PropTip: 
		* Utiliza el cortocircuito en operadores lógicos para simplificar la lógica de tus programas
	* Asignaciones (JS Avanzado)
 	* las asignaciones booleanas utilizan operadores lógicos para asignar valores a variables en función de condiciones booleanas 
 */
console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;


const a1 = true && 'Hola Mundo' && 150; // 150
const a2 = 'Hola' && 'Mundo' && soyFalso && true; // false
const a3 = soyFalso || 'Ya no soy falso'; // Ya no soy falso
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true; // Ya no soy falso de nuevo
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true; // true

console.log({ a1, a2, a3, a4, a5 });
