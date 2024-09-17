/*

* Switch se utiliza para ejecutar diferentes bloques de código basados en el valor de una expresión
* Es una alternativa más limpia y legible en lugar de múltiples sentencias if-else

*/

// TODO:  1. Sintaxis básica de switch
switch (expresion) {
  case valor1:
    // Bloque de código si expresion === valor1
    break;
  case valor2:
    // Bloque de código si expresion === valor2
    break;
  // Puedes tener tantos casos como necesites
  default:
  // Bloque de código si ninguno de los casos anteriores coincide
}


// TODO: 2. Ejemplo de switch con los días de la semana
const dia = 0; // 0: domingo, 1: lunes,

switch (dia) {
  case 0:
    console.log('Domingo');
    break;
  case 1:
    console.log('Lunes');
    break;
  case 2:
    console.log('Martes');
    break;
  case 3:
    console.log('Miércoles');
    break;
  case 4:
    console.log('Jueves');
    break;
  case 5:
    console.log('Viernes');
    break;
  case 6:
    console.log('Sábado');
    break;
  default:
    console.log('No es un día de la semana');
}
