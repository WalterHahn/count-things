import { Counters } from '../src/counters';
import store from '../src/store';

test('add counter', () => {
  var counters = new Counters();
  counters.add('test');
  expect(counters.getCount()).toBe(1);
  store.clr();
});

test('delete counter', () => {
  var counters = new Counters();
  counters.add('test');
  expect(counters.getCount()).toBe(1);
  counters.del('test');
  expect(counters.getCount()).toBe(0);
  store.clr();
});

test('delete all counters', () => {
  var counters = new Counters();
  counters.add('test1');
  counters.add('test2');
  expect(counters.getCount()).toBe(2);
  counters.deleteAll();
  expect(counters.getCount()).toBe(0);
  store.clr();
})

test('get container', () => {
  var counters = new Counters();
  counters.add('test');
  expect(counters.get('test').name).toBe('test');
  expect(counters.getAll()['test'].name).toBe('test');
  store.clr();
})

test('render, save, and load counter', () => {
  var div = document.createElement('div');
  var counters1 = new Counters();
  counters1.setContainer(div);
  counters1.add('test');
  expect(div.children.length).toBe(1);
  var counters2 = new Counters();
  expect(counters2.getCount()).toBe(1);
  store.clr();
});

test('increment and decrement counter', () => {
  var div = document.createElement('div');
  var counters = new Counters();
  counters.setContainer(div);
  counters.add('test');
  var counter = counters.get('test');
  expect(counter.value).toBe(0);
  counter.incr(1);
  expect(counter.value).toBe(1);
  counter.decr(1);
  expect(counter.value).toBe(0);
  store.clr();
});

test('random color', () => {
  var counters = new Counters();
  counters.add('test');
  var counter = counters.get('test');
  const color = counter.randomColor();
  expect(isNaN(color[0])).toBe(false);
  expect(isNaN(color[1])).toBe(false);
  expect(isNaN(color[2])).toBe(false);
});
