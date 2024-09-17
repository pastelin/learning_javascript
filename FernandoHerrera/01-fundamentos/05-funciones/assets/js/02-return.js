/*
 * la palabra return se utiliza para devolver un valor desde una función y finalizar su ejecución.
 * Todas las funciones retornan un valor, si no se especifica un valor, la función devolverá undefined.
 */

// TODO: 1. Función tradicional que suma dos números
function sumar(a, b) {
  return a + b;
}
console.log(sumar(2, 3));

// TODO: 2. Función de flecha que suma dos números
let sumar2 = (a, b) => {
  return a + b;
};
console.log(sumar2(2, 3));

// TODO: 3. Función de flecha que suma dos números con return implícito
// Las funciones flecha pueden tener un return implícito si el cuerpo de la función es solo una expresión.
sumar2 = (a, b) => a + b;
console.log(sumar2(2, 3));

// TODO: 4. Función tradicional que retorna un número aleatorio
function getAleatorio() {
  return Math.random();
}

// TODO: Tarea 1 - Transformar la función getAleatorio a una función de flecha con return implícito
const getAleatorio2 = () => Math.random();
console.log(getAleatorio2());
