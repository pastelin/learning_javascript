import { createTodoHtml } from '.';

let element;

/**
 * Función que renderiza la lista de tareas.
 * @param {String} elementId id del elemento HTML donde se renderizará la lista de tareas
 * @param {Todo} todos arreglo de tareas a renderizar
 */
export const renderTodos = (elementId, todos = []) => {
    // * Si el elemento no ha sido definido, se busca en el DOM	
    if (!element) {
        element = document.querySelector(elementId);
    }

    // * Si el elemento no existe, se lanza un error
    if (!element) throw new Error(`Element ${elementId} not found`);

    // * Se limpia el contenido para evitar duplicados en la renderización
    element.innerHTML = '';

    // * Recorre cada elemento del arreglo de tareas y lo renderiza
    todos.forEach((todo) => {
        element.append(createTodoHtml(todo));
    });
};
