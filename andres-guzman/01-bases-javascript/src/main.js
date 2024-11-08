// httpClient.then((response) => response.json()).then(console.log);

const findAllUsers = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    
    const ul = document.createElement('ul');


    users.forEach(user => {
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.append(li);
    });
    
    document.querySelector('#root').append(ul);
};

findAllUsers();

