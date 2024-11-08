import './style.css';
import { App } from './src/todos/app';
import todoStore from './src/store/todo.store';

/*
	* Archivo principal de la aplicación.
	* Se encarga de inicializar la aplicación y el store.
*/

// * Inicialización de la iformación utilizando localStorage
todoStore.loadStore();

App('#app');	
