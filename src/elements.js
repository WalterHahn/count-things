export const createElement = (tag, options = {}) => {
  var el = document.createElement(tag);

  for (var o in options)
    el[o] = options[o];

  el.appendChildren = (elements) => {
    for (var i in elements)
      el.appendChild(elements[i]);
  }

  return el;
}
