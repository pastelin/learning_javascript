let tienda = {
    nombre: 'Tienda las 4 esquinas',
    calcular: function (costo1, costo2) {
        return costo1 + costo2;
    },
    saludar: function () {
        let mensaje = 'Hola ';
        return mensaje;
    },
};

let btnSaludar = document.getElementById('btnSaludar');

btnSaludar.addEventListener('click', function () {
    console.log(tienda.saludar());
});
