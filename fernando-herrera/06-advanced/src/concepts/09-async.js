import { heroes } from '../data/heros';

/*
    * async y await son una forma de trabajar con promesas que hace que el código sea más limpio y fácil de leer.
    * Una función declarada con la palabra clave async devuelve una promesa.
 */

/**
 *
 * @param {HTMLDivElement} element
 */
export const asyncComponent = (element) => {
    const id = '5d86371f1efebc31def272e2';

    // TODO: Actividad 2. Imprime en consola la respuesta de la función findHero
    console.log(findHero(id));

    // TODO: Actividad 3. Renderiza el nombre del héroe en el elemento
    findHero(id).then((hero) => (element.innerHTML = hero.name));
};


// TODO: Actividad 1. Haz que la función findHero sea asincrónica utilizando async
/**
 *
 * @param {String} id
 * @returns {Promise<String>}
 */
const findHero = async (id) => {
    const hero = heroes.find((hero) => hero.id === id);

    return hero;
};
