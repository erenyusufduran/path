const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// const pepsi: [string, boolean, number] = ["brown", true, 40];

type Drink = [string, boolean, number];

const pepsi: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 40];
const tea: Drink = ["brown", false, 0];

const carSpecs: [number, number] = [400, 3354];
// We can't understand what is going on in here.

const carStats = {
  // In here we can understand what value is what prop.
  horsePower: 400,
  weight: 3354,
};
