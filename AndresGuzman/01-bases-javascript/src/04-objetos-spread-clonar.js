const invoice = {
	id: 10,
	name: 'Compras de oficina',
	date: new Date(),
	client: {
		id: 2,
		name: 'Jhon',
		lastname: 'Doe',
		age: 20,
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
			producto: 'paper',
			price: 100,
			quantity: 10,
		},
	],
	total: function () {
		let total = 0;
		this.items.forEach((item) => {
			total += item.price * item.quantity;
		});

		return total;
	},
	greeting: function () {
		// function permite el uso de this, la funcion de flecha no lo permite
		return `Hola ${this.client.name}`;
	},
};

// Este ejemplo clona el objeto, y si en una referencia cambia un valor este se reflejará en todas
// const invoice2 = invoice;

// Con ... (Spread) esparce cada atributo en la nueva referencia
// {} -> Indica que es un objeto
const invoice2 = { ...invoice };

const result = invoice === invoice2;

if (result) {
	console.log(result);
} else {
	console.log('No son iguales');
}

invoice2.id = 20;
console.log(invoice.id);
console.log(invoice2.id);
