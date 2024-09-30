import { heroes } from '../data/heros';

/**
 *
 * @param {HTMLDivElement} element
 */
export const callbacksComponent = (element) => {
    const id = '5d86371f2343e37870b91ef1';

    findHero(id, (error, response) => {
        // element.innerHTML = hero?.name || 'Hero not found';

        if (error) {
            element.innerHTML = error;
            return;
        }

        element.innerHTML = response.name;
        
    });
};

/**
 *
 * @param {string} id
 * @param {( error: String|Null, hero: Object) => void} callback
 */
const findHero = (id, callback) => {
    const response = heroes.find((hero) => hero.id === id);

    if (!response) {
        callback(`Hero with id ${id} not found`);
        return;
    }

    callback(null, response);
};
