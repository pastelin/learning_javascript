const sayHello = (name = 'Pepe', age = 0) => `Hola mundoo function! ${name} edad ${age}`;
const add = (a = 0, b = 0) => a + b;

const result = sayHello('Juan', 26);
console.log(result);

console.log( add(10, 5) );