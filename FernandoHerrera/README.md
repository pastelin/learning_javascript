## Historia de JavaScript

JS es un lenguaje de programación interpretado.

Algunos podrían pensar que Java y JS son lo mismo pero lo cierto es que son dos cosas totalmente diferentes, son dos lenguajes de programación diferentes, funcionan diferente, se ejecutan de manera diferente, practicamente NO SON LO MISMO.

#
#

## Hola Mundo en JavaScript

El Hola Mundo es la aplicación más sencilla que podemos construir en un lenguaje de programación

### 01. Desde la consola del navegador

``` console.log('Hola Mundo') ```

El **;** es opcional pero se recomienda siempre usarlo para terminar una instrucción.

El console.log imprime en consola lo que se encuentre dentro de las comillas

**undefined, más adelante lo veremos, ya que todas las funciones en JS siempre tienen un return.**

### 02. Desde una terminal integrada

1. Validar que se tenga instalado la versión de node con **node --version**
2. Ejecutar en la terminal el comando **node** y entramos en un modo edición
3. Ejecutamos ``` console.log('Hola Mundo') ``` y obtenemos la misma respuesta que en el navegador

### 03. Desde un archivo JS

1. Crear archivo app.js
2. Colocar ``` console.log('Hola Mundo') ```
3. Abrir la terminal del IDE **Terminal -> Nueno terminal**
4. Ejecutar **node app.js** y obtenemos la leyenda

### 04. Desde el HTML

1. Crear archivo html
2. Crear estructura base con signo de admiración y tab **!**
3. Dentro del elemento body podemos ejecutar nuestros scripts
4. ``` document.write('Hola Mundo') ```, imprime en el HTML la leyenda
5. ``` console.log('Hola Mundo') ```, muestra la leyenda en la consola del navegador
6. Evitar hasta donde sea posible la ejecución de JS dentro del HTML, debido a que no es bueno mezclar el HTML con JS, porque la idea es que nuestras páginas web sean sencillas y tambien que solo estén enfocadas en el HTML y nuestros archivos de JS solo sean enfocados en el código de JS
7. Importar archivo JS en el HTML ```<script src="app.js"></script>```
8. La importación de los archivos JS se hace al final de la página, justo antes del cierre de la etiqueta body, esto con el fin de que el HTML se renderice antes que comience a cargar el archivo JS

Escribe la frase **Hola Mundo** desde el HTML


## Extensiones

1. LiverServer
2. CodeSnap
3. Error Lens
4. Prettier