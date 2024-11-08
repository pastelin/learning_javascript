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

export const invoiceByClienteName = (clientName) => {
	return invoices.find((i) => i.name === clientName);
};

const invoiceById = (id) => {
	return invoices.find((i) => i.id === id);
};

const findInvoiceById = (id) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const result = invoiceById(id);
			if (result) {
				resolve(result);
			} else {
				reject('error: no existe la factura por el id!!!');
			}
		}, 2500);
	});
};

export { invoices, invoiceByClienteName as default, invoiceById, findInvoiceById };
