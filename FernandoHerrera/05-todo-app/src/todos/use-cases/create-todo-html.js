import { Todo } from '../models/todo.model';

/*
 * document: es un objeto que representa el modelo del documento HTML.
 * document.createElement: es un método que crea un elemento HTML especificado por tagName.
 * element.innerHTML: es una propiedad que define o devuelve el contenido HTML de un elemento.
 * element.setAttribute: es un método que agrega el atributo especificado a un elemento y le da el valor especificado.
 * element.classList.add: es un método que agrega una o más clases a un elemento.
 */

/**
 * Función que cren un elemento <li> con la tarea proporcionada.
 * @param {Todo} todo
 * @returns {HTMLElement}
 */
export const createTodoHtml = (todo) => {

    // * Si no se proporciona una tarea, se lanza un error
    if (!todo) throw new Error('Todo is required');

    // * Se crea un elemento <li>
    const liElement = document.createElement('li');

    // * Se crea un template HTML con la tarea proporcionada
    const html = `
        <div class="view">
            <div>
                <input class="toggle" type="checkbox" ${
                    todo.done ? 'checked' : ''
                }>
                <label>${todo.description}</label>
            </div>
            <button class="destroy"></button>
        </div>
	`;

    // * Se agrega el template HTML al elemento <li>
    liElement.innerHTML = html;

    // * Se agrega el atributo 'data-id' al elemento <li> con el id de la tarea
    liElement.setAttribute('data-id', todo.id);

    // * Si la tarea está completada, se agrega la clase 'completed' al elemento <li>
    if (todo.done) {
        liElement.classList.add('completed');
    }

    // * Se retorna el elemento <li> con la tarea proporcionada
    return liElement;
};
