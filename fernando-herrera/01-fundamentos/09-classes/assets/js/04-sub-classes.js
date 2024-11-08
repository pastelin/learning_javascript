class Persona {
    // Nota: Los atributos son opcionales, pero es buena práctica declararlos
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    // El constructor se ejecuta al momento de crear una instancia de la clase
    constructor(
        nombre = 'Sin nombre',
        codigo = 'Sin código',
        frase = 'Sin frase'
    ) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }

    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida} `;
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

// TODO: Actividad 1. Crear una clase llamada Heroe que extienda de Persona
// TODO: Actividad 2. Crear atributo 'clan' con el valor por defecto 'sin clan'
// TODO: Actividad 3. Crear un constructor que reciba los atributos nombre, codigo y frase
// TODO: Actividad 4. sobre-escribir el método quienSoy y llamar al método quienSoy de la clase padre
// * * La sobreescritura ocurre cuando una clase hija redefine un método heredado de su clase padre.

// * La palabra reservada extends indica que la clase Heroe heredará las propiedades y métodos de la clase Persona
// * Actividad 1
class Heroe extends Persona {
    
    // * Actividad 2
    clan = 'Sin clan';

    
    // * Actividad 3
    constructor(nombre, codigo, frase) {
        //* La llamada al constructor de la clase padre debe ser llamado antes de acceder a las propiedades de la clase hija
        super(nombre, codigo, frase);
        this.clan = 'Avengers';
    }

    // * Actividad 4
    quienSoy() {
        console.log(`Soy ${this.nombre} del clan ${this.clan}`);
        // Llamar al método quienSoy de la clase padre
        super.quienSoy();
    }
}

// TODO: 5. Crear una instancia de la clase Heroe
const spiderman = new Heroe(
    'Peter Parker',
    'Spiderman',
    'Soy tu amigable vecino Spiderman'
);

// TODO: 6. Imprimir en consola la instancia de la clase Heroe
console.log(spiderman);

// TODO: 7. Llamar al método quienSoy de la clase Heroe
spiderman.quienSoy();
