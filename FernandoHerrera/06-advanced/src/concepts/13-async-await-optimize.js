import { heroes } from '../data/heros';

/**
 *
 * @param {HTMLDivElement} element
 */
export const asyncAwaitComponent = async (element) => {
    // const value1 = await fastPromise();
    // const value2 = await mediumPromise();
    // const value3 = await slowPromise();

    const [value1, value2, value3] = await Promise.all([
        fastPromise(),
        mediumPromise(),
        slowPromise(),
    ]);

    element.innerHTML = `${value1} <br/> ${value2} <br/> ${value3}`;
};

const slowPromise = async () => {
    new Promise((resolve) => {
        setTimeout(() => {
            resolve('Slow promise');
        }, 2000);
    });
};

const mediumPromise = async () => {
    new Promise((resolve) => {
        setTimeout(() => {
            resolve('Medium promise');
        }, 1500);
    });
};

const fastPromise = async () => {
    new Promise((resolve) => {
        setTimeout(() => {
            resolve('Fast promise');
        }, 1000);
    });
};
