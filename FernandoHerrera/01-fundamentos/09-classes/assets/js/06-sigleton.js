class Singleton {
	static instancia; // undefined
	nombre = '';

	constructor(nombre = '') {

		// Singleton.instancia == undefined
		// !Singleton.instancia == true
		// !!Singleton.instancia == false
		if (!!Singleton.instancia) { 
			return Singleton.instancia;
		}

		Singleton.instancia = this;
		this.nombre = nombre;
	}
}

const instancia1 = new Singleton('Ironman');
console.log(`Nombre en la instancia1 es: ${instancia1.nombre}`);

const instancia2 = new Singleton('Spiderman');
console.log(`Nombre en la instancia2 es: ${instancia2.nombre}`);