const calculateAverage = (...numbers) => {
  // return (numOne + numTwo) / 2;
  let sum = 0;
  numbers.forEach((num) => (sum += num));
  const average = sum / numbers.length;
  return `The average grade is ${average}`;
};

console.log(calculateAverage(0, 100, 88, 65));
