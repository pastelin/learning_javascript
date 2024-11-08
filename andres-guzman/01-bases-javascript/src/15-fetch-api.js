const httpClient = fetch('https://jsonplaceholder.typicode.com/users');

// Ejemplo 01
// httpClient.then((response) => {
// 	response.json().then((data) => {
// 		console.log(data);
// 	});
// });

// Ejemplo 02
httpClient.then((response) => response.json()).then(console.log);
