/*
    * Patrón Prototipo

    * Patrón creacional donde los objetos creados son determinadas por un prototipo o una plantilla la cual es clonada para crear nuevos objetos
*/
let personaPrototipo = {
    decirNombre: function () {
        console.log('Mi nombre es' + this.nombre);
    },
};

// Creates an object that has the specified prototype, and that optionally contains specified properties.
let persona = Object.create(personaPrototipo, {
    nombre: {
        value: 'Natalia',
        enumerable: false,
    },
    apellido: {
        value: 'Corea',
        writable: false,
        configurable: false,
    },
});

persona.apellido = 'random';
delete persona.apellido;

for (let key in persona) {
    console.log(key);
}
