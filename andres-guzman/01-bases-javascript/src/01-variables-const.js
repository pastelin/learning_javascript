let firstname = 'Pepe'; // Contexto global
firstname = 'Juan';

const lastname = 'Doe';
// lastname = 'Roe'; // No se puede modificar el valor de una constante

const condicion = true;

if (condicion) {
    // let name = 'Jhon'; // Contexto de bloque, permite redefinir la variable o actualizar su valor
    const lastname = 'Ale'; // Contexto de bloque, permite redefinir la constante, pero no permite modificar su valor
    console.log(lastname);
}

console.log(`Hola Mundo' ${firstname} ${lastname}`); 