/*
 * Type annotations -> Code we add to tell Typescript what type of value a variable will refer to
 * Type inference -> Typescript tries to figure out what type of value a variable refers to
 */

let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3, 4, 5];
let truths: boolean[] = [true, true, false, true];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};
