const elMayor = (a, b) => (a > b ? a : b);
const tieneMembresia = (miembro) => (miembro ? '2 Dólares' : '10 Dólares');

console.log(elMayor(20, 15));
console.log(tieneMembresia(true));

const amigo = true;
const amigosArr = ['Peter', 'Tony', 'Dr. Strange', amigo ? 'Thor' : 'Loki'];
console.log(amigosArr);

const nota = 65;
const grado =
  nota >= 95
    ? 'A+'
    : nota >= 85
    ? 'A'
    : nota >= 75
    ? 'B'
    : nota >= 65
    ? 'C'
    : nota >= 60
    ? 'D'
    : 'F';
console.log({ nota, grado });
