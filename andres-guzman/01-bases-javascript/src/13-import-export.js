import invoiceByClienteName, { invoices } from './data/invoices.js';

const invoicesClone = invoices.map((i) => i.name);
console.log(invoices);
console.log(invoicesClone);

const invoicesClient = invoices.map((i) => i.client.name);
console.log(invoicesClient);

// const invoiceById = invoices.find((i) => i.name === 'Compras de oficina');
console.log(invoiceByClienteName('Compras de oficina'));

const invoiceFilter = invoices.filter((i) => i.id > 1);
console.log(invoiceFilter);
  
const invoiceDeleted = invoices.filter((i) => i.id != 2);
console.log(invoiceDeleted);

// La comparación entre objetos es por referencia no por valor.
const invoiceFilter2 = invoices.filter(
	(i) => i.items.includes({ producto: 'papper', price: 100, quantity: 10 }) > 1
);
console.log(invoiceFilter2);

const result = invoices.some(i => i.client.name === 'Juan');
console.log(result);