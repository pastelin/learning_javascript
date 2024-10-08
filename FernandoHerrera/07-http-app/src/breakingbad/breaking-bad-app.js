// * 2. hace una petición a la API de Breaking Bad Quotes y retornar una promesa con la información de la cita
/**
 * @returns {Promise<Object>} quote information
 */
const fetchQuote = async () => {
    try {
        // * fetch: es una API moderna integrada en los navegadores que permite hacer peticiones HTTP de forma asíncrona.
        const response = await fetch(
            'https://api.breakingbadquotes.xyz/v1/quotes'
        );

        console.log(response);

        // * Verifica si la respuesta es exitosa con el response.ok
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // * json(): Es un método que convierte el cuerpo de una respuesta HTTP en un objeto JavaScript.
        const data = await response.json();

        // * Retorna el primer elemento
        return data[0];
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);

        // * Retorn un objeto con la frase y el autor por defecto
        return { quote: 'No quote available', author: 'Unknown' };
    }
};

// TODO: Implementar la función BreakingBadApp que recibe un elemento y renderiza una cita de Breaking Bad
/**
 *
 * @param {HTMLDivElement} element
 */
export const BreakingBadApp = async (element) => {
    // * 1. Actualiza el contenido del elemento
    element.innerHTML = 'Loading...';

    // * 5. Crea elementos para dar forma a la frase y al autor
    const quoteLabel = document.createElement('blockquote');
    const authorLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Next Quote';

    // * 6. Función que recibe la información de la cita y la renderiza
    const renderQuote = (data) => {
        quoteLabel.innerText = data.quote;
        authorLabel.innerText = data.author;
        // * Reemplaza todos los elementos hijos del elemento '<div class="card">' con nuevos elementos o nodos
        element.replaceChildren(quoteLabel, authorLabel, nextQuoteButton);
    };

    // * 3. Llama a la función fetchQuote y renderiza el resultado
    fetchQuote().then(renderQuote);

    // * 7. Evento que se dispara al hacer click en el botón de siguiente cita
    nextQuoteButton.addEventListener('click', async () => {
        element.innerText = 'Loading...';
        const quote = await fetchQuote();
        renderQuote(quote);
    });
};
