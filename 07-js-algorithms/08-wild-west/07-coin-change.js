// Write a function called coinChange which accepts two parameters:
function minCoinChange(arr, value) {
  const coins = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    while (value >= arr[i]) {
      value -= arr[i];
      coins.push(arr[i]);
    }
  }
  return coins;
}
