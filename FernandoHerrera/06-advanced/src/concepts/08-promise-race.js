/*
 * Promise.race es un método que devuelve una promesa que se resuelve o se rechaza tan pronto como una de las promesas del iterable se resuelve o se rechaza.
 * Es útil cuando quieres realizar múltiples operaciones asíncronas en paralelo y proceder con la primera que se complete.
 * Se puede utilizar cuando se trabaja con diferentes endpoints que obtengan la misma información y se quiera mostrar la información que llegue primero.
 */

/**
 *
 * @param {HTMLDivElement} element
 */
export const promiseRaceComponent = (element) => {
    // TODO: Actividad 1. Renderiza un mensaje de carga en el elemento
    element.innerText = 'Loading...';

    // TODO: Actividad 2. Crear funcion renderValue que recibe un argumento y renderiza el valor en el elemento
    const renderValue = (value) => {
        element.innerHTML = value;
    };

    // TODO: Actividad 3. Utiliza Promise.race() para ejecutar tres promesas y renderizar el valor de la promesa que se resuelva primero
    Promise.race([slowPromise(), mediumPromise(), fastPromise()]).then(
        (value) => renderValue(value)
    );
};

const slowPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Slow promise');
        }, 2000);
    });
};

const mediumPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Medium promise');
        }, 1500);
    });
};

const fastPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Fast promise');
        }, 1000);
    });
};
