/*
 * Los objetos son una forma sencilla de agrupar datos y funciones, facilitandonos la organización y el acceso a la información.
 * Los objetos literales se definen utilizando llaves {} y contienen una lista de pares clave-valor separados por comas.
 */

// TODO: 1. Declaración de Objetos Listerales:

const libro = {
  titulo: 'Cien Años de Soledad',
  autor: 'Gabriel García Márquez',
  año: 1967,
  genero: 'Novela',
  mostrarInfo: function() {
    console.log(
      `${this.titulo} es una ${this.genero} escrita por ${this.autor} en el año ${this.año}.`
    );
  },
};



// TODO 2. Formas de acceder a los elementos:

// TODO 2.1 Imprimir el objeto libro
console.log(libro);

// TODO 2.2 Imprimir la información del libro
libro.mostrarInfo();

// TODO 2.3 Imprimir el titulo del libro por medio de la notación de punto
console.log(libro.titulo);

// TODO 2.4 Imprimir el titulo del libro por medio de la notación de corchetes
console.log(libro['titulo']);



// TODO: Tarea 1
let personaje = {
	nombre: 'Tony Stark',
	codeName: 'Ironman', 
	vivo: false,
	edad: 40,
	coords: {
		lat: 34.034,
		lng: -118.70
	},
	trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
	direccion: {
		zip: '10880, 90265',
		ubicacion: 'Malibu, California'
	}
}

// TODO: T1.1 Imprimir el arreglo personaje
console.log(personaje);

// TODO: T1.2 Imprimir el nombre del personaje usando la notación de punto
console.log('Nombre:', personaje.nombre);

// TODO: T1.3 Imprimir el nombre del personaje usando la notación de corchetes
console.log('Nombre:', personaje['nombre']);

// TODO: T1.4 Imprimir las coordenadas del personaje
console.log('Coordenadas:', personaje.coords);

// TODO: T1.5 Imprimir la latitud del personaje
console.log('Latitud:', personaje.coords.lat);

// TODO: T1.6 Imprimir el número de trajes del personaje utilizando la propiedad length
console.log('No. Trajes: ' + personaje.trajes.length);

// TODO: T1.7 Imprimir el último traje del personaje utilizando la propiedad length
console.log('Último. Traje: ' + personaje.trajes[personaje.trajes.length - 1]); 

// TODO: T1.8 Imprimir si el personaje está vivo utilizando la anotación de corchetes
const x = 'vivo';
console.log('Vivo:', personaje[x]);


