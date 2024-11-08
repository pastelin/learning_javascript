import todoStore, { Filters } from '../store/todo.store';
import html from './app.html?raw';
import { renderTodos, renderPending } from './use-cases';

/*
 * Archivo que se encarga de la lógica de la aplicación.
 */

/**
 * Objeto con los identificadores de los elementos HTML.
 */
const ElementIDs = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    ClearCompleted: '.clear-completed',
    TodoFilters: '.filters',
    PendingCountLabel: '#pending-count',
};

/**
 * Función que renderiza la aplicación en el elemento 'div' con el id proporcionado.
 * @param {String} elementId
 */
export const App = (elementId) => {
    /**
     * Función que actualiza el contador de tareas pendientes.
     */
    const updatePendingCount = () => {
        renderPending(ElementIDs.PendingCountLabel);
    };

    /**
     * Función que renderiza una lista de tareas en el elemento ul con la clase 'todo-list' del archivo app.html
     */
    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());

        renderTodos(ElementIDs.TodoList, todos);
        updatePendingCount();
    };

    /**
     * Función autoejecutable que se encarga de renderizar la aplicación en el elemento con el id 'app' del archivo index.html.
     */
    (() => {
        // * Crea un elemento div
        const app = document.createElement('div');

        // * Agrega la clase 'container' al nodo app
        app.classList.add('container');

        // * Inserta el contenido del archivo app.html en el nodo app
        app.innerHTML = html;

        // * Inserta nodo app al final del elemento con el id proporcionado
        document.querySelector(elementId).append(app);

        // * Renderiza la lista de tareas
        displayTodos();
    })();

    /*
     * Almacena en una constante el primer elemento del documento que coincida con un selector CSS o id especificado
     */

    /**
     * Obtiene la referencia del elemento input con el id 'new-todo-input'
     */
    const newDecriptionInput = document.querySelector(ElementIDs.NewTodoInput);

    /**
     * Obtiene la referencia del elemento ul con la clase 'todo-list'
     */
    const todoListUl = document.querySelector(ElementIDs.TodoList);

    /**
     * Obtiene la referencia del elemento button con la clase 'clear-completed'
     */
    const cleatCompletedButton = document.querySelector(
        ElementIDs.ClearCompleted
    );

    /**
     * Obtiene la referencia de todos los elementos a con la clase 'filtro'
     */
    const filtersUl = document.querySelector(ElementIDs.TodoFilters);

    /*
    * Registro de eventos a referencia de elementos HTML, para realizar acciones en la aplicación.
     
    * event: contiene información sobre el evento que se ha disparado
    * event.key: Devuelve el valor de la tecla presionada.
    * event.target: El elemento que ha disparado el evento.
    * event.target.value: Devuelve el valor del elemento que ha disparado el evento.
    * event.target.closest(selector): Devuelve el ancestro más cercano que cumple con el selector proporcionado.
    * event.target.getAttribute(name): Devuelve el valor de un atributo de un elemento.
    * event.target.className: Devuelve el valor del atributo class de un elemento.
    * event.target.tagName: Devuelve el nombre del elemento HTML.
    * event.target.classList.add(class): Agrega una clase a un elemento.
    * event.target.textContent: Devuelve el texto contenido en un elemento.
    * event.classList.remove(class): Elimina una clase de un elemento.
    */

    // * Evento que se dispara cuando una tecla es liberada, "Agregar una nueva tarea"
    newDecriptionInput.addEventListener('keyup', (event) => {
        // console.log(event.keyCode);

        //* Mientras que la tecla presionada NO sea Enter no hará nada
        if (event.key !== 'Enter') return;

        //* Si el valor del input está vacío NO hará nada
        if (event.target.value.trim().length === 0) return;

        //* Obtienen el valor del input y lo almacena en arreglo de tareas
        todoStore.addTodo(event.target.value);

        //* Limpia el valor del input cada vez que se agrega una tarea
        event.target.value = '';

        //* Renderiza la lista de tareas
        displayTodos();
    });

    // * Evento que se dispara cuando se hace click en un elemento de la lista de tareas, "Toggle de una tarea"
    todoListUl.addEventListener('click', (event) => {
        //* Almacena el elemento más cercano con el atributo data-id
        // console.log(event.target.closest('[data-id]'));
        const element = event.target.closest('[data-id]');

        // * Obtiene el valor del atributo data-id del elemento y lo manda a la función toggleTodo
        todoStore.toggleTodo(element.getAttribute('data-id'));

        //* Renderiza la lista de tareas
        displayTodos();
    });

    // * Evento que se dispara cuando se hace click en el botón de eliminar una tarea, "Eliminar una tarea"
    todoListUl.addEventListener('click', (event) => {
        // * Verifica si el elemento que disparó el evento tiene la clase 'destroy' y es un BUTTON
        const isDestroyElement = event.target.className === 'destroy';
        const isButtonElement = event.target.tagName === 'BUTTON';

        // * Si se cumple la condición elimina la tarea
        if (isDestroyElement && isButtonElement) {
            // * Almacena el elemento más cercano con el atributo data-id
            const element = event.target.closest('[data-id]');

            // * Obtiene el valor del atributo data-id del elemento y lo manda a la función deleteTodo
            todoStore.deleteTodo(element.getAttribute('data-id'));

            // * Renderiza la lista de tareas
            displayTodos();
        }
    });

    // * Evento que se dispara cuando se hace click en el botón de eliminar tareas completadas, "Eliminar las tareas completadas"
    cleatCompletedButton.addEventListener('click', () => {
        // * Llama a la función deleteCompleted
        todoStore.deleteCompleted();

        // * Renderiza la lista de tareas
        displayTodos();
    });

    // * Evento que se dispara cuando se hace click en un filtro, "Filtrar tareas"
    filtersUl.addEventListener('click', (event) => {
        // * Si el nombre del elemento es diferente de 'A' no hará nada
        if (event.target.tagName !== 'A') return;

        // console.log(event.target);

        // * Llama a la función resetClassSelected
        resetClassSelected();

        // * Agrega la clase 'selected' al elemento actual
        event.target.classList.add('selected');

        // * Realiza un switch para determinar el filtro a aplicar
        switch (event.target.textContent) {
            case 'Todos':
                todoStore.setFilter(Filters.All);
                break;
            case 'Completados':
                todoStore.setFilter(Filters.Completed);
                break;
            case 'Pendientes':
                todoStore.setFilter(Filters.Pending);
                break;
            default:
                throw new Error('Filter not implemented');
        }

        // * Renderiza la lista de tareas
        displayTodos();
    });

    /**
     * Función que elimina la clase 'selected' de todos los elementos 'a' con la clase 'filtro'
     */
    const resetClassSelected = () => {
        document.querySelectorAll('.filtro').forEach((element) => {
            element.classList.remove('selected');
        });
    };
};
