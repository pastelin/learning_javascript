/**
 *
 * @param {HTMLDivElement} element
 */
export const generatorFunctionsExampleComponent = (element) => {
    const genId = idGenerator();

    const button = document.createElement('button');
    button.innerText = 'Click me';
    element.appendChild(button);

    const renderButton = () => {
        const { value } = genId.next();
        button.innerText = `ID: ${value}`;
    };

    button.addEventListener('click', renderButton);
};

/* 
	* Funciones generadoras: Son funciones que pueden ser pausadas y reanudadas en cualquier momento.
	* Se declaran con un asterisco (*) después de la palabra reservada function.
	* Se utilizan con la palabra reservada yield.

*/

function* idGenerator() {
    let currentId = 0;

    while (true) {
        yield ++currentId;
    }
}

function* myFirstGeneratorFunction() {
    yield 'Primer valor';
    yield 'Segundo valor';
    yield 'Tercer valor';
    yield 'Cuarto valor';

    return 'Ya no hay más valores';
}
