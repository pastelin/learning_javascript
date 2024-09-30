import { heroes } from '../data/heros';

/**
 *
 * @param {HTMLDivElement} element
 */
export const generatorsAsyncComponent = async (element) => {
    const heroesGenerator = getHeroGenerator();
    let isFinished = false;

    do {
        const { value, done } = await heroesGenerator.next();
        isFinished = done;
        if (isFinished) break;

        element.innerHTML += value;
    } while (!isFinished);
};

async function* getHeroGenerator() {
    for (const hero of heroes) {
        await sleep();
        yield hero.name;
    }

    return 'Ya no hay más héroes';
}

const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), 1000);
    });
};
