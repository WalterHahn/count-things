import { Counters } from './counters';
import { createElement } from './elements';
import './app.css';

var counters = new Counters();

var h1 = createElement('h1', { innerText: 'count-things' });
var h2 = createElement('h2', { innerText: 'by Walter F. Hahn' });

var appContainer  = createElement('div', { id: "appContainer" });
var formContainer = createElement('div', { id: "formContainer" });

var nameInput = createElement('input', { type: "text" });
var addCounterBtn = createElement('button', {
  innerText: "Add",
  onclick: (e) => {
    var name = nameInput.value;
    if (name.length)
      counters.add(nameInput.value);
    nameInput.value = "";
  }
});

var countersContainer = createElement('div', { id: "countersContainer" });

formContainer.appendChildren([ nameInput, addCounterBtn ])

appContainer.appendChildren([
  h1,
  h2,
  formContainer,
  countersContainer
]);

document.body.appendChild(appContainer);

counters.setContainer(countersContainer);
counters.render();
