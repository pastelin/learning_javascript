/**
 *
 * @param {HTMLDivElement} element
 */
export const promiseRaceComponent = (element) => {

	element.innerHTML = 'Loading...';

    const renderValue = (value) => {
        element.innerHTML = value;
    };  

	/*
	* Se puede utilizar cuando se trabaja con diferentes endpoints que obtengan la misma información
	* y se quiera mostrar la información que llegue primero.
	*/ 
	Promise.race([
		slowPromise(), 
		mediumPromise(), 
		fastPromise()
	]).then(renderValue)
};

const slowPromise = () => {
    new Promise((resolve) => {
        setTimeout(() => {
            resolve('Slow promise');
        }, 2000);
    });
};

const mediumPromise = () => {
    new Promise((resolve) => {
        setTimeout(() => {
            resolve('Medium promise');
        }, 1500);
    });
};

const fastPromise = () => {
    new Promise((resolve) => {
        setTimeout(() => {
            resolve('Fast promise');
        }, 1000);
    });
};