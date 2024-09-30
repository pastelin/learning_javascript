/**
 *
 * @param {HTMLDivElement} element
 */
export const generatorFunctionsComponent = (element) => {
	const myGenerator = myFirstGeneratorFunction();

	console.log(myGenerator.next());
	console.log(myGenerator.next());
	console.log(myGenerator.next());
	console.log(myGenerator.next());
	console.log(myGenerator.next());
};


/* 
	* Funciones generadoras: Son funciones que pueden ser pausadas y reanudadas en cualquier momento.
	* Se declaran con un asterisco (*) después de la palabra reservada function.
	* Se utilizan con la palabra reservada yield.

*/
function* myFirstGeneratorFunction() {
    yield 'Primer valor';
	yield 'Segundo valor';
	yield 'Tercer valor';
	yield 'Cuarto valor';

    return 'Ya no hay más valores';
}
