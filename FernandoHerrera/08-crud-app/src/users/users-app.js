import { renderButtons } from "./presentation/render-buttons/render-buttons";
import { renderTable } from "./presentation/render-table/render-table";
import usersStore from "./store/users-store";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UsersApp = async (element) => {

	element.innerText = 'Loading...';
	await usersStore.loadNextPage();
	element.innerText = '';

	renderTable(element);
	renderButtons(element);

	console.log(usersStore.getUsers());

}