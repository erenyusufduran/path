// Type coercion - a string, a number, a boolean

console.log(8 + "5");
console.log("5" - 5);
/*
 * 55 for the first one, 0 for the second one.
 * So it took our string, it converted it to a number and then it subtracted
 * that number from the other
 */

console.log(5 === 5);
console.log(5 == "5");
console.log(5 === "5");

console.log("----------------");

const value = false + 12;
const type = typeof value;
console.log(type);
console.log(value);
