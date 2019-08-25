import { createElement } from '../src/elements';

test('create a span, check if its an HTMLSpanElement', () => {
  var el = createElement('span', {
    innerText: 'test'
  });
  expect(el instanceof HTMLSpanElement).toBe(true);
});

test('append children', () => {
  var div = createElement('div');
  var span1 = createElement('span');
  var span2 = createElement('span');

  div.appendChildren([ span1, span2 ]);

  expect(div.children.length).toBe(2);
  expect(div.children[0] instanceof HTMLSpanElement).toBe(true);
});
