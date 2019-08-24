import { createElement } from './elements';
import './app.css';

var h3 = createElement('h2', {
  innerText: 'by Walter. F Hahn'
});

var p = createElement('p', {
  className: 'tidbit',
  innerText: 'This application allows the user to increment variables in storage.',
  onclick: (e) => {
    e.target.innerText ='Ouch!';
  }
});

document.body.appendChild(h3);
document.body.appendChild(p);
