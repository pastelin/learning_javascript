import { heroes } from '../data/heros';

/*
 * async y await son una forma de trabajar con promesas que hace que el código sea más limpio y fácil de leer.
 * await: Puede ser usado solo dentro de una función marcada como async.
*/

/**
 *
 * @param {HTMLDivElement} element
 */
export const asyncAwaitComponent = async (element) => {
    const id1 = '5d86371f1efebc31def272e2';
    const id2 = '5d86371f1efebc31def272e2';

    // Es util cuando una promesa depende de otra
    // TODO: Actividad 1. Utiliza async y await para buscar dos héroes por id.
    const hero1 = await findHero(id1);
    const hero2 = await findHero(id2);

    // TODO: Actividad 2. Renderiza el nombre de cada héroe en el elemento
    element.innerHTML = `${hero1.name} - ${hero2.name}`;
};

const findHero = async (id) => {
    const hero = heroes.find((hero) => hero.id === id);

    if (!hero) {
        throw `Hero with id ${id} not found`;
    }

    return hero;
};
