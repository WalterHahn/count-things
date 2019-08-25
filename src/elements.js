export const createElement = (tag, options = {}) => {
  var el = document.createElement(tag);

  for (var o in options)
    el[o] = options[o];

  return el;
}
