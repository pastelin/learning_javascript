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

// Todo 1. Crear una clase llamada Heroe que extienda de Persona
class Heroe extends Persona {
    // TODO 2. Crear un atributo clan con un valor por defecto
    clan = 'Sin clan';

    // TODO 1. Crear un constructor que reciba los atributos nombre, codigo y frase
    constructor(nombre, codigo, frase) {
        // La llamada al constructor de la clase padre debe ser la primera línea
        super(nombre, codigo, frase);
        this.clan = 'Avengers';
    }

    // TODO 3. sobre-escribir el método quienSoy y llamar al método quienSoy de la clase padre
    /*
     * La sobreescritura ocurre cuando una clase hija redefine un método heredado de su clase padre.
     */
    quienSoy() {
        console.log(`Soy ${this.nombre} del clan ${this.clan}`);
        // Llamar al método quienSoy de la clase padre
        super.quienSoy();
    }
}

const spiderman = new Heroe(
    'Peter Parker',
    'Spiderman',
    'Soy tu amigable vecino Spiderman'
);

console.log(spiderman);

spiderman.quienSoy();
