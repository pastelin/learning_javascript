import { heroes } from '../data/heros';

/**
 *
 * @param {HTMLDivElement} element
 */
export const callbacksErrorsComponent = (element) => {
    const id = '5d86371f2343e37870b91ef1';

    // TODO: Actividad 2. Actualiza el callback para manejar errores
    findHero(id, (error, response) => {
        // element.innerHTML = hero?.name || 'Hero not found';

        if (error) {
            element.innerText = error;
            return;
        }

        element.innerText = response.name;
    });
};

// TODO: Actividad 1. Implementa mensaje de error cuando el id del héroe no existe
/**
 *
 * @param {string} id
 * @param {( error: String|Null, hero: Object) => void} callback
 */
const findHero = (id, callback) => {
    const response = heroes.find((hero) => hero.id === id);

    if (!response) {
        callback(`Hero with id ${id} not found`, null);
        return;
    }

    callback(null, response);
};
