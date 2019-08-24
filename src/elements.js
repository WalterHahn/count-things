export const createElement = (tag, options) => {
  var el = document.createElement(tag);
  for (var o in options) {
    switch (o) {
      case 'className':
        el.className = options[o];
        break;
      case 'innerText':
        el.innerText = options[o];
        break;
    }
  }
  return el;
}
