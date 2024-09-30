import { heroes } from '../data/heros';

/*
 * Un callback es una función que se pasa como argumento a otra función y se ejecuta después de que se completa alguna operación
 * Los callbacks son una forma común de manejar operaciones asíncronas, como solicitudes de red, temporizadores y eventos.
 */

/**
 *
 * @param {HTMLDivElement} element
 */
export const callbacksComponent = (element) => {

    // TODO: Actividad 1. Declara variable de tipo const con el id de un héroe
    const id = '5d86371f2343e37870b91ef1';


    // TODO: Actividad 3. Llama a la función findHero con el id y un callback que renderice el nombre del héroe en el elemento
    findHero(id, (hero) => {
        // element.innerHTML = hero?.name || 'Hero not found';
        element.innerText = hero.name;
    });
};


// TODO: Actividad 2. Implementa la función findHero que recibe un id y un callback
// * La función debe buscar un héroe por id y ejecutar el callback con el héroe encontrado
/**
 *
 * @param {string} id
 * @param {( error: String|Null, hero: Object) => void} callback
 */
const findHero = (id, callback) => {

    // * find() es un método que devuelve el valor del primer elemento del array que cumple con la función de prueba
    const hero = heroes.find((hero) => hero.id === id);

    callback(hero);
};
