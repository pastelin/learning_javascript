/*
 * la palabra return se utiliza para devolver un valor desde una función y finalizar su ejecución.
 * Todas las funciones retornan un valor, si no se especifica un valor, la función devolverá undefined.
 */

// TODO: 1. Ejemplo de Función tradicional que suma dos números
function sumar(a, b) {
    return a + b;
}
console.log(sumar(2, 3));

// TODO: 2. Ejemplo de Función de flecha que suma dos números
let sumar2 = (a, b) => {
    return a + b;
};
console.log(sumar2(2, 3));

// TODO: 3. Ejemplo de Función de flecha que suma dos números con return implícito
// * Solo podemos utilizar el return implícito, si el cuerpo de la función es solo una expresión.
// * ¿Qué es una expresión?, es cualquier fragmento de código que produce un valor
let sumar3 = (a, b) => a + b;
console.log(sumar3(2, 3));

// TODO: 4. Ejemplo de Función tradicional que retorna un número aleatorio
// * Math es un objeto que proporciona propiedades y métodos para operaciones matemáticas básicas
// * Math.random() devuelve un número aleatorio entre 0 y 1
function getAleatorio() {
    return Math.random();
}
console.log(getAleatorio());

// TODO: Tarea 1 - Transformar la función getAleatorio a una función de flecha con return implícito
const getAleatorio2 = () => Math.random();
console.log(getAleatorio2());
