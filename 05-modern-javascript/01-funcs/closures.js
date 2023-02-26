// // --> Closures closely related to function and function scope.

// const myFunction = () => {
//   const message = "This is my message";
//   const printMessage = () => {
//     console.log(message);
//   };
//   return printMessage();
// };

// const myPrintMessage = myFunction();
// console.log(myPrintMessage);

// A closure is the combination of a function with the lexical scope in which it wes defined.
// In this case, when print message was defined, it had access to message.
// So it's always going to have access to message, even if my function completes.

const createCounter = () => {
  let count = 0;

  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    get() {
      return count;
    },
  };
};

const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.get());

//  Adder
const createAdder = (a) => {
  return (b) => {
    return a + b;
  };
};

const add10 = createAdder(10);
console.log(add10(-4));
console.log(add10(20));

const add100 = createAdder(100);
console.log(add100(50));

console.log("-----------------------------------");

const createTipper = (baseTip = 0.15) => {
  return (amount) => {
    return baseTip * amount;
  };
};

const tip20 = createTipper(0.2);
const tip30 = createTipper(0.3);

console.log(tip20(100));
console.log(tip30(200));
