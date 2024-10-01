import { heroes } from '../data/heros';

/**
 *
 * @param {HTMLDivElement} element
 */
export const asyncAwaitComponent = async (element) => {
    const id1 = '5d86371f1efebc31def272e2';
    const id2 = '5d86371f1efebc31def272e2';

    // TODO: Actividad 1. Implementa manejo de errores con async y await
    try {
        // Es util cuando una promesa depende de otra
        const hero1 = await findHero(id1);
        const hero2 = await findHero(id2);

        element.innerHTML = `${hero1.name} - ${hero2.name}`;
    } catch (error) {
        element.innerHTML = error;
    }
};

const findHero = async (id) => {
    const hero = heroes.find((hero) => hero.id === id);

    if (!hero) {
        throw `Hero with id ${id} not found`;
    }

    return hero;
};
