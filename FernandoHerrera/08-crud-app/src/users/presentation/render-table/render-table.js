import usersStore from '../../store/users-store';
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

export const renderTable = (element) => {
    const users = usersStore.getUsers();

    if (!table) {
        table = createTable();
        element.append(table);

        // TODO: listeners a la tabla
    }

    let tableHtml = '';
    users.forEach((user) => {
		// console.log(user);
        tableHtml += `
			<tr>
				<th>${user.id}</th>
				<th>${user.balance}</th>
				<th>${user.firstName}</th>
				<th>${user.lastName}</th>
				<th>${user.active}</th>
				<th>
					<a href="#/" data-id="${user.id}">Select</a>
					|
					<a href="#/" data-id="${user.id}">Delete</a>
				</th>
			</tr>
		`;
    });

	table.querySelector('tbody').innerHTML = tableHtml;
};
