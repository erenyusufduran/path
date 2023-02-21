// Given an array of 1s and 0s which has all 1s first followed by all 0s,
// write a function called countZeroes, which returns the number of zeroes
// in the array.
function countZeroes(arr) {
  let count = 0;
  for (const num of arr) {
    if (num === 0) {
      count++;
    }
  }
  return count;
}

// Given a sorted array and a number, write a function called sortedFrequency
// that counts the occurrences of the number in the array
function sortedFrequency(arr, num) {
  let count = 0;
  for (const _num of arr) {
    if (num === _num) {
      count++;
    }
  }
  return count ? count : -1;
}
