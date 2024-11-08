let persona = {
	nombre: "Sergio",
	email: "sergiobritor@gmail.com",
	twitter: "yacafx",
	saludar: function(){
		return "Hola mundo"
	}
}

let dato = "";

for (dato in persona){
	console.log(dato, persona[dato]);
}