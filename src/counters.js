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

  setContainer(el) {
    this.container = el;
  }

  add(name) {
    this.counters[name] = new Counter({ name, value: 0 }, this);
    this.save();
    this.render();
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
    this.save();
    this.render();
  }

  del(name) {
    delete this.counters[name];
    this.save();
    this.render();
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
    this.update();
  }

  decr(value) {
    this.value -= value;
    this.update();
  }

  update() {
    this.valueElement.innerText = this.value;
    this.parent.save();
  }

  assignRandomColor(e) {
    this.color = this.randomColor();
    if (e.target.classList.contains('counter')) {
      e.target.style = `background-color: rgb(${this.color.join(',')});`;
      this.parent.save();
    }
  }

  del() {
    if (confirm(`Remove ${this.name}?`))
      this.parent.del(this.name)
  }

  render() {
    const container = createElement('div', {
      className: 'counter',
      onclick: this.assignRandomColor.bind(this),
      style: `background-color: rgb(${this.color.join(',')});`
    });

    const left = createElement('div', { className: "left" });
    const right = createElement('div', { className: "right" });

    const delBtn = createElement('span', {
      className: "delBtn",
      innerText: "🗑️",
      onclick: this.del.bind(this)
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

    this.valueElement = value;

    return container;
  }
}
