function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1), callback);
}

// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
function flatten(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      console.log(newArr);
      newArr = newArr.concat(flatten(arr[i]));
      console.log(newArr);
    } else {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
  return newArr;
}

flatten([
  [
    [3, 4, 6, 2],
    [3, 41],
  ],
  [3],
]);
