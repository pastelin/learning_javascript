const products = ['mesa', 'silla', 'notebook', 'teclado'];

products.push('pantalla lcd', 'sony tv');

console.log(products);

// Forma comun usando un parametro y este mismo se manda como parametro a la función
products.forEach((el) => console.log(el));

// Forma carta cuando el parametro inicial se utiliza en la funcion
products.forEach(console.log);
