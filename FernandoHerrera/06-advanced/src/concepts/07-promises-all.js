import { heroes } from '../data/heros';

/*
    * Es un método que permite ejecutar múltiples promesas en paralelo y esperar a que todas se resuelvan o a que alguna falle.
    * El método Promise.all toma un iterable de promesas (por lo general, un array) y devuelve una sola promesa que:
        * Se resuelve cuando todas las promesas en el iterable se han resuelto.
        * Se rechaza si alguna de las promesas del iterable falla.
*/

/**
 *
 * @param {HTMLDivElement} element
 */
export const promiseAllComponent = (element) => {
    
    const renderError = (error) => {
        element.innerHTML = `
			<h3>${error}</h3>
		`;
    };

    // TODO: Actividad 1. Crear función renderTwoHeros que recibe dos argumentos y renderiza el nombre de cada héroe en el elemento
    const renderTwoHeros = (hero1, hero2) => {
        element.innerHTML = `
            <h3>${hero1.name}</h3>
            <h3>${hero2.name}</h3>
        `;
    };

    const id = '5d86371f2343e37870b91ef1';
    const id2 = '5d86371f1efebc31def272e2';


    // TODO: Actividad 2. Utiliza Promise.all para buscar dos héroes por id y renderizar el nombre de cada héroe en el elemento
    Promise.all([findHero(id), findHero(id2)])
        .then(([hero1, hero2]) => {
            renderTwoHeros(hero1, hero2);
        })
        .catch(error => renderError(error));

    // * Forma de encadenar promesas más limpia para promise-hell
    // let hero1;
    // findHero(id)
    //     .then((hero) => {
    //         hero1 = hero;
    //         return findHero(id2);
    //     })
    //     .then((hero2) => {
    //         renderTwoHeros(hero1, hero2);
    //     })
    //     .catch(renderError);
};

/**
 *
 * @param {String} id
 * @returns {Promise}
 */
const findHero = (id) => {
    return new Promise((resolve, reject) => {
        const hero = heroes.find((hero) => hero.id === id);

        if (hero) {
            resolve(hero);
            return;
        }

        reject(`Hero with id ${id} not found`);
    });
};
