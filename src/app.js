import { createElement } from './elements';
import './app.css';

var p = createElement('p', {
  className: 'tidbit',
  innerText: 'This application allows the user to increment variables in storage.'
});

document.body.appendChild(p);
