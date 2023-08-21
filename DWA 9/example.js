/**
 * if you dash before the value its hide it privately. Example. #value or #increase, but you need to assign it first.
 */

// you can only write your interface inside of the class functions.
/**
 * @callback update
 * @param {number} [amount]
 */

/**
 * @callback EmptyFn;
 */

/**
 * constructor automatically runs when class is created.
 * @typedef {object} ICounter
 * @prop {update} increase
 * @prop {update} decrease
 * @prop {EmptyFn} display
 *
 */

class Counter {
  #value = 10;
  #label = undefined

  constructor(label) {
    this.label = label;
  }

  increase(amount) {
    this.#value += amount || 1;
  }

  decrease(amount) {
    this.#value -= amount || 1;
  }
  display() {
    console.log(`${this.value} ${this.#label}`);
  }
}

const example = new Counter();

example.increase();
example.increase();
example.increase();
example.display();

const today = new Date() //date is actually a class