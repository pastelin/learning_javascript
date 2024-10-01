

/*
    * fetch: Permite hacer peticiones HTTP desde JavaScript
*/
// TODO: Implementar la función fetchQuote, la cual debe hacer una petición a la API de Breaking Bad Quotes y retornar una promesa con la información de la cita
/**
 * @returns {Promise<Object>} quote information
 */
const fetchQuote = async () => {
    const response = await fetch(`https://api.breakingbadquotes.xyz/v1/quotes`);
    const data = await response.json();

    console.log(data[0]);
    return data[0];
};


// TODO: Implementar la función BreakingBadApp que recibe un elemento y renderiza una cita de Breaking Bad
/**
 *
 * @param {HTMLDivElement} element
 */
export const BreakingBadApp = async (element) => {
    //* Actualiza el título de la página
    document.querySelector('#app-title').innerHTML = 'Breaking Bad App';

    // * Actualiza el contenido del elemento
    element.innerHTML = 'Loading...';

    // * Crea los elementos del componente
    const quoteLabel = document.createElement('blockquote');
    const authorLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Next Quote';

    // * Función que recibe la información de la cita y la renderiza en el elemento correspondiente
    const renderQuote = (data) => {
        quoteLabel.innerText = data.quote;
        authorLabel.innerText = data.author;
        element.replaceChildren(quoteLabel, authorLabel, nextQuoteButton);
    };

    // * Evento que se dispara al hacer click en el botón de siguiente cita
    nextQuoteButton.addEventListener('click', async () => {
        element.innerText = 'Loading...';
        const quote = await fetchQuote();
        renderQuote(quote);
    });

    // * Renderiza la primera cita
    fetchQuote().then(renderQuote);
};
