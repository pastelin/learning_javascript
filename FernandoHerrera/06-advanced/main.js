import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { callbacksComponent } from './src/concepts/02-callbacks';
import { promiseComponent } from './src/concepts/05-promises';
import { asyncComponent } from './src/concepts/09-async';
import { asyncErrorComponent } from './src/concepts/10-async-errors';
import { forAwaitComponent } from './src/concepts/14-for-await';
import { callbacksErrorsComponent } from './src/concepts/03-callbacks-error';
import { promiseAllComponent } from './src/concepts/07-promises-all';
import { promiseRaceComponent } from './src/concepts/08-promise-race';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
    </div>
  </div>
`;

const element = document.querySelector('.card');

// environmentsComponent(element);
// callbacksComponent(element);
// callbacksErrorsComponent(element);
// promiseComponent(element);
// promiseAllComponent(element);
// promiseRaceComponent(element);
asyncComponent(element);
// asyncErrorComponent(element); 
// forAwaitComponent(element);