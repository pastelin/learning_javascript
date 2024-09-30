import { heroes } from '../data/heros';

/**
 *
 * @param {HTMLDivElement} element
 */
export const promiseComponent = (element) => {
    const renderHero = (hero) => {
        element.innerHTML = hero.name;
    };

    const renderError = (error) => {
        element.innerHTML = `
			<h3>${error}</h3>
		`;
    };

    const id = '5d86371f2343e37870b91ef1'; 
    // findHero(id)
    //     .then((supeHero) => renderHero(supeHero))
    //     .catch((error) => renderError(error));

    findHero(id)
		.then(renderHero)
		.catch(renderError);
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
