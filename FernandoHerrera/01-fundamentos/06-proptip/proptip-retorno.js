function crearPersona(nombre, apellido) {
  return {
    nombre: nombre,
    apellido: apellido,
  };
}

const persona = crearPersona('Juan', 'Pastelin');
console.log(persona);

// Si el nombre de la propiedad es igual al nombre de la variable que se le asigna, se puede simplificar la asignación
function crearPersona(nombre, apellido) {
  return {
    nombre,
    apellido,
  };
}

let crearPersona2 = (nombre, apellido) => {
  return { nombre, apellido };
};

crearPersona2 = (nombre, apellido) => ({ nombre, apellido });
console.log(crearPersona2('Juan', 'Pastelin'));

// Arguments
function imprimeArgumentos() {
  console.log(arguments);
}

console.log(imprimeArgumentos(10, true, false, 'Juan', 'Pastelin'));

/* 
	* Arrow Functions no tienen la propiedad arguments

 	* Parametro rest ...args, es un arreglo que contiene todos los argumentos enviados a la función
	* Se debe declarar al final de los parametros

*/
let imprimeArgumentos2 = (...args) => {
  console.log(args);
};
console.log(imprimeArgumentos2(10, true, false, 'Juan', 'Pastelin'));

imprimeArgumentos2 = (edad, ...args) => {
  console.log(args);
};
console.log(imprimeArgumentos2(10, true, false, 'Juan', 'Pastelin'));

// Desestructuración de Objetos y Arrays
let imprimeArgumentos3 = (edad, ...args) => {
  return args;
};
let [casado, vivo, nombre, saludo] = imprimeArgumentos3(
  10,
  true,
  false,
  'Juan',
  'Pastelin'
);
console.log({ casado, vivo, nombre, saludo });

let { apellido: nuevoApellido } = crearPersona2('Juan', 'Pastelin');
console.log({ nuevoApellido });

let tony = {
  nombre: 'Tony Stark',
  codeName: 'Ironman',
  vivo: false,
  edad: 40,
  trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

let imprimePropiedades = (personaje) => {
  console.log('nombre', personaje.nombre);
  console.log('codeName', personaje.codeName);
  console.log('vivo', personaje.vivo);
  console.log('edad', personaje.edad);
  console.log('trajes', personaje.trajes);
};

// Cuando se envía un objeto como argumento, se puede desestructurar en la declaración de la función
imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
  console.log(nombre);
  console.log(codeName);
  console.log(vivo);
  console.log(edad);
  console.log(trajes);
};

imprimePropiedades(tony);	