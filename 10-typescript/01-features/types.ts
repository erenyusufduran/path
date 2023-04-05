// Type -> Easy way to refer to the different properties + functions that a value has

/*
 * Why do we care about types?
 * - Types are used by the Typescript compiler to analyze our code for errors.
 * - Types allow other engineers to understand what values are flowing around our codebase.
 */

const today = new Date();
today.getMonth();

const person = {
  age: 20,
};
person.age;

class Color {}
const red = new Color();

// We will use types on everywhere.
