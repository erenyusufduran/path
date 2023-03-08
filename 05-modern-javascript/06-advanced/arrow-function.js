// All of the callback functions are..

const square = (num) => {
  return num * num;
};

const squareShort = (num) => num * num;

const people = [
  {
    name: "Eren",
    age: 21,
  },
  {
    name: "Goksen",
    age: 20,
  },
  {
    name: "Jess",
    age: 12,
  },
];

const under30 = people.filter((person) => person.age < 30);
// console.log(under30);

const age20 = people.find((person) => person.age === 20);
console.log(age20.name);

// console.log(square(5));
