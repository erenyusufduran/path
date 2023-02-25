let temp = 30;
let isFreezin = temp === 31;

/////////////////////////7

let age = 21;

function nameCalculator() {
  if (age <= 7) {
    return "child";
  } else if (age >= 65) {
    return "senior";
  } else {
    return "teen";
  }
}

console.log(nameCalculator());
