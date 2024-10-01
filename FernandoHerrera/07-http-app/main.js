import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { BreakingBadApp } from './src/breakingbad/breaking-bad-app';


// TODO: Eliminar uso de la función counter
// TODO: Hacer más pequeño el logo y titulo
document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 id="app-title">Hello Vite!</h1>
    <div class="card">
      
    </div>
  </div>
`;

// TODO: Obtener el elemento con la clase card
const element = document.querySelector('.card');

// TODO: Importar la función BreakingBadApp y ejecutarla pasando el elemento como argumento
BreakingBadApp(element);
