/*
    * Las propiedades o métodos estáticos son aquellos que se pueden acceder sin la necesidad de instanciar la clase.
*/

class Persona {
    
    // TODO: 1. Declarar propiedad estática llamada _conteo e inicializarla en 0
    static _conteo = 0;

    // TODO: 2. Crear un getter statico 'conteo' que retorne la propiedad _conteo
    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    //TODO: 3. Crear un método estático llamado mensaje
    static mensaje() {
        console.log(this.nombre); // undefined
        console.log('Hola a todos, soy un método estático');
    }

    // Nota: Los atributos son opcionales, pero es buena práctica declararlos
    nombre = '';

    // El constructor se ejecuta al momento de crear una instancia de la clase
    constructor(nombre = 'Sin nombre') {
        this.nombre = nombre;

        // TODO: 3. Incrementar en +1 la propiedad estática _conteo cada que se cree una instancia de la clase
        Persona._conteo++;
    }

    get getNombre() {
        return this.nombre;
    }

    quienSoy() {
        console.log(`Soy ${this.nombre}`);
    }
}

const spiderman = new Persona(
    'Peter Parker',
    'Spiderman',
    'Soy tu amigable vecino Spiderman'
);

const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');


// TODO: 4. Imprimir en consola la propiedad estática _conteo
console.log('Conteo estático:', Persona._conteo);


// TODO: 5. Imprimir en consola el getter estático conteo
console.log(Persona.conteo);


// TODO: 6. Llamar al método estático mensaje
Persona.mensaje();
