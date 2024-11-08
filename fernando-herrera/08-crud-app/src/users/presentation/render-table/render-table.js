import usersStore from '../../store/users-store';
import { deleteUserById } from '../../use-cases/delete-user-by-id';
import { showModal } from '../render-modal/render-modal';
import './render-table.css';

let table;

const createTable = () => {
    const table = document.createElement('table');
    const tableHeaders = document.createElement('thead');
    tableHeaders.innerHTML = `
		<tr>
			<th>#ID</th>
			<th>Balance</th>
			<th>FirstName</th>
			<th>LastName</th>
			<th>Active</th>
			<th>Actions</th>
		</tr>
	 `;

    const tableBody = document.createElement('tbody');
    table.append(tableHeaders, tableBody);
    return table;
};

/**
 *
 * @param {MouseEvent} event
 */
const tableSelectListener = (event) => {
    const element = event.target.closest('.select-user');
    if (!element) return;

    // const id = element.getAttribute('data-id');
    const id = element.dataset.id;

    showModal(id);
};

/**
 *
 * @param {MouseEvent} event
 */
const tableDeleteListener = async (event) => {
    const element = event.target.closest('.delete-user');
    if (!element) return;

    // const id = element.getAttribute('data-id');
    const id = element.dataset.id;
	try {
		await deleteUserById(id);
		await usersStore.reloadPage();
		document.querySelector('#current-page').innerText = usersStore.getCurrentPage();
		renderTable();
	} catch (error) {
		console.error(error);
	}
};

export const renderTable = (element) => {
    const users = usersStore.getUsers();

    if (!table) {
        table = createTable();
        element.append(table);

        table.addEventListener('click', tableSelectListener);
        table.addEventListener('click', tableDeleteListener);
    }

    let tableHtml = '';
    users.forEach((user) => {
        tableHtml += `
			<tr>
				<th>${user.id}</th>
				<th>${user.balance}</th>
				<th>${user.firstName}</th>
				<th>${user.lastName}</th>
				<th>${user.isActive}</th>
				<th>
					<a href="#/" class="select-user" data-id="${user.id}">Select</a>
					|
					<a href="#/" class="delete-user" data-id="${user.id}">Delete</a>
				</th>
			</tr>
		`;
    });

    table.querySelector('tbody').innerHTML = tableHtml;
};
