import { heroes } from '../data/heros';

/**
 *
 * @param {HTMLDivElement} element
 */
export const asyncErrorComponent = (element) => {
    const id = '5d86371f1efebc31def272e21';
    console.log('Inicio de componente');

    findHero(id)
        .then((hero) => (element.innerHTML = hero.name))
        .catch((error) => (element.innerHTML = error));

    console.log('Fin de componente');
};

/**
 *
 * @param {String} id
 * @returns {Promise<String>}
 */
const findHero = async (id) => {
    const hero = heroes.find((hero) => hero.id === id);

    if (!hero) {
        throw `Hero with id ${id} not found`;
    }

    return hero;
};
