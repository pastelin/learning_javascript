/*
	* ¿Qué es un objeto?
		* Es una instancia de una clase o una estructura de datos que contiene propiedades y métodos.
		* Los objetos se utilizan para representar entidades del mundo real y sus comportamientos

	* ¿Qué es una clase?
		* Las clases son moldes a partir de los cuales se crean los objetos, es decir, 
		* son plantillas que definen el comportamiento y las propiedades de los objetos.

	* Inicialmente no existian las clases, por lo que se usaban funciones constructoras para crear objetos y se invocaban con la palabra new
*/

// TODO: 1. Crear una función constructora llamada Persona que reciba dos parámetros: nombre y edad
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function () {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    };
}

// TODO 2. Crear dos instancias de la clase Persona
const juan = new Persona('Juan', 30);
const ulises = new Persona('Ulises', 35);

// TODO 3. Imprimir el método imprimir de cada instancia
juan.imprimir();
ulises.imprimir();

// Objetos literales
const persona = {
    nombre: 'Tony',
    edad: 45,
    imprimir() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    },
};

const persona2 = {
    nombre: 'Pepe',
    edad: 35,
    imprimir() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    },
};
