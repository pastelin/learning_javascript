import { heroes } from "../data/heros";

/**
 *
 * @param {HTMLDivElement} element
 */
export const callbacksComponent = (element) => {
    
};


/**
 * 
 * @param {string} id 
 * @param {} callback 
 */
const findHero = (id, callback) => {

	const hero = heroes.find(hero => hero.id === id);
	callback(hero);
}