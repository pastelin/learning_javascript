// TODO: 1. Crear una clase llamada Persona
class Persona {
    // TODO: 2. Crear los atributos de clase nombre, codigo, frase, comida y asignarles un valor por defecto
    // Nota: Los atributos son opcionales, pero es buena práctica declararlos
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    // TODO: 3. Crear un constructor que reciba los atributos nombre, codigo y frase e inicialice los atributos de la clase
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

    // TODO: 4. Crear un setter y un getter para la comida favorita
    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida} `;
    }

    // TODO: 5. Crear un método que imprima en consola el nombre y el código de la persona
    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    // TODO: 6. Crear un método que imprima en consola la frase de la persona y llame al método quienSoy
    miFrase() {
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

// TODO: 6. Crear una instancia de la clase Persona
const spiderman = new Persona(
    'Peter Parker',
    'Spiderman',
    'Soy tu amigable vecino Spiderman'
);

// TODO: 7. Crear otra instancia de la clase Persona
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');

// TODO: 8. Imprimir en consola las instancias de la clase Persona
console.log(spiderman);
console.log(ironman);

// TODO: 9. Llamar al método miFrase de cada instancia
spiderman.miFrase();
ironman.miFrase();

// TODO: 10. Setear la comida favorita de spiderman
spiderman.setComidaFavorita = 'El pay de cereza de la tía May';
console.log(spiderman);

// TODO: 11. Obtener la comida favorita de spiderman desde el getter
console.log(spiderman.getComidaFavorita);

// TODO: NOTA 01. JS permite actualizar las propiedades de un objeto directamente
spiderman.comida = 'Otra comida';
console.log(spiderman);

// TODO: NOTA 02. JS permite agregar nuevas propiedades a un objeto
spiderman.nemesis = 'Duende Verde';
console.log(spiderman);
