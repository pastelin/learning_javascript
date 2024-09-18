/*
    * Las propiedades y métodos privados se añadieron en ES6 del 2015, por lo que no pueden ser compatibles con todos los navegadores.

	* Recurso para validar la compatibilidad de ES6 en los navegadores:
	* https://caniuse.com/

    * Para hacer privados los atributos y métodos de una clase, se debe anteponer el símbolo # al nombre del atributo o método.

    * NOTA: Los atributos y métodos privados no pueden ser accedidos ni modificados desde fuera de la clase.

*/
class Rectangulo {
    // TODO: 1. Hacer privado el atributo area
    #area = 0;

    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;

        // TODO: 2. Actualizar this.area por this.#area
        this.#area = base * altura;
    }

    // TODO: 3. Hacer privado el método imprimirPrivado
    #imprimirPrivado() {
        console.log(`Area: ${this.#area}`);
    }

    imprimir() {
        this.#imprimirPrivado();
    }
}

// Crear una instancia de la clase Rectangulo
const rectangulo = new Rectangulo(10, 15);
rectangulo.imprimir();

// Cambiar el valor del atributo de clase area
rectangulo.area = 100;
rectangulo.imprimir();

console.log(rectangulo);

// TODO: 4. Intentar modificar el valor del atributo privado #area
// rectangulo.#area = 100;

// TODO: 5. Intentar llamar al método privado #imprimirPrivado
// rectangulo.#imprimirPrivado();