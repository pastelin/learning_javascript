/*

* Switch se utiliza para ejecutar diferentes bloques de código basados en el valor de una expresión
* Es una alternativa más limpia y legible en lugar de múltiples sentencias if-else

*/

// TODO:  1. Sintaxis básica de switch
/*
switch (expresion) {
  case valor1:
    Bloque de código si expresion === valor1
    break;
  case valor2:
    Bloque de código si expresion === valor2
    break;
  Puedes tener tantos casos como necesites
  default:
  Bloque de código si ninguno de los casos anteriores coincide
}

*/

// TODO: 2. Ejemplo de switch con los días de la semana
let edad = 25;

switch (true) {
    case edad < 13:
        console.log('Eres un niño');
        break;
    case edad >= 13 && edad < 20:
        console.log('Eres un adolescente');
        break;
    case edad >= 20 && edad < 65:
        console.log('Eres un adulto');
        break;
    default:
        console.log('Eres un adulto mayor');
        break;
}
