const invoices = [
	{
		id: 1,
		name: 'Compras de oficina',
		client: {
			name: 'Jhon',
			lastname: 'Doe',
		},
		items: [
			{
				producto: 'keyboard',
				price: 399,
				quantity: 2,
			},
			{
				producto: 'mouse',
				price: 200,
				quantity: 1,
			},
			{
				producto: 'papper',
				price: 100,
				quantity: 10,
			},
		],
	},
	{
		id: 2,
		name: 'Compras de computación',
		client: {
			name: 'Pepe',
			lastname: 'Doe',
		},
		items: [
			{
				producto: 'keyboard',
				price: 399,
				quantity: 2,
			},
			{
				producto: 'screen 17',
				price: 800,
				quantity: 1,
			},
			{
				producto: 'cpu intel',
				price: 1000,
				quantity: 1,
			},
		],
	},
	{
		id: 3,
		name: 'Compras de papeleria',
		client: {
			name: 'Mattias',
			lastname: 'Doe',
		},
		items: [
			{
				producto: 'pencil',
				price: 50,
				quantity: 1,
			},
			{
				producto: 'papper',
				price: 100,
				quantity: 10,
			},
		],
	},
];

const invoicesClone = invoices.map((i) => i.name);
console.log(invoices);
console.log(invoicesClone);

const invoicesClient = invoices.map((i) => i.client.name);
console.log(invoicesClient);

const invoiceById = invoices.find((i) => i.name === 'Compras de oficina');
console.log(invoiceById);

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