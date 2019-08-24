export const createElement = (tag, options) => {
  var el = document.createElement(tag);

  el.className = options.className || "";
  el.innerText = options.innerText || null;
  el.onclick = options.onclick || null;

  return el;
}
