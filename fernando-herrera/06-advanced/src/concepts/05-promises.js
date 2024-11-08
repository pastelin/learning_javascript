import { heroes } from '../data/heros';

/*
    * Una Promesa es un objeto que representa la eventual finalización (o falla) de una operación asíncrona y su valor resultante. 
    * Puede estar en uno de estos tres estados:
        * Pendiente (Pending): La operación aún no se ha completado.
        * Resuelta (Fulfilled): La operación se completó con éxito.
        * Rechazada (Rejected): La operación falló.

*/

/**
 *
 * @param {HTMLDivElement} element
 */
export const promiseComponent = (element) => {
    // TODO: Actividad 2. Crear función renderHero y renderError que reciben un argumento y renderizan el nombre del héroe o un mensaje de error en el elemento
    const renderHero = (hero) => {
        element.innerHTML = hero.name;
    };

    const renderError = (error) => {
        element.innerHTML = `
        <h3>${error}</h3>
		`;
    };

    // TODO: Actividad 3. Declara variable de tipo const con el id de un héroe
    const id = '5d86371f2343e37870b91ef1';

    // TODO: Actividad 4. Llama a la función findHero y con base en la promesa resuelta o rechazada renderiza el nombre del héroe o un mensaje de error en el elemento
    /*
     * then() se llama cuando la promesa se resuelve correctamente.
     * catch() se llama cuando la promesa falla.
     */
    findHero(id)
        .then((supeHero) => renderHero(supeHero))
        .catch((error) => renderError(error));

    // TODO: Actividad 5. Optimiza el código anterior.
    // findHero(id).then(renderHero).catch(renderError);
};

// TODO: Actividad 1. Implementa la función findHero que recibe un id y retorna una promesa
/*
 * Las promesas se crean con el constructor new Promise() y requiere una función con dos argumentos, resolve y reject.
 * resolve y reject son funciones que se utilizan para resolver o rechazar la promesa.
 * resolve: se llama cuando la promesa se resuelve correctamente.
 * reject: se llama cuando la promesa falla.
 */

/**
 *
 * @param {String} id
 * @returns {Promise}
 */
const findHero = (id) => {
    const promesa = new Promise((resolve, reject) => {
        const hero = heroes.find((hero) => hero.id === id);

        if (hero) {
            resolve(hero);
            return;
        }

        reject(`Hero with id ${id} not found`);
    });

    return promesa;
};
