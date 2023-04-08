/*
 * Type Annotations for Functions
 * - Code we add to tell Typescript what type of arguments a function will receive
 * and what type of values it will return.
 * Type Inference for Functions
 * - Typescript tries to figure out what type of value a function will return
 */
const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number) => {
  // We don't have to show what returns. However it's better.
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiple = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): void => {
  // if there is directly giving an error, we use never
  // if there is conditionally giving an error, and otherwise not returning, we use void
  // if we are returning anything else, we use returns type like string
  if (!message) throw new Error(message);
  // return message;
};

const forecast = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

logWeather(forecast);
