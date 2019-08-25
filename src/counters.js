import { createElement } from './elements';
import store from './store';

export class Counters {
  constructor() {
    var data = store.get('counters')
      ? JSON.parse(store.get('counters'))
      : {};

    this.counters = {};

    for (var key in data)
      this.counters[key] = new Counter(data[key], this);
  }

  update() {
    this.save();
    this.render();
  }

  setContainer(el) {
    this.container = el;
  }

  add(name) {
    this.counters[name] = new Counter({ name, value: 0 }, this);
    this.update();
  }

  getCount() {
    return Object.keys(this.counters).length;
  }

  getAll() {
    return this.counters;
  }

  get(name) {
    return this.counters[name];
  }

  save() {
    var data = {};
    for (var name in this.counters)
      data[name] = this.counters[name].getData();
    store.set('counters', JSON.stringify(data));
  }

  deleteAll() {
    this.counters = {};
    this.update();
  }

  del(name) {
    delete this.counters[name];
    this.update();
  }

  render() {
    if ( ! this.container)
      return;
    this.container.innerHTML = "";
    for (var i in this.counters)
      this.container.appendChild(this.counters[i].render());
  }
}

class Counter {
  constructor(config, parent) {
    this.name = config.name;
    this.value = parseInt(config.value) || 0;
    this.color = config.color || this.randomColor()
    this.parent = parent;
  }

  randomColor() {
    var high = 200;
    var low = 32;
    return [
      Math.floor(Math.random() * (high - low)) + low,
      Math.floor(Math.random() * (high - low)) + low,
      Math.floor(Math.random() * (high - low)) + low
    ]
  }

  getData() {
    return {
      name: this.name,
      value: this.value,
      color: this.color
    }
  }

  incr(value) {
    this.value += value;
    this.parent.update();
  }

  decr(value) {
    this.value -= value;
    this.parent.update();
  }

  render() {
    const container = createElement('div', {
      className: 'counter',
      style: `background-color: rgb(${this.color.join(',')});`
    });

    const left = createElement('div', { className: "left" });
    const right = createElement('div', { className: "right" });

    const delBtn = createElement('span', {
      className: "delBtn",
      innerText: "🗑️",
      onclick: () => { this.parent.del(this.name) }
    })

    const name = createElement('span', {
      className: 'name',
      innerText: this.name
    });

    const value = createElement('span', {
      className: 'value',
      innerText: this.value + ""
    });

    const incrBtn = createElement('button', {
      innerText: '+',
      onclick: () => { this.incr(1) }
    });

    const decrBtn = createElement('button', {
      innerText: '-',
      onclick: () => { this.decr(1) }
    });

    left.appendChild(delBtn);
    left.appendChild(name);

    right.appendChild(value);
    right.appendChild(incrBtn);
    right.appendChild(decrBtn);

    container.appendChild(left);
    container.appendChild(right);

    return container;
  }
}
