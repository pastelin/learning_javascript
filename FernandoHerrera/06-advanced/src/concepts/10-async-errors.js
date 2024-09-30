import { heroes } from '../data/heros';

/**
 *
 * @param {HTMLDivElement} element
 */
export const asyncErrorComponent = (element) => {
    const id = '5d86371f1efebc31def272e21';
    // console.log('Inicio de componente');

    // TODO: Actividad 2. Renderiza el nombre del héroe en el elemento o un mensaje de error si no se encuentra
    findHero(id)
        .then((hero) => (element.innerHTML = hero.name))
        .catch((error) => (element.innerHTML = error));

    // console.log('Fin de componente');
};


// TODO: Actividad 1. Implementa mensaje de error cuando el id del héroe no existe
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
