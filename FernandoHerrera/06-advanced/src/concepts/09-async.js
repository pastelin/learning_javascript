import { heroes } from '../data/heros';

/**
 *
 * @param {HTMLDivElement} element
 */
export const asyncComponent = (element) => {
    const id = '5d86371f1efebc31def272e2';
    console.log(findHero(id));

    findHero(id).then((hero) => (element.innerHTML = hero.name));
};

/**
 *
 * @param {String} id
 * @returns {Promise<String>}
 */
const findHero = async (id) => {
    const hero = heroes.find((hero) => hero.id === id);

    return hero;
};
