// @ts-check

// let value = 3;

// const increased = () => {
//   value += 1;
// };

// const decreased = () => {
//   value -= 1;
// };

// increased();
// decreased();
// increased();

// console.log(value);

// // combine your date + behavior into a single encapsulation unit.

// const counter = {
//   /**
//    * the track actual value.
//    */
//   value: 1,

//   /**
//    * increased counter value by 1.
//    */
//   increased() {
//     counter.value += 1;
//   },

//   /**
//    * Decreases counter value by 1.
//    */
//   decreased() {
//     counter.value -= 1;
//   },

//   /**
//    * logs the counter value to the console.
//    */
//   display() {
//     console.log(this.value);
//   },
// };

// counter.increased();
// counter.increased();
// counter.display();

/**
 * @callback Modify
 * @param {number} [amount] - the amount to modify the value with.
 */

/**
 * @callback EmptyFn
 */

/**
 *
 * @typedef {object} Counter -An object that keeps internal state and allows you to increase, decrease
 * and log the value. Note that there is no way to access the value from inside.
 * @prop {Modify} increased Increases counter value
 * @prop {Modify} decreased Decrease counter value
 * @prop {EmptyFn} display
 * @prop {string} label
 */

/**
 * @param {string} label - the actual value that is being measured.
 * @returns {Counter}
 */
const createCounter = (label) => {
  let value = 1;
  let innerLabel = label;

  const increased = (amount) => {
    value += amount || 1;
  };
  const decreased = (amount) => {
    value -= amount || 1;
  };
  const display = () => console.log(`${value} ${innerLabel}`);

  return {
    display,
    increased,
    decreased,

    get label() {
      return innerLabel;
    },

    set label(newLabel) {
      innerLabel = `${newLabel} is the label boiiiii`;
    },
  };
};

// const counter = createCounter();

// counter.increased();
// counter.decreased(10);
// counter.display();
const temperature = createCounter("Celsius");
const humidity = createCounter("humidity Factor");

humidity.increased(20);
temperature.decreased(3);
temperature.increased(10);

temperature.label = "f";

// console.log(humidity.label)

humidity.display();
temperature.display();
