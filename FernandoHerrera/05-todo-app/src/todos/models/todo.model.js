import { v4 as uuid } from 'uuid';

/**
 * Clase que será la plantilla para crear las tareas.
 * @class Todo
 */
export class Todo {
    /**
     *
     * @param {String} description
     */
    constructor(description) {
        //* uuid() es una función que genera un identificador único
        this.id = uuid();
        this.description = description;
        this.done = false;
        this.createdAt = new Date();
    }
}
