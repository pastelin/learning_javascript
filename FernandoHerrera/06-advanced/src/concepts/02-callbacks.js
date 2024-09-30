import { heroes } from '../data/heros';

/**
 *
 * @param {HTMLDivElement} element
 */
export const callbacksComponent = (element) => {
    const id = '5d86371f2343e37870b91ef1';

    findHero(id, (hero) => {
        // element.innerHTML = hero?.name || 'Hero not found';
        element.innerHTML = hero?.name;
    });
};

/**
 *
 * @param {string} id
 * @param {( error: String|Null, hero: Object) => void} callback
 */
const findHero = (id, callback) => {
    const hero = heroes.find((hero) => hero.id === id);

    callback(hero);
};