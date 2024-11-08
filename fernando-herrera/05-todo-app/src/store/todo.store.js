import { Todo } from '../todos/models/todo.model';

/*
 * Archivo que se encarga de manejar el estado de la aplicación.
 */

/**
 * Objeto que contiene los filtros disponibles para mostrar las tareas.
 */
export const Filters = {
    All: 'all',
    Completed: 'completed',
    Pending: 'pending',
};

/**
 * Objeto que contiene el estado de la aplicación.
 */
const state = {
    todos: [
        new Todo('Renderizar la Aplicación'),
        new Todo('Renderizar la lista de tareas'),
        new Todo('Agregar una nueva tarea'),
        new Todo('Cambiar el estado de una tarea a completado o pendiente'),
        new Todo('Eliminar una tarea'),
        new Todo('Eliminar las tareas completadas'),
        new Todo('Renderizar las tareas de acuerdo al filtro seleccionado'),
        new Todo('Mostrar el contador de tareas pendientes'),
        new Todo('Almacenar el estado de la aplicación en el localStorage'),
    ],
    filter: Filters.All,
};

/**
 * Método que obtiene las tareas de acuerdo al filtro seleccionado.
 * @param {string} filter si no se proporcione el valor por defecto es 'all'.
 * @returns Copia del arreglo de tareas o una excepción si el filtro no es válido.
 */
const getTodos = (filter = Filters.All) => {
    switch (filter) {
        case Filters.All:
            // * Se retorna una copia del arreglo de tareas
            return [...state.todos];
        case Filters.Completed:
            // * Se retorna una copia del arreglo de tareascompletadas
            return state.todos.filter((todo) => todo.done);
        case Filters.Pending:
            // * Se retorna una copia del arreglo de tareas pendientes
            return state.todos.filter((todo) => !todo.done);

        default:
            throw new Error(`Option ${filter} is not valid`);
    }
};

/**
 * Método que crea una nueva instancia de la clase Todo y la agrega al arreglo de tareas 'todos[]'.
 * @param {string} description descripción de la tarea.
 */
const addTodo = (description) => {
    // * Si no se proporciona una descripción, se lanza un error
    if (!description) throw new Error('Description is required');

    // * Se agrega una nueva tarea al arreglo de tareas
    state.todos.unshift(new Todo(description));

    // * Se guarda el estado de la aplicación en el localStorage
    saveStateToLocalStorage();
};

/**
 * Función que cambia el estado de la tarea a completado o pendiente de acuerdo al id proporcionado.
 * @param {string} todoId id de la tarea a cambiar de estado.
 */
const toggleTodo = (todoId) => {
    // * Recorre el arreglo de tareas y cambia el estado de la tarea con el id proporcionado
    // * map: es un método que crea un nuevo arreglo con los cambios aplicados a cada elemento del arreglo.
    state.todos = state.todos.map((todo) => {
        // * Si el id de la tarea es igual al id proporcionado, cambia el estado de la tarea
        if (todo.id === todoId) {
            todo.done = !todo.done;
        }
        return todo;
    });

    // * Se guarda el estado de la aplicación en el localStorage
    saveStateToLocalStorage();
};

/**
 * Función que elimina una tarea del arreglo 'todos[]' de acuerdo al id proporcionado.
 * @param {string} todoId id de la tarea a eliminar.
 * @returns arreglo todos[] sin la tarea eliminada.
 */
const deleteTodo = (todoId) => {
    // * Filtra el arreglo de tareas y retorna todos los elementos que no tengan el id proporcionado
    state.todos = state.todos.filter((todo) => todo.id !== todoId);

    // * Se guarda el estado de la aplicación en el localStorage
    saveStateToLocalStorage();
};

/**
 * Función que elimina las tareas completadas del arreglo 'todos[]'
 * @returns arreglo todos[] sin las tareas completadas.
 */
const deleteCompleted = () => {
    // * Filtra el arreglo de tareas y retorna todos los elementos que no estén completadas
    state.todos = state.todos.filter((todo) => todo.done === false);

    // * Se guarda el estado de la aplicación en el localStorage
    saveStateToLocalStorage();
};

/**
 * Función que cambia el filtro de las tareas.
 * @param {string} newFilter si no se proporciona el valor por defecto es 'all'.
 */
const setFilter = (newFilter = Filters.All) => {

    // * Actualiza el filtro actual de las tareas
    state.filter = newFilter;

    // * Se guarda el estado de la aplicación en el localStorage
    saveStateToLocalStorage();
};

/**
 * Función que obtiene el filtro actual de las tareas.
 * @returns filtro actual de las tareas.
 */
const getCurrentFilter = () => {
    return state.filter;
};

/**
 * Función que carga el estado de la aplicación desde el localStorage.
 */
const loadStore = () => {
    // * Si no existe el item en el localStorage no hace nada
    if (!localStorage.getItem('state')) return;

    // * Transforma el objeto JSON en un objeto de JavaScript y obtiene las tareas y el filtro del objeto
    const { todos = [], filter = Filters.All } = JSON.parse(
        localStorage.getItem('state')
    );

    // * Actualiza el arreglo de tareas con las tareas obtenidas del localStorage
    state.todos = todos;

    // * Actualiza el filtro de las tareas con el filtro obtenido del localStorage
    state.filter = filter;
};

/**
 * Método que guarda el estado de la aplicación en el localStorage.
 * @returns estado de la aplicación guardado en el localStorage.
 */
const saveStateToLocalStorage = () => {
    // * Transforma el objeto de JavaScript en un objeto JSON y lo guarda en el localStorage
    localStorage.setItem('state', JSON.stringify(state));
};


// * Se exportan las funciones para ser utilizadas en otros archivos
export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    loadStore,
    setFilter,
    toggleTodo,
};
