/*
 * Arguments only exist in regular function, we can't use them with arrow functions.
 */
const add = function () {
  console.log(arguments);
  return arguments[0] + arguments[1];
};

console.log(add(11, 22, 33, 44));

const car = {
  color: "Red",
  /*
   * This can't be arrow function again,
   * if it is this can't be unreacheable. So this.color would be undefined.
   * When we are creating methods on object properties, we wanna stick with regular functions.
   */
  getSummary: function () {
    return `The car is ${this.color}`;
  },
  /*
   * We can declare functions with this way too.
   * Arrow functions don't bind arguments, don't bind this.
   * Arrow functions come with an advanced shorthand syntax.
   */
  getSecondSummary() {
    return "Bla bla";
  },
};

console.log(car.getSummary());
