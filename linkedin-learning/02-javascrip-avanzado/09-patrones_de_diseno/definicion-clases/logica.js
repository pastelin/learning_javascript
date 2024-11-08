/*
	* define una función constructora
	* Las funciones constructoras son una forma de crear objetos en JavaScript. 
	* En este caso, PersonaP es una función constructora que crea un objeto con dos propiedades: nombre y apellido. 

	* Cuando se invoca a PersonaP con la palabra clave new, se crea un nuevo objeto. 
	* Las propiedades de este objeto se establecen dentro de la función constructora utilizando la palabra clave this. 
	* En este caso, this.nombre se establece con el valor del primer argumento (nombre) y this.apellido se establece con el valor del segundo argumento (apellido).
*/

function PersonaP(nombre, apellido) {
	this.nombre = nombre;
	this.apellido = apellido;
}

/*
	* En JavaScript, cada función tiene una propiedad prototype que es un objeto. 
	* Las propiedades y métodos añadidos a este objeto prototype están disponibles para todos los objetos creados a partir de esa función constructora. 
	* En este caso, cualquier objeto creado a partir de PersonaP tendrá acceso al método decirNombre. 
*/
PersonaP.prototype.decirNombre = function () {
	console.log('Mi nombre es' + this.nombre);
};


/*
	* Este fragmento de código JavaScript define una función constructora llamada TrabajadorP. 
	* Esta función constructora está diseñada para crear un objeto TrabajadorP que hereda propiedades de un objeto PersonaP y también tiene una propiedad adicional llamada profesion.

	* La línea PersonaP.call(this, nombre, apellido); es una forma de llamar al constructor de PersonaP dentro del contexto del nuevo objeto TrabajadorP que se está creando. 
	* Esto se hace utilizando el método call(), que permite llamar a una función con un valor this y argumentos específicos. 
	* En este caso, this se refiere al nuevo objeto TrabajadorP y nombre y apellido son los argumentos que se pasan al constructor de PersonaP. 
	* Como resultado, el nuevo objeto TrabajadorP hereda las propiedades nombre y apellido del objeto PersonaP.
*/
function TrabajadorP(nombre, apellido, profesion) {
	// llamamos al constructor padre
	PersonaP.call(this, nombre, apellido);
	this.profesion = profesion;
}

/*
	* se está cambiando el prototipo de TrabajadorP para que sea un nuevo objeto que tiene como prototipo a PersonaP.prototype. 
	* Esto significa que los objetos creados con new TrabajadorP() heredarán las propiedades y métodos de PersonaP.prototype. 
	* Esta es una forma común de implementar la herencia en JavaScript.
*/
TrabajadorP.prototype = Object.create(PersonaP.prototype);

/*
	*  se está reasignando la propiedad constructor del prototipo de TrabajadorP a la función constructora TrabajadorP misma. 
	* Esto se hace porque al cambiar el prototipo de TrabajadorP en la primera línea, la propiedad constructor del nuevo prototipo apunta a PersonaP, no a TrabajadorP. 
	* Reasignar la propiedad constructor asegura que los objetos creados con new TrabajadorP() tengan una propiedad constructor que apunte a TrabajadorP, como se esperaría.
*/
TrabajadorP.prototype.constructor = TrabajadorP;

/*
	* se está añadiendo un método llamado decirProfesion al prototipo de TrabajadorP. 
	* Este método devuelve una cadena de texto que incluye la profesión del objeto. 
	* Como este método se añade al prototipo de TrabajadorP, todos los objetos creados con new TrabajadorP() tendrán acceso a este método. 
	* Esto es más eficiente que añadir el método a cada objeto individualmente, ya que solo se necesita una copia del método en memoria, independientemente de cuántos objetos se creen.
*/
TrabajadorP.prototype.decirProfesion = function () {
	return ( `Yo trabajo en ${this.profesion} `);
}

let persona = new PersonaP("Natalia", "Corea");
persona.decirNombre();

/////////////////

class PersonaC {
	constructor(nombre, apellido) {
		this.nombre = nombre;
		this.apellido = apellido;
	}

	decirNombre() {
		return `Mi nombre es ${this.nombre} ${this.apellido}`;
	}
}

class TrabajadorC extends PersonaC {
	constructor(nombre, apellido, profesion) {
		super(nombre, apellido);
		this.profesion = profesion;
	}

	decirProfesion() {
		return `Yo trabajo en ${this.profesion}`;
	}
}