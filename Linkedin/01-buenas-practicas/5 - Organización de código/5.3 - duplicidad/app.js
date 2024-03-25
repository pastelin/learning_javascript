let cuenta = 2 + 3;

let cuentaNueva = 20 + 45;

let totalFinal = cuenta + cuentaNueva;

console.log(totalFinal);

function suma(datoA, datoB) {
    let resultado = datoA + datoB;
    return resultado;
}

suma(2, 3);

let cuentaFinal = suma(suma(2, 3), suma(20, 45));

//suma(5, 65)
console.log(cuentaFinal);
