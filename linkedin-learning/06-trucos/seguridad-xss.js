// Cómo evitar el XSS: Cross-Site Scripting

// Nunca utilizar eval()

let url_string = window.location.href;
let url = new URL(url_string);
let c = url.searchParams.get('param');

// Sanitizar parámetros
DOMPurify.sanitize(c);

function init() {
    document.getElementById('btn').addEventListener('click', (e) => {
        let comentario = document.getElementById(
            'exampleFormControlTextarea1'
        ).value;
        let div = document.createElement('div');

        // No:
        div.innerHTML = comentario;

        // Sí:
        div.textContent = comentario;

        // Sí:
        div.innerHTML = DOMPurify.sanitize(comentario);
    });
}

window.onload = init;
