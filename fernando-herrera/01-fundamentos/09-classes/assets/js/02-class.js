// TODO: Actividad 1. Crear una clase llamada Persona
// TODO: Actividad 2. Crear los atributos de clase nombre, codigo, frase, comida y asignarles un valor por defecto
// TODO: Actividad 3. Crear un constructor que reciba los atributos nombre, codigo y frase e inicialice los atributos de la clase
// TODO: Actividad 4. Crear los métodos setter y un getter para la comida.
// TODO: Actividad 5. Crear método 'quienSoy' que imprima en consola el nombre y el código de la persona
// TODO: Actividad 6. Crear método 'miFrase' que imprima en consola la frase de la persona y llame al método quienSoy

// * Actividad 1
class Persona {

    // * Actividad 2
    // Nota: Los atributos son opcionales, pero es buena práctica declararlos
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    // * Actividad 3
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

    // * Actividad 4    
    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida} `;
    }

    // * Actividad 5
    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    // * Actividad 6        
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


// TODO: 7. Crear segunda instancia de la clase Persona
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');


// TODO: 8. Imprimir en consola las instancias de la clase Persona
console.log(spiderman);
console.log(ironman);


// TODO: 9. Imprimir el método 'miFrase' de cada instancia
spiderman.miFrase();
ironman.miFrase();


// TODO: 10. Setear la comida favorita de spiderman
spiderman.setComidaFavorita = 'El pay de cereza de la tía May';
console.log(spiderman);


// TODO: 11. Obtener la comida favorita de spiderman desde el getter
// * El método get no se invoca como una función, se accede como una propiedad
console.log(spiderman.getComidaFavorita);


// * Problemas con el estado de los objetos.

// TODO: problema 1. JS permite actualizar el valor de las propiedades de un objeto directamente
console.warn('Problema 1, actualiza valor de propiedades de forma directa');
spiderman.comida = 'Otra comida';
console.log(spiderman);


// TODO: Problema 2. JS permite agregar nuevas propiedades a un objeto
console.warn('Problema 2, puede agregar nuevas propiedades');
spiderman.nemesis = 'Duende Verde';
console.log(spiderman);
