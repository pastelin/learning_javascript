/**
 *
 * @param {HTMLDivElement} element
 */
export const environmentsComponent = (element) => {
    // Imprime en consola las variables de entorno de vite
    console.log(import.meta.env);

    const html = `
		KEY: ${import.meta.env.VITE_API_KEY} <br>
		URL: ${import.meta.env.VITE_BASE_URL}
	`;

    element.innerHTML = html;
};
