function factorial(num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }
  return total;
}

function factorialRecursive(num) {
  if (num === 1 || num === 0) return 1;
  return num * factorialRecursive(num - 1);
}

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

function fib(num) {
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
}
