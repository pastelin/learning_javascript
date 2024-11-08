const products = ['mesa', 'silla', 'notebook', 'teclado'];

// push modifica la referencia original
// products.push('pantalla lcd', 'sony tv');

// concat genera una nueva referencia
const products2 = products.concat(['pantalla lcd', 'sony tv']);

const fruits = ['peras', 'manzanas', 'sandias', 'frutillas'];

const mercado = [...fruits, 'lechuga', 'papas', 'uvas', ...products2];
const mercado2 = fruits.concat('lechuga', 'papas', 'uvas').concat(products2);

console.log(products2);
console.log(mercado2);
