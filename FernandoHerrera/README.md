## Qué es JS?

JS es un lenguaje de programación interpretado.

Algunos podrían pensar que Java y JS son lo mismo pero lo cierto es que son dos cosas totalmente diferentes, son dos lenguajes de programación diferentes, funcionan diferente, se ejecutan de manera diferente, practicamente NO SON LO MISMO.

#
#

## Desarrollar nuestro Hola Mundo en JavaScript

El Hola Mundo es la aplicación más sencilla que podemos construir en un lenguaje de programación

### 01. Desde la consola del navegador


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


================================================================================================================0
# Creacion de proyecto con NODE

## NODE
Es un entorno de ejecución de JavaScript del lado del servidor
Lo que nos permite ejecutar código JavaScript fuera del navegador.

### Caracteristicas Principales
1. Node.js está construido sobre el motor V8 de Google, que es el mismo motor que utiliza el navegador Chrome para ejecutar JavaScript
2. NPM (Node Package Manager): Es un gestor de paquetes que permite instalar, gestionar bibliotecas y dependencias de JavaScript fácilmente.


## VITE
Vite es una herramienta de construcción y desarrollo rápido para proyectos web modernos

### Caracteristicas principales
1. Desarrollo Rápido: Vite utiliza un servidor de desarrollo que proporciona recarga en caliente (hot module replacement), lo que nos permite ver los cambios en tiempo real sin necesidad de recargar toda la página.

2. Configuración Sencilla: Vite tiene una configuración mínima por defecto.


## Instalación de Vite 
1. Abrir cdm en la carpeta raiz donde crearemos el proyecto
2. Validar que se tenga node instalado con node --version
3. crear proyecto con **npm create vite**
	a. colocar nombre de proyecto **01-app-vite**
	b. elegir vanilla que es JS sin frameworks
	c. elegir JS
4. acceder al proyecto
5. instalar los paquetes con npm install
6. ejecutar proyecto con npm run dev

## Explicar Estructura
* Los módulos permiten dividir el código en partes más pequeñas y manejables, facilitando la reutilización y el mantenimiento.

## Deployar localmente


## Construir

## Deployar con Netlify
https://www.netlify.com/

================================================================================================

# Aplicación TODO

## Instalar paquetes

## Explicar version productiva
https://todo-pastelin.netlify.app/

## Explicar estructura

## Resolver dos errores

#### Mapas de origenes
* Mapas de Orígenes: Permiten depurar el código fuente original en lugar del código transpilado o empaquetado.


* Usar la anulación de archivos
* Borrar la anulación de archivos

## Dejar la tarea


## Tareas

1. Resolver dos errores de la aplicación.
2. Modificar colores o diseño de aplicación.
3. Insertar las tareas al inicio y no al final
4. Construir version productica con VITE.
5. Deployar aplicación con Netlify





### Activar que al ejecutar **code .** se abra vsc
1. Ir a paleta de comandos ctrl + shift + p
2. Teclear code y elegir : terminal, crear un nuevo terminal




06-api => breakingbad-app

https://breakingbadquotes.xyz/

https://breaking-bad-app01.netlify.app/



¿Qué es una API (Application Programming Interfaces)? 

Es una interfaz que permite que una aplicación interactúe con otra

PUT: Propósito: Actualizar un recurso completo.
PATCH: Propósito: Actualizar parcialmente un recurso.