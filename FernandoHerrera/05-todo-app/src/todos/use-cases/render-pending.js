import todoStore, { Filters } from "../../store/todo.store";

let element;

/**
 * Función que renderiza el número de tareas pendientes.
 * @param {string} elementId id del elemento HTML donde se renderizará el número de tareas pendientes.
 */
export const renderPending = (elementId) => {
	// * Si el elemento no ha sido definido, se busca en el DOM
	if (!element) {
		element = document.querySelector(elementId);
	}

	// * Si el elemento no existe, se lanza un error
	if (!element) throw new Error(`Element ${elementId} not found`);

	// * Se actualiza el contenido del elemento con el número de tareas pendientes
	element.innerHTML = todoStore.getTodos(Filters.Pending).length;
}